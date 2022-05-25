import styled from "@emotion/styled";

const FooterContainer = styled.div`
  text-align: center;
`;

export default function Footer() {
  const currentDate = new Date();

  return (
    <FooterContainer>
      <small>© ADIS und Co. {currentDate.getFullYear()}</small>
    </FooterContainer>
  );
}
