/*
  Warnings:

  - You are about to drop the column `freelanceUserId` on the `SavedJobs` table. All the data in the column will be lost.
  - You are about to drop the column `jobId` on the `SavedJobs` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_freelanceUser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "totalReceived" REAL NOT NULL DEFAULT 0,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "location" TEXT NOT NULL,
    "bio" TEXT,
    "type" TEXT NOT NULL DEFAULT 'freelancer',
    "savedJobsId" INTEGER,
    CONSTRAINT "freelanceUser_savedJobsId_fkey" FOREIGN KEY ("savedJobsId") REFERENCES "SavedJobs" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_freelanceUser" ("bio", "email", "firstName", "id", "image", "lastName", "location", "password", "totalReceived", "type") SELECT "bio", "email", "firstName", "id", "image", "lastName", "location", "password", "totalReceived", "type" FROM "freelanceUser";
DROP TABLE "freelanceUser";
ALTER TABLE "new_freelanceUser" RENAME TO "freelanceUser";
CREATE UNIQUE INDEX "freelanceUser_email_key" ON "freelanceUser"("email");
CREATE TABLE "new_job" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "dateCreated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "difficultyId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "clientUserId" INTEGER NOT NULL,
    "durationId" INTEGER,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "savedJobsId" INTEGER,
    CONSTRAINT "job_clientUserId_fkey" FOREIGN KEY ("clientUserId") REFERENCES "clientUser" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "job_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "job_difficultyId_fkey" FOREIGN KEY ("difficultyId") REFERENCES "Difficulty" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "job_durationId_fkey" FOREIGN KEY ("durationId") REFERENCES "Duration" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "job_savedJobsId_fkey" FOREIGN KEY ("savedJobsId") REFERENCES "SavedJobs" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_job" ("categoryId", "clientUserId", "content", "dateCreated", "difficultyId", "durationId", "id", "location", "published", "title") SELECT "categoryId", "clientUserId", "content", "dateCreated", "difficultyId", "durationId", "id", "location", "published", "title" FROM "job";
DROP TABLE "job";
ALTER TABLE "new_job" RENAME TO "job";
CREATE TABLE "new_SavedJobs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);
INSERT INTO "new_SavedJobs" ("id") SELECT "id" FROM "SavedJobs";
DROP TABLE "SavedJobs";
ALTER TABLE "new_SavedJobs" RENAME TO "SavedJobs";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
