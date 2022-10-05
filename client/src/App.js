import "./GlobalStyle.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login/login";
import Main from "./pages/Main/main";
import Newpost from "./pages/Mypage/pages/Newpost";
import Signup from "./pages/Signup/signup";
import Post from "./pages/PostDetail/Post";
import EditPwd from "./pages/Mypage/pages/EditPwd";
import MyStore from "./pages/Mypage/pages/MyStore";
import Firstselling from "./pages/Mypage/pages/Firstselling";
import Mypage from "./pages/Mypage/Mypage";
import MyItems from "./pages/Mypage/pages/MyItems";
import axios from "axios";
import { useEffect } from "react";
import { setUserInfo } from "./actions";
import { useDispatch } from "react-redux";
import { setItemsList } from "./actions";

function App() {
  const dispatch = useDispatch();

  const userInfoHandler = () => {
    // axios
    //   .get("api/member")
    //   .then(() => dispatch(setUserInfo(res.data.data)))
    //   .catch((err) => console.log(err));
  };

  const getPosts = () => {
    axios
      .get("/api/boards?page=1&size=10")
      .then((res) => {
        dispatch(setItemsList(res.data.data));
        // console.log(state);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

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
        <Route path="/myitems" element={<MyItems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
