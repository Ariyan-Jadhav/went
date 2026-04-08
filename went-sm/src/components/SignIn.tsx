import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  onClose: () => void;
  reason?: "periodic" | "action";
}

export function SignInModal({ onClose, reason }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative bg-black border border-gray-800 rounded-2xl p-8 w-full max-w-sm mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-white text-xl z-10 transition-colors"
        >
          ✕
        </button>

        {/* Logo / Header */}
        <div className="text-center mb-6">
          <h2 className="text-white text-2xl font-bold">Join WENT</h2>
          <p className="text-gray-500 text-sm mt-1">
            {reason === "periodic"
              ? "Enjoying the feed? Sign in to interact."
              : "Sign in to continue."}
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-gray-800" />
          <span className="text-gray-600 text-xs">get started</span>
          <div className="flex-1 h-px bg-gray-800" />
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => {
              onClose();
              navigate("/signup");
            }}
            className="w-full bg-white text-black font-semibold rounded-lg py-2.5 text-sm hover:bg-gray-200 transition-colors"
          >
            Create account
          </button>
          <button
            onClick={() => {
              onClose();
              navigate("/signin");
            }}
            className="w-full bg-transparent text-white border border-gray-700 font-medium rounded-lg py-2.5 text-sm hover:border-gray-500 transition-colors"
          >
            Sign in
          </button>
        </div>

        <p className="text-gray-600 text-xs text-center mt-6">
          By signing up you agree to our{" "}
          <span className="text-gray-400 hover:text-white cursor-pointer transition-colors">
            Terms
          </span>{" "}
          and{" "}
          <span className="text-gray-400 hover:text-white cursor-pointer transition-colors">
            Privacy Policy
          </span>
          .
        </p>
      </div>
    </div>
  );
}
