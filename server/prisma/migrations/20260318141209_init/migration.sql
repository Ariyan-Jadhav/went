-- AlterTable
ALTER TABLE "profiles" ADD COLUMN     "hobby" TEXT,
ADD COLUMN     "location" TEXT,
ALTER COLUMN "profession" SET DEFAULT 'Berozgar',
ALTER COLUMN "birthday" DROP NOT NULL;
