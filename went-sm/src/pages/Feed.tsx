import axios from "axios";

function Feed() {
  axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

  return (
    <div className="min-h-screen bg-teal-400 grid-cols-[1fr_2fr_1fr] grid">
      <div className="bg-gray-600"></div>
      <div className="bg-gray-500">feed</div>
      <div className="bg-gray-700">comments</div>
    </div>
  );
}

export default Feed;
