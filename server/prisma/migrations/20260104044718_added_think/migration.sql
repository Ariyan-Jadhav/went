/*
  Warnings:

  - You are about to drop the `story_views` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "story_views" DROP CONSTRAINT "story_views_viewer_id_fkey";

-- DropTable
DROP TABLE "story_views";
