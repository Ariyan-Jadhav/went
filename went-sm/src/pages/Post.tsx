import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

function Post() {
  const [content, setContent] = useState("");
  const [hashtag, setHashtag] = useState<string>("");
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [thinkImages, setThinkImages] = useState<File[]>([]);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null); // 👈 new

  const { getToken } = useAuth();

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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selected = Array.from(e.target.files);
      setThinkImages((prev) => [...prev, ...selected]);
    }
  };

  const removeImage = (index: number) => {
    setThinkImages((prev) => prev.filter((_, i) => i !== index));
  };

  const createThink = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!content.trim()) {
      setError("Content cannot be empty. Say something! Anything!");
      return;
    }

    const formData = new FormData();
    formData.append("content", content);

    if (hashtags.length > 0) {
      formData.append("hashtags", JSON.stringify(hashtags));
    }

    thinkImages.forEach((img) => {
      formData.append("images", img);
    });

    try {
      setLoading(true);
      const response = await axios.post("/think/create", formData, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });

      if (!response.data.success) {
        console.error("No data returned from server");
        setError("Something went wrong. Try again.");
        return;
      }

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

  return (
    <div>
      {previewUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setPreviewUrl(null)} // click anywhere outside = close
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
            {/* Close button */}
            <button
              onClick={() => setPreviewUrl(null)}
              className="absolute -top-3 -right-3 bg-white text-black rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shadow-lg hover:bg-gray-200 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <form onSubmit={createThink}>
        <textarea
          placeholder="What are you thinking about?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div>
          <input
            type="text"
            placeholder="Add a hashtag and press Enter"
            value={hashtag}
            onChange={(e) => setHashtag(e.target.value)}
            onKeyDown={handleHashtagKeyDown}
          />
          <button type="button" onClick={addHashtag}>
            Add
          </button>
        </div>

        {hashtags.length > 0 && (
          <div className="flex gap-2">
            {hashtags.map((tag) => (
              <span key={tag} className="flex items-center gap-1">
                #{tag}
                <button
                  type="button"
                  className="bg-amber-200 px-1 rounded"
                  onClick={() => removeHashtag(tag)}
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
        )}

        <div>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </div>

        {thinkImages.length > 0 && (
          <div className="relative w-[50%] px-10 mt-3">
            <Carousel opts={{ align: "start" }} className="">
              <CarouselContent className="-ml-2">
                {thinkImages.map((img, index) => {
                  const url = URL.createObjectURL(img);
                  return (
                    <CarouselItem
                      key={index}
                      className="pl-2 basis-1/2 md:basis-1/2"
                    >
                      <div className="relative group h-100 w-full rounded-lg overflow-hidden border border-border shadow-sm">
                        <img
                          src={url}
                          alt={`preview-${index}`}
                          className="h-full w-full object-cover"
                          onClick={() => setPreviewUrl(url)}
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute left-0 bottom-0 right-0 h-[20%] bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm"
                        >
                          ✕ Remove
                        </button>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        )}

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>Posted successfully! 🎉</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Posting..." : "Post"}
        </button>
      </form>
    </div>
  );
}

export default Post;
