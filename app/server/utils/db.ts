import mongoose from 'mongoose'
import dns from 'dns'

// 強制使用 Google DNS
dns.setServers(['8.8.8.8', '8.8.4.4'])

let isConnected = false

export async function connectDB() {
  if (isConnected) return
  const uri = process.env.MONGODB_URI
  if (!uri) throw new Error('MONGODB_URI 未設定')
  await mongoose.connect(uri)
  isConnected = true
  console.log('✅ MongoDB 已連線')
}