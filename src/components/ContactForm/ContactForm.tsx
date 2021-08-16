import React, { useReducer } from 'react';

import InputField from '../../ui/InputField';
import RadioField from '../../ui/RadioField';
import SelectField from '../../ui/SelectField';
import CheckField  from '../../ui/CheckField/CheckField';

import {useStore} from '../../config/store';
import { User } from '../../interfaces/Contacts.Interface';
import emptyUser from '../../constants/emptyUser';

import './ContactForm.scss';

interface Action {
    type: string;
    payload: string | number;
    fieldName: string
}

const editUserReducer = (state: User, action: Action) => {
  switch (action.type) {
    case 'change':
      return ({
            ...state,  
            [action.fieldName]: action.payload
        });
    case 'reset':
      return emptyUser;

    default:
        return emptyUser;
  }
}


const ContactForm: React.FC = () => {
    const editUserData = useStore(state => state.editUser);
    const [editUser, dispatch] = useReducer(editUserReducer, editUserData)

    return (
        <div className="contact-form">
          <div className="contact-form-col">
            <InputField label="First Name" />
            <InputField label="Last Name" />
          </div>
          <RadioField label="Gender" data={[{ title: 'Male', value: 'male' }, { title: 'Female', value: 'female' }, { title: 'Other', value: 'other' }]} />
          <InputField type="email" label="Email" />
          <div className="contact-form-col">
            <SelectField label="Department" data={[{ title: 'som', value: 'somethign' }]} />
            <InputField label="Contribution" />
          </div>
          <CheckField label="Is Active" />
        </div>
    )
}

export default ContactForm;