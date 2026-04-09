import React, { useEffect, useState } from "react";
import { useSignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useDefaultOptions } from "@/components/di_global_context/default";
import { useFeedOptions } from "@/components/di_global_context/FeedE-FContext";
import { useProfileOptions } from "@/components/di_global_context/ProfileP-SContext";

export default function SignIn() {
  const { isLoaded, setActive, signIn } = useSignIn();
  const navigate = useNavigate();
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

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isLoaded) return null;

  const Spinner = () => (
    <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin inline-block" />
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isLoaded) return;
    try {
      setLoading(true);
      const result = await signIn.create({ identifier, password });
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        navigate("/feed");
      } else console.error(JSON.stringify(result, null, 2));
    } catch (err: any) {
      setError(err.errors?.[0]?.message ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setFeed(false);
    setMessage(false);
    setNotification(false);
    setSearch(false);
    setUpload(false);
    setOpenFeedOptions(false);
    setGototop(false);
    setOpenProfileOptions(false);
  }, []);

  useEffect(() => {
    setTextBox("SIGN IN");
    setProfile1(false);
    setOpenTextBox(true);
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-sm border border-gray-800 rounded-2xl p-8">
        <h1 className="text-white text-2xl font-bold mb-1">Welcome back</h1>
        <p className="text-gray-500 text-sm mb-6">Sign in to your account</p>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-gray-400 text-sm">Username or email</label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              disabled={loading}
              className="bg-gray-900 text-white rounded-lg px-4 py-2.5 text-sm border border-gray-700 focus:border-gray-500 outline-none transition-colors disabled:opacity-50"
              autoFocus
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-gray-400 text-sm">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="w-full bg-gray-900 text-white rounded-lg px-4 py-2.5 text-sm border border-gray-700 focus:border-gray-500 outline-none transition-colors pr-16 disabled:opacity-50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-white text-black font-semibold rounded-lg py-2.5 text-sm hover:bg-gray-200 transition-colors mt-1 disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Spinner /> Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        <p className="text-gray-600 text-sm text-center mt-6">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
