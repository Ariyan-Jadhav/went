import { NavLink, useParams } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Zodiac } from "@/components/Zodiac";
import { useTwemoji } from "@/hooks/useTwemoji";
import Aurora from "@/components/Aurora";
import { SpinnerCustom } from "@/components/ui/spinner";
import Magnet from "@/components/Magnet";
import VariableProximity from "@/components/VariableProximity";
import { Heart, Repeat2 } from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useRef } from "react";
import { useDefaultOptions } from "@/components/di_global_context/Default";
import { useProfileOptions } from "@/components/di_global_context/ProfileP-SContext";
import { useFeedOptions } from "@/components/di_global_context/FeedE-FContext";
import { useSearch } from "@/components/di_global_context/SearchContextMusic";
import { useUserSearch } from "@/components/di_global_context/MainSearch";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

interface WentProfile {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  profilePicUrl: string | null;
  isBot: boolean;
  createdAt: string;
  updatedAt: string;

  likes: {
    id: string;
    user_id: string;
    interaction_id: string;
  }[];

  // Saved thinks
  saved_post: {
    id: string;
    user_id: string;
    post_id: string;
    savedAt: string;
  }[];

  followersCount: number;
  followingCount: number;

  followers: {
    id: string;
    username: string;
    profilePicUrl: string | null;
  }[];

  following: {
    id: string;
    username: string;
    profilePicUrl: string | null;
  }[];

  Profile: {
    id: string;
    user_id: string;
    bio: string | null;
    gender: string;
    profession: string;
    location: string | null;
    hobby: string[];
    birthday: string | null;
    createdAt: string;
    updatedAt: string;

    movies: {
      id: string;
      title: string;
      year: string;
      type: string;
      poster?: string;
    }[];

    tracks: {
      id: string;
      name: string;
      artist: string;
      image?: string;
    }[];

    albums: {
      id: string;
      name: string;
      image?: string;
    }[];

    artists: {
      id: string;
      name: string;
      image?: string;
    }[];
  } | null;
}

interface Think {
  _id: string;
  user_id: string;
  content: string;

  imageUrl: {
    url: string;
    publicId: string;
  }[];

  hashtags: string[];

  likesCount: number;
  commentsCount: number;
  rethinkCount: number;

  createdAt: string;
  updatedAt: string;

  username?: string;
  userImageUrl?: string;
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

export default function Profile() {
  const containerRef = useRef(null);
  const { getToken, userId } = useAuth();
  const { username } = useParams<{ username: string }>();
  const twemojiRef = useTwemoji();
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

  const { setOpenSearch } = useSearch();
  const { setIsOpen } = useUserSearch();

  const { setOpenProfileOptions, chooseProfileOptions } = useProfileOptions();
  const { setOpenFeedOptions, setGototop } = useFeedOptions();

  // ---------------- STATE ----------------
  const [profile, setProfile] = useState<WentProfile | null>(null);
  const [think, setThink] = useState<Think[]>([]);
  const [loading, setLoading] = useState(true);
  const [thinkLoading, setThinkLoading] = useState(false);
  const [suggestLoading, setSuggestLoading] = useState(false);
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [suggestions, setSuggestions] = useState<RandomUser[]>([]);
  const [rethink, setRethink] = useState<Record<string, boolean>>({});
  const [followLoading, setFollowLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [followingUsers, setFollowingUsers] = useState<Record<string, boolean>>(
    {},
  );
  const [lightbox, setLightbox] = useState<{
    urls: string[];
    index: number;
  } | null>(null);

  useEffect(() => {
    getProfile();
    getRandom();
    getThinks();
    setTextBox("WELCOME");
  }, [username]);

  useEffect(() => {
    const stored: string[] = JSON.parse(
      localStorage.getItem("followingUsers") || "[]",
    );
    const map = stored.reduce((acc, id) => ({ ...acc, [id]: true }), {});
    setFollowingUsers(map);
  }, []);

  useEffect(() => {
    if (!profile || !userId) return;
    const stored: string[] = JSON.parse(
      localStorage.getItem("followingUsers") || "[]",
    );
    setFollowingUsers((prev) => ({
      ...prev,
      [profile.id]: stored.includes(profile.id)
        ? true
        : profile.followers.some((f) => f.id === userId),
    }));
  }, [profile, userId]);

  useEffect(() => {
    getThinks();
  }, [chooseProfileOptions, username]);

  useEffect(() => {
    setFeed(false);
    setMessage(false);
    setNotification(false);
    setProfile1(true);
    setSearch(false);
    setUpload(false);
    setOpenFeedOptions(false);
    setGototop(false);
    setOpenSearch(false);
    setIsOpen(false);
  }, []);

  useEffect(() => {
    setOpenTextBox(true);
    setOpenProfileOptions(false);

    const timer = setTimeout(() => {
      setOpenTextBox(false);
      setOpenProfileOptions(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const getProfile = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/profile/${username}`, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      setProfile(res.data);
    } catch (err: any) {
      if (err.response?.status === 404) {
        setNotFound(true);
      } else {
        console.error(err);
      }
    } finally {
      setLoading(false);
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

  function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function SelectedMediaCard({
    image,
    title,
    subtitle,
    badge,
    imdbID,
  }: {
    image?: string;
    title: string;
    subtitle?: string;
    badge?: string;
    imdbID?: string;
  }) {
    const [imgFailed, setImgFailed] = useState(false);
    const hasImage = image && image !== "N/A" && !imgFailed;

    return (
      <div className="relative flex items-center gap-4 bg-zinc-900 border border-zinc-700/60 rounded-2xl p-4 group">
        <div className="shrink-0">
          {hasImage ? (
            <img
              src={image}
              alt={title}
              onError={() => setImgFailed(true)}
              className="w-14 h-14 rounded-xl object-cover"
            />
          ) : (
            <div className="w-14 h-14 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-600">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold truncate text-sm">{title}</p>
          {subtitle && (
            <p className="text-zinc-400 text-xs mt-0.5 truncate">{subtitle}</p>
          )}
          <div className="flex items-center gap-2 mt-1.5">
            {badge && (
              <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-blue-400/15 text-amber-400 border border-amber-400/20">
                {badge}
              </span>
            )}
            {imdbID && (
              <a
                href={`https://www.imdb.com/title/${imdbID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
              >
                IMDb ↗
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
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
      await axios.post(
        "/follow",
        { personality_id: targetId },
        { headers: { Authorization: `Bearer ${await getToken()}` } },
      );
    } catch (err) {
      setFollowingUsers((prev) => ({ ...prev, [targetId]: !newState }));
      const revert = newState
        ? stored.filter((id) => id !== targetId)
        : [...stored, targetId];
      localStorage.setItem("followingUsers", JSON.stringify(revert));
      console.error(err);
    } finally {
      setFollowLoading(false);
    }
  };

  const getThinks = async () => {
    try {
      setThinkLoading(true);

      const endpoint =
        chooseProfileOptions === "posted"
          ? "/think/userthink"
          : "/think/profilerepost";

      const thinks = await axios.post(
        endpoint,
        { username },
        {
          headers: { Authorization: `Bearer ${await getToken()}` },
        },
      );

      setThink(
        chooseProfileOptions === "posted"
          ? thinks.data.thinks
          : thinks.data.personalizedThinks,
      );
    } catch (err) {
      console.error(err);
    } finally {
      setThinkLoading(false);
    }
  };

  const getRandom = async () => {
    try {
      setSuggestLoading(true);
      const res = await axios.get("/profile/random", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      setSuggestions(res.data.users);
    } catch (err) {
      console.error(err);
    } finally {
      setSuggestLoading(false);
    }
  };

  const toggleLike = async (think: Think) => {
    const newState = toggleLikeToLocalStorage(think._id);

    setLiked((prev) => ({ ...prev, [think._id]: newState }));

    try {
      await axios.post(
        "like/think",
        { think_id: think._id },
        { headers: { Authorization: `Bearer ${await getToken()}` } },
      );
    } catch (err) {
      // Revert both state and localStorage if API fails
      toggleLikeToLocalStorage(think._id);
      setLiked((prev) => ({ ...prev, [think._id]: !newState }));
      console.error(err);
    }
  };

  const toggleRethink = async (think: Think) => {
    const newState = toggleRethinkToLocalStorage(think._id);

    setRethink((prev) => ({ ...prev, [think._id]: newState }));

    try {
      await axios.post(
        "think/rethink",
        { think_id: think._id },
        { headers: { Authorization: `Bearer ${await getToken()}` } },
      );
    } catch (err) {
      toggleRethinkToLocalStorage(think._id);
      setRethink((prev) => ({ ...prev, [think._id]: !newState }));
      console.error(err);
    }
  };

  const toggleRethinkToLocalStorage = (thinkId: string) => {
    const stored: string[] = JSON.parse(
      localStorage.getItem("rethinkThinks") || "[]",
    );

    const isRethinked = stored.includes(thinkId);

    const updated = isRethinked
      ? stored.filter((id) => id !== thinkId)
      : [...stored, thinkId];

    localStorage.setItem("rethinkThinks", JSON.stringify(updated));

    return !isRethinked;
  };

  const toggleLikeToLocalStorage = (thinkId: string) => {
    const stored: string[] = JSON.parse(
      localStorage.getItem("likedThinks") || "[]",
    );

    const isLiked = stored.includes(thinkId);

    const updated = isLiked
      ? stored.filter((id) => id !== thinkId) // unlike — remove it
      : [...stored, thinkId]; // like — add it

    localStorage.setItem("likedThinks", JSON.stringify(updated));

    return !isLiked; // returns the new liked state
  };

  const ThinkImageGrid = ({
    urls,
    onImageClick,
  }: {
    urls: string[];
    onImageClick: (index: number) => void;
  }) => {
    if (!urls.length) return null;

    const count = Math.min(urls.length, 4);
    const clipped = urls.slice(0, count);

    // 1 image — full width
    if (count === 1) {
      return (
        <div
          className="rounded-2xl overflow-hidden mt-3 cursor-pointer"
          onClick={() => onImageClick(0)}
        >
          <img
            src={clipped[0]}
            alt="image 1"
            className="w-full max-h-80 object-cover"
            loading="lazy"
          />
        </div>
      );
    }

    // 2 images — side by side
    if (count === 2) {
      return (
        <div className="grid grid-cols-2 gap-0.5 rounded-2xl overflow-hidden mt-3">
          {clipped.map((url, i) => (
            <div
              key={i}
              className="cursor-pointer overflow-hidden bg-gray-800"
              onClick={() => onImageClick(i)}
            >
              <img
                src={url}
                alt={`image ${i + 1}`}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      );
    }

    // 3 images — left tall, right two stacked
    if (count === 3) {
      return (
        <div
          className="grid grid-cols-2 gap-0.5 rounded-2xl overflow-hidden mt-3"
          style={{ height: "280px" }}
        >
          <div
            className="cursor-pointer overflow-hidden bg-gray-800 h-full"
            onClick={() => onImageClick(0)}
          >
            <img
              src={clipped[0]}
              alt="image 1"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="grid grid-rows-2 gap-0.5 h-full">
            {clipped.slice(1).map((url, i) => (
              <div
                key={i}
                className="cursor-pointer overflow-hidden bg-gray-800"
                onClick={() => onImageClick(i + 1)}
              >
                <img
                  src={url}
                  alt={`image ${i + 2}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      );
    }

    // 4 images — 2x2 grid
    return (
      <div className="grid grid-cols-2 gap-0.5 rounded-2xl overflow-hidden mt-3">
        {clipped.map((url, i) => (
          <div
            key={i}
            className="cursor-pointer overflow-hidden bg-gray-800"
            onClick={() => onImageClick(i)}
          >
            <img
              src={url}
              alt={`image ${i + 1}`}
              className="w-full h-40 object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    const stored: string[] = JSON.parse(
      localStorage.getItem("likedThinks") || "[]",
    );
    const likedMap = stored.reduce((acc, id) => ({ ...acc, [id]: true }), {});
    setLiked(likedMap);
  }, []);

  useEffect(() => {
    const likedStored: string[] = JSON.parse(
      localStorage.getItem("likedThinks") || "[]",
    );
    const rethinkStored: string[] = JSON.parse(
      localStorage.getItem("rethinkThinks") || "[]",
    );

    setLiked(likedStored.reduce((acc, id) => ({ ...acc, [id]: true }), {}));
    setRethink(rethinkStored.reduce((acc, id) => ({ ...acc, [id]: true }), {}));
  }, []);

  if (notFound) {
    return (
      <div className="h-screen bg-black flex flex-col items-center justify-center text-white">
        <p className="text-2xl font-bold">@{username}</p>
        <p className="text-gray-500 mt-2">This account doesn't exist</p>
      </div>
    );
  }
  return (
    <div
      ref={twemojiRef}
      className="grid h-screen grid-cols-[1.2fr_2fr_1.5fr] overflow-hidden"
    >
      {/* SUGGETIONS */}
      <div className="bg-mist-900 border-r-2 border border-gray-800">
        {suggestLoading && (
          <div className="h-screen text-white flex justify-center items-center">
            <SpinnerCustom />
          </div>
        )}
        {!loading && !suggestLoading && (
          <div className="bg-black text-white p-4 h-screen sticky top-0">
            <div className="w-full flex justify-center">
              <img src="/logo/white-went.png" className="w-[40%]" />
            </div>
            <h2 className="text-sm font-semibold text-gray-400 mb-4">
              People you may fall in love with
            </h2>

            <div className="flex flex-col gap-5">
              {suggestions.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between gap-2"
                >
                  {/* Avatar + Info */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-xs font-bold text-white">
                      {user.profilePicUrl ? (
                        <img
                          src={user.profilePicUrl}
                          className="rounded-full"
                        />
                      ) : (
                        user.username?.[0]?.toUpperCase()
                      )}
                    </div>
                    <div>
                      <NavLink to={`/profile/${user.username}`}>
                        <h1 className="font-bold">{user.username}</h1>
                      </NavLink>
                      {user.Profile?.profession && (
                        <p className="text-xs text-gray-400 capitalize">
                          {user.Profile.profession}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Follow Button */}
                  <div>
                    <button
                      onClick={() => toggleFollow(user.id)}
                      disabled={followLoading}
                      className={`px-4 py-1 rounded text-sm font-medium border transition-colors disabled:opacity-50 ${
                        followingUsers[user.id]
                          ? "bg-transparent border-gray-500 text-white hover:border-red-500 hover:text-red-400"
                          : "bg-white text-black border-white hover:bg-gray-200"
                      }`}
                    >
                      {followingUsers[user.id] ? "Following" : "Follow"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* PROFILE */}
      <div ref={containerRef} className="bg-black text-white z-20 relative">
        {loading && (
          <div className="h-screen z-50 relative flex justify-center items-center">
            <SpinnerCustom />
          </div>
        )}
        <div className="absolute inset-0 z-0">
          <Aurora
            colorStops={["#579BB1", "#FAF3F0", "#0F2C59"]}
            blend={999}
            amplitude={3}
            speed={1}
          />
        </div>
        {/* LOADING */}

        {/* MAIN */}
        {!loading && (
          <div className="mt-20 relative z-10">
            {/* BASIC INFO */}
            <div className="">
              {profile && (
                <div className="flex items-center gap-10">
                  <div className="flex items-center ml-5">
                    {profile.profilePicUrl ? (
                      <img
                        className="h-25 rounded-full"
                        src={profile.profilePicUrl}
                      />
                    ) : (
                      <img
                        className="h-25"
                        src={
                          profile.Profile?.gender === "male"
                            ? "/profile-pic/male.png"
                            : "/profile-pic/female.png"
                        }
                      />
                    )}
                    <div className="ml-2">
                      <div
                        className={`flex items-baseline-last ${profile.isBot ? "text-amber-400" : ""}`}
                      >
                        <p className="font-semibold text-lg">
                          {profile.isBot
                            ? "Breathing Bot"
                            : `${profile.firstName} ${profile.lastName}`}
                        </p>
                        <h2 className=" text-sm ml-1 font-light text-amber-50">
                          {profile.Profile?.gender === "male" ? (
                            <p>he/him</p>
                          ) : (
                            <p>she/her</p>
                          )}
                        </h2>
                      </div>
                      <h1 className="font-bold">@{profile.username}</h1>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 mt-1">
                    <div className="flex gap-2 border-b">
                      <div className="flex items-baseline-last gap-1 ">
                        <p className="font-bold text-[17px]">
                          {profile.followingCount}
                        </p>
                        <p className="text-xs text-mist-300">FOLLOWERS</p>
                      </div>
                      <div className="flex items-baseline-last gap-1">
                        <p className="font-bold text-[17px]">
                          {profile.followersCount}
                        </p>
                        <p className="text-xs text-mist-300">FOLLOWING</p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      {userId !== profile.id ? (
                        <button
                          onClick={() => toggleFollow(profile.id)}
                          disabled={followLoading}
                          className={`mt-2 w-full px-4 py-1 rounded text-sm font-medium border transition-colors disabled:opacity-50 ${
                            followingUsers[profile.id]
                              ? "bg-transparent border-gray-500 text-white hover:border-red-500 hover:text-red-400"
                              : "bg-white text-black border-white hover:bg-gray-200"
                          }`}
                        >
                          {followingUsers[profile.id] ? "Following" : "Follow"}
                        </button>
                      ) : (
                        <div>
                          <NavLink to="/createidentity">
                            <button
                              className={`mt-2 w-full px-4 py-1 rounded text-sm font-medium border transition-colors disabled:opacity-50 bg-transparent border-gray-500 text-white hover:bg-white hover:text-black`}
                            >
                              Edit Account
                            </button>
                          </NavLink>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* SHOWOFF */}
            {profile && (
              <div className="mt-1 cursor-default relative z-30 ml-5">
                <div className="flex gap-1">
                  <p className="text-blue-800 font-extrabold">|</p>
                  <VariableProximity
                    label={profile.Profile?.bio as string}
                    className={"variable-proximity-demo"}
                    fromFontVariationSettings="'wght' 400, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={containerRef}
                    radius={100}
                    falloff="linear"
                  />
                </div>
                <div className="mt-2">
                  <ul className="flex text-sm gap-2 text-mist-300">
                    <HoverCard openDelay={0} closeDelay={100}>
                      <HoverCardTrigger>
                        {" "}
                        <li className="outline py-1 px-2 rounded-full">
                          {profile?.Profile?.birthday
                            ? Zodiac(new Date(profile.Profile.birthday))
                            : "—"}{" "}
                        </li>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-30 text-xs py-1 px-1 text-center rounded-xs bg-black text-white font-semibold">
                        {profile?.Profile?.birthday
                          ? new Date(
                              profile.Profile.birthday,
                            ).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })
                          : "—"}
                      </HoverCardContent>
                    </HoverCard>
                    <li className="outline py-1 px-2 rounded-full capitalize">
                      {profile?.Profile?.profession}
                    </li>
                    <li className="outline py-1 px-2 rounded-full capitalize">
                      {profile?.Profile?.location}
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}
        {!loading && <div className="h-px border border-gray-800 my-2 mt-4" />}

        {/* Selected media display */}
        {!loading && (
          <div className="mt-5 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-mist-700 border bg-[rgb(255,255,255,0.2)]  p-4 w-[95%] rounded-sm">
              {profile?.Profile && (
                <SelectedMediaCard
                  image={profile?.Profile?.artists[0]?.image}
                  title={profile?.Profile?.artists[0]?.name}
                  badge="Artist"
                />
              )}
              {profile?.Profile && (
                <SelectedMediaCard
                  image={profile?.Profile?.albums[0]?.image}
                  title={profile?.Profile?.albums[0]?.name}
                  badge="Album"
                />
              )}
              {profile?.Profile && (
                <SelectedMediaCard
                  image={profile?.Profile?.tracks[0]?.image}
                  title={profile?.Profile?.tracks[0]?.name}
                  subtitle={profile?.Profile?.tracks[0]?.artist}
                  badge="Track"
                />
              )}
              {profile?.Profile && (
                <SelectedMediaCard
                  image={profile?.Profile?.movies[0]?.poster}
                  title={profile?.Profile?.movies[0]?.title}
                  subtitle={profile?.Profile?.movies[0]?.year}
                  badge={capitalize(profile?.Profile?.movies[0]?.type)}
                />
              )}
            </div>
          </div>
        )}
        {!loading && (
          <div className="mt-5 z-10 relative border-mist-700 w-[95%] mx-auto">
            <div className="w-full rounded-sm flex border-mist-800 border bg-[rgb(255,255,255,0.1)] justify-start py-5 overflow-hidden">
              {profile && (
                <div className="flex flex-wrap gap-2 text-sm mx-2">
                  {profile.Profile?.hobby.map((hobby) => (
                    <Magnet
                      key={hobby}
                      padding={100}
                      disabled={false}
                      magnetStrength={100}
                    >
                      <p className="border px-1.5 py-1 rounded-sm">{hobby}</p>
                    </Magnet>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* THINK */}
      <div className="bg-black border-x-2 border border-gray-800 text-white h-screen overflow-y-auto thinks-scroll">
        {thinkLoading && (
          <div className="h-screen flex justify-center items-center">
            <SpinnerCustom />
          </div>
        )}
        {!loading && !thinkLoading && (
          <div>
            {think &&
              think.map((think, i) => (
                <div
                  key={i}
                  className="border-y border-gray-800 px-4 py-4 text-white hover:bg-gray-900 transition"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                      {think.userImageUrl ? (
                        <img
                          src={think.userImageUrl}
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : chooseProfileOptions === "posted" ? (
                        profile?.profilePicUrl ? (
                          <img
                            src={profile.profilePicUrl}
                            className="w-full h-full object-cover rounded-full"
                          />
                        ) : (
                          username?.[0]?.toUpperCase()
                        )
                      ) : (
                        think.username?.[0]?.toUpperCase()
                      )}
                    </div>
                    <NavLink
                      to={
                        chooseProfileOptions === "posted"
                          ? `/profile/${username}`
                          : `/profile/${think.username}`
                      }
                    >
                      <h1 className="font-bold text-[16px]">
                        {chooseProfileOptions === "posted"
                          ? username
                          : think.username}
                      </h1>
                    </NavLink>
                    <span className="text-gray-500 text-sm">
                      {formatDate(think.createdAt)}
                    </span>
                  </div>
                  <p className="mt-1 text-gray-300 pl-10">
                    {renderContent(think.content)}
                  </p>
                  {think.imageUrl && think.imageUrl.length > 0 && (
                    <div className="pl-10 mt-2">
                      <ThinkImageGrid
                        urls={think.imageUrl.map((img) => img.url)}
                        onImageClick={(index) =>
                          setLightbox({
                            urls: think.imageUrl!.map((img) => img.url),
                            index,
                          })
                        }
                      />
                    </div>
                  )}
                  <div className="flex gap-8 mt-4 pl-10">
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
        )}
      </div>
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          {/* Prev button */}
          {lightbox.urls.length > 1 && (
            <button
              className="absolute left-4 text-white text-3xl px-3 py-1 hover:text-gray-300 z-10"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((prev) =>
                  prev
                    ? {
                        ...prev,
                        index:
                          (prev.index - 1 + prev.urls.length) %
                          prev.urls.length,
                      }
                    : null,
                );
              }}
            >
              ‹
            </button>
          )}

          {/* Image */}
          <img
            src={lightbox.urls[lightbox.index]}
            alt="Full view"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next button */}
          {lightbox.urls.length > 1 && (
            <button
              className="absolute right-4 text-white text-3xl px-3 py-1 hover:text-gray-300 z-10"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((prev) =>
                  prev
                    ? { ...prev, index: (prev.index + 1) % prev.urls.length }
                    : null,
                );
              }}
            >
              ›
            </button>
          )}

          {/* Counter */}
          {lightbox.urls.length > 1 && (
            <p className="absolute bottom-4 text-gray-400 text-sm">
              {lightbox.index + 1} / {lightbox.urls.length}
            </p>
          )}

          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-xl hover:text-gray-300"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
