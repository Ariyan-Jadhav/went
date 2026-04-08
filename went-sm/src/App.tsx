import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Feed from "./pages/Feed";
import Noti from "./pages/Notification";
import DynamicIsland from "./pages/DynamicIsland";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import Createidentity from "./pages/Createidentity";
import { ProtectedRoute } from "./components/ProtectedRoutes";
import ComingSoon from "./pages/Comment";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DynamicIsland />
          </ProtectedRoute>
        }
      >
        <Route path="/message" element={<ComingSoon />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/createidentity" element={<Createidentity />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/justuploaditbrah" element={<Post />} />
        <Route path="/noti" element={<Noti />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
