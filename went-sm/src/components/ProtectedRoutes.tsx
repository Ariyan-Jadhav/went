import { useAuth } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const PUBLIC_PATHS = ["/feed", "/signin", "/signup", "/terms", "/"];

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();
  const location = useLocation();

  if (!isLoaded) return null;

  const isPublic = PUBLIC_PATHS.some((path) =>
    location.pathname.startsWith(path),
  );

  if (!isSignedIn && !isPublic)
    return <Navigate to="/feed" replace state={{ from: location }} />;

  if (
    isSignedIn &&
    !user?.publicMetadata?.verified &&
    !location.pathname.startsWith("/createidentity")
  ) {
    return <Navigate to="/createidentity" replace state={{ from: location }} />;
  }

  return <>{children}</>;
}
