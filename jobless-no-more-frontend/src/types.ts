
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
    skills: Skills[]
}

export type Job = {
    title: string,
    content: string,
    duration: string,
    difficulty: string,
    skills: Skills[],
    
}

export type ClientUser ={
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

export type Skills = {
    name: string,
    freelanceUsers: User [],
    jobs: Job[]
}

export type Difficulties = {
    name: string,
    jobs: Job[]
}


export type Categories = {
    name: string
    jobs: Job[]
}
