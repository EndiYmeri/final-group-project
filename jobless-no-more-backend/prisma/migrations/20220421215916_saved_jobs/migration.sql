/*
  Warnings:

  - You are about to drop the `SavedJobs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `savedJobsId` on the `freelanceUser` table. All the data in the column will be lost.
  - You are about to drop the column `savedJobsId` on the `job` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "SavedJobs";
PRAGMA foreign_keys=on;

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
    "type" TEXT NOT NULL DEFAULT 'freelancer'
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
    "freelanceUserId" INTEGER,
    CONSTRAINT "job_freelanceUserId_fkey" FOREIGN KEY ("freelanceUserId") REFERENCES "freelanceUser" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "job_clientUserId_fkey" FOREIGN KEY ("clientUserId") REFERENCES "clientUser" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "job_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "job_difficultyId_fkey" FOREIGN KEY ("difficultyId") REFERENCES "Difficulty" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "job_durationId_fkey" FOREIGN KEY ("durationId") REFERENCES "Duration" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_job" ("categoryId", "clientUserId", "content", "dateCreated", "difficultyId", "durationId", "id", "location", "published", "title") SELECT "categoryId", "clientUserId", "content", "dateCreated", "difficultyId", "durationId", "id", "location", "published", "title" FROM "job";
DROP TABLE "job";
ALTER TABLE "new_job" RENAME TO "job";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
