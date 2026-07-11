import { connectDB } from '../utils/db'
import { Post } from '../models/Post'

export default defineEventHandler(async () => {
  await connectDB()
  const posts = await Post.find().sort({ createdAt: -1 })
  return posts
})