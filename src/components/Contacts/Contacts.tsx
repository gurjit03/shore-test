import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem'
import {User, UserRaw} from '../../interfaces/Contacts.Interface';
import * as appConfig from '../../config/app';

const Contacts: React.FC = (props) => {
    const [users, setUsers] = React.useState<User[]>([]);
    const fetchAndSetUsers = React.useCallback(async () => {
        const res = await fetch(appConfig.API_URL);
        const rawUsersData = await res.json();
        const usersData: User[] = rawUsersData.data.map((user: UserRaw) => {
            return {
                id: user.id,
                email: user.email,
                firstName: user.first_name,
                lastName: user.last_name,
                
            }
        })
        setUsers(usersData);
    }, []);
    React.useEffect(() => {
        fetchAndSetUsers();
    }, []);

    return (
        <div className="Contacts">
            {users.map(user => <ContactListItem key={user.id} {...user} />)}
        </div>
    )
}   

export default Contacts;