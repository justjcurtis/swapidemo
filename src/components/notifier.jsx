import { useContext } from "react"
import { NotificationContext } from "../contexts/notification"
import Toast from "./toast"

const styles = {
  container: {
    position: 'fixed',
    top: '1rem',
    right: '1rem',
    padding: '1rem',
  },
}

const Notifier = () => {
  const { notifications } = useContext(NotificationContext)
  return (
    <div style={styles.container}>
      {Object.values(notifications).map((notification, i) => (
        <Toast key={i} message={notification.message} type={notification.type} />
      ))}
    </div>
  )
}

export default Notifier
