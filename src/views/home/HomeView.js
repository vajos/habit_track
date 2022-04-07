import styled from "@emotion/styled";

const Headline = styled.h1`
  color: ${(props) => props.theme.colors.primary500};
`;

export default function HomeView() {
  return (
    <div>
      <Headline>Crap Stories</Headline>
    </div>
  );
}
