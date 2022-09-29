import styled from "styled-components";
import { Icon } from "@iconify/react";

function AddItemBox() {
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
  let volume = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <AddItemBoxContainer>
      <form>
        <div className="add_item_wrapper">
          <div className="add_item_content">
            <ul>
              <li>
                <div>품명</div>
                <input />
              </li>
              <li>
                <div>카테고리</div>
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
                <div>수량</div>
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
                <div>정상가</div>
                <input></input>원
              </li>
              <li>
                <div>할인가</div>
                <input></input>원
              </li>
              <li>
                <div>할인시간</div>
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
        <button>등록</button>
      </form>
    </AddItemBoxContainer>
  );
}

export default AddItemBox;

export const AddItemBoxContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  form {
    display: flex;
    flex-direction: column;
    /* border: 1px solid rgba(170, 170, 170, 1); */
    border: 1px solid;
    box-shadow: 5px 5px #f24e1e;
    height: 250px;
    border-radius: 1rem;

    > button {
      background-color: #f24e1e;
      color: white;
      font-weight: 700;
      border-radius: 0.3rem;
      border: none;
      width: 60px;
      height: 30px;
      margin-left: 620px;
      margin-bottom: 10px;
      cursor: pointer;
    }
  }

  .add_item_wrapper {
    display: flex;
    height: 230px;
    align-items: center;
    border-radius: 1rem;
  }

  .add_item_content {
    display: flex;
    align-items: center;
    width: 500px;
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
