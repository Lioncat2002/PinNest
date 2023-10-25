/*
  Warnings:

  - You are about to drop the column `authorId` on the `Pin` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pin" DROP CONSTRAINT "Pin_authorId_fkey";

-- AlterTable
ALTER TABLE "Pin" DROP COLUMN "authorId";
