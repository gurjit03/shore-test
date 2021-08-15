import React from 'react';
import { User } from '../../interfaces/Contacts.Interface';

const ContactListItem: React.FC<User> = (props) => {
    const {id, email, firstName, lastName, avatar} = props;
    const fullName = `${firstName} ${lastName}`; 
    return (
            <li key={id} className="ContactListItem">
                <div className="ContactListItem-avatar-wrapper">
                    <img
                        className="ContactListItem-avatar"
                        alt="Avatar"
                        src={avatar}
                    />
                    <span className="ContactListItem-status" />
                </div>
                <p className="ContactListItem-name">{fullName}</p>
                <span className="divider" />
                <p className="ContactListItem-email">{email}</p>
                <span className="divider" />
                <p className="divider" />
                <span className="divider" />
                <li>sdf</li>
        </li>
    )
}

export default ContactListItem;
