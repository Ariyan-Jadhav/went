/*
  Warnings:

  - You are about to drop the column `post_id` on the `likes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id,interaction_id]` on the table `likes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `interaction_id` to the `likes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "likes_user_id_post_id_key";

-- AlterTable
ALTER TABLE "likes" DROP COLUMN "post_id",
ADD COLUMN     "interaction_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "likes_user_id_interaction_id_key" ON "likes"("user_id", "interaction_id");
