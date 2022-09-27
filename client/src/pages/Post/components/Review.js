import styled from "styled-components";

function Review() {
  return (
    <ReviewContainer>
      <div id="review_title">
        <h2>후기</h2>
      </div>
      <div id="review_box">
        <div id="review_list">
          <div id="review">
            <div className="user_id">ab**</div>
            <span className="review_detail">
              <div className="review_content">
                마감 5분 남기고 가서 구매했어요 저렴한 가격에 잘 먹었습니다
              </div>
              <div className="review_date">9월 15일</div>
              <div className="review_delete_btn">X</div>
            </span>
          </div>
        </div>
        <form>
          <input
            type="text"
            id="review_write"
            placeholder="여기에 후기를 작성해주세요"
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
  }

  #review {
    display: flex;
    flex-direction: column;
    height: 60px;
    margin: 10px;

    .user_id {
      height: 30%;
      padding-left: 15px;
      font-size: 15px;
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
    margin: 0 4px 0 10px;
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
  }
`;
