import { connectDB } from '../utils/db'
import { Contact } from '../models/Contact'

export default defineEventHandler(async (event) => {
  await connectDB()
  const body = await readBody(event)

  if (!body.name || !body.email || !body.message) {
    throw createError({ statusCode: 400, message: '請填寫所有欄位' })
  }

  const contact = await Contact.create(body)
return { success: true}
})