import styled from "styled-components";

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit); //현 페이지 번호

  return (
    <>
      <Nav>
        {/* 화살표 기호 '<' */}
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          {" "}
          &lt;
        </Button>

        {/* 숫자 부분 */}
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}

        {/* 화살표 기호 '>' */}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: none;
  color: grey;
  font-size: 1rem;

  &:hover {
    color: rgba(255, 74, 85, 1);
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    color: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    font-weight: bold;
    color: rgba(255, 74, 85, 1);
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
