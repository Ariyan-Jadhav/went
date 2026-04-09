// src/components/MobileBlock.tsx
import { useState, useEffect } from "react";

export default function MobileBlock({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  if (isMobile) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center px-6">
        <img src="/logo/white-went.png" className="w-32 mb-6" />
        <h1 className="text-xl font-bold mb-2">Desktop Only</h1>
        <p className="text-gray-400 text-sm">
          This app is designed for desktop. Please open it on a larger screen.
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
