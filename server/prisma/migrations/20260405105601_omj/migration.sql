/*
  Warnings:

  - Added the required column `mail` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "github" TEXT,
ADD COLUMN     "instagram" TEXT,
ADD COLUMN     "linkedin" TEXT,
ADD COLUMN     "mail" TEXT NOT NULL,
ADD COLUMN     "twitter" TEXT;
