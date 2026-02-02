/*
  Warnings:

  - Added the required column `film` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profession` to the `profiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "profiles" ADD COLUMN     "film" TEXT NOT NULL,
ADD COLUMN     "profession" TEXT NOT NULL;
