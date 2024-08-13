import { ToastNotification } from "@carbon/react"
import { NOTIFICATION_TIMEOUT } from "../constants/notificationContants"

const style = {
  toast: {
    backgroundColor: "rgba(51, 51, 51, 0.6)",
    padding: '1rem',
    marginTop: '0.5rem',
    backdropFilter: 'blur(3px)',
  }
}

const Toast = ({ message, type }) => {
  return (
    <ToastNotification
      key={1}
      style={style.toast}
      kind={type}
      title={message}
      hideCloseButton={true}
      timeout={NOTIFICATION_TIMEOUT}
    />
  )
}

export default Toast
