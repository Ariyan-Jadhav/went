import { useAuth } from "@clerk/clerk-react";
import { useCallback, useEffect, useRef, useState } from "react";

const INTERVAL_MS = 60_000; // 1 minute

export function useGuestGuard() {
  const { isSignedIn, isLoaded } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [modalReason, setModalReason] = useState<"periodic" | "action">(
    "periodic",
  );
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isLoaded || isSignedIn) return;

    // Show immediately after 1 minute
    timerRef.current = setInterval(() => {
      setModalReason("periodic");
      setShowModal(true);
    }, INTERVAL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isLoaded, isSignedIn]);

  // Call this before any authenticated action
  const requireAuth = useCallback(
    (action: () => void) => {
      if (!isSignedIn) {
        setModalReason("action");
        setShowModal(true);
        return; // block the action
      }
      action();
    },
    [isSignedIn],
  );

  const closeModal = useCallback(() => setShowModal(false), []);

  return { showModal, modalReason, closeModal, requireAuth };
}
