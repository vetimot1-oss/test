# Project Specification & Architecture

## 🎯 Project Vision

A **provably-fair crypto gaming platform** accessed via **Telegram Mini App**, allowing users to play fast-paced games (Mines, Crash, Higher/Lower) with TON/USDT crypto payments.

**Key Differentiators:**
- ✅ Server-side RNG (unhackable)
- ✅ Atomic balance transactions (no exploits)
- ✅ Zero KYC friction (Telegram auth only)
- ✅ Sub-second game resolution
- ✅ Full audit trail (blockchain-ready)

---

## 📋 Phase Breakdown

### PHASE 1: Foundation (2 weeks)
**Goal:** Working MVP with 3 games + payments
- Auth system (Telegram)
- 3 playable games (Mines, Crash, Higher/Lower)
- CryptoBot deposits/withdrawals
- User dashboard

### PHASE 2: Polish & Features (1 week)
- Referral system
- Admin dashboard (moderation)
- Advanced security hardening
- Mobile optimization

### PHASE 3: Scale & Monetization (ongoing)
- Real-time multiplayer (Wheel, Live Slots)
- Affiliate program
- VIP tiers
- Marketing & growth

---

## 🏗️ Technical Architecture

### Frontend Layer
```
React 18 (Telegram Mini App)
├── Components (50+ modular files)
├── Pages (Home, Games, Wallet, Profile)
├── Hooks (Custom: useTelegram, useBalance, useGame, useWallet, useAuth)
├── Store (Zustand: global state)
├── Utils (API client, formatters, crypto helpers)
└── Styles (Tailwind + global CSS)
```

**Key Technologies:**
- `@twa-dev/sdk` — Telegram Mini App integration
- `@tonconnect/ui-react` — Wallet connection
- `axios` — HTTP client
- `zustand` — State management
- `tailwindcss` — Styling

### Backend Layer
```
Node.js + Express
├── Routes (Auth, Games, Payments, Users)
├── Services (Supabase, CryptoBot, TON)
├── Games (Mines, Crash, HigherLower - RNG only)
├── Middleware (Auth, RateLimit, Validation)
└── Utils (Telegram verification, formatting)
```

**Key Technologies:**
- `express` — Web framework
- `@supabase/supabase-js` — Database client
- `zod` — Input validation
- `dotenv` — Environment management

### Database Layer
```
Supabase PostgreSQL
├── users (Telegram ID, profile)
├── balances (TON, USDT per user)
├── transactions (Audit trail)
├── games (Game results)
└── referrals (Referrer → referred)
```

**Features:**
- Row-level security (RLS)
- Realtime subscriptions (optional)
- Full-text search (optional)
- Automatic backups

### External APIs
- **Telegram** — Authentication + Mini App SDK
- **CryptoBot** — TON/USDT deposits/withdrawals
- **Supabase** — PostgreSQL database
- **TON Connect** — Wallet integration (future)

---

## 🔐 Security Model

### Authentication
1. User opens bot → Mini App loads
2. Telegram WebApp SDK provides `initData` (signed)
3. Frontend sends `initData` to backend
4. Backend verifies HMAC-SHA256 signature against Telegram token
5. If valid → Backend issues JWT (short-lived)
6. Frontend stores JWT + uses it for all requests

### Balance Protection
- **Atomic transactions:** Bet deduction + payout are single DB transaction
- **No race conditions:** Database locks ensure serialization
- **Audit trail:** Every balance change logged immutably
- **RLS:** Users can only query their own data

### Game Fairness
- **Server-side RNG:** JavaScript crypto (no client influence)
- **Provably fair (optional):** Hash verification after reveal
- **Cannot cheat:** Outcome determined before client action

---

## 📊 Data Models

### User
```json
{
  "id": 123,
  "telegramId": 1234567890,
  "firstName": "John",
  "lastName": "Doe",
  "username": "john_doe",
  "photoUrl": "https://...",
  "createdAt": "2026-04-08T...",
  "referrerId": null
}
```

### Balance
```json
{
  "userId": 123,
  "ton": "1.50",
  "usdt": "25.00",
  "updatedAt": "2026-04-08T12:30:00Z"
}
```

### Transaction
```json
{
  "id": "tx_abc123",
  "userId": 123,
  "type": "game_bet",
  "amount": "0.10",
  "currency": "TON",
  "status": "completed",
  "details": {
    "gameId": "game_mines_xyz",
    "gameType": "mines",
    "result": "win",
    "multiplier": 2.0
  },
  "createdAt": "2026-04-08T12:00:00Z"
}
```

### Game
```json
{
  "id": "game_mines_xyz",
  "userId": 123,
  "gameType": "mines",
  "betAmount": "0.10",
  "currency": "TON",
  "result": "win",
  "payout": "0.20",
  "multiplier": 2.0,
  "gameData": {
    "bombCount": 3,
    "safeReveals": 5,
    "grid": [...]
  },
  "createdAt": "2026-04-08T12:00:00Z"
}
```

---

## 🎮 Game Mechanics Summary

| Game | RTP* | House Edge | Time | Max Payout |
|------|-----|-----------|------|-----------|
| Mines | 98% | 2% | 30s | 100x |
| Crash | 95% | 5% | 5-60s | 1000x |
| Higher/Lower | 96% | 4% | 3s | 1.96x |

*RTP = Return to Player

---

## 💰 Revenue Model

**House Edge Sources:**
1. Mines: 2% built into probability
2. Crash: 5% skewed distribution
3. Higher/Lower: 4% (1.96x instead of 2x)

**100 TON wagered → ~3-5 TON house profit**

---

## 🚀 Development Timeline

```
Week 1 (Days 1-7):
  Mon-Tue: Part 1-3 (Setup)
  Wed: Part 4-5 (Database + Bot)
  Thu: Part 6-10 (Frontend Shell)
  Fri: Part 11-16 (Backend Auth)
  
Week 2 (Days 8-14):
  Mon: Part 17-21 (Payments)
  Tue-Wed: Part 22-30 (Games)
  Thu: Part 31 (Transaction History)
  Fri: Testing + Bug fixes
  
Week 3 (Days 15-21):
  Mon-Wed: Part 32-42 (Polish + Security)
  Thu: Part 43-44 (Testing)
  Fri: Part 45-46 (Deploy)
```

---

## ⚠️ Key Assumptions

1. **Telegram bot already created** (user will do @BotFather)
2. **Supabase account exists** (free tier sufficient)
3. **CryptoBot account ready** (for payment API)
4. **No multi-language support in Phase 1** (Russian-first)
5. **No real-time multiplayer** yet (single-player games first)
6. **No advanced KYC** (Telegram ID + display name only)

---

## 🎯 Success Criteria

✅ **MVP Complete when:**
- All 3 games are playable
- Users can deposit via CryptoBot
- Balance updates in real-time
- No crashes or data loss
- Transaction history visible
- Can be deployed to production

❌ **Out of Scope for Phase 1:**
- Multi-language UI
- Real-time multiplayer
- Advanced analytics
- Admin moderation interface
- Referral payouts
