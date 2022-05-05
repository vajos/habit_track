import { Card } from "antd";
import styled from "@emotion/styled";

const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export default function Story({ story }) {
  return (
    <Card title={story.title} style={{ width: "60%" }}>
      <ImageWrapper>
        <img src={story.imageUrl} width="60%" alt="" />
      </ImageWrapper>
    </Card>
  );
}
