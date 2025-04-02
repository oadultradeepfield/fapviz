/*
  Warnings:

  - You are about to drop the column `saturationDegree` on the `Node` table. All the data in the column will be lost.
  - Added the required column `edgeId` to the `Edge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nodeId` to the `Node` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Edge" ADD COLUMN     "edgeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Node" DROP COLUMN "saturationDegree",
ADD COLUMN     "nodeId" TEXT NOT NULL;
