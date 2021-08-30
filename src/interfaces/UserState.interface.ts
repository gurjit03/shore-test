import { User } from "./Contacts.Interface";

export interface UserState {
    users: User[];
    editUser: User;
    setUsers: (users: User[]) => void;
    setEditUser: (user: User) => void;
}