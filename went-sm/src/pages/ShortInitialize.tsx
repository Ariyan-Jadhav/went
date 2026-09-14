import { useEffect, useRef, useState } from "react";
import { useUser, useAuth } from "@clerk/clerk-react";
import { useReverification } from "@clerk/clerk-react";
import { useDefaultOptions } from "@/components/di_global_context/default";
import { useNavigate } from "react-router-dom";
import { useFeedOptions } from "@/components/di_global_context/FeedE-FContext";
import { useProfileOptions } from "@/components/di_global_context/ProfileP-SContext";

import axios from "axios";

function ShortInitialize() {
  // ── Clerk state ──
  const fileRef = useRef<HTMLInputElement>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [pfpPreview, setPfpPreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { user } = useUser();
  const navigate = useNavigate();

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
    setNotification(false);
    setSearch(false);
    setUpload(false);
    setOpenFeedOptions(false);
    setGototop(false);
    setOpenProfileOptions(false);
  }, []);

  useEffect(() => {
    setTextBox("You made it");
    setProfile1(false);
    setOpenTextBox(true);
  }, []);

  // Sync Clerk user data once loaded
  const hasSyncedUser = useRef(false);
  useEffect(() => {
    if (user && !hasSyncedUser.current) {
      setFirstName(user.firstName ?? "");
      setLastName(user.lastName ?? "");
      setUsername(user.username ?? "");
      hasSyncedUser.current = true; // never run again
    }
  }, [user]);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setPfpPreview(URL.createObjectURL(file));
  }

  // ── Loading / feedback ──
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const { getToken } = useAuth();

  // const { setProfile1, setOpenTextBox } = useDefaultOptions();

  const allFieldsFilled =
    !!firstName.trim() &&
    !!lastName.trim() &&
    !!username.trim() &&
    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
      const file = e.target.files?.[0];
      if (!file) return;
      setImageFile(file);
      setPfpPreview(URL.createObjectURL(file));
    };
  const updateWithReverification = useReverification(
    (firstName: string, lastName: string, username: string) =>
      user!.update({ firstName, lastName, username }),
  );

  const createIdentity = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading || !allFieldsFilled) return; // ← guard against double-click
    setError(null);
    setSuccess(false);
    setLoading(true); // ← before the try

    if (!user?.id) {
      setError("You're not authenticated.");
      setLoading(false);
      return;
    }

    try {
      await updateWithReverification(firstName, lastName, username);
      if (imageFile) await user!.setProfileImage({ file: imageFile });
      await user!.reload(); // reload before reading user?.imageUrl

      const token = await getToken();
      const headers = { Authorization: `Bearer ${token}` };
      const freshImageUrl = user?.imageUrl; // now up to date after reload

      await Promise.all([
        axios.put(
          "profile/me/user",
          { firstName, lastName, username, profilePicUrl: freshImageUrl },
          { headers },
        ),
      ]);

      const verify = await axios.post("api/profile/me/verify", {}, { headers });
      if (verify.data.message === true) {
        setOpenTextBox(false);
        setProfile1(true);
      }

      setSuccess(true);
      setImageFile(null);
      navigate("/feed");
    } catch (err: any) {
      console.error(err);
      setError(
        err?.errors?.[0]?.message ?? "Failed to save. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="mb-10 h-[45%] w-[35%] border border-amber-50 p-5 rounded-2xl">
        {/* PFP */}
        <div className="flex items-center gap-5 mb-6">
          <div
            className="relative group cursor-pointer"
            onClick={() => fileRef.current?.click()}
          >
            <img
              src={pfpPreview ?? user?.imageUrl}
              alt="pfp"
              className="w-20 h-20 rounded-full object-cover border border-zinc-700"
            />
            <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white text-xs font-medium">Change</span>
            </div>
          </div>
          <div>
            <p className="text-white text-sm font-medium">Profile Photo</p>
            <p className="text-zinc-500 text-xs mt-0.5">JPG, PNG up to 10MB</p>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Name + Username */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2.5">
              First Name
            </label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:border-zinc-500 transition"
            />
          </div>
          <div>
            <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2.5">
              Last Name
            </label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:border-zinc-500 transition"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2.5">
              Username
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">
                @
              </span>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value.toLowerCase())}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl pl-8 pr-4 py-2.5 text-white text-sm outline-none focus:border-zinc-500 transition"
              />
            </div>
          </div>
        </div>
        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
        {success && (
          <p className="text-green-400 text-sm mb-4">
            Identity saved successfully! 🎉
          </p>
        )}
        <button
          onClick={createIdentity}
          disabled={loading || !allFieldsFilled}
          className="w-full py-4 mt-6 rounded-2xl hover:bg-gray-500 bg-white hover:text-black font-semibold text-base transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
              Saving...
            </span>
          ) : (
            "Save My Identity →"
          )}
        </button>
      </div>
    </div>
  );
}

export default ShortInitialize;
