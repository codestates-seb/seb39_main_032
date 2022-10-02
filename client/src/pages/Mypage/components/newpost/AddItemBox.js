import styled from "styled-components";
import { Icon } from "@iconify/react";
import TitleHeader from "../../../../components/TitleHeader";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddItem, setSubmitItems } from "../../../../actions";
import { applyMiddleware } from "redux";
import axios from "axios";
import moment from "moment";

function AddItemBox({ ele, id, deleteItemBoxHandler }) {
  const state = useSelector((state) => state.itemReducer);

  const dispatch = useDispatch();
  const done = useRef(); // 등록 완료 시 회색 화면 처리용
  const [itemInfo, setItemInfo] = useState({});

  // 내용 입력 시,
  const inputHandler = (key) => (e) => {
    setItemInfo({ ...itemInfo, itemId: ele, [key]: e.target.value });
    dispatch(setAddItem(itemInfo));
    console.log(itemInfo);
    console.log(state);
  };

  // 등록 버튼 클릭 시,
  const submitItemHandler = (e) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    let STdt = moment(
      `${itemInfo.start_time_hour}:${itemInfo.start_time_minute} pm`,
      ["h:mm A"]
    ).format("HH:mm");
    let FIdt = moment(
      `${itemInfo.finish_time_hour}:${itemInfo.finish_time_minute} pm`,
      ["h:mm A"]
    ).format("HH:mm");

    const setStTime = `${year}-${month}-${day} ${STdt}:00`;
    const setFiTime = `${year}-${month}-${day} ${FIdt}:00`;

    let body = {
      memberId: "1", // 수정 필요
      marketId: "9", // 수정 필요
      itemName: itemInfo.itemName,
      foodCategory: itemInfo.category,
      itemAmount: itemInfo.quantity,
      itemPrice: itemInfo.price,
      itemSale: itemInfo.salePrice,
      saleStartTime: setStTime,
      saleEndTime: setFiTime,
      boardStatus: "판매중",
      // 이미지 파일 추가 필요
    };

    axios
      .post("/api/boards", body)
      .then(() => (done.current.id = "done"))
      .catch((err) => console.log(err));
  };

  //img 미리보기 관리
  const [imageUrl, setImageUrl] = useState(null);
  const imgRef = useRef();

  const onChangeImg = () => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];
    // console.log(file);

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    // console.log(imageUrl);

    setItemInfo({ ...itemInfo, itemId: ele, img: imageUrl });
  };
  //

  // 드롭박스 정보
  let hour = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let minute = ["00", "15", "30", "45"];
  let volume = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

  return (
    <>
      <AddItemBoxContainer>
        <div ref={done}></div>
        <h3>품목 {ele}</h3>
        <span
          id={ele}
          className="delete_box"
          onClick={() => deleteItemBoxHandler(ele)}
        >
          삭제
        </span>
        <div className="add_item_wrapper">
          <div className="add_item_content">
            <ul>
              <li>
                <div className="ctgTitle">상품명</div>
                <input id="itemName" onChange={inputHandler("itemName")} />
              </li>
              <li>
                <div className="ctgTitle">카테고리</div>
                <select onChange={inputHandler("category")}>
                  <option key="snack" value="분식">
                    분식
                  </option>
                  <option key="chicken" value="치킨">
                    치킨
                  </option>
                  <option key="soup" value="찌개">
                    찌개
                  </option>
                  <option key="chinese" value="중식">
                    중식
                  </option>
                  <option key="japanese" value="일식">
                    일식
                  </option>
                  <option key="occidental" value="양식">
                    양식
                  </option>
                  <option key="asian" value="아시안">
                    아시안
                  </option>
                  <option key="jokbal" value="족발/보쌈">
                    족발/보쌈
                  </option>
                  <option key="sidedish" value="반찬">
                    반찬
                  </option>
                  <option key="salad" value="샐러드">
                    샐러드
                  </option>
                  <option key="desert" value="카페/디저트">
                    카페/디저트
                  </option>
                </select>
              </li>
              <li>
                <div className="ctgTitle">수량</div>
                <select onChange={inputHandler("quantity")}>
                  {volume.map((volume, idx) => {
                    return (
                      <option key={volume} value={volume}>
                        {volume}
                      </option>
                    );
                  })}
                </select>
                개
              </li>
              <li>
                <div className="ctgTitle">정상가</div>
                <input onChange={inputHandler("price")}></input> 원
              </li>
              <li>
                <div className="ctgTitle">할인가</div>
                <input onChange={inputHandler("salePrice")}></input>원
                {/* <span>{100 - (state.salePrice / state.price) * 100}% 할인</span> */}
              </li>
              <li>
                <div className="ctgTitle">할인시간</div>
                <div className="start_time">
                  <select onChange={inputHandler("st_DL")}>
                    <option key="pm" value="pm">
                      오후
                    </option>
                    <option key="am" value="am">
                      오전
                    </option>
                  </select>
                  <select onChange={inputHandler("start_time_hour")}>
                    {hour.map((hour, idx) => {
                      return (
                        <option key={hour} value={hour}>
                          {hour}
                        </option>
                      );
                    })}
                  </select>
                  시
                  <select onChange={inputHandler("start_time_minute")}>
                    {minute.map((minute, idx) => {
                      return (
                        <option key={minute} value={minute}>
                          {minute}
                        </option>
                      );
                    })}
                  </select>
                  분 부터
                </div>
                {/* */}

                <div className="finish_time">
                  <select onChange={inputHandler("fi_DL")}>
                    <option key="pm" value="pm">
                      오후
                    </option>
                    <option key="am" value="am">
                      오전
                    </option>
                  </select>
                  <select onChange={inputHandler("finish_time_hour")}>
                    {hour.map((hour, idx) => {
                      return (
                        <option key={hour} value={hour}>
                          {hour}
                        </option>
                      );
                    })}
                  </select>
                  시
                  <select onChange={inputHandler("finish_time_minute")}>
                    {minute.map((minute, idx) => {
                      return (
                        <option key={minute} value={minute}>
                          {minute}
                        </option>
                      );
                    })}
                  </select>
                  분 까지
                </div>
              </li>
            </ul>
          </div>
          <AddImgContainer for="add_item_img_input" id="add_item_img_btn">
            {imageUrl ? (
              <img src={imageUrl}></img>
            ) : (
              <Icon
                icon="fluent:camera-add-48-filled"
                className="camera_icon"
              />
            )}
            <input
              // onChange={inputHandler("img")}
              onChange={onChangeImg}
              type="file"
              accept="image/*"
              className="add_item_img_input"
              ref={imgRef}
            />
          </AddImgContainer>
        </div>
        <button onClick={submitItemHandler}>등록</button>
      </AddItemBoxContainer>
    </>
  );
}

export default AddItemBox;

export const AddItemBoxContainer = styled.section`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(170, 170, 170, 1);
  margin-bottom: 10px;

  #done {
    width: 100%;
    height: 340px;
    /* border: 1px solid; */
    margin-bottom: -340px;
    background-color: rgba(170, 170, 170, 1);
    z-index: 1;
    opacity: 0.6;
  }

  button {
    background-color: #f24e1e;
    color: white;
    font-weight: 700;
    border-radius: 0.3rem;
    border: none;
    width: 60px;
    height: 30px;
    margin-left: 92%;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .delete_box {
    margin-left: 720px;
    margin-top: -20px;
    color: red;
    font-size: smaller;
    cursor: pointer;
  }

  h3 {
    color: red;
    margin-left: 14px;
    margin-bottom: 5px;
    /* border-bottom: 1px solid rgba(170, 170, 170, 1); */
  }

  .add_item_wrapper {
    display: flex;
    height: 250px;
    align-items: center;
  }

  .add_item_content {
    display: flex;
    align-items: center;
    width: 550px;
    height: 200px;
    /* border: 1px solid; */
  }

  ul {
    list-style: none;
    padding-left: 0px;
  }

  li {
    padding: 5px 0;
    display: flex;
    margin-left: 15px;
    align-items: center;

    .ctgTitle {
      font-weight: 700;
    }

    & #itemName {
      width: 380px;
    }

    .start_time {
      width: 200px;
    }

    .finish_time {
      width: 200px;
    }

    > div {
      width: 80px;
    }
  }

  input {
    height: 25px;
    margin-right: 2px;
  }

  select {
    height: 25px;
    margin-right: 2px;
    margin-left: 2px;
  }
`;
// 사진 등록 부분
const AddImgContainer = styled.label`
  background-color: #d9d9d9;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 2px solid red; */
  /* margin-right: 25px; */

  img {
    width: 200px;
    height: 200px;
    margin-right: -210px;
    /* border: 2px solid green; */
  }

  .add_item_img_input {
    width: 200px;
    height: 200px;
    cursor: pointer;
    opacity: 0;
  }

  .camera_icon {
    position: absolute;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
`;
