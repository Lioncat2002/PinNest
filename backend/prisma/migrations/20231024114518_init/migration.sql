-- DropForeignKey
ALTER TABLE "Pin" DROP CONSTRAINT "Pin_authorId_fkey";

-- AlterTable
ALTER TABLE "Pin" ALTER COLUMN "authorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Pin" ADD CONSTRAINT "Pin_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
