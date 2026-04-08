# Deployment Guide

## Environment Setup

### Frontend (.env)
```env
VITE_BACKEND_URL=https://api.yourdomain.com
VITE_TELEGRAM_BOT_NAME=YourBotName
VITE_TONCONNECT_MANIFEST_URL=https://yourdomain.com/tonconnect-manifest.json
```

### Backend (.env)
```env
TELEGRAM_BOT_TOKEN=123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
TELEGRAM_WEBHOOK_SECRET=your_secret_string

SUPABASE_URL=https://xxx.supabase.co
SUPABASE_ANON_KEY=eyJxxx...
SUPABASE_SERVICE_KEY=eyJxxx...

CRYPTOBOT_TOKEN=1234:ABC
CRYPTOBOT_WEBHOOK_SECRET=secret

FRONTEND_URL=https://yourdomain.com
BACKEND_PORT=3000
NODE_ENV=production

JWT_SECRET=your_secret_64_char_string
ADMIN_IDS=123456789,987654321
```

## Deployment Targets

### Frontend: Vercel

1. **Connect GitHub repo**
   ```bash
   vercel --prod --scope=your_scope
   ```

2. **Environment Variables** (in Vercel Dashboard)
   - Add all VITE_* variables

3. **Build Command**
   ```
   cd frontend && npm run build
   ```

4. **Deploy Command**
   ```
   ls dist
   ```

### Backend: Railway

1. **Connect GitHub repo**
   - Railway auto-detects Node.js

2. **Environment Variables** (Railway Dashboard)
   - Add all backend .env variables

3. **Start Command**
   ```
   npm install && npm start
   ```

4. **Port Exposed:** 3000

## Database: Supabase

### Create Project
1. Go to https://app.supabase.com
2. Create new project
3. Copy `Project URL` and `Anon Key` → Backend .env
4. Copy `Service Role Key` → Backend .env

### Create Tables

```sql
-- Users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  telegram_id BIGINT UNIQUE NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  username VARCHAR(255) UNIQUE,
  photo_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Balances
CREATE TABLE balances (
  id SERIAL PRIMARY KEY,
  user_id INTEGER UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  ton DECIMAL(18, 8) DEFAULT 0,
  usdt DECIMAL(18, 6) DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Transactions
CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  type VARCHAR(50), -- 'deposit', 'withdrawal', 'game_bet', 'game_win'
  amount DECIMAL(18, 8),
  currency VARCHAR(10),
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'completed', 'failed'
  details JSONB, -- Game data, invoice ID, etc.
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Games
CREATE TABLE games (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  game_type VARCHAR(50), -- 'mines', 'crash', 'higher_lower'
  bet_amount DECIMAL(18, 8),
  currency VARCHAR(10),
  result VARCHAR(50), -- 'win', 'loss', 'abandoned'
  payout DECIMAL(18, 8),
  multiplier DECIMAL(10, 2),
  game_data JSONB, -- Specific game details
  created_at TIMESTAMP DEFAULT NOW()
);

-- Referrals
CREATE TABLE referrals (
  id SERIAL PRIMARY KEY,
  referrer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  referred_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  reward_amount DECIMAL(18, 8),
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  claimed_at TIMESTAMP
);

-- Create indexes
CREATE INDEX idx_users_telegram_id ON users(telegram_id);
CREATE INDEX idx_transactions_user_id ON transactions(user_id);
CREATE INDEX idx_games_user_id ON games(user_id);
CREATE INDEX idx_referrals_referrer ON referrals(referrer_id);
```

### Enable RLS (Row-Level Security)

```sql
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE balances ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE games ENABLE ROW LEVEL SECURITY;

-- Users can only see their own data
CREATE POLICY "Users can view own data"
  ON users FOR SELECT
  USING (telegram_id::TEXT = auth.uid());

-- Balances can only be viewed/edited by owner
CREATE POLICY "Users can view own balance"
  ON balances FOR SELECT
  USING (user_id = (SELECT id FROM users WHERE telegram_id::TEXT = auth.uid()));
```

## Telegram Bot Setup

1. **Create Bot**
   ```
   Message @BotFather on Telegram
   /newbot
   Choose name and username
   Copy TOKEN to .env as TELEGRAM_BOT_TOKEN
   ```

2. **Set Commands**
   ```
   /setcommands
   /start - Open the game
   /help - Show help
   /profile - View your profile
   ```

3. **Set Mini App URL**
   ```
   /setmycommands
   Set: https://yourdomain.com
   ```

4. **Configure Webhook** (in backend)
   ```javascript
   // Send to Telegram API:
   POST https://api.telegram.org/bot{TOKEN}/setWebhook
   ?url=https://your-backend.com/webhooks/telegram
   &secret_token={TELEGRAM_WEBHOOK_SECRET}
   ```

## CryptoBot Setup

1. Visit https://t.me/CryptoBot
2. Use `/start` with your merchant account
3. Copy API token → Backend .env as `CRYPTOBOT_TOKEN`
4. Configure webhook in CryptoBot dashboard:
   ```
   https://your-backend.com/webhooks/cryptobot
   ```

## Testing Deployment

### Frontend Checklist
- [ ] App loads in Telegram Mini App
- [ ] User authenticates correctly
- [ ] Balance displays (0 initially)
- [ ] Game cards visible
- [ ] No console errors

### Backend Checklist
- [ ] Health check passes: `GET /health`
- [ ] Auth endpoint works: `POST /api/auth/telegram`
- [ ] Users table populated
- [ ] Rate limiting active
- [ ] Error logging working

### Full E2E Test
1. Open bot in Telegram
2. Click "Play" → Mini App opens
3. Authenticate with Telegram
4. See balance (should be 0)
5. No crashes or errors

## Monitoring (Post-Launch)

### Logs
- **Frontend**: Vercel dashboard → Deployments → Logs
- **Backend**: Railway dashboard → Deployments → Logs

### Errors
- Set up Sentry (optional):
  ```javascript
  import * as Sentry from "@sentry/react"
  Sentry.init({ dsn: "your_dsn" })
  ```

### Metrics
- Monitor in Railway:
  - CPU usage
  - Memory usage
  - Response time
  - Error rate

## Rollback

If production breaks:

```bash
# Frontend: Vercel auto-saves previous builds
# Backend: Railway: Just re-deploy previous commit
git revert HEAD
git push

# Or manual rollback:
railway rollback --to=previous-deployment-id
```

---

**First Deploy Expected:** ~2 weeks (end of Phase 1)
