import React from 'react';
import ReactDOM from 'react-dom';

import { CancelIcon } from '../icons';
import Button  from './Button';

interface ModalProps {
  children: React.ReactChildren | React.ReactElement | JSX.Element;
  heading: string;
  className?: string;
  loading: boolean;
  footerButtonText?: string;
  onClose: () => {};
  onSave: () => {};
}

const Modal: React.FC<ModalProps> = (props) => {
  const {
    children,
    heading,
    className,
    loading = false,
    onClose,
    onSave,
  } = props;
  
  return (
    ReactDOM.createPortal(
      <div className={`modal ${className || ''}`} onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content-heading">
            <div className="modal-content-heading-text">{heading}</div>
            <CancelIcon className="close-icon" onClick={onClose} />
          </div>
          <div className="modal-content-body">{children}</div>
          <div className="modal-content-footer">
            <Button className="modal-content-footer-button" onClick={onSave}><span>Cancel</span></Button>
            <Button loading={loading} className="modal-content-footer-button" onClick={onSave}>Save</Button>
          </div>
        </div>
      </div>,
    document.body,
  )
}

export default Modal;
