import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "@clerk/clerk-react";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
function profile() {
  const [content, setContent] = useState("");
  const [hashtag, setHashtag] = useState<string>("");
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [thinkImages, setThinkImages] = useState<File[]>([]);

  const { getToken } = useAuth();

  const createThink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content) {
      // DI - file not found
      return;
    }
    const formData = new FormData();

    formData.append("content", content);

    if (hashtags) formData.append("hashtags", JSON.stringify(hashtags));

    if (thinkImages) {
      thinkImages.forEach((img) => {
        formData.append("files", img);
      });
    }

    try {
      setLoading(true);
      const data = await axios.post("/think/create", formData, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });

      if (!data) {
        console.error("could not find data");
        return;
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return <div></div>;
}

export default profile;
