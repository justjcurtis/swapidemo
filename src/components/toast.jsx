import { ToastNotification } from "@carbon/react"

const style = {
  toast: {
    backgroundColor: "rgba(51, 51, 51, 0.8)",
    padding: '1rem',
    backdropFilter: 'blur(5px)',
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
      timeout={2000}
    />
  )
}

export default Toast
