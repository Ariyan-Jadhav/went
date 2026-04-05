import { useUser } from "@clerk/clerk-react";
import { useState, useRef } from "react";

export default function Home() {
  const { user } = useUser();

  const [firstName, setFirstName] = useState(user?.firstName ?? "");
  const [lastName, setLastName] = useState(user?.lastName ?? "");
  const [username, setUsername] = useState(user?.username ?? "");
  const [preview, setPreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  // ── Preview pfp before upload ──
  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  }

  // ── Save all changes ──
  async function handleSave() {
    if (!user) return;
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Update name + username
      await user.update({ firstName, lastName, username });

      // Upload pfp only if a new one was selected
      if (imageFile) {
        await user.setProfileImage({ file: imageFile });
      }

      setSuccess(true);
      setImageFile(null);
    } catch (err: any) {
      // Clerk returns readable error messages
      setError(err?.errors?.[0]?.message ?? "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-6 max-w-md">
      {/* ── Profile Picture ── */}
      <div className="flex items-center gap-4">
        <img
          src={preview ?? user?.imageUrl}
          alt="pfp"
          className="w-20 h-20 rounded-full object-cover border border-zinc-700"
        />
        <div className="flex flex-col gap-1">
          <button
            onClick={() => fileRef.current?.click()}
            className="text-sm text-blue-400 hover:text-blue-300 transition"
          >
            Change photo
          </button>
          <p className="text-zinc-600 text-xs">JPG, PNG, GIF up to 10MB</p>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
      </div>

      {/* ── Name fields ── */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-1.5">
            First Name
          </label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:border-zinc-500"
          />
        </div>
        <div>
          <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-1.5">
            Last Name
          </label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:border-zinc-500"
          />
        </div>
      </div>

      {/* ── Username ── */}
      <div>
        <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-1.5">
          Username
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">
            @
          </span>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-xl pl-8 pr-4 py-2.5 text-white text-sm outline-none focus:border-zinc-500"
          />
        </div>
      </div>

      {/* ── Feedback ── */}
      {error && <p className="text-red-400 text-sm">{error}</p>}
      {success && <p className="text-green-400 text-sm">Saved successfully!</p>}

      {/* ── Save Button ── */}
      <button
        onClick={handleSave}
        disabled={loading}
        className="w-full py-3 rounded-2xl border font-semibold text-sm hover:bg-white hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Saving..." : "Save Changes →"}
      </button>
    </div>
  );
}
