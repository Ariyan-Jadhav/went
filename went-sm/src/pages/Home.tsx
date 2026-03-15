import React, { useState } from "react";
import axios from "axios";

const UploadImages = () => {
  const [images, setImages] = useState<File[]>([]);
  const [preview, setPreview] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);
    setImages(files);

    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setPreview(previewUrls);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    images.forEach((img) => {
      formData.append("images", img);
    });

    await axios.post("http://localhost:6969/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log("Uploaded");
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % preview.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? preview.length - 1 : prev - 1));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" multiple onChange={handleFileChange} />

        {preview.length > 0 && (
          <div style={{ width: "400px", textAlign: "center" }}>
            <img
              src={preview[current]}
              alt="preview"
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />

            <div>
              <button type="button" onClick={prev}>
                Prev
              </button>

              <span>
                {current + 1} / {preview.length}
              </span>

              <button type="button" onClick={next}>
                Next
              </button>
            </div>
          </div>
        )}

        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadImages;
