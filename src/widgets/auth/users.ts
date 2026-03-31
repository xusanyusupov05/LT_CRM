export type role = 'admin' | 'user'; 

export interface User {
    fname: string;
    password: string;
    confirm_password: string;
    role: role
}

const admin_password = import.meta.env.VITE_ADMIN_PASSWORD 

export const users: User[] = [
    {
        fname: "xusan yusupov",
        password: admin_password,
        confirm_password: admin_password,
        role: "admin"
    },
    {
        fname: "test",
        password: 'test1234',
        confirm_password: 'test1234',
        role: "user"
    },
    {
        fname: "test1",
        password: 'test12345',
        confirm_password: 'test12345',
        role: "user"
    },
];