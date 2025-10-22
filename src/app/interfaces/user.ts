export interface User{
    id: number,
    name: string,
    email: string,
    password: string,
    phone?: string,
    address?: string,
    reg: string,
    lastLog: string,
    status: boolean
}