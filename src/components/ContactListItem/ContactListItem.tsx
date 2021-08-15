import React from 'react';
import { User } from '../../interfaces/Contacts.Interface';
import './ContactListItem.css';

const ContactListItem: React.FC<User> = (props) => {
    const {id, email, firstName, lastName, avatar, contribution, active} = props;
    const fullName = `${firstName} ${lastName}`; 
    return (
        <li key={id} className="ContactListItem">
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
