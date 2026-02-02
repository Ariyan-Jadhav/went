/*
  Warnings:

  - You are about to drop the column `accState` on the `profiles` table. All the data in the column will be lost.
  - Added the required column `birthday` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zodiac` to the `profiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "accState",
ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "zodiac" TEXT NOT NULL;
