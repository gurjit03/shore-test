import create, {SetState} from 'zustand'
import createContext from 'zustand/context'

import emptyUser from '../constants/emptyUser'
import { User } from '../interfaces/Contacts.Interface';
import { UserState } from '../interfaces/UserState.interface';

export const createStore = () => create<UserState>((set: SetState<UserState>) => ({
    users: [],
    editUser: emptyUser,
    setUsers: (usersData: User[]) => set(() => { 
        return { 
            users: usersData 
        }
    }),
    setEditUser: (userData: User) => set(() => {
        return {
            editUser: userData
        }
    })
})) 
export const { Provider, useStore } = createContext<UserState>()

