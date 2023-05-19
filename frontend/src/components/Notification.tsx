import '../assets/CSS/notifications.css'

const Notification = () => {
    return (
        <div className="notification" id="rocketNotification">
        <div className="notification-content">
          <p id="rocket-notify-text">Mensagem da notificação.</p>
        </div>
        <button className="active">&times;</button>
      </div>
    )
}

export default Notification;