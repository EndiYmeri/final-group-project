-- CreateTable
CREATE TABLE "Education" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "freelanceUserId" INTEGER NOT NULL,
    "institute" TEXT NOT NULL,
    "profileOfStudies" TEXT NOT NULL,
    "fromYear" INTEGER NOT NULL,
    "endYear" INTEGER NOT NULL,
    CONSTRAINT "Education_freelanceUserId_fkey" FOREIGN KEY ("freelanceUserId") REFERENCES "freelanceUser" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Language" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "languageName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_LanguageTofreelanceUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Language" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "freelanceUser" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_LanguageTofreelanceUser_AB_unique" ON "_LanguageTofreelanceUser"("A", "B");

-- CreateIndex
CREATE INDEX "_LanguageTofreelanceUser_B_index" ON "_LanguageTofreelanceUser"("B");
