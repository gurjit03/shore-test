import React from 'react';
import * as appConfig from '../../config/app';

const Contacts: React.FC = (props) => {
    const [users, setUsers] = React.useState<User[]>([]);
    const fetchAndSetUsers = React.useCallback(async () => {
        const res = await fetch("");
        const rawUsersData = await res.json();
        const usersData: User[] = rawUsersData.data.map(user => {
            return {
                id: user.id,
                email: user.email,
                firstName: user.first_name,
                lastName: user.last_name,
                
            }
        })
        setUsers(rawUsersData);
    }, []);
    React.useEffect(() => {
        fetchAndSetUsers();
    }, []);
    return (
        <div className="Contacts">
            {users.map(user => )
        </div>
    )
}   

export default Contacts;