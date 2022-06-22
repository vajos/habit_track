import { Typography } from "antd";
import styled from "@emotion/styled";

const PunchoutText = styled.div`
  display: inline-block;
  background-color: ${(props) => props.theme.colors.primary500};
  color: white;
  font-size: 12px; /* Responsive font size */
  font-weight: bold;
  transform: translate(50%, -70%) rotate(-5deg); /* Position text in the middle */
`;

const HeaderContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Typography.Title style={{ margin: 0, fontSize: "48px" }}>
        Habit Track
      </Typography.Title>
      <PunchoutText>Just start NOW</PunchoutText>
    </HeaderContainer>
  );
}
