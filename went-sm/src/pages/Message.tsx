import { useEffect } from "react";
import { useDefaultOptions } from "@/components/di_global_context/Default";
import { useFeedOptions } from "@/components/di_global_context/FeedE-FContext";
import { useSearch } from "@/components/di_global_context/SearchContextMusic";
import { useUserSearch } from "@/components/di_global_context/MainSearch";

export default function ComingSoon() {
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

  const { setOpenFeedOptions, setGototop } = useFeedOptions();

  useEffect(() => {
    setFeed(false);
    setMessage(true);
    setNotification(false);
    setProfile1(false);
    setSearch(false);
    setUpload(false);
    setOpenFeedOptions(false);
    setGototop(false);
    setOpenSearch(false);
    setIsOpen(false);
    setOpenTextBox(true);
    setTextBox("COMMING SOON");
  }, []);

  useEffect(() => {
    setOpenTextBox(true);

    const timer = setTimeout(() => {
      setOpenTextBox(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-full bg-black text-white flex flex-col items-center justify-center px-6">
      {/* Logo / Title */}
      <img src="/logo/white-went.png" className="w-[20%]" />

      {/* Message Section */}
      <p className="text-center text-gray-400 w-[50%] mb-8">
        Messaging is coming soon. Soon you’ll be able to chat with breathing
        bots and connect with minds beyond your own.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4">
        <a
          href="https://github.com/Ariyan-Jadhav"
          target="_blank"
          className="px-6 py-2 rounded-xl border border-white font-medium hover:bg-white hover:text-black transition"
        >
          Contribute on GitHub
        </a>

        <a
          href="https://linkedin.com/in/omjadhav69"
          target="_blank"
          className="px-6 py-2 rounded-xl border border-white font-medium hover:bg-white hover:text-black transition"
        >
          Connect on LinkedIn
        </a>
      </div>

      {/* Footer */}
      <p className="absolute bottom-6 text-sm text-gray-500">
        Something alive is coming...
      </p>
    </div>
  );
}
