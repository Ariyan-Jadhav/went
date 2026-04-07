import { useEffect, useState, useRef } from "react";
import { useAuth } from "@clerk/clerk-react";
import { io, Socket } from "socket.io-client";
import { toast } from "react-hot-toast";
import { Bell, Check, CheckCheck, Trash2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useDefaultOptions } from "@/components/di_global_context/default";
import { useFeedOptions } from "@/components/di_global_context/FeedE-FContext";
import { useProfileOptions } from "@/components/di_global_context/ProfileP-SContext";

interface INotification {
  _id: string;
  sender_id: string;
  type: "like" | "follow" | "comment";
  message: string;
  createdAt: string;
  read: boolean;
  username: string;
  profilePic: string;
}

interface RandomUser {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  profilePicUrl: string | null;
  Profile: {
    user_id: string;
    profession: string;
    bio: string | null;
  } | null;
}

interface NewsItem {
  _id: string;
  content: string;
  createdAt: string;
  imageUrl?: Array<{ url: string; publicId: string }>;
}
const formatTimeAgo = (date: string) => {
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
  if (seconds < 60) return "just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
  return new Date(date).toLocaleDateString();
};

function NotificationPage() {
  const { getToken, userId } = useAuth();
  const [notifications, setNotifications] = useState<INotification[]>([]);
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState<NewsItem[]>([]); // reuse or make a NewsItem type
  const [newsLoading, setNewsLoading] = useState(false);
  // add these alongside your existing state
  const [suggestions, setSuggestions] = useState<RandomUser[]>([]);
  const [suggestLoading, setSuggestLoading] = useState(false);
  const [followingUsers, setFollowingUsers] = useState<Record<string, boolean>>(
    {},
  );
  const [followLoading, setFollowLoading] = useState(false);

  const socketRef = useRef<Socket | null>(null);

  const {
    setFeed,
    setMessage,
    setNotification,
    setProfile1,
    setSearch,
    setUpload,
    setOpenTextBox,
    setTextBox,
  } = useDefaultOptions();

  const { setOpenProfileOptions } = useProfileOptions();

  const { setOpenFeedOptions, setGototop } = useFeedOptions();

  useEffect(() => {
    setFeed(false);
    setMessage(false);
    setNotification(true);
    setProfile1(false);
    setSearch(false);
    setUpload(false);
    setOpenFeedOptions(false);
    setGototop(false);
    setOpenProfileOptions(false);
    getNews();
    setTextBox("NOTIFICATION");
  }, []);

  useEffect(() => {
    setOpenTextBox(true);

    const timer = setTimeout(() => {
      setOpenTextBox(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // ... your existing calls
    getRandom();
    const stored: string[] = JSON.parse(
      localStorage.getItem("followingUsers") || "[]",
    );
    setFollowingUsers(stored.reduce((acc, id) => ({ ...acc, [id]: true }), {}));
  }, []);

  // Socket.IO — real-time
  useEffect(() => {
    if (!userId) return;
    const socket = io(import.meta.env.VITE_BASE_URL, {
      auth: { userId },
      withCredentials: true,
    });
    socketRef.current = socket;

    socket.on("new_notification", (n: INotification) => {
      setNotifications((prev) => [n, ...prev]);
      toast("New notification", { icon: "🔔" });
    });

    return () => {
      socket.disconnect();
    };
  }, [userId]);

  // Initial fetch
  useEffect(() => {
    if (userId) fetchNotifications();
  }, [userId]);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/notification`, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      const data = await res.json();
      setNotifications(data.notifications);
    } catch {
      toast.error("Failed to load notifications");
    } finally {
      setLoading(false);
    }
  };

  const getRandom = async () => {
    try {
      setSuggestLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/profile/random`,
        {
          headers: { Authorization: `Bearer ${await getToken()}` },
        },
      );
      const data = await res.json();
      setSuggestions(data.users);
    } catch {
      toast.error("Failed to load suggestions");
    } finally {
      setSuggestLoading(false);
    }
  };

  const toggleFollow = async (targetId: string) => {
    const newState = !followingUsers[targetId];
    setFollowingUsers((prev) => ({ ...prev, [targetId]: newState }));
    const stored: string[] = JSON.parse(
      localStorage.getItem("followingUsers") || "[]",
    );
    const updated = newState
      ? [...stored, targetId]
      : stored.filter((id) => id !== targetId);
    localStorage.setItem("followingUsers", JSON.stringify(updated));
    try {
      setFollowLoading(true);
      await fetch(`${import.meta.env.VITE_BASE_URL}/follow`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${await getToken()}`,
        },
        body: JSON.stringify({ personality_id: targetId }),
      });
    } catch {
      setFollowingUsers((prev) => ({ ...prev, [targetId]: !newState }));
    } finally {
      setFollowLoading(false);
    }
  };

  const getNews = async () => {
    try {
      setNewsLoading(true);
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/feed/getnews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${await getToken()}`,
        },
        body: JSON.stringify({ skip: 0 }),
      });
      const data = await res.json();
      setNews(data.personalizedThinks);
    } catch {
      toast.error("Failed to load news");
    } finally {
      setNewsLoading(false);
    }
  };

  const renderContent = (content: string) => {
    return content.split(/(\s+)/).map((word, i) =>
      word.startsWith("#") ? (
        <span key={i} className="text-blue-400">
          {word}
        </span>
      ) : (
        <span key={i}>{word}</span>
      ),
    );
  };

  const markAsRead = async (id: string) => {
    await fetch(`${import.meta.env.VITE_BASE_URL}/notification/${id}/read`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${await getToken()}` },
    });
    setNotifications((prev) =>
      prev.map((n) => (n._id === id ? { ...n, read: true } : n)),
    );
  };

  const markAllAsRead = async () => {
    await fetch(`${import.meta.env.VITE_BASE_URL}/notification/read-all`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${await getToken()}` },
    });
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    toast.success("All caught up!");
  };

  const deleteNotification = async (id: string) => {
    await fetch(`${import.meta.env.VITE_BASE_URL}/notification/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${await getToken()}` },
    });
    setNotifications((prev) => prev.filter((n) => n._id !== id));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="min-h-screen bg-black grid grid-cols-[1.2fr_2fr_1.2fr]">
      <div className="bg-black border-r border-gray-800 sticky top-0 h-screen overflow-y-auto thinks-scroll">
        <div className="px-6 py-4 border-b border-gray-800">
          <h2 className="text-white font-bold text-sm tracking-widest uppercase">
            TRENDING
          </h2>
        </div>

        {newsLoading ? (
          <div>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="border-y border-gray-800 px-6 py-4 animate-pulse"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gray-700" />
                  <div className="h-3 w-24 bg-gray-700 rounded" />
                  <div className="h-3 w-12 bg-gray-800 rounded" />
                </div>
                <div className="pl-10 space-y-2">
                  <div className="h-3 bg-gray-700 rounded w-3/4" />
                  <div className="h-3 bg-gray-700 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {news.map((item) => (
              <div
                key={item._id}
                className="border-y border-gray-800 px-6 py-4 text-white hover:bg-gray-900 transition"
              >
                <p className="text-gray-300">{renderContent(item.content)}</p>
                {item.imageUrl && item.imageUrl.length > 0 && (
                  <div
                    className={`grid gap-0.5 rounded-2xl overflow-hidden mt-2 ${item.imageUrl.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}
                  >
                    {item.imageUrl.slice(0, 4).map((img, i) => (
                      <img
                        key={i}
                        src={img.url}
                        alt={`image ${i + 1}`}
                        className={`w-full object-cover ${item.imageUrl!.length === 1 ? "max-h-40 aspect-video" : "aspect-square"}`}
                        loading="lazy"
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className=" mt-15 text-white">
        {/* Header */}
        <div className="sticky top-0 bg-black/80 backdrop-blur border-b border-gray-800 px-6 py-4 flex items-center justify-between">
          <div>
            {unreadCount > 0 && (
              <p className="text-rose-600 text-sm t-0.5">
                {unreadCount} unread
              </p>
            )}
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              <CheckCheck size={16} />
              Mark all read
            </button>
          )}
        </div>

        {/* List */}
        {loading ? (
          <div className="space-y-0">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="px-6 py-4 border-b border-gray-800 flex gap-3 animate-pulse"
              >
                <div className="w-10 h-10 rounded-full bg-gray-700 shrink-0" />
                <div className="flex-1 space-y-2 pt-1">
                  <div className="h-3 bg-gray-700 rounded w-3/4" />
                  <div className="h-3 bg-gray-800 rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        ) : notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-gray-600">
            <Bell size={40} className="mb-3" />
            <p className="font-medium">No notifications yet</p>
            <p className="text-sm mt-1">Likes and follows will show up here</p>
          </div>
        ) : (
          notifications.map((n) => (
            <div
              key={n._id}
              className={`px-6 py-4 border-b border-gray-800 flex items-start gap-3 hover:bg-gray-900 transition-colors ${
                !n.read ? "bg-blue-950/20" : ""
              }`}
            >
              {/* Unread dot */}
              <div className="pt-1 shrink-0">
                {!n.read ? (
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-1" />
                ) : (
                  <div className="w-2 h-2" />
                )}
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-xs font-bold text-white">
                {n.profilePic ? (
                  <img src={n.profilePic} className="rounded-full" />
                ) : (
                  n.username?.[0]?.toUpperCase()
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-200">
                  <NavLink to={`/profile/${n.username}`}>
                    <h1 className="font-bold text-[16px]">{n.username}</h1>
                  </NavLink>
                  <p className="text-gray-400">{n.message}</p>
                </p>
                <p className="text-xs text-blue-300 mt-1">
                  {formatTimeAgo(n.createdAt)}
                </p>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                {!n.read && (
                  <button
                    onClick={() => markAsRead(n._id)}
                    className="p-1.5 text-gray-500 hover:text-blue-400 transition-colors"
                    title="Mark as read"
                  >
                    <Check size={14} />
                  </button>
                )}
                <button
                  onClick={() => deleteNotification(n._id)}
                  className="p-1.5 text-gray-500 hover:text-red-400 transition-colors"
                  title="Delete"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="bg-black border-l border-gray-800 sticky top-0 h-screen overflow-y-auto thinks-scroll">
        <div className="px-6 py-4 border-b border-gray-800">
          <h2 className="text-white font-bold text-sm tracking-widest uppercase">
            Who to Follow
          </h2>
        </div>

        {suggestLoading ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-5 h-5 border-2 border-gray-600 border-t-white rounded-full animate-spin" />
          </div>
        ) : (
          <div className="flex flex-col gap-5 p-4">
            {suggestions.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                    {user.profilePicUrl ? (
                      <img
                        src={user.profilePicUrl}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      user.username?.[0]?.toUpperCase()
                    )}
                  </div>
                  <div>
                    <NavLink to={`/profile/${user.username}`}>
                      <h1 className="font-bold text-white text-sm">
                        {user.username}
                      </h1>
                    </NavLink>
                    {user.Profile?.profession && (
                      <p className="text-xs text-gray-400 capitalize">
                        {user.Profile.profession}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => toggleFollow(user.id)}
                  disabled={followLoading}
                  className={`px-3 py-1 rounded text-xs font-medium border transition-colors disabled:opacity-50 ${
                    followingUsers[user.id]
                      ? "bg-transparent border-gray-500 text-white hover:border-red-500 hover:text-red-400"
                      : "bg-white text-black border-white hover:bg-gray-200"
                  }`}
                >
                  {followingUsers[user.id] ? "Following" : "Follow"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default NotificationPage;
