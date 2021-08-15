import React from 'react';
import IconProps from '../interfaces/IconProps.interface';

const ShieldIcon: React.FC<IconProps> = (props) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4454 3.74762C15.4177 3.74762 11.9515 3.66465 8.41594 0.165946C8.30503 0.0553155 8.16638 0 8.01386 0H7.95841C7.80589 0 7.66724 0.0553155 7.55633 0.165946C4.04853 3.66465 0.582322 3.74762 0.554593 3.74762C0.249567 3.74762 0 3.99654 0 4.31461V7.96543C0 8.03457 0.0138648 8.10372 0.0415945 8.17286C0.138648 8.42178 2.53726 14.3267 7.80589 15.9723C7.86135 15.9862 7.91681 16 7.97227 16C7.98614 16 8.01387 16 8.02773 16C8.08319 16 8.13865 15.9862 8.19411 15.9723C13.4627 14.3267 15.8614 8.42178 15.9584 8.17286C15.9861 8.10372 16 8.03457 16 7.96543V4.31461C16 4.01037 15.7504 3.76145 15.4454 3.74762ZM14.8769 7.8548C14.5581 8.58773 12.3258 13.414 8 14.8522C3.67418 13.414 1.44194 8.58773 1.12305 7.84097V4.82627C2.28769 4.67416 5.07452 4.03803 8 1.31374C10.9255 4.03803 13.7123 4.67416 14.8769 4.82627V7.8548Z"/>
        </svg>
    )
}

export default ShieldIcon;