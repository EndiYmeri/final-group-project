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
    duration: string,
    difficulty: string,
    skills: string[],
    
}