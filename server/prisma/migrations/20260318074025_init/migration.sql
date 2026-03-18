/*
  Warnings:

  - You are about to drop the column `film` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `zodiac` on the `profiles` table. All the data in the column will be lost.
  - Changed the type of `birthday` on the `profiles` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "film",
DROP COLUMN "zodiac",
DROP COLUMN "birthday",
ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "profile_movies" (
    "id" TEXT NOT NULL,
    "profile_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "poster" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profile_movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_tracks" (
    "id" TEXT NOT NULL,
    "profile_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profile_tracks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_albums" (
    "id" TEXT NOT NULL,
    "profile_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profile_albums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_artists" (
    "id" TEXT NOT NULL,
    "profile_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profile_artists_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profile_movies_profile_id_key" ON "profile_movies"("profile_id");

-- CreateIndex
CREATE UNIQUE INDEX "profile_tracks_profile_id_key" ON "profile_tracks"("profile_id");

-- CreateIndex
CREATE UNIQUE INDEX "profile_albums_profile_id_key" ON "profile_albums"("profile_id");

-- CreateIndex
CREATE UNIQUE INDEX "profile_artists_profile_id_key" ON "profile_artists"("profile_id");

-- AddForeignKey
ALTER TABLE "profile_movies" ADD CONSTRAINT "profile_movies_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_tracks" ADD CONSTRAINT "profile_tracks_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_albums" ADD CONSTRAINT "profile_albums_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_artists" ADD CONSTRAINT "profile_artists_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
