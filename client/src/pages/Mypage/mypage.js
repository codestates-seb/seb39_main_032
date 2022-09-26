import styled from "styled-components";
import Header from "../../components/Header";
import { TitleHeader } from "../Newpost/components/Firstselling";
import Footer from "../../components/Footer";
import CurrentSaleItems from "./components/CurrentSaleItems";
import MyFavoriteStores from "./components/MyFavoriteStores";
import MyWishlist from "./components/MyWishlist";

const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* 비밀번호 변경 */

  #pw_change_wrapper {
    border: 1px solid rgba(170, 170, 170, 1);
    width: 350px;
    height: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 0.2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h4 {
    margin: 20px;
  }

  #pw_change_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }

  #new_pw {
    border-bottom: none;
  }

  input {
    width: 300px;
    height: 40px;
    border: 1px solid rgba(170, 170, 170, 1);
  }

  #pw_edit_btn {
    font-weight: 700;
    margin-top: 5px;
    width: 70px;
    height: 30px;
    border: 1px solid grey;
    border-radius: 0.2rem;
  }
`;

function Mypage() {
  return (
    <>
      <Header />
      <MypageContainer>
        <TitleHeader>
          <h2>나의 정보</h2>
        </TitleHeader>
        <section id="pw_change_wrapper">
          <h4>비밀번호 변경</h4>
          <form>
            <div id="pw_change_box">
              <input id="new_pw" type="password" placeholder="새 비밀번호" />
              <input
                id="new_pw_confirm"
                type="password"
                placeholder="새 비밀번호 재확인"
              />
            </div>
            <button id="pw_edit_btn" type="submit">
              수정
            </button>
          </form>
        </section>
        <CurrentSaleItems />
        <MyFavoriteStores />
        <MyWishlist />
      </MypageContainer>
      <Footer />
    </>
  );
}

export default Mypage;
