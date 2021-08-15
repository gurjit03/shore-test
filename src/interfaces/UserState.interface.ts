import { User } from "./Contacts.Interface";

export interface UserState {
    users: User[],
    setUsers: (users: User[]) => void
}