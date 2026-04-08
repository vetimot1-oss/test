import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.BACKEND_PORT || 3000

// Middleware
app.use(helmet())
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}))
app.use(express.json())

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Routes (will be imported here)
// app.use('/api/auth', authRoutes)
// app.use('/api/games', gameRoutes)
// app.use('/api/payments', paymentRoutes)
// app.use('/api/users', userRoutes)

// Error handling
app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
  })
})

app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`)
  console.log(`📍 Frontend: ${process.env.FRONTEND_URL}`)
})
