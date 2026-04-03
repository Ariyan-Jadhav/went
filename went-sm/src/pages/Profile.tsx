import { useParams } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Zodiac } from "@/components/Zodiac";
import { useTwemoji } from "@/hooks/useTwemoji";
import Aurora from "@/components/Aurora";
import { Pin } from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import TiltedCard from "@/components/TiltedCard";

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
    tracks: { id: string; name: string; artist: string; image?: string }[];
    albums: { id: string; name: string; image?: string }[];
    artists: { id: string; name: string; image?: string }[];
  } | null;
}
export default function Profile() {
  const { getToken } = useAuth();
  const twemojiRef = useTwemoji();

  // ---------------- STATE ----------------
  const [profile, setProfile] = useState<WentProfile | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/profile/${username}`, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      setProfile(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const { username } = useParams<{ username: string }>();
  return (
    <div ref={twemojiRef} className="grid min-h-screen grid-cols-[2fr_1fr]">
      {/* PROFILE */}

      <div className="bg-black text-white z-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Aurora
            colorStops={["#7cff67", "#B19EEF", "#5227FF"]}
            blend={99}
            amplitude={1.0}
            speed={1}
          />
        </div>
        {/* LOADING */}
        <div>{loading && <p>Loading</p>}</div>
        {/* MAIN */}
        <div className="ml-5 mt-5 relative z-10">
          {/* BASIC INFO */}
          <div>
            {profile && (
              <div>
                <div className="flex items-center">
                  {profile.profilePicUrl ? (
                    <img className="h-25" src={profile.profilePicUrl} />
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
                  <div className=" ml-2">
                    <div className="flex items-baseline-last">
                      <h1 className="text-lg uppercase">Lavanya Moore</h1>
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
              </div>
            )}
          </div>
          {/* SHOWOFF */}
          {profile && (
            <div className="mt-1 cursor-default">
              <div className="flex gap-1">
                <p className="text-blue-800 font-extrabold">|</p>{" "}
                {profile?.Profile?.bio}
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
                        ? new Date(profile.Profile.birthday).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            },
                          )
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
              <div>{profile.Profile?.hobby.map((hobby) => `${hobby} `)}</div>
            </div>
          )}
        </div>
        {/* MEDIA */}
        <div className=" ml-5 mt-5 z-10 relative border-mist-700 flex flex-col w-[75%]">
          <div className="ml-2 flex items-center">
            <Pin className="h-5" />
            <h1>Pins</h1>
          </div>
          <div className="rounded-sm border flex bg-[rgb(255,255,255,0.2)] justify-around py-5 overflow-hidden">
            <div className="flex flex-col items-center gap-1">
              <TiltedCard
                imageSrc={profile?.Profile?.movies[0]?.poster}
                altText={profile?.Profile?.movies[0].title}
                captionText={profile?.Profile?.movies[0].title}
                containerHeight="200px"
                containerWidth="150px"
                imageHeight="200px"
                imageWidth="150px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
              />
              <h1 className="text-sm">FILM</h1>
            </div>
            <div className="flex flex-col items-center gap-1">
              <TiltedCard
                imageSrc={profile?.Profile?.artists[0].image}
                altText={profile?.Profile?.artists[0].name}
                captionText={profile?.Profile?.artists[0].name}
                containerHeight="200px"
                containerWidth="150px"
                imageHeight="200px"
                imageWidth="150px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
              />
              <h1 className="text-sm">ARTIST</h1>
            </div>
            <div className="flex flex-col items-center gap-1">
              <TiltedCard
                imageSrc={profile?.Profile?.tracks[0].image}
                altText={profile?.Profile?.tracks[0].name}
                captionText={profile?.Profile?.tracks[0].name}
                containerHeight="200px"
                containerWidth="150px"
                imageHeight="200px"
                imageWidth="150px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
              />
              <h1 className="text-sm">TRACK</h1>
            </div>
            <div className="flex flex-col items-center gap-1">
              <TiltedCard
                imageSrc={profile?.Profile?.albums[0].image}
                altText={profile?.Profile?.albums[0].name}
                captionText={profile?.Profile?.albums[0].name}
                containerHeight="200px"
                containerWidth="150px"
                imageHeight="200px"
                imageWidth="150px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
              />
              <h1 className="text-sm">ALBUM</h1>
            </div>
          </div>
        </div>
      </div>
      {/* THINK */}
      <div className="bg-indigo-700">Thinks</div>
    </div>
  );
}
