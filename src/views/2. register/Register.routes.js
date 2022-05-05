import { useState } from "react";
import { Alert, Button, Form, Input, message, Space } from "antd";
import auth0 from "../../config/auth0";
import { Link, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser, resetUser } from "./../../user/userReducer";
import { RouteName } from "../../routes/routesnames";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const locationState = location.state;
  const navigate = useNavigate();

  return (
    <>
      {/* {errorMessage ? (
        <div style={{ marginBottom: "24px" }}>
          <Alert message={errorMessage} type="error" showIcon />
        </div>
      ) : null} */}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 10 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        // onFinish={handleSubmit}
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
        <Form.Item
          label="Repeat Password"
          name="repeatpassword"
          rules={[{ required: true, message: "Please repeat your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Link to="/public/register">
            <Button type="primary">Register</Button>
          </Link>
        </Form.Item>
      </Form>
    </>
  );
}
