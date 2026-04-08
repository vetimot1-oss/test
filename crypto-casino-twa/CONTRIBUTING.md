# Contributing to Crypto Casino TWA

## 🤝 Team Structure

### Agent 1: Frontend Builder
- Components & UI
- Hooks & state management
- Game screens (Mines, Crash, Higher/Lower)
- Wallet integration

### Agent 2: Backend Builder
- API routes & endpoints
- Game logic engines
- Database services
- Payment webhooks

### Agent 3: Orchestrator
- Code review & merges
- Testing & validation
- Deployment to staging/production
- Git commits & tagging

## 🌿 Git Workflow

### Branch Naming
```
feature/component-name     # New features
fix/bug-description        # Bug fixes
docs/section-name          # Documentation
phase/1-foundation         # Phase branches
```

### Commit Messages
```
[PHASE-1] feat: Add Telegram auth middleware
[PHASE-1] fix: Balance update race condition
[PHASE-1] docs: Add API endpoint reference
```

### PR/Merge Process
1. Create branch from `main`
2. Implement changes (one agent)
3. Commit regularly: `git commit -m "[PHASE-X] type: description"`
4. Push to origin: `git push origin feature/your-feature`
5. Orchestrator merges after validation

## 📋 Phase Checklist

### PHASE 1: Foundation (Week 1)

**Part 1-3: Setup**
- [x] GitHub repo initialized
- [x] Folder structure created
- [ ] .env files configured
- [ ] Backend server running
- [ ] Frontend dev server running

**Part 4: Supabase Setup**
- [ ] Supabase project created
- [ ] Tables created (users, balances, transactions, games, referrals)
- [ ] RLS policies configured
- [ ] Admin dashboard accessible

**Part 5: Telegram Bot**
- [ ] Bot registered (@BotFather)
- [ ] BOT_TOKEN stored in .env
- [ ] Mini App URL configured
- [ ] Webhook route created

**Part 6-10: Frontend Shell**
- [ ] Zustand store initialized
- [ ] useTelegram hook working
- [ ] Bottom navigation implemented
- [ ] Balance display component
- [ ] Wallet connect button
- [ ] Game cards UI

**Part 11-16: Backend Auth**
- [ ] Auth middleware (Telegram signature verification)
- [ ] User routes (/api/users/me)
- [ ] Balance query endpoint
- [ ] Frontend API layer (axios + interceptors)
- [ ] useAuth hook
- [ ] Rate limiting middleware

**Part 17-21: Payments (CryptoBot)**
- [ ] CryptoBot service wrapper
- [ ] Deposit endpoint + status check
- [ ] Webhook handler for payments
- [ ] Wallet screen UI
- [ ] Deposit flow complete

## 📊 Progress Tracking

Update this after each day:

| Date | Agent | Task | Status | Notes |
|------|-------|------|--------|-------|
| 2026-04-08 | Setup | GitHub + Docs | ✅ | Initialized |
| 2026-04-08 | Frontend | Install deps | ⏳ | Pending |
| 2026-04-08 | Backend | Install deps | ⏳ | Pending |

## 🚀 Deployment

**Staging**: Push to `staging` branch → GitHub Actions → Vercel (frontend) + Railway (backend)
**Production**: Push to `main` → GitHub Actions → Production deploy

See [DEPLOYMENT.md](./docs/DEPLOYMENT.md) for details.

## ⚠️ Blockers

Report blockers here:
- None yet

---

**Orchestrator**: Responsible for PR reviews and merges. Ask questions in comments, don't just reject.
