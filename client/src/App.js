import "./GlobalStyle.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/login";
import Main from "./pages/Main/main";
import Newpost from "./pages/Mypage/pages/Newpost";
import Signup from "./pages/Signup/signup";
import Post from "./pages/PostDetail/Post";
import MyInfo from "./pages/Mypage/pages/MyInfo";
import MyStore from "./pages/Mypage/pages/MyStore";
import Firstselling from "./pages/Mypage/pages/Firstselling";
import Mypage from "./pages/Mypage/mypage";
import MyItems from "./pages/Mypage/pages/MyItems";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MyBookmark from "./pages/Mypage/pages/MyBookmark";
import MyLike from "./pages/Mypage/pages/MyLIke";
import { setItemsList } from "./actions";

function App() {
  const API_URL = process.env.REACT_APP_API_URL;

  const accessToken = localStorage.getItem("accessToken");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    if (accessToken) {
      await axios
        .get(`${API_URL}/api/boards?page=1&size=50`, {
          headers: { authorization: accessToken },
        })
        .then((res) => {
          dispatch(setItemsList(res.data.data));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await axios
        .get(`${API_URL}/api/boards?page=1&size=50`)
        .then((res) => {
          // console.log(res.data.data);
          dispatch(setItemsList(res.data.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // const getPostsOnSale = () => {
  //   axios
  //     .get("/api/boards/sells?page=1&size=50")
  //     .then((res) => {
  //       // console.log(res.data.data);
  //       dispatch(setFilteredItemsList(res.data.data));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    setIsLoading(true);
    getPosts().then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main isLoading={isLoading} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newpost" element={<Newpost />} />
        <Route path="/:id" element={<Post />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/myinfo" element={<MyInfo />} />
        <Route path="/mystore" element={<MyStore />} />
        <Route path="/mystore/edit" element={<Firstselling />} />
        <Route path="/myitems" element={<MyItems />} />
        <Route path="/mylike" element={<MyLike />} />
        <Route path="/mybookmark" element={<MyBookmark />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
