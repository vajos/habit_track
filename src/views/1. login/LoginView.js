import { useState } from "react";
import { Alert, Button, Form, Input, message, Space } from "antd";
import auth0 from "../../config/auth0";
import { Link, Routes, useLocation, useNavigate } from "react-router-dom";
import { updateUser, resetUser } from "./../../user/userReducer";
import { RouteName } from "../../routes/routesnames";

export default function LoginView() {
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const locationState = location.state;
  const navigate = useNavigate();
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const handleSubmit = (values) => {
    auth0.client.login(
      {
        realm: "Username-Password-Authentication",
        username: values.username,
        password: values.password,
      },
      (err, authResult) => {
        if (err) {
          setErrorMessage(`Login failed: ${err.description}`);
          // dispatch(resetUser());
          return;
        }
        message.success("Login successful");
        // dispatch(updateUser({ accessToken: authResult.accessToken }));

        if (locationState) {
          navigate(locationState.from);
        } else {
          navigate("/");
        }
      }
    );
  };

  return (
    <div style={{ marginTop: "200px" }}>
      {errorMessage ? (
        <div style={{ marginBottom: "24px" }}>
          <Alert message={errorMessage} type="error" showIcon />
        </div>
      ) : null}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 10 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>

          <Link to="/public/register">
            <Button style={{ margin: "0 8px" }} type="button">
              Register
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}
