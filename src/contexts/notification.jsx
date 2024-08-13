import React, { useState, useRef } from 'react';

const NotificationContext = React.createContext();
const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const timeout = useRef(null);

  const notify = (message, type) => {
    const created = Date.now();
    setNotifications([...notifications, { message, type, created }]);
    if (timeout.current) clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      setNotifications((notifications) => notifications.filter((n) => n.created < Date.now() - 3000));
      timeout.current = null;
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ notifications, notify }}>
      {children}
    </NotificationContext.Provider>
  );
}

export { NotificationProvider, NotificationContext }
