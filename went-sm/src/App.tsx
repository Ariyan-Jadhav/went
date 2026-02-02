import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Feed from "./pages/Feed";
import Noti from "./pages/Notification";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/noti" element={<Noti />} />
      </Routes>
    </div>
  );
}

export default App;
