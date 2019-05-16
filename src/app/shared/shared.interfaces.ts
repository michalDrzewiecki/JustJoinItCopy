export interface User{
    name: string,
    surname: string,
    email: string,
    password: string
}

export interface LoginUser{
    email: string,
    password: string
}

export interface Technology{
    name: string,
    isHidden: boolean
}