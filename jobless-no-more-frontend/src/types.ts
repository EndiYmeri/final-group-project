
// model freelanceUser {
//     id            Int        @id @default(autoincrement())
//     firstName     String
//     lastName      String
//     email         String     @unique
//     totalReceived Float      @default(0)
//     password      String
//     image         String?
//     location      String
//     bio           String?
//     type          String     @default("freelancer")
//     skillS        Skill[]
//     proposals     Proposal[]
export type User = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    location?: string,
    image?: string,
    bio?: string
    type: "freelancer" | "client",
    skills: Skill[],
    profession?: string,
    Language?: Language[],
    Education?: Education[],
    id: Number
}

export type Job = {
    title: string,
    content: string,
    duration: { name: string },
    difficulty: { name: string },
    skills: Skill[],
    dateCreated: string,
    id: number,
    location: string,
    Category: { name: string },
    payment: number,
    paymentType: string
}

export type ClientUser = {
    email: string,
    firstName: string,
    lastName: string,
    location: string,
    password: string,
    paymentVerified: boolean,
    image: string,
    totalSpend: number,
    rating: number,
    type: "client"
}

export type Skill = {
    name: string,
    freelanceUsers: User[],
    jobs: Job[]
}

export type Difficulty = {
    name: string,
    jobs: Job[]
}

export type Category = {
    name: string
    jobs: Job[]
}

export type Language = {
    freelanceUser: User[],
    languageName: String
}
export type Education = {
    freelanceUser: User,
    institute: String,
    profileOfStudies: String,
    fromYear: Number,
    endYear: Number
}

