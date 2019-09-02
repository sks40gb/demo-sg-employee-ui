export interface Employee {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    gender: Gender
}

export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER"
}