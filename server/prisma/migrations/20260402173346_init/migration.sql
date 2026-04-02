/*
  Warnings:

  - You are about to drop the `saved_posts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "saved_posts" DROP CONSTRAINT "saved_posts_user_id_fkey";

-- DropTable
DROP TABLE "saved_posts";

-- CreateTable
CREATE TABLE "saved_thinks" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "savedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "saved_thinks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "saved_thinks_user_id_post_id_key" ON "saved_thinks"("user_id", "post_id");

-- AddForeignKey
ALTER TABLE "saved_thinks" ADD CONSTRAINT "saved_thinks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
