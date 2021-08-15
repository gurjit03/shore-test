import React from 'react';

import { useStore } from '../../config/store';
import fetchUsers from '../../utils/fetchUsers';
import ContactListItem from '../ContactListItem/ContactListItem'
import './Contacts.scss';

const Contacts: React.FC = (props) => {
    const users = useStore(state => state.users)
    const setUsers = useStore(state => state.setUsers);
    
    React.useEffect(() => {
        async function fetchAndSetUsers() {
            const users = await fetchUsers();
            setUsers(users);
        }
        fetchAndSetUsers();
    }, [setUsers]);

    return (
        <div className="Contacts">
            {users.map(user => <ContactListItem key={user.id} {...user} />)}
        </div>
    )
}   

export default Contacts;