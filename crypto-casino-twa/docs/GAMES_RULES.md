# Game Rules & Mechanics

## 1. Mines

**Players:** Single-player vs House  
**Objective:** Reveal safe tiles without hitting bombs

### Game Flow
1. Player sets bet amount (0.01 - 10 TON/USDT)
2. Player selects bomb count (1-24 out of 25 tiles)
3. Grid revealed with unrevealed tiles
4. Player clicks tiles one by one
5. Safe tile = multiplier increases
6. Bomb = Game over, lose bet
7. Player can cash out anytime

### Payouts
- Base multiplier: `1 + (safeReveals * 0.1)`
- Example: 10 safe clicks = 2x multiplier
- House edge: **2%**

### Server-Side Logic
```javascript
// Bomb placement is server-only (no client influence)
// Hash-based: using server seed + client seed (optional provably-fair)
function initializeMines(bombCount) {
  const totalTiles = 25
  const safeTiles = totalTiles - bombCount
  // Cryptographically secure shuffle
  return shuffleBombs(bombCount, totalTiles)
}

function revealTile(gameState, tileIndex) {
  const isBomb = gameState.grid[tileIndex].isBomb
  if (isBomb) return { result: 'bomb', lost: true }
  return { result: 'safe', multiplier: calculateMultiplier(gameState) }
}
```

---

## 2. Crash

**Players:** Single-player vs House  
**Objective:** Cash out before multiplier crashes

### Game Flow
1. Player sets bet (0.01 - 10 TON/USDT)
2. Game starts: multiplier rises (1.0x → 100x+ possible)
3. At random moment: crash happens
4. Player must click "Cash Out" before crash
5. Successful cashout: win (multiplier × bet)
6. Too late: lose bet entirely

### Crash Point Calculation
- Server generates random crash point: `1.05` to `1000` (weighted distribution)
- Multiplier increases every ~100ms
- Crash is **irreversible** once triggered

### Probability Distribution
- 50% chance: crash between 1.05x - 1.5x
- 30% chance: crash between 1.5x - 3x
- 15% chance: crash between 3x - 10x
- 5% chance: crash between 10x - 1000x
- House edge: **5%** (built into crash algorithm)

### Server-Side Logic
```javascript
function generateCrashPoint() {
  const random = Math.random()
  if (random < 0.50) return 1.05 + Math.random() * 0.45
  if (random < 0.80) return 1.50 + Math.random() * 1.5
  if (random < 0.95) return 3 + Math.random() * 7
  return 10 + Math.random() * 990
}

function simulateGameLoop() {
  let multiplier = 1.0
  const crashPoint = generateCrashPoint()
  
  while (multiplier < crashPoint) {
    multiplier += 0.01
    await sleep(100)
  }
  
  return { crashed: true, crashPoint }
}
```

---

## 3. Higher/Lower

**Players:** Single-player vs House  
**Objective:** Guess if next number is higher or lower

### Game Flow
1. Player sets bet (0.01 - 10 TON/USDT)
2. Secret number generated (0-99.99)
3. Player chooses: "HIGHER" or "LOWER"
4. Result revealed
5. Win = 1.96x multiplier
6. Lose = Loss of bet

### Probability
- Fair: 50% win, 50% loss
- Multiplier: 1.96x (4% house edge)

### Server-Side Logic
```javascript
function startGame() {
  const secretNumber = Math.random() * 100
  const nonce = generateRandomNonce()
  
  return {
    secretNumber: null, // Hidden until guess
    nonce: nonce, // For later verification
  }
}

function checkGuess(guess, secretNumber) {
  const nextNumber = Math.random() * 100
  
  const won = 
    (guess === 'higher' && nextNumber > secretNumber) ||
    (guess === 'lower' && nextNumber < secretNumber)
  
  return { result: won ? 'win' : 'loss', nextNumber }
}
```

---

## Provably Fair (Phase 2+)

All games can include client-side seed verification:

```
Game Hash = SHA256(server_seed + client_seed + game_data)
Player sees Hash before committing
After reveal: server publishes seed
Player can independently verify: SHA256(seed) == provided hash
```

---

## Balance Protection

**All bets are atomic transactions:**

```sql
BEGIN TRANSACTION
  -- Deduct bet from balance
  UPDATE balances SET ton = ton - bet_amount WHERE user_id = ?
  
  -- Record transaction (pending)
  INSERT INTO transactions (user_id, type, amount, status) 
  VALUES (?, 'game_bet', bet_amount, 'pending')
  
  -- Play game logic (server-only)
  payout = calculatePayout(game_result)
  
  -- Add winnings (or nothing if loss)
  UPDATE balances SET ton = ton + payout WHERE user_id = ?
  
  -- Mark transaction complete
  UPDATE transactions SET status = 'completed', payout = ? WHERE id = ?
COMMIT
```

If any step fails → ROLLBACK (no partial updates)

---

## House Edge Summary

| Game | House Edge | Rationale |
|------|-----------|-----------|
| Mines | 2% | Safe tile probability |
| Crash | 5% | Crash point distribution |
| Higher/Lower | 4% | Multiplier: 1.96x (50/50 game) |

**Average Loss (1,000 bets of 0.1 TON):**
- Mines: 0.2 TON
- Crash: 0.5 TON
- Higher/Lower: 0.4 TON

---

## Game Limits

| Setting | Min | Max |
|---------|-----|-----|
| Bet Amount | 0.01 | 10 TON/USDT |
| Mines Bombs | 1 | 24 |
| Mines Safe Clicks | 1 | 24 |
| Crash Multiplier | 1.0x | 1000x+ |
| Higher/Lower | 1 guess | Unlimited |

---

## Anti-Cheat Measures

1. **Server-side RNG only** (no client influence on outcome)
2. **Atomic transactions** (no partial balance updates)
3. **Rate limiting** (max 10 bets/10 sec per user)
4. **Bet validation** (amount, currency, balance checks)
5. **Audit logging** (all game results stored immutably)
