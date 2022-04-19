export type User = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    location?: string,
    type: "freelancer" | "client"
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
    Category: { name: string }
}
export type Skill = {
    id: number,
    name: string
}