import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import { useDefaultOptions } from "@/components/di_global_context/default";
import { useFeedOptions } from "@/components/di_global_context/FeedE-FContext";
import { useProfileOptions } from "@/components/di_global_context/ProfileP-SContext";
import RotatingText from "@/components/RotatingText";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionHeader({
  step,
  label,
  sublabel,
}: {
  step: string;
  label: string;
  sublabel?: string;
}) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="shrink-0 w-9 h-9 rounded-full bg-blue-400/10 border border-blue-400/40 flex items-center justify-center">
        <span className="text-blue-400 text-xs font-mono font-bold">
          {step}
        </span>
      </div>
      <div>
        <h2 className="text-white font-semibold text-lg leading-tight tracking-wide">
          {label}
        </h2>
        {sublabel && <p className="text-zinc-500 text-xs mt-0.5">{sublabel}</p>}
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

function Post() {
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
    setProfile1(false);
    setSearch(false);
    setUpload(true);
    setOpenTextBox(false);
    setTextBox("THINK");
    setOpenFeedOptions(false);
    setGototop(false);
    setOpenProfileOptions(false);
  }, []);

  useEffect(() => {
    setOpenTextBox(true);

    const timer = setTimeout(() => {
      setOpenTextBox(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const [content, setContent] = useState("");
  const [hashtag, setHashtag] = useState<string>("");
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [thinkImages, setThinkImages] = useState<File[]>([]);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { getToken } = useAuth();
  const { user } = useUser();

  // ── Hashtag helpers ───────────────────────────────────────────────────────────
  const addHashtag = () => {
    const trimmed = hashtag.trim().replace(/^#/, "");
    if (trimmed && !hashtags.includes(trimmed))
      setHashtags((prev) => [...prev, trimmed]);
    setHashtag("");
  };

  const removeHashtag = (tag: string) => {
    setHashtags((prev) => prev.filter((t) => t !== tag));
  };

  const handleHashtagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addHashtag();
    }
  };

  // ── Image helpers ─────────────────────────────────────────────────────────────
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selected = Array.from(e.target.files);
      setThinkImages((prev) => {
        const combined = [...prev, ...selected];
        if (combined.length > 4) {
          setError("Maximum 3 images allowed");
          return prev.slice(0, 4); // keep existing, ignore new if already at 5
        }
        setError("");
        return combined.slice(0, 4); // hard cap at 5
      });
    }
  };

  const removeImage = (index: number) => {
    setThinkImages((prev) => prev.filter((_, i) => i !== index));
  };

  // ── Submit ────────────────────────────────────────────────────────────────────
  const createThink = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!user?.id) {
      setError("You're not authenticated. Login first!");
      return;
    }
    if (!content.trim()) {
      setError("Content cannot be empty. Say something! Anything!");
      return;
    }

    const formData = new FormData();
    formData.append("content", content);
    if (hashtags.length > 0)
      formData.append("hashtags", JSON.stringify(hashtags));
    thinkImages.forEach((img) => formData.append("images", img));

    try {
      setLoading(true);
      await axios.post("/think/create", formData, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });

      setSuccess(true);
      setContent("");
      setHashtags([]);
      setThinkImages([]);
    } catch (err) {
      console.error(err);
      setError("Failed to post. The server might be napping. 😴");
    } finally {
      setLoading(false);
    }
  };

  // ── Render ────────────────────────────────────────────────────────────────────
  return (
    <div className="bg-black text-white overflow-hidden min-h-screen">
      {/* ── Image fullscreen preview ── */}
      {previewUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setPreviewUrl(null)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={previewUrl}
              alt="preview"
              className="max-w-[90vw] max-h-[90vh] rounded-xl object-contain shadow-2xl"
            />
            <button
              onClick={() => setPreviewUrl(null)}
              className="absolute -top-3 -right-3 w-7 h-7 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold shadow-lg hover:bg-gray-200 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-zinc-950 text-white flex">
        <div className="fixed inset-0 pointer-events-none w-[50%] opacity-[0.03]" />

        <div className="relative z-10 max-w-2xl w-full px-10 py-12 pb-24">
          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white leading-tight">
              Share a Think
            </h1>
            <div className="mt-4 h-px w-16 bg-blue-400/60 rounded" />
          </div>

          {/* ── Section 01: Content ───────────────────────────────────────────── */}
          <div className="mb-10">
            <SectionHeader
              step="01"
              label="What's on your mind?"
              sublabel="No filter needed. Raw thoughts welcome."
            />
            <div className="relative">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="I've been thinking about..."
                maxLength={1000}
                rows={6}
                className="w-full bg-zinc-900 border border-zinc-700/80 rounded-2xl px-4 py-3.5 text-white placeholder-zinc-600 text-sm resize-none focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all duration-200"
              />
              <span className="absolute bottom-3 right-4 text-zinc-600 text-xs">
                {content.length}/1000
              </span>
            </div>
          </div>

          <div className="h-px bg-zinc-800/80 my-10" />

          {/* ── Section 02: Hashtags ──────────────────────────────────────────── */}
          <div className="mb-10">
            <SectionHeader
              step="02"
              label="Hashtags"
              sublabel="Note: these hashtags will not be displayed in your think. Tag it so others can find it. Press Enter or comma to add."
            />

            {/* Input row */}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">
                  #
                </span>
                <input
                  type="text"
                  placeholder="add a tag..."
                  value={hashtag}
                  onChange={(e) => setHashtag(e.target.value)}
                  onKeyDown={handleHashtagKeyDown}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl pl-8 pr-4 py-2.5 text-white text-sm outline-none focus:border-zinc-500 transition placeholder:text-zinc-600"
                />
              </div>
              <button
                type="button"
                onClick={addHashtag}
                className="px-5 py-2.5 rounded-xl border border-zinc-700 text-zinc-300 text-sm hover:border-white hover:text-white transition-all duration-200 bg-zinc-900"
              >
                Add
              </button>
            </div>

            {/* Tag chips */}
            {hashtags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {hashtags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 bg-blue-400/10 border border-blue-400/20 text-blue-300 text-xs px-3 py-1.5 rounded-full"
                  >
                    #{tag}
                    <button
                      type="button"
                      onClick={() => removeHashtag(tag)}
                      className="text-blue-400/60 hover:text-blue-300 transition leading-none"
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="h-px bg-zinc-800/80 my-10" />

          {/* ── Section 03: Images ────────────────────────────────────────────── */}
          <div className="mb-10">
            <SectionHeader
              step="03"
              label="Images"
              sublabel="A picture is worth a thousand thinks. Optional."
            />

            {/* Upload button */}
            <button
              type="button"
              disabled={thinkImages.length >= 4}
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-zinc-700 bg-zinc-900 text-zinc-300 text-sm hover:border-white hover:text-white transition-all duration-200"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
              Upload Images
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="hidden"
              />
            </button>

            {/* Image carousel preview */}
            {thinkImages.length > 0 && (
              <div className="relative border-mist-700 border bg-[rgb(255,255,255,0.1)] rounded-2xl  p-3 w-full mt-5">
                <Carousel opts={{ align: "start" }}>
                  <CarouselContent className="-ml-2">
                    {thinkImages.map((img, index) => {
                      const url = URL.createObjectURL(img);
                      return (
                        <CarouselItem key={index} className="pl-2 basis-1/3">
                          <div className="relative group h-48 w-full rounded-xl overflow-hidden border border-zinc-700/60">
                            <img
                              src={url}
                              alt={`preview-${index}`}
                              className="h-full w-full object-cover cursor-pointer"
                              onClick={() => setPreviewUrl(url)}
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute inset-x-0 bottom-0 h-[25%] bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs flex items-center justify-center gap-1"
                            >
                              <svg
                                className="w-3 h-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                              Remove
                            </button>
                          </div>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                </Carousel>
                <p className="text-zinc-600 text-xs mt-2">
                  {thinkImages.length}/4 images selected
                </p>
              </div>
            )}
          </div>

          {/* ── Feedback ─────────────────────────────────────────────────────── */}
          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
          {success && (
            <p className="text-green-400 text-sm mb-4">
              Posted successfully! 🎉
            </p>
          )}

          {/* ── Submit ───────────────────────────────────────────────────────── */}
          <button
            onClick={createThink}
            disabled={loading || !content.trim()}
            className="w-full py-4 rounded-2xl hover:bg-white hover:text-black font-semibold text-base transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                Posting...
              </span>
            ) : (
              "Post Think →"
            )}
          </button>
        </div>

        {/* ── Right panel ── */}
        <div className="flex-1 flex gap-6 justify-center items-center-safe min-h-screen">
          <div className="flex gap-3">
            <h1 className="text-white font-bold text-5xl">Think</h1>
            <RotatingText
              texts={["Endlessly", "Beyond", "Different"]}
              mainClassName="px-4 bg-cyan-300 text-black overflow-hidden justify-center items-center text-4xl font-bold rounded-lg pt-1"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
