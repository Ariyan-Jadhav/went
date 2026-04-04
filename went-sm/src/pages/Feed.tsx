import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Heart, MessageCircle, Repeat2 } from "lucide-react";
import { useAuth } from "@clerk/clerk-react";
import { useFeedOptions } from "@/components/di_global_context/FeedE-FContext";
import { useDefaultOptions } from "@/components/di_global_context/default";
import { useTwemoji } from "@/hooks/useTwemoji";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

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

function Feed() {
  const { setOpenFeedOptions, setGototop, setScrollToTop, chooseFeedOptions } =
    useFeedOptions();

  const {
    setFeed,
    setMessage,
    setNotification,
    setProfile1,
    setSearch,
    setUpload,
  } = useDefaultOptions();

  const { getToken, userId } = useAuth();
  const twemojiRef = useTwemoji();

  const [loading, setLoading] = useState(false);
  const [showSkeletons, setShowSkeletons] = useState(false); // separate skeleton visibility
  const skeletonTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ---------------- STATE ----------------
  const [thinks, setThinks] = useState<Think[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [comments_count, setComments_count] = useState<number>(0);
  const [caughtUp, setCaughtUp] = useState(false);
  const [selectedThink, setSelectedThink] = useState<Think | null>(null);
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [rethink, setRethink] = useState<Record<string, boolean>>({});
  const [newComment, setNewComment] = useState("");
  const [commentLoading, setCommentLoading] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");
  const [skip, setSkip] = useState<number>(() => {
    return Number(localStorage.getItem("skip") || 0);
  });

  // ---------------- SKELETON ----------------
  const SkeletonPost = () => (
    <div className="border-y border-gray-800 px-6 py-4 animate-pulse">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full bg-gray-700" />
        <div className="h-3 w-24 bg-gray-700 rounded" />
        <div className="h-3 w-12 bg-gray-800 rounded" />
      </div>
      <div className="pl-10 space-y-2">
        <div className="h-3 bg-gray-700 rounded w-3/4" />
        <div className="h-3 bg-gray-700 rounded w-1/2" />
      </div>
      <div className="flex gap-8 mt-4 pl-10">
        <div className="h-3 w-10 bg-gray-700 rounded" />
        <div className="h-3 w-10 bg-gray-700 rounded" />
        <div className="h-3 w-10 bg-gray-700 rounded" />
      </div>
    </div>
  );

  // ---------------- EFFECTS ----------------
  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, [loading, caughtUp]);

  useEffect(() => {
    getThinkData();
  }, [skip, chooseFeedOptions]);

  useEffect(() => {
    localStorage.setItem("skip", String(skip));
  }, [skip]);

  useEffect(() => {
    setOpenFeedOptions(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setOpenFeedOptions(false);
      } else {
        setOpenFeedOptions(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setGototop(true);
    setFeed(true);
    setMessage(false);
    setNotification(false);
    setProfile1(false);
    setSearch(false);
    setUpload(false);
  }, []);

  useEffect(() => {
    const handler = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    setScrollToTop(handler);
  }, []);

  useEffect(() => {
    setThinks([]);
    setCaughtUp(false);
    setSkip(0);
    localStorage.setItem("skip", "0");
  }, [chooseFeedOptions]);

  // Cleanup skeleton timer on unmount
  useEffect(() => {
    return () => {
      if (skeletonTimerRef.current) clearTimeout(skeletonTimerRef.current);
    };
  }, []);

  // ---------------- HELPERS ----------------
  const startLoading = () => {
    setLoading(true);
    setShowSkeletons(true);
  };

  const stopLoading = (startTime: number, minMs = 800) => {
    const elapsed = Date.now() - startTime;
    const wait = Math.max(0, minMs - elapsed);

    if (skeletonTimerRef.current) clearTimeout(skeletonTimerRef.current);

    skeletonTimerRef.current = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowSkeletons(false), 300);
    }, wait);
  };

  // ---------------- FUNCTIONS ----------------
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const getThinkData = async () => {
    try {
      startLoading();
      const startTime = Date.now();

      const storedIds: string[] = JSON.parse(
        localStorage.getItem("seenIds") || "[]",
      );
      const storedIdsSet = new Set(storedIds);

      const endpoint =
        chooseFeedOptions === "following" ? "/feed/following" : "/feed/explore";

      const res = await axios.post(
        endpoint,
        { skip },
        { headers: { Authorization: `Bearer ${await getToken()}` } },
      );

      const newThinks: Think[] = res.data.personalizedThinks;
      const isEnd = res.data.isEnd;

      if (isEnd) {
        setCaughtUp(true);
        stopLoading(startTime);
        return;
      }

      const filtered = newThinks.filter((t) => !storedIdsSet.has(t._id));

      if (filtered.length === 0) {
        stopLoading(startTime);
        setSkip((prev) => prev + 5);
        return;
      }

      const updatedIds = [...storedIds, ...filtered.map((e) => e._id)];
      localStorage.setItem("seenIds", JSON.stringify(updatedIds.slice(-6000)));

      setThinks((prev) => (skip === 0 ? filtered : [...prev, ...filtered]));

      stopLoading(startTime);
    } catch (err: any) {
      if (err.response?.status === 500) {
        setCaughtUp(true);
      } else {
        console.error(err);
      }
      setLoading(false);
      setShowSkeletons(false);
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

  const handelInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      if (!loading && !caughtUp) setSkip((prev) => prev + 5);
    }
  };

  const toggleLike = async (think: Think) => {
    setLiked((prev) => ({
      ...prev,
      [think._id]: !prev[think._id],
    }));
    try {
      const res = await axios.post(
        "like/think",
        { think_id: think._id },
        { headers: { Authorization: `Bearer ${await getToken()}` } },
      );
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  const postComment = async () => {
    if (!newComment.trim() || !selectedThink) return;
    try {
      await axios.post(
        "/comment/create",
        { interaction_id: selectedThink._id, content: newComment },
        { headers: { Authorization: `Bearer ${await getToken()}` } },
      );
      setNewComment("");
      await openComment(selectedThink);
    } catch (err) {
      console.error(err);
    }
  };

  const editComment = async (comment_id: string) => {
    if (!editContent.trim()) return;
    try {
      await axios.post(
        "comment/update",
        { comment_id, content: editContent },
        { headers: { Authorization: `Bearer ${await getToken()}` } },
      );
      setEditingCommentId(null);
      setEditContent("");
      if (selectedThink) await openComment(selectedThink);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteComment = async (comment_id: string) => {
    try {
      await axios.post(
        "comment/delete",
        { comment_id },
        { headers: { Authorization: `Bearer ${await getToken()}` } },
      );
      if (selectedThink) await openComment(selectedThink);
    } catch (err) {
      console.error(err);
    }
  };

  const toggleRethink = async (think: Think) => {
    setRethink((prev) => ({
      ...prev,
      [think._id]: !prev[think._id],
    }));
    try {
      const res = await axios.post(
        "think/rethink",
        { think_id: think._id },
        { headers: { Authorization: `Bearer ${await getToken()}` } },
      );
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  // ---------------- UI ----------------

  const isInitialLoad = showSkeletons && thinks.length === 0;
  const isLoadingMore = showSkeletons && thinks.length > 0;

  return (
    <div
      ref={twemojiRef}
      className="min-h-screen bg-black grid grid-cols-[1.5fr_1.9fr_1.5fr]"
    >
      <div className="bg-gray-900" />

      <div className="border-x border-gray-800 mt-22">
        {/* Initial full-page skeleton — fades out smoothly */}
        <div
          className="transition-opacity duration-300"
          style={{ opacity: isInitialLoad ? 1 : 0, pointerEvents: "none" }}
        >
          {isInitialLoad &&
            [...Array(5)].map((_, i) => <SkeletonPost key={i} />)}
        </div>

        {/* Posts — fade in once loaded */}
        <div
          className="transition-opacity duration-300"
          style={{ opacity: isInitialLoad ? 0 : 1 }}
        >
          {thinks.map((think, i) => (
            <div
              key={i}
              className="border-y border-gray-800 px-6 py-4 text-white hover:bg-gray-900 transition"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-xs font-bold text-white">
                  {think.username?.[0]?.toUpperCase()}
                </div>
                <h1 className="font-bold">{think.username}</h1>
                <span className="text-gray-500 text-sm">
                  {formatDate(think.createdAt)}
                </span>
              </div>

              <p className="mt-1 text-gray-300 pl-10">{think.content}</p>

              <div className="flex gap-8 mt-4 pl-10">
                <button
                  onClick={() => openComment(think)}
                  className="flex items-center cursor-pointer gap-1 text-gray-500 hover:text-blue-400 text-sm transition-colors"
                >
                  <MessageCircle size={16} />
                  <span>{think.commentsCount}</span>
                </button>

                <button
                  onClick={() => toggleRethink(think)}
                  className={`flex cursor-pointer items-center gap-1 text-sm transition-colors
                    ${
                      rethink[think._id]
                        ? "text-green-400"
                        : "text-gray-500 hover:text-green-400 "
                    }
                    `}
                >
                  <Repeat2 size={16} />
                  <span>Rethink</span>
                </button>

                <button
                  onClick={() => toggleLike(think)}
                  className={`flex cursor-pointer items-center gap-1 text-sm transition-colors ${
                    liked[think._id]
                      ? "text-pink-500"
                      : "text-gray-500 hover:text-pink-500"
                  }`}
                >
                  <Heart
                    size={16}
                    className={liked[think._id] ? "fill-pink-500" : ""}
                  />
                  <span>Like</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load-more skeleton at bottom — smooth fade */}
        <div
          className="transition-opacity duration-300"
          style={{ opacity: isLoadingMore ? 1 : 0, pointerEvents: "none" }}
        >
          {isLoadingMore &&
            [...Array(2)].map((_, i) => <SkeletonPost key={i} />)}
        </div>

        {caughtUp && (
          <p className="text-center text-gray-600 text-sm py-8">
            You're all caught up 🎉
          </p>
        )}
      </div>

      {/* Comments Panel */}
      <div className="border-l border-gray-800 text-white flex flex-col h-screen sticky top-0">
        {!selectedThink ? (
          <div className="flex items-center justify-center h-full text-gray-600 text-sm">
            Click a post to view comments
          </div>
        ) : (
          <>
            <div className="px-4 py-3 border-b border-gray-800">
              <p className="font-bold">{selectedThink.username}</p>
              <p className="text-gray-500 text-xs">{comments_count} comments</p>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-3">
              {commentLoading ? (
                <div className="space-y-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex gap-2 animate-pulse">
                      <div className="w-7 h-7 bg-gray-700 rounded-full" />
                      <div className="flex-1 space-y-2">
                        <div className="h-3 bg-gray-700 w-24 rounded" />
                        <div className="h-3 bg-gray-800 w-3/4 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                comments.map((comment, i) => {
                  const isOwner = comment.user_id === userId; // from useAuth()
                  const isEditing = editingCommentId === comment._id;

                  return (
                    <div key={i} className="flex gap-2 mb-4">
                      <div className="w-7 h-7 bg-blue-800 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                        {comment.username?.[0]?.toUpperCase()}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold">
                            {comment.username}
                            {isOwner && (
                              <span className="ml-2 text-xs text-blue-400">
                                you
                              </span>
                            )}
                          </p>

                          {/* Edit/Delete — only visible to owner */}
                          {isOwner && !isEditing && (
                            <div className="flex gap-2 text-xs text-gray-500">
                              <button
                                onClick={() => {
                                  setEditingCommentId(comment._id);
                                  setEditContent(comment.content);
                                }}
                                className="hover:text-blue-400 transition-colors"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => deleteComment(comment._id)}
                                className="hover:text-red-400 transition-colors"
                              >
                                Delete
                              </button>
                            </div>
                          )}
                        </div>

                        {isEditing ? (
                          <div className="flex gap-2 mt-1">
                            <input
                              value={editContent}
                              onChange={(e) => setEditContent(e.target.value)}
                              onKeyDown={(e) =>
                                e.key === "Enter" && editComment(comment._id)
                              }
                              className="flex-1 bg-gray-900 text-white text-sm rounded-full px-3 py-1 outline-none border border-gray-700 focus:border-gray-500 transition-colors"
                            />
                            <button
                              onClick={() => editComment(comment._id)}
                              className="text-xs text-blue-400 hover:text-blue-300"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => setEditingCommentId(null)}
                              className="text-xs text-gray-500 hover:text-gray-300"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <p className="text-gray-300 text-sm">
                            {comment.content}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Comment Input */}
            <div className="px-4 py-3 border-t border-gray-800 flex gap-2">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && postComment()}
                placeholder="Add a comment..."
                className="flex-1 bg-gray-900 text-white text-sm rounded-full px-4 py-2 outline-none border border-gray-700 focus:border-gray-500 transition-colors"
              />
              <button
                onClick={postComment}
                disabled={!newComment.trim()}
                className="text-sm text-blue-400 hover:text-blue-300 disabled:opacity-30 transition-colors"
              >
                Post
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Feed;
