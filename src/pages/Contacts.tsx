import React from 'react';
import Contacts from '../components/Contacts/Contacts'
import './Contacts.scss';

const ContactsPage: React.FC = () => {
    return (
        <div className="ContactsPage">
            <Contacts />
        </div>
    ) 

}

export default ContactsPage