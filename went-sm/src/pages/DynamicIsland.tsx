import { Outlet } from "react-router-dom";

export default function DynamicIsland() {
  return (
    <div>
      {/* Your DynamicIsland UI */}
      <div className="flex justify-center">
        <div className="mx-auto h-12 w-2xl mt-8 bg-amber-300 fixed rounded-3xl"></div>
      </div>

      {/* 👇 This is the magic portal where child pages appear */}
      <Outlet />
    </div>
  );
}
