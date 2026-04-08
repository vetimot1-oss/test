# Team Coordination & Agent Workflow

## 👥 Agent Roles

### 🎨 Agent 1: Frontend Builder
**Specialization:** React, UI, state management

**Responsibilities:**
- Create 50+ modular React components
- Implement game screens (Mines, Crash, Higher/Lower)
- Build wallet integration
- Profile & transaction history pages
- Connect API endpoints to UI
- Test components locally

**Commits:**
- Prefix: `[PHASE-1] frontend: component_name`
- Example: `[PHASE-1] frontend: Add MinesGrid component`

**Daily Checklist:**
- [ ] Created component files
- [ ] Tested locally (npm run dev)
- [ ] Committed with message
- [ ] Created PR for review

---

### ⚙️ Agent 2: Backend Builder
**Specialization:** Node.js, API, database

**Responsibilities:**
- Implement API routes (/api/auth, /api/games, /api/payments)
- Write game logic (RNG, payouts, balance updates)
- Connect to Supabase database
- Implement CryptoBot integration
- Add middleware (auth, rate limiting, validation)
- Test endpoints with Postman/cURL

**Commits:**
- Prefix: `[PHASE-1] backend: route_or_feature`
- Example: `[PHASE-1] backend: Add games/mines/start endpoint`

**Daily Checklist:**
- [ ] Created route files
- [ ] Tested endpoints (npm run dev)
- [ ] Database queries working
- [ ] Committed with message
- [ ] Created PR for review

---

### 🔄 Agent 3: Orchestrator
**Specialization:** Git, testing, deployment

**Responsibilities:**
- Review frontend & backend PRs
- Merge approved code to main
- Run integration tests (frontend + backend)
- Monitor for conflicts or bugs
- Prepare staging & production builds
- Update progress documentation
- Escalate blockers

**Process:**
1. Wait for PRs from Agent 1 & 2
2. Review code quality
3. Ask questions / request changes (if needed)
4. Test integration locally
5. Approve & merge to main
6. Tag version: `v0.1.0-phase1-part1`
7. Update CONTRIBUTING.md progress table

**Daily Checklist:**
- [ ] Reviewed all open PRs
- [ ] Merged approved changes
- [ ] Tested integration
- [ ] Updated progress table
- [ ] Logged any blockers

---

## 🔀 Git Workflow

### Creating Branches

**Agent 1 (Frontend):**
```bash
git checkout -b feature/telegram-auth-hook
# Work...
git commit -m "[PHASE-1] frontend: Add useTelegram hook"
git push origin feature/telegram-auth-hook
# Create PR
```

**Agent 2 (Backend):**
```bash
git checkout -b feature/auth-endpoint
# Work...
git commit -m "[PHASE-1] backend: Add /api/auth/telegram endpoint"
git push origin feature/auth-endpoint
# Create PR
```

**Agent 3 (Orchestrator):**
```bash
# Review PR
git fetch origin
git checkout feature/telegram-auth-hook
# Test locally
git checkout main
git merge feature/telegram-auth-hook
git push origin main
# Delete branch
git branch -d feature/telegram-auth-hook
git push origin --delete feature/telegram-auth-hook
```

### Commit Message Format

**Good:**
```
[PHASE-1] frontend: Add MinesGrid component with tile reveal logic
```

**Good:**
```
[PHASE-1] backend: Implement /api/games/mines/start endpoint
```

**Bad:**
```
fix bug
```

**Bad:**
```
update files
```

---

## 📅 Daily Standup (Async)

**Each agent posts daily in CONTRIBUTING.md progress table:**

| Date | Agent | Task | Status | Notes |
|------|-------|------|--------|-------|
| 2026-04-08 | Frontend | useTelegram hook | ✅ | Tested, PR ready |
| 2026-04-08 | Backend | Auth endpoint | 🔄 | In progress, 80% done |
| 2026-04-08 | Orchestrator | PR review | ✅ | Merged 1 PR |

**Status Legends:**
- ✅ Completed
- 🔄 In progress 
- ⏸️ Blocked
- ❌ Failed

---

## 🔗 Integration Points

### Frontend → Backend

**Frontend calls:**
```javascript
// src/utils/api.js
export const authenticateWithTelegram = (initData) => {
  return client.post('/api/auth/telegram', { initData })
}
```

**Backend expects:**
```javascript
// backend/src/routes/auth.js
app.post('/api/auth/telegram', (req, res) => {
  const { initData } = req.body
  // Verify + authenticate
})
```

**Orchestrator tests:**
```bash
cd frontend && npm run dev  # Port 5173
cd backend && npm run dev   # Port 3000

# In another terminal:
curl -X POST http://localhost:3000/api/auth/telegram \
  -H "Content-Type: application/json" \
  -d '{"initData":"..."}'

# Frontend loads, authenticates, should show user
```

---

## ⚠️ Common Blockers

### "Backend not responding"
- [ ] Check backend .env variables
- [ ] Verify port 3000 not in use
- [ ] Check firewall/CORS settings
- [ ] Verify database connection

### "Frontend auth fails"
- [ ] Backend returns 401? Check Telegram signature verification
- [ ] Token not saving? Check localStorage
- [ ] CORS error? Check CORS middleware in backend

### "Balance doesn't update"
- [ ] Database connection issue? Check Supabase
- [ ] Transaction failed silently? Add error logging
- [ ] Race condition? Ensure atomic transactions
- [ ] RLS blocking query? Check RLS policies

**Escalation:** If blocked >2 hours, post in standup & tag orchestrator

---

## 📦 PR Checklist

**Before creating PR, ensure:**

- [ ] Code follows project style
- [ ] No console.error or hardcoded values
- [ ] All new functions have JSDoc comments
- [ ] Tested locally (npm run dev)
- [ ] No merge conflicts with main
- [ ] Commit message includes [PHASE-X]
- [ ] One feature per PR (not 5 in one)

**PR Title Format:**
```
[PHASE-1] frontend: Add Mines game screen
[PHASE-1] backend: Implement CryptoBot webhook
```

**PR Description Template:**
```markdown
## What does this PR do?
Adds the Mines game screen UI with tile reveal functionality

## Testing
- Tested locally: npm run dev → navigate to /games/mines → click tiles
- No console errors
- Responsive on mobile

## Tickets
Closes #123, relates to #456
```

---

## 🎯 Phase 1 Milestones

### Milestone 1: Foundation (Days 1-3)
- [ ] Repo initialized ✅
- [ ] Frontend dev environment ready
- [ ] Backend dev environment ready
- [ ] Supabase configured
- [ ] Telegram bot created

### Milestone 2: Auth (Days 4-5)
- [ ] useTelegram hook working
- [ ] /api/auth/telegram endpoint
- [ ] JWT issued & stored
- [ ] Users table populated

### Milestone 3: Payments (Days 6-7)
- [ ] CryptoBot service wrapper
- [ ] /api/payments/deposit/create
- [ ] Webhook handler
- [ ] Wallet UI

### Milestone 4: Games (Days 8-11)
- [ ] Mines game (server + UI)
- [ ] Crash game (server + UI)
- [ ] Higher/Lower game (server + UI)
- [ ] Transaction history stored

### Milestone 5: Polish (Days 12-14)
- [ ] End-to-end testing
- [ ] Performance optimization
- [ ] Error handling
- [ ] Staging deployment
- [ ] Production deployment ✅

---

## 🔔 Communication Channels

**Updates:** Post in PR comments & daily standup  
**Blockers:** Tag orchestrator with @  
**Questions:** Slack/Discord (if team has one)  
**Urgent:** Direct message

---

## 📊 Success Metrics

**Phase 1 Complete when:**
- ✅ All 3 games fully playable
- ✅ Deposits work via CryptoBot
- ✅ Balance updates in real-time
- ✅ Zero crashes (48-hour uptime test)
- ✅ All code reviewed & merged
- ✅ Deployed to production
- ✅ Transaction audit trail complete

**Performance Targets:**
- API response time: <200ms
- Frontend load time: <2s
- Game start: <500ms
- No memory leaks after 1hr play

---

**Questions?** Open an issue in the repo or ask in standup.
**Ready to start Part 1?** All agents sync on yes, then begin!
