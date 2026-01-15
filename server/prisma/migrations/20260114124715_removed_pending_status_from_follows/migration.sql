/*
  Warnings:

  - You are about to drop the column `pending_status` on the `follows` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[follower_id,following_id]` on the table `follows` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "follows" DROP CONSTRAINT "follows_pending_status_fkey";

-- DropIndex
DROP INDEX "follows_follower_id_following_id_pending_status_key";

-- AlterTable
ALTER TABLE "follows" DROP COLUMN "pending_status";

-- CreateIndex
CREATE UNIQUE INDEX "follows_follower_id_following_id_key" ON "follows"("follower_id", "following_id");
