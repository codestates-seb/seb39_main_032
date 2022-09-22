import "./GlobalStyle.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Mypage from "./pages/Mypage/Mypage";
import Newpost from "./pages/Newpost/Newpost";
import Signup from "./pages/Signup/Signup";
import Post from "./pages/Post/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newpost" element={<Newpost />} />
        <Route path="/:id" element={<Post />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
