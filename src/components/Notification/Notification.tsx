import React, { HTMLAttributes } from "react";
import './Notification.css';
import Button from '../Button'

interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
    /** The notification content */
    text: string;
    /** A label for the action button */
    buttonLabel: string;
    /** A callback function for the button onClick event */
    onClickMethod : (arg: any) => void;
}

// 'NotificationProps' appears twice for the sake of auto gen documentation
const Notification: React.FC<NotificationProps> = ({text, buttonLabel, onClickMethod, ...rest }: NotificationProps) => {
  return (
    <div  className='notif' {...rest}>
      <div className='notif-text-container'>
          {text}
      </div>
      <div className='notif-button-container'>
        <Button onClickMethod = {onClickMethod} >{buttonLabel}</Button>
      </div>
    </div>
  );
};

export default Notification;