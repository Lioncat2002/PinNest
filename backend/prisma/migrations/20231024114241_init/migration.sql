/*
  Warnings:

  - Added the required column `url` to the `Pin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pin" ADD COLUMN     "url" STRING NOT NULL;
