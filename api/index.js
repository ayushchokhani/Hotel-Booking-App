import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.route.js'
import usersRoute from './routes/users.route.js'
import hotelsRoute from './routes/hotels.route.js'
import roomsRoute from './routes/rooms.route.js'

const app = express()
dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('Connected to MongoDB')
  } catch (error) {
    throw error
  }
}

// middleware

app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)

app.listen(3000, () => {
  connectDB()
  console.log(`Server listening on port 3000`)
})
