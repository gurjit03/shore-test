export interface UserRaw {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface User {
    id: number;
    email: string;
    department: string;
    firstName: string;
    lastName: string;
    avatar: string;
    contribution: string;
    gender: string;
    active: boolean;
}

