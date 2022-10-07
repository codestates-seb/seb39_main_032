import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      Copyright © 2022 seb39_team_032.
      {/* <br />
      All Rights Reserved. */}
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  /* margin-top: 40px; */
  text-align: center;
  /* background-color: #f8f9f9; */
  height: 65px;
  position: sticky;
  bottom: 0;
  width: 100%;
`;
