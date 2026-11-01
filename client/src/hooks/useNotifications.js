import { useNotificationContext } from '../context/NotificationContext.jsx';

export function useNotifications() {
  return useNotificationContext();
}

export default useNotifications;
