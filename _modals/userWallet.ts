import { User } from "./user";

export interface UserWallet {
    id: number
    amount: number
    createdDate: Date
    modifieddate: Date
    status: string
    userId: User
}