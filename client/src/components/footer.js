import styled from "styled-components";

const FooterContainer = styled.footer`
  margin-top: 40px;
  text-align: center;
  background-color: #f8f9f9;
  height: 80px;
`;

function Footer() {
  return (
    <FooterContainer>
      Copyright © 2022 seb39_team_032. All Rights Reserved.
    </FooterContainer>
  );
}

export default Footer;
