import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import moment from "moment";

function Review({ reviewList, marketId }) {
  const API_URL = process.env.REACT_APP_API_URL;
  const accessToken = localStorage.getItem("accessToken");
  axios.defaults.headers.common["authorization"] = accessToken; // 여기서는 이렇게 지정해줘야 get요청으로 리뷰 리스트 불러올 때 올바르게 불러와짐.

  const [review, setReview] = useState("");

  const inputHandler = (e) => {
    setReview(e.target.value);
  };

  const rvSubmitHandler = (e) => {
    if (review.length < 5) {
      alert("5자 이상 작성해야 합니다");
      return e.preventDefault();
    }

    axios
      .post(`${API_URL}/api/reviews/${marketId}`, {
        // headers: {
        //   authorization: accessToken,
        // },

        reviewContent: review,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const rvDeleteHandler = (e) => {
    axios
      .delete(`${API_URL}/api/reviews/${e.target.id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
  };

  return (
    <ReviewContainer>
      <div id="review_title">
        <h2>후기</h2>
      </div>
      <div id="review_box">
        <div id="review_list">
          <div id="review">
            {reviewList.map((review, idx) => {
              return (
                <>
                  <div className="user_id" key={idx}>
                    {review.memberEmail.slice(0, 2)}**
                  </div>
                  <span className="review_detail">
                    <div className="review_content">{review.reviewContent}</div>
                    <div className="review_date">
                      {moment(
                        `${review.reviewCreateAt}`,
                        "YYYY-MM-DD HH:mm:ss"
                      ).format("MM월 DD일")}
                    </div>
                    {review.checkOwner === 1 ? (
                      <div
                        className="review_delete_btn"
                        id={review.reviewId}
                        onClick={rvDeleteHandler}
                      >
                        X
                      </div>
                    ) : null}
                  </span>
                </>
              );
            })}
          </div>
        </div>
        <form onSubmit={rvSubmitHandler}>
          <input
            type="text"
            id="review_write"
            placeholder="여기에 후기를 작성해주세요"
            onChange={inputHandler}
          ></input>
          <button type="submit">등록</button>
        </form>
      </div>
    </ReviewContainer>
  );
}

export default Review;

const ReviewContainer = styled.section`
  #review_title {
    border-top: 2px solid;
    width: 800px;
    margin-top: 90px;
    padding-top: 10px;
  }

  #review_box {
    margin-top: 30px;
    border: 1px solid rgba(170, 170, 170, 1);
    border-radius: 0.5rem;
    width: 800px;
    height: 600px;
  }

  #review_list {
    height: 90%;
    overflow: auto;
  }

  #review {
    display: flex;
    flex-direction: column;
    height: 55px;
    margin: 10px;

    .user_id {
      height: 30%;
      padding-left: 15px;
      font-size: 13px;
      margin-top: 9px;
    }

    .review_detail {
      display: flex;
      height: 70%;
      font-size: 15px;
    }
  }

  .review_content {
    background-color: #ffeeee;
    border-radius: 2rem;
    padding: 10px 15px;
  }

  .review_date {
    padding: 12px 10px;
    font-size: smaller;
  }

  .review_delete_btn {
    cursor: pointer;
    padding: 12px 0;
    margin-left: -5px;
    font-size: smaller;
    color: red;
  }

  #review_write {
    border: 1px solid #528cfc;
    border-radius: 0.3rem;
    margin: 5px 4px 0 10px;
    width: 90%;
    height: 35px;
    :focus {
      outline: none;
    }
  }

  button {
    background-color: #528cfc;
    border: none;
    height: 35px;
    width: 60px;
    border-radius: 2rem;
    color: white;
    font-weight: 700;
    cursor: pointer;
    :hover {
      background-color: #4070ff;
    }
  }
`;
