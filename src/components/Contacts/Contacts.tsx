import React from 'react';

import { useStore } from '../../config/store';
import fetchUsers from '../../utils/fetchUsers';
import ContactListItem from '../ContactListItem/ContactListItem'
import EditUserModal from '../EditUserModal/EditUserModal';
import './Contacts.scss';

const Contacts: React.FC = (props) => {
    const [editUserId, setEditUserId] = React.useState(-1);
    const [isEditModalOpen, setEditModalOpen] = React.useState(false);
    const users = useStore(state => state.users)
    const setUsers = useStore(state => state.setUsers);
    
    React.useEffect(() => {
        async function fetchAndSetUsers() {
            const users = await fetchUsers();
            setUsers(users);
        }
        fetchAndSetUsers();
    }, [setUsers]);

    function handleListItemClick(id: number) {
        setEditUserId(id);
        setEditModalOpen(true);
    }

    function handleModalClose() {
        setEditModalOpen(false);
    }

    console.log(editUserId, isEditModalOpen,"edit user id, edit modal open")

    return (
        <div className="Contacts">
            {isEditModalOpen && <EditUserModal heading="Edit user" isOpen={isEditModalOpen} onModalClose={handleModalClose}/>}
            {users.map(user => <ContactListItem key={user.id} {...user} onListItemClick={handleListItemClick}/>)}
        </div>
    )
}   

export default Contacts;