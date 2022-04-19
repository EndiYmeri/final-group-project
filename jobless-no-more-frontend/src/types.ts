export type User = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    location?: string
}

export type Job = {
    title: string,
    content: string,
    duration: string,
    difficulty: string,
    skills: string[],
    
}