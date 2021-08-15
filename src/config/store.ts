import create, {SetState} from 'zustand'
import createContext from 'zustand/context'
import { User } from '../interfaces/Contacts.Interface';
import { UserState } from '../interfaces/UserState.interface';

export const createStore = () => create<UserState>((set: SetState<UserState>) => ({
    users: [],
    setUsers: (usersData: User[]) => set(state => { 
        return { 
            users: usersData 
        }
    })
})) 
export const { Provider, useStore } = createContext<UserState>()

