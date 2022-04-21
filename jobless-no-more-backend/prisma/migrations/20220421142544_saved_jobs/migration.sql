/*
  Warnings:

  - You are about to drop the `_freelanceUserTojob` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_freelanceUserTojob";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "SavedJobs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "freelanceUserId" INTEGER NOT NULL,
    "jobId" INTEGER NOT NULL,
    CONSTRAINT "SavedJobs_freelanceUserId_fkey" FOREIGN KEY ("freelanceUserId") REFERENCES "freelanceUser" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SavedJobs_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "job" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
