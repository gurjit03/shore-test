import create from 'zustand'
import { User } from '../interfaces/Contacts.Interface';
import { UserState } from '../interfaces/UserState.interface';

const createStore = () => create<UserState>(set => ({
    users: [],
    setUsers: (usersData: User[]) => set(state => { 
        return { 
            users: usersData 
        }
    })
})) 

export default createStore;