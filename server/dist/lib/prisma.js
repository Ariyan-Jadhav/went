// server/src/db.ts (or wherever your file is)
import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
const pool = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter: pool });
export default prisma;
//# sourceMappingURL=prisma.js.map