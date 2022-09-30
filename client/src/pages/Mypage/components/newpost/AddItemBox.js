import styled from "styled-components";
import { Icon } from "@iconify/react";
import TitleHeader from "../../../../components/TitleHeader";
import { useState } from "react";

function AddItemBox({ deleteItemBoxHandler }) {
  const [price, setPrice] = useState({
    price: 0,
    salePrice: 0,
  });

  const inputPriceHandler = (key) => (e) => {
    setPrice({ ...price, [key]: e.target.value });
  };

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
        <h3>품목 1</h3>
        <span id="delete_box" onClick={deleteItemBoxHandler}>
          삭제
        </span>
        <div className="add_item_wrapper">
          <div className="add_item_content">
            <ul>
              <li>
                <div className="ctgTitle">상품명</div>
                <input id="itemName" />
              </li>
              <li>
                <div className="ctgTitle">카테고리</div>
                <select>
                  <option key="snack" value="snack">
                    분식
                  </option>
                  <option key="chicken" value="chicken">
                    치킨
                  </option>
                  <option key="soup" value="soup">
                    찌개
                  </option>
                  <option key="chinese" value="chinese">
                    중식
                  </option>
                  <option key="japanese" value="japanese">
                    일식
                  </option>
                  <option key="occidental" value="occidental">
                    양식
                  </option>
                  <option key="asian" value="asian">
                    아시안
                  </option>
                  <option key="jokbal" value="jokbal">
                    족발/보쌈
                  </option>
                  <option key="sidedish" value="sidedish">
                    반찬
                  </option>
                  <option key="salad" value="salad">
                    샐러드
                  </option>
                  <option key="desert" value="desert">
                    카페/디저트
                  </option>
                </select>
              </li>
              <li>
                <div className="ctgTitle">수량</div>
                <select>
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
                <input onChange={inputPriceHandler("price")}></input> 원
              </li>
              <li>
                <div className="ctgTitle">할인가</div>
                <input onChange={inputPriceHandler("salePrice")}></input>원
                <span>{100 - (price.salePrice / price.price) * 100}% 할인</span>
              </li>
              <li>
                <div className="ctgTitle">할인시간</div>
                <div className="start_time">
                  <select>
                    <option key="am" value="am">
                      오전
                    </option>
                    <option key="pm" value="pm">
                      오후
                    </option>
                  </select>
                  <select>
                    {hour.map((hour, idx) => {
                      return (
                        <option key={hour} value={hour}>
                          {hour}
                        </option>
                      );
                    })}
                  </select>
                  시
                  <select>
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
                  <select>
                    <option key="am" value="am">
                      오전
                    </option>
                    <option key="pm" value="pm">
                      오후
                    </option>
                  </select>
                  <select>
                    {hour.map((hour, idx) => {
                      return (
                        <option key={hour} value={hour}>
                          {hour}
                        </option>
                      );
                    })}
                  </select>
                  시
                  <select>
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
          <div className="add_item_img_wrapper">
            <label for="add_item_img_input" id="add_item_img_btn">
              <Icon
                icon="fluent:camera-add-48-filled"
                className="camera_icon"
              />
              <input
                type="file"
                accept="image/*"
                className="add_item_img_input"
              />
            </label>
          </div>
        </div>
      </AddItemBoxContainer>
    </>
  );
}

export default AddItemBox;

export const AddItemBoxContainer = styled.section`
  display: flex;
  flex-direction: column;
  /* border-top: 1px solid rgba(170, 170, 170, 1); */
  border-bottom: 1px solid rgba(170, 170, 170, 1);
  margin-bottom: 10px;

  #delete_box {
    margin-left: 745px;
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
    width: 600px;
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

  // 사진 등록 부분
  .add_item_img_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    /* border: 1px solid; */

    label {
      background-color: #d9d9d9;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & .add_item_img_input {
      width: 150px;
      height: 180px;
      cursor: pointer;
      opacity: 0;
    }

    & .camera_icon {
      position: absolute;
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
  }
`;
