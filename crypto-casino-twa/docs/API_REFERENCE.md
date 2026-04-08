# API Reference

## Authentication

### POST `/api/auth/telegram`
Authenticate user with Telegram initData

**Request:**
```json
{
  "initData": "query_id=...&user={...}&auth_date=...&signature=..."
}
```

**Response:**
```json
{
  "user": {
    "id": "123456789",
    "firstName": "John",
    "balance": {
      "ton": "1.5",
      "usdt": "25.00"
    }
  },
  "token": "eyJhbGc..."
}
```

**Error Codes:**
- `400`: Invalid signature
- `401`: Unauthorized
- `500`: Server error

---

## Users

### GET `/api/users/me`
Get current user profile

**Headers:** `Authorization: Bearer {token}`

**Response:**
```json
{
  "id": "123456789",
  "firstName": "John",
  "username": "john_doe",
  "totalWagered": "100.50",
  "totalWon": "150.00",
  "balances": {
    "ton": "1.5",
    "usdt": "25.00"
  }
}
```

---

### GET `/api/users/me/balance`
Get current balance only

**Headers:** `Authorization: Bearer {token}`

**Response:**
```json
{
  "ton": "1.5",
  "usdt": "25.00"
}
```

---

### GET `/api/users/me/history`
Get transaction history (paginated)

**Query:** `?limit=50&offset=0`

**Response:**
```json
{
  "transactions": [
    {
      "id": "tx_123",
      "type": "game_bet",
      "game": "mines",
      "amount": "0.1",
      "currency": "TON",
      "result": "win",
      "payout": "0.2",
      "createdAt": "2026-04-08T12:00:00Z"
    }
  ],
  "total": 150,
  "hasMore": true
}
```

---

## Games

### POST `/api/games/mines/start`
Start new Mines game

**Headers:** `Authorization: Bearer {token}`

**Request:**
```json
{
  "bombCount": 3,
  "betAmount": "0.1",
  "currency": "TON"
}
```

**Response:**
```json
{
  "gameId": "game_mines_123",
  "grid": [
    ["unrevealed", "unrevealed", "unrevealed"],
    ["unrevealed", "unrevealed", "unrevealed"],
    ["unrevealed", "unrevealed", "unrevealed"]
  ],
  "multiplier": 1.0
}
```

---

### POST `/api/games/mines/reveal`
Reveal tile in Mines game

**Headers:** `Authorization: Bearer {token}`

**Request:**
```json
{
  "gameId": "game_mines_123",
  "tileIndex": 4
}
```

**Response:**
```json
{
  "result": "safe",
  "multiplier": 1.5,
  "grid": [
    ["unrevealed", "unrevealed", "unrevealed"],
    ["unrevealed", "safe", "unrevealed"],
    ["unrevealed", "unrevealed", "unrevealed"]
  ]
}
```

---

### POST `/api/games/crash/start`
Start new Crash game

**Request:**
```json
{
  "betAmount": "0.1",
  "currency": "TON"
}
```

**Response:**
```json
{
  "gameId": "game_crash_123",
  "crashPoint": 2.45,
  "multiplier": 1.0
}
```

---

### POST `/api/games/crash/cashout`
Cash out from Crash game

**Request:**
```json
{
  "gameId": "game_crash_123"
}
```

**Response:**
```json
{
  "status": "won",
  "multiplier": 1.87,
  "payout": "0.187",
  "crashPoint": 2.45
}
```

---

### POST `/api/games/higher-lower/start`
Start Higher/Lower game

**Request:**
```json
{
  "betAmount": "0.1",
  "currency": "TON"
}
```

**Response:**
```json
{
  "gameId": "game_hl_123",
  "secretNumber": null,
  "nonce": "abc123def..."
}
```

---

### POST `/api/games/higher-lower/guess`
Make guess in Higher/Lower

**Request:**
```json
{
  "gameId": "game_hl_123",
  "guess": "higher"
}
```

**Response:**
```json
{
  "result": "win",
  "secretNumber": 45,
  "payout": "0.196",
  "multiplier": 1.96
}
```

---

## Payments

### POST `/api/payments/deposit/create`
Create deposit invoice

**Request:**
```json
{
  "amount": "5",
  "currency": "TON"
}
```

**Response:**
```json
{
  "invoiceId": "inv_123456",
  "invoiceUrl": "https://t.me/CryptoBot?start=invoice_123456",
  "expiresAt": "2026-04-08T13:00:00Z"
}
```

---

### GET `/api/payments/deposit/status`
Check deposit status

**Query:** `?invoiceId=inv_123456`

**Response:**
```json
{
  "status": "completed",
  "amount": "5",
  "currency": "TON",
  "confirmedAt": "2026-04-08T12:30:00Z"
}
```

---

### POST `/webhooks/cryptobot`
CryptoBot payment webhook (external)

**Body:**
```json
{
  "update_id": 1,
  "invoice_paid": {
    "invoice_id": "123456",
    "user_id": 789012345,
    "amount": 500000000,
    "paid": true
  }
}
```

**Response:** `200 OK`

---

## Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 400 | Bad Request (validation error) |
| 401 | Unauthorized (invalid/missing token) |
| 403 | Forbidden (insufficient balance) |
| 404 | Not Found |
| 429 | Rate Limited |
| 500 | Server Error |
