-- CreateTable
CREATE TABLE "_freelanceUserTojob" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "freelanceUser" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "job" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_freelanceUserTojob_AB_unique" ON "_freelanceUserTojob"("A", "B");

-- CreateIndex
CREATE INDEX "_freelanceUserTojob_B_index" ON "_freelanceUserTojob"("B");
