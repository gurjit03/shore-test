import React from 'react';
import { User } from '../../interfaces/Contacts.Interface';
import './ContactListItem.scss';

interface ContactListItemProps extends User {
    onListItemClick: (id: number) => void
}

const ContactListItem: React.FC<ContactListItemProps> = (props) => {
    const {id, email, firstName, lastName, avatar, contribution, active, onListItemClick} = props;
    const fullName = `${firstName} ${lastName}`; 
    return (
        <li key={id} className="ContactListItem" role="button" onClick={() => onListItemClick(id)}>
            <div className="ContactListItem-avatar-wrapper">
                <img
                    className="ContactListItem-avatar"
                    alt="Avatar"
                    src={avatar}
                />
                <span className={`ContactListItem-status ${active ? 'Status-active' : 'Status-inactive'}`} />
            </div>
            <p className="ContactListItem-name">{fullName}</p>
            <span className="divider" />
            <p className="ContactListItem-email">{email}</p>
            <span className="divider" />
            <p className="ContactListItem-contribution">{contribution}</p>
        </li>
    )
}

export default ContactListItem;
