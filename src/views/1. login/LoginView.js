import { useState } from "react";
import { Alert, Button, Form, Input, message, Space } from "antd";
import auth0 from "../../config/auth0";
import { Link, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser, resetUser } from "./../../user/userReducer";
import { RouteName } from "../../routes/routesnames";
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginView() {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const locationState = location.state;
  const navigate = useNavigate();

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { isLoading, error } = useAuth0();

  function LoginButton(props) {
    return (
      !isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>
          Anmelden
        </button>
      )
    );
  }
  
  function LogoutButton(props) {
    const { logout, isAuthenticated } = useAuth0();
    return (
      isAuthenticated && (
        <button onClick={() => logout()}>
          Abmelden
        </button>
      )
    );
  }

  function Profile(props) {
    const { user, isAuthenticated } = useAuth0();


    if(isAuthenticated){
        console.log(user.user_metadata);
    }
    //console.log(user.user_metadata)
    return (
      isAuthenticated && (
          <p>{JSON.stringify(user)}</p>

      )
    );
  }
  


  // const handleSubmit = (values) => {
  //   auth0.client.login(
  //     {
  //       realm: "Username-Password-Authentication",
  //       username: values.username,
  //       password: values.password,
  //     },
  //     (err, authResult) => {
  //       if (err) {
  //         setErrorMessage(`Login failed: ${err.description}`);
  //         dispatch(resetUser());
  //         return;
  //       }
  //       message.success("Login successful");
  //       dispatch(updateUser({ accessToken: authResult.accessToken }));

  //       if (locationState) {
  //         navigate(locationState.from);
  //       } else {
  //         navigate("/slide");
  //       }
  //     }
  //   );
  // };

  return (
  // <>
      <main className="column">
        <h1>Auth0 Login</h1>
        <p>e-mail: beispiel@hft-stuttgart.de</p>
        <p>passwort: Test12345</p>
        {error && <p>Authentication Error</p>}
            <LoginButton/>
            <LogoutButton/>
            <Profile></Profile>

      </main>

  

        /* isAuthenticatedd && (
        <button onClick={() => logout()}>
          Abmelden
        </button>
    )
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
    </> */
  );
}