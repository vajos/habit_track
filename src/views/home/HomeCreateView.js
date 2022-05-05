import { Form, message } from "antd";
import HomeFormFields from "./components/HomeFormFields";
import { useNavigate } from "react-router-dom";
import { RouteName } from "../../routes/routesnames";
import useStoryCreate from "./components/useStoryCreate";

export default function HomeCreateView() {
  const navigate = useNavigate();
  const { operations, state } = useStoryCreate();

  const handleFinish = async (values) => {
    try {
      await operations.handleCreate(values);
      message.success("Story created!");
      navigate(RouteName.HOME);
    } catch (err) {
      console.log("err", err);
      message.error("Could not store story");
    }
  };

  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 10 }}
      onFinish={handleFinish}
    >
      <HomeFormFields isLoading={state.isUploading} />
    </Form>
  );
}
