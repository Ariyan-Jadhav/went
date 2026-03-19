import { useClerk } from "@clerk/clerk-react";

export default function Home() {
  const { signOut } = useClerk();
  return (
    <div>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
