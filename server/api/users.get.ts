import { MongoClient } from "mongodb";

let cachedClient: MongoClient | null = null;

async function getClient(uri: string) {
  if (cachedClient) return cachedClient;
  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);

  if (!config.mongodbUri) {
    throw createError({
      statusCode: 500,
      statusMessage: "MONGODB_URI 未設定，請確認 .env 裡有 MONGODB_URI",
    });
  }

  // 讀取 query string ?page=1&limit=40
  const query = getQuery(event);
  const page = Math.max(1, parseInt(query.page as string) || 1);
  const limit = Math.max(1, parseInt(query.limit as string) || 40);
  const skip = (page - 1) * limit;

  const client = await getClient(config.mongodbUri);
  const db = client.db("sample_mflix");
  const collection = db.collection("users");

  // 平行查詢：這一頁的資料 + 總筆數
  const [users, total] = await Promise.all([
    collection
      .find({}, { projection: { name: 1, email: 1 } })
      .skip(skip)
      .limit(limit)
      .toArray(),
    collection.countDocuments(),
  ]);

  return {
    data: users.map((u) => ({
      id: u._id.toString(),
      name: u.name,
      email: u.email,
    })),
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
});