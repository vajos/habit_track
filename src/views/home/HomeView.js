import styled from "@emotion/styled";
import Story from "./components/Story";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";
import { RouteName } from "../../routes/routesnames";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetUser } from "../../user/userReducer";
import { useLazyQuery } from "@apollo/client";
import getRandomStoryQuery from "./gql/getRandomStory.query";

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
  const dispatch = useDispatch();

  const [getRandomStory, { loading, data }] = useLazyQuery(getRandomStoryQuery);

  useEffect(() => {
    getRandomStory();
  }, [getRandomStory]);

  const handleRandom = () => getRandomStory();
  const handleLogout = () => dispatch(resetUser());

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <StoryContainer>
      <Story story={data.getRandomStory.story} />
      <div style={{ marginTop: "30px" }}>
        <Space align="center">
          <Button type="primary" onClick={handleRandom}>
            show me another one
          </Button>
          <span>or</span>
          <Link to={`${RouteName.HOME}/create`}>
            <Button type="primary">add one yourself</Button>
          </Link>
          <span>or</span>
          <Button type="ghost" onClick={handleLogout}>
            Logout
          </Button>
        </Space>
      </div>
    </StoryContainer>
  );
}
