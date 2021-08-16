import React from 'react';
import Modal from '../../ui/Modal/Modal';
import ContactForm from '../../components/ContactForm/ContactForm'

interface EditUserModalProps {
    isOpen: boolean;
    heading: string;
    onModalClose: () => void;
}

const EditUserModal: React.FC<EditUserModalProps> = (props) => {
    const {isOpen, heading = "Edit user",onModalClose } = props;

    if(!isOpen) return null
    
    return (
        <Modal
            heading={heading}
            onClose={onModalClose}
        >
            <ContactForm />
        </Modal>
    )
}

export default EditUserModal;