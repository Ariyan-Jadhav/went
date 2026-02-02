import { useEffect, useState, useRef } from "react";
import { useAuth } from "@clerk/clerk-react";
import { io, Socket } from "socket.io-client";
import { toast } from "react-hot-toast";
import { Bell, X, Check, CheckCheck } from "lucide-react";

interface Notification {
  _id: string;
  sender_id: string;
  type: string;
  message: string;
  createdAt: string;
  read: boolean;
}

function Notification() {
  const { getToken, userId } = useAuth();
  // const { user } = useUser();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const socketRef = useRef<Socket | null>(null);

  // Initialize Socket.IO connection
  useEffect(() => {
    if (!userId) return;

    // Connect to your server
    const socket = io("http://localhost:6969", {
      auth: {
        userId: userId, // This matches your server's socket.handshake.auth.userId
      },
      withCredentials: true,
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("✅ Connected to Socket.IO");
    });

    socket.on("new-notification", (notification: Notification) => {
      console.log("📬 New notification received:", notification);

      // Add to notifications list at the top
      setNotifications((prev) => [notification, ...prev]);
      setUnreadCount((prev) => prev + 1);

      // Show toast notification
      toast.success("You have a new notification!", {
        icon: "🔔",
        duration: 3000,
      });
    });

    socket.on("disconnect", () => {
      console.log("❌ Disconnected from Socket.IO");
    });

    socket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId]);

  // Fetch notifications on component mount
  useEffect(() => {
    if (userId) {
      fetchNotifications();
    }
  }, [userId]);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const token = await getToken();
      const response = await fetch("http://localhost:6969/notification", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch notifications");

      const data = await response.json();
      setNotifications(data.notifications);

      // Count unread notifications
      const unread = data.notifications.filter(
        (n: Notification) => !n.read
      ).length;
      setUnreadCount(unread);
    } catch (error) {
      console.error("Error fetching notifications:", error);
      toast.error("Failed to load notifications");
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (notificationId: string) => {
    try {
      const token = await getToken();
      const response = await fetch(
        `http://localhost:6969/notification/${notificationId}/read`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to mark as read");

      // Update local state
      setNotifications((prev) =>
        prev.map((n) => (n._id === notificationId ? { ...n, read: true } : n))
      );
      setUnreadCount((prev) => Math.max(0, prev - 1));
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  const markAllAsRead = async () => {
    try {
      const token = await getToken();
      const response = await fetch(
        "http://localhost:6969/notification/read-all",
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to mark all as read");

      // Update local state
      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
      setUnreadCount(0);
      toast.success("All notifications marked as read");
    } catch (error) {
      console.error("Error marking all as read:", error);
      toast.error("Failed to mark all as read");
    }
  };

  const deleteNotification = async (notificationId: string) => {
    try {
      const token = await getToken();
      const response = await fetch(
        `http://localhost:6969/notification/${notificationId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to delete notification");

      // Update local state
      setNotifications((prev) => prev.filter((n) => n._id !== notificationId));
      toast.success("Notification deleted");
    } catch (error) {
      console.error("Error deleting notification:", error);
      toast.error("Failed to delete notification");
    }
  };

  const formatTimeAgo = (date: string) => {
    const seconds = Math.floor(
      (new Date().getTime() - new Date(date).getTime()) / 1000
    );

    if (seconds < 60) return "just now";
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
    return new Date(date).toLocaleDateString();
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "follow":
        return "👤";
      case "like":
        return "❤️";
      case "comment":
        return "💬";
      case "mention":
        return "📌";
      default:
        return "🔔";
    }
  };

  return (
    <div className="relative">
      {/* Notification Bell Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Notifications"
      >
        <Bell className="w-6 h-6 text-gray-700" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {/* Notification Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-150 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="font-semibold text-lg text-gray-900">
                Notifications
              </h3>
              <div className="flex items-center gap-2">
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    title="Mark all as read"
                  >
                    <CheckCheck className="w-4 h-4" />
                    Mark all read
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Notifications List */}
            <div className="overflow-y-auto flex-1">
              {loading ? (
                <div className="flex items-center justify-center p-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
                </div>
              ) : notifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <Bell className="w-12 h-12 text-gray-300 mb-2" />
                  <p className="text-gray-500">No notifications yet</p>
                  <p className="text-sm text-gray-400 mt-1">
                    When someone follows you, you'll see it here
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {notifications.map((notification) => (
                    <div
                      key={notification._id}
                      className={`p-4 hover:bg-gray-50 transition-colors ${
                        !notification.read ? "bg-blue-50" : ""
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl shrink-0">
                          {getNotificationIcon(notification.type)}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-900">
                            <span className="font-semibold">
                              User {notification.sender_id.slice(0, 8)}...
                            </span>{" "}
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {formatTimeAgo(notification.createdAt)}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          {!notification.read && (
                            <button
                              onClick={() => markAsRead(notification._id)}
                              className="p-1 text-blue-600 hover:bg-blue-100 rounded"
                              title="Mark as read"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                          )}
                          <button
                            onClick={() => deleteNotification(notification._id)}
                            className="p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded"
                            title="Delete"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Notification;
