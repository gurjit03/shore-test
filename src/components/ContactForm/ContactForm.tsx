import React from 'react';

import InputField from '../../ui/InputField';
import RadioField from '../../ui/RadioField';
import SelectField from '../../ui/SelectField';
import CheckField  from '../../ui/CheckField/CheckField';
import './ContactForm.scss';


const ContactForm: React.FC = () => {
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