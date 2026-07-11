import { connectDB } from "../utils/db";

export default defineEventHandler(async () => {
  try {
    await connectDB();
    return { status: "ok", message: "✅ MongoDB 連線成功" };
  } catch (err: any) {
    return { status: "error", message: err.message };
  }
});
