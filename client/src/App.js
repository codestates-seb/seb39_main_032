import "./GlobalStyle.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login/login";
import Main from "./pages/Main/main";
import Newpost from "./pages/Mypage/pages/Newpost/newpost";
import Signup from "./pages/Signup/signup";
import Post from "./pages/PostDetail/Post";
import EditPwd from "./pages/Mypage/pages/EditPwd";
import MyStore from "./pages/Mypage/pages/MyStore";
import Firstselling from "./pages/Mypage/pages/Firstselling";
import Mypage from "./pages/Mypage/Mypage";

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
        <Route path="/myinfo" element={<EditPwd />} />
        <Route path="/mystore" element={<MyStore />} />
        <Route path="/mystore/edit" element={<Firstselling />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
