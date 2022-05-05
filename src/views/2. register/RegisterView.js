import styled from "@emotion/styled";
import { Fragment } from "react";

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    marign: 1rem;
  }
`;

export default function HomeView() {
  return <Fragment>Hallo ich bin eine neue View</Fragment>;
}
