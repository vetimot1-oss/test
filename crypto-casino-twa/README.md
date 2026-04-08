# Telegram Crypto Casino Mini App

A high-performance Telegram Mini App for playing provably-fair crypto games (Mines, Crash, Higher/Lower) with TON/USDT payments.

## 📁 Project Structure

```
crypto-casino-twa/
├── frontend/              # React 18 Telegram Mini App
│   ├── src/
│   │   ├── components/    # 50+ modular UI components
│   │   ├── pages/         # Game screens (Home, Mines, Crash, HigherLower, Wallet, Profile)
│   │   ├── hooks/         # Custom hooks (useTelegram, useBalance, useGame, useWallet, useAuth)
│   │   ├── store/         # Zustand global state
│   │   ├── utils/         # API client, formatters, crypto helpers
│   │   └── styles/        # Tailwind CSS + global styles
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── backend/               # Node.js + Express API
│   ├── src/
│   │   ├── routes/        # API endpoints (auth, games, payments, users)
│   │   ├── services/      # Database, CryptoBot, Supabase wrappers
│   │   ├── games/         # Game logic (mines.js, crash.js, higherLower.js)
│   │   └── middleware/    # Auth, rate limiting, validation
│   ├── package.json
│   └── .env.example
│
├── docs/                  # Documentation
│   ├── API_REFERENCE.md
│   ├── GAMES_RULES.md
│   └── DEPLOYMENT.md
│
└── .gitignore
```

## 🚀 Quick Start

### Frontend
```bash
cd frontend
npm install
npm run dev          # Start dev server (localhost:5173)
npm run build        # Production build
```

### Backend
```bash
cd backend
npm install
npm run dev          # Start dev server (localhost:3000)
npm run start        # Production
```

## 🎮 Games

- **Mines**: Classic Minesweeper grid, bet to reveal tiles
- **Crash**: Multiplier rises & crashes randomly, cash out before it falls
- **Higher/Lower**: Guess if next number is higher or lower

All games are **provably fair** with server-side random seed generation.

## 💳 Payments

- **CryptoBot**: TON & USDT deposits/withdrawals (Phase 1)
- **TON CONNECT**: Integration of tonconnect service (Phase 2)
- Real-time balance sync via webhooks

## 📊 Tech Stack

**Frontend**: React 18, Tailwind CSS, Zustand, Axios, @twa-dev/sdk
**Backend**: Node.js, Express, Supabase PostgreSQL, Zod validation
**Hosting**: Vercel/GitHub Pages (frontend), Railway (backend)
**Database**: Supabase (PostgreSQL + RLS + Realtime)

## 📝 Environment Variables

See `.env.example` files in `frontend/` and `backend/` folders.

## 🔐 Security

- Telegram signature verification (HMAC-SHA256)
- Database transactions for balance updates
- Rate limiting on sensitive endpoints
- Row-level security (RLS) on Supabase
- Input validation via Zod schemas

## 📅 Development Timeline

- **Week 1**: Foundation + Auth + Payments
- **Week 2**: Games (Mines, Crash, Higher/Lower)
- **Week 3**: Polish, testing, deployment

---

**Project Name**: *To be determined*

## Design Reference

UI/UX is based on [BattleGames](https://battlegames.cloud/) - a Telegram Mini App casino.

See https://github.com/vetimot1-oss/test/blob/main/data.txt for full design reference and assets.

the result should be as on following images exactly
https://github.com/vetimot1-oss/test/blob/main/photo_1_2026-04-07_23-03-26.jpg
https://github.com/vetimot1-oss/test/blob/main/photo_2_2026-04-07_23-03-26.jpg
https://github.com/vetimot1-oss/test/blob/main/photo_3_2026-04-07_23-03-26.jpg

## House Edge

| Game | House Edge |
|------|------------|
| Mines | 10-13% |
| Crash | 10-13% |
| Higher/Lower | 10-13% |

The house edge is built into the payout multipliers. All games use provably fair algorithms where players can verify each result.
