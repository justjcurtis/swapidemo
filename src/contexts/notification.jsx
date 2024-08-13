import React, { useState, useRef } from 'react';
import { NOTIFICATION_TIMEOUT } from '../constants/notificationContants';

const NotificationContext = React.createContext();
const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const timeout = useRef(null);

  const notify = (message, type) => {
    const created = Date.now();
    setNotifications([...notifications, { message, type, created }]);
    if (timeout.current) clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      setNotifications((notifications) => notifications.filter((n) => n.created < Date.now() - NOTIFICATION_TIMEOUT));
      timeout.current = null;
    }, NOTIFICATION_TIMEOUT);
  };

  return (
    <NotificationContext.Provider value={{ notifications, notify }}>
      {children}
    </NotificationContext.Provider>
  );
}

export { NotificationProvider, NotificationContext }
