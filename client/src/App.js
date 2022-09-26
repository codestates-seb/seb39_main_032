import "./GlobalStyle.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login/login";
import Main from "./pages/Main/main";
import Mypage from "./pages/Mypage/mypage";
import Newpost from "./pages/Newpost/newpost";
import Signup from "./pages/Signup/signup";
import Post from "./pages/Post/Post";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo, storeToken } from "./actions";
import { getAccessToken } from "./storage/Cookie";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userInfoReducer);
  const { email, memberPw, authenticated } = state;
  const state2 = useSelector((state) => state.loginReducer);
  const { accessToken } = state2;

  const authHandler = () => {
    // if (accessToken) {
    //   dispatch(setUserInfo({ ...email, ...memberPw, authenticated: true }));
    //   console.log(email, memberPw, authenticated);
    // }
  };

  useEffect(() => {
    authHandler();
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
