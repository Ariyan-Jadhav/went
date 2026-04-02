import axios from "axios";
import { useEffect, useState } from "react";
import { Heart, MessageCircle, Repeat2, X } from "lucide-react";
import { useAuth } from "@clerk/clerk-react";
import { useFeedOptions } from "@/components/di_global_context/FeedE-FContext";
import { useDefaultOptions } from "@/components/di_global_context/default";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// interface //
interface Think {
  _id: string;
  content: string;
  createdAt?: string;
  user_id: string;
  commentsCount: number;
  rethinkcount: number;
  imageUrl?: string;
  username: string;
}

interface Comment {
  _id: string;
  user_id: string;
  content: string;
  username: string;
  createdAt?: string;
  interaction_id: string;
}

// main-function //
function Feed() {
  // ----------------------------------------------- use-states ----------------------------------------------- //

  const { setOpenFeedOptions, setGototop } = useFeedOptions();
  const {
    setFeed,
    setMessage,
    setNotification,
    setProfile,
    setSearch,
    setUpload,
  } = useDefaultOptions();

  const [loading, setLoading] = useState(false);
  const [thinks, setThinks] = useState<Think[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [comments_count, setComments_count] = useState<number>(0);
  const [caughtUp, setCaughtUp] = useState(false);
  const [selectedThink, setSelectedThink] = useState<Think | null>(null);
  const [newComment, setNewComment] = useState("");
  const [commentLoading, setCommentLoading] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [skip, setSkip] = useState<number>(() => {
    return Number(localStorage.getItem("skip") || 0);
  });

  // ----------------------------------------------- use-effects ----------------------------------------------- //

  // handelInfiniteScroll //
  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, [loading, caughtUp]);

  // infinite scroll //
  useEffect(() => {
    getThinkData();
  }, [skip]);

  // toggle OpenFeedOptions //
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (window.scrollY > 30) {
          setOpenFeedOptions(false);
          setShowBackToTop(true);
        } else {
          setOpenFeedOptions(true);
          setShowBackToTop(false);
        }
      }, 300); // adjust delay
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer); // cleanup the ghost timer on unmount
    };
  }, []);

  // starting OpenFeedOptions open //
  useEffect(() => {
    setOpenFeedOptions(true);
  }, []);

  // save skip in real time //
  useEffect(() => {
    localStorage.setItem("skip", String(skip));
  }, [skip]);

  //go-to-top //
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setOpenFeedOptions(false);
        setShowBackToTop(true);
      } else {
        setOpenFeedOptions(true);
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { getToken } = useAuth();
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  // set gototop

  useEffect(() => {
    setGototop(true);
    setFeed(true);
    setMessage(false);
    setNotification(false);
    setProfile(false);
    setSearch(false);
    setUpload(false);
  }, []);

  const getThinkData = async () => {
    try {
      setLoading(true);

      const storedIds: string[] = JSON.parse(
        localStorage.getItem("seenIds") || "[]",
      );
      const storedIdsSet = new Set(storedIds);

      const res = await axios.post(
        "/feed/explore",
        { skip },
        { headers: { Authorization: `Bearer ${await getToken()}` } },
      );

      const newThinks: Think[] = res.data.personalizedThinks;
      const filtered = newThinks.filter((t) => !storedIdsSet.has(t._id));

      if (filtered.length === 0) {
        setSkip((prev) => prev + 5);
        return;
      }

      const updatedIds = [...storedIds, ...filtered.map((e) => e._id)];
      try {
        localStorage.setItem(
          "seenIds",
          JSON.stringify(updatedIds.slice(-6000)),
        );
      } catch (err) {
        if (err instanceof DOMException && err.name === "QuotaExceededError")
          localStorage.setItem(
            "seenIds",
            JSON.stringify(updatedIds.slice(-2500)),
          );
      }

      setThinks((prev) => (skip === 0 ? filtered : [...prev, ...filtered]));
    } catch (err: any) {
      if (err.response?.status === 500) {
        setCaughtUp(true);
        return;
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const openComment = async (think: Think) => {
    setSelectedThink(think);
    setComments([]);
    try {
      setCommentLoading(true);
      const res = await axios.post(
        "comment/get",
        { think_id: think._id },
        { headers: { Authorization: `Bearer ${await getToken()}` } },
      );
      setComments(res.data.personalizedComments);
      setComments_count(res.data.count);
    } catch (err) {
      console.error(err);
    } finally {
      setCommentLoading(false);
    }
  };

  const postComment = async () => {
    if (!newComment.trim() || !selectedThink) return;
    try {
      await axios.post(
        "/feed/comment/create",
        { think_id: selectedThink._id, content: newComment },
        { headers: { Authorization: `Bearer ${await getToken()}` } },
      );
      setNewComment("");
      // refetch comments
      await openComment(selectedThink);
    } catch (err) {
      console.error(err);
    }
  };

  const handelInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      if (!loading && !caughtUp) setSkip((prev) => prev + 5);
    }
  };

  return (
    <div className="min-h-screen bg-[rgb(0,0,0)] grid grid-cols-[1.5fr_1.9fr_1.5fr]">
      {/* Left sidebar */}
      <div className="bg-gray-900">
        <div>
          <button onClick={() => setOpenFeedOptions(true)}>helulu</button>
        </div>
        {showBackToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bg-white h-10 text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition z-50"
          >
            HELLLOO
          </button>
        )}
      </div>

      {/* Main feed */}
      <div className="border-x border-gray-800 mt-22">
        {loading && thinks.length === 0 && (
          <p className="text-white text-center mt-6">Loading...</p>
        )}

        {!loading && thinks.length === 0 && !caughtUp && (
          <p className="text-white text-center p-4 mt-20">
            No thinks yet. Start thinking!
          </p>
        )}

        {/* Posts */}
        <div>
          {thinks.map((think, i) => (
            <div
              key={i}
              className={`border-y border-gray-800 px-6 py-4 text-white hover:bg-gray-900 transition cursor-pointer ${
                selectedThink?._id === think._id ? "bg-gray-900" : ""
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-teal-400 to-cyan-600 flex items-center justify-center font-bold text-xs shrink-0">
                  {think.username?.[0]?.toUpperCase()}
                </div>
                <h1 className="font-bold">{think.username}</h1>
                <span className="text-gray-500 text-sm">
                  {formatDate(think.createdAt)}
                </span>
              </div>

              {/* Content */}
              <p className="mt-1 text-gray-300 pl-10">{think.content}</p>

              {/* Actions */}
              <div className="flex gap-8 mt-4 pl-10">
                <button
                  onClick={() => openComment(think)}
                  className="flex items-center gap-1.5 text-gray-500 hover:text-blue-400 transition text-sm"
                >
                  <MessageCircle size={16} />
                  <span>{think.commentsCount}</span>
                </button>

                <button className="flex items-center gap-1.5 text-gray-500 hover:text-green-400 transition text-sm">
                  <Repeat2 size={16} />
                  <span>{think.rethinkcount}</span>
                </button>

                <button className="flex items-center gap-1.5 text-gray-500 hover:text-pink-500 transition text-sm">
                  <Heart size={16} />
                  <span>0</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {caughtUp && (
          <p className="text-gray-500 text-center py-8 text-sm">
            You've caught up for today! Touch grass. 🌿
          </p>
        )}

        {loading && thinks.length > 0 && (
          <p className="text-gray-500 text-center py-4 text-sm">
            Loading more...
          </p>
        )}
      </div>

      {/* Comments sidebar */}
      <div className="border-l border-gray-800 text-white flex flex-col sticky top-0 h-screen">
        {!selectedThink ? (
          <div className="flex items-center justify-center h-full text-gray-600 text-sm px-4 text-center">
            Click the comment icon on any think to view comments
          </div>
        ) : (
          <>
            {/* Sidebar header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 shrink-0">
              <div>
                <p className="font-bold text-sm">{selectedThink.username}</p>
                <p className="text-gray-500 text-xs">
                  {comments_count} comments
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedThink(null);
                  setComments([]);
                }}
                className="text-gray-500 hover:text-white transition"
              >
                <X size={16} />
              </button>
            </div>

            {/* Comments list */}
            <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-4">
              {commentLoading && (
                <p className="text-gray-500 text-sm text-center mt-4">
                  Loading comments...
                </p>
              )}

              {!commentLoading && comments.length === 0 && (
                <p className="text-gray-600 text-sm text-center mt-4">
                  No comments yet. Be the first!
                </p>
              )}

              {comments.map((comment, i) => (
                <div key={i} className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-linear-to-br from-purple-400 to-pink-500 flex items-center justify-center font-bold text-xs shrink-0">
                    {comment.username?.[0]?.toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">
                        {comment.username}
                      </span>
                      <span className="text-gray-600 text-xs">
                        {formatDate(comment.createdAt)}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mt-0.5">
                      {comment.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Comment input */}
            <div className="border-t border-gray-800 px-4 py-3 shrink-0">
              <div className="flex gap-2 items-end">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      postComment();
                    }
                  }}
                  placeholder="Write a comment..."
                  rows={2}
                  className="flex-1 bg-gray-800 text-white text-sm rounded-xl px-3 py-2 resize-none outline-none placeholder-gray-600 border border-gray-700 focus:border-gray-500 transition"
                />
                <button
                  onClick={postComment}
                  disabled={!newComment.trim()}
                  className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-xl hover:bg-gray-200 transition disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
                >
                  Post
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Feed;
