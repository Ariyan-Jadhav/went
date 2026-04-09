import React, { useEffect, useState } from "react";
import { useSignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useDefaultOptions } from "@/components/di_global_context/Default";
import { useFeedOptions } from "@/components/di_global_context/FeedE-FContext";
import { useProfileOptions } from "@/components/di_global_context/ProfileP-SContext";

export default function SignUp() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const navigate = useNavigate();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isLoaded) return null;

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

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!signUp) return;
    try {
      setLoading(true);
      await signUp.create({ emailAddress, password });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
      setError("");
    } catch (error: any) {
      setError(error.errors?.[0]?.message || "Sign up failed");
    } finally {
      setLoading(false);
    }
  }

  async function onPressVerify(e: React.FormEvent) {
    e.preventDefault();
    if (!signUp) return;
    try {
      setLoading(true);
      const completeSignup = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignup.status !== "complete") {
        setError("Verification failed");
        return;
      }
      await setActive({ session: completeSignup.createdSessionId });
      navigate("/createidentity");
    } catch (error: any) {
      setError(error.errors?.[0]?.message || "Verification failed");
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
    setTextBox("SIGN UP");
    setProfile1(false);
    setOpenTextBox(true);
  }, []);

  const Spinner = () => (
    <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin inline-block" />
  );

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-sm border border-gray-800 rounded-2xl p-8">
        {!pendingVerification ? (
          <>
            <h1 className="text-white text-2xl font-bold mb-1">
              Create account
            </h1>
            <p className="text-gray-500 text-sm mb-6">Join WENT today</p>

            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-gray-400 text-sm">Email</label>
                <input
                  type="email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  required
                  disabled={loading}
                  className="bg-gray-900 text-white rounded-lg px-4 py-2.5 text-sm border border-gray-700 focus:border-gray-500 outline-none disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-gray-400 text-sm">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                    className="w-full bg-gray-900 text-white rounded-lg px-4 py-2.5 text-sm border border-gray-700 focus:border-gray-500 outline-none pr-16 disabled:opacity-50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-gray-300"
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
                    <Spinner /> Creating...
                  </>
                ) : (
                  "Create account"
                )}
              </button>
            </form>

            <p className="text-gray-600 text-sm text-center mt-6">
              Already have an account?{" "}
              <a
                href="/signin"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Sign in
              </a>
            </p>
          </>
        ) : (
          <>
            <h1 className="text-white text-2xl font-bold mb-1">
              Check your email
            </h1>
            <p className="text-gray-500 text-sm mb-6">
              We sent a code to {emailAddress}
            </p>

            <form onSubmit={onPressVerify} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-gray-400 text-sm">
                  Verification code
                </label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter 6-digit code"
                  required
                  disabled={loading}
                  className="bg-gray-900 text-white rounded-lg px-4 py-2.5 text-sm border border-gray-700 focus:border-gray-500 outline-none tracking-widest disabled:opacity-50"
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="bg-white text-black font-semibold rounded-lg py-2.5 text-sm hover:bg-gray-200 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Spinner /> Verifying...
                  </>
                ) : (
                  "Verify email"
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
