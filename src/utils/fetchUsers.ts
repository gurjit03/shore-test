import usersSeedData from '../constants/users.seed';
import * as appConfig from '../config/app';
import {User} from '../interfaces/Contacts.Interface'

const fetchUsers = async (): Promise<User[]> => {
    const res = await fetch(appConfig.API_URL);
    const rawUsersData = await res.json();
    console.log(rawUsersData,"RAW USERS DATA")
    //NOTE: We are not using the reqres.in api data as it's not properly returning the fields required
    // const usersData: User[] = rawUsersData.data.map((user: UserRaw) => {
    //     return {
    //         id: user.id,
    //         email: user.email,
    //         firstName: user.first_name,
    //         lastName: user.last_name,
            
    //     }
    // })
    return usersSeedData;
}


export default fetchUsers;