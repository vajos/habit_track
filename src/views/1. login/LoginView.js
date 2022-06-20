import {useEffect, useState} from "react";
import {Alert, Button, Form, Input, message, Space} from "antd";
import auth0 from "../../config/auth0";
import {Link, Routes, useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateUser, resetUser} from "./../../user/userReducer";
import {RouteName} from "../../routes/routesnames";
import {useAuth0} from "@auth0/auth0-react";

export default function LoginView() {
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState("");
    const location = useLocation();
    const locationState = location.state;
    const navigate = useNavigate();

    const tailLayout = {
        wrapperCol: {offset: 8, span: 16},
    };

    const {loginWithRedirect, isAuthenticated} = useAuth0();
    const {isLoading, error} = useAuth0();

    loginWithRedirect({
        appState: {target: '/habit_track'}
    }).then(r => null)
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
        const {logout, isAuthenticated} = useAuth0();
        return (
            isAuthenticated && (
                <button onClick={() => logout()}>
                    Abmelden
                </button>
            )
        );
    }

    const Profile = () => {
        const {user, isAuthenticated, getAccessTokenSilently} = useAuth0();
        const [userMetadata, setUserMetadata] = useState(null);


        let user_data = {
            "user_metadata":
                {
                    "habits":
                        [
                            {
                                "habit_name": "test",
                                "start_date": "2022-06-18",
                                "end_date": null,
                                "frequency_in_days": 3,
                            },
                            {
                                "habit_name": "zocfdsfdken",
                                "start_date": "2022-06-18",
                                "end_date": null,
                                "frequency_in_days": 5,
                            },
                        ]
                }
        };




        useEffect(() => {


            if (isAuthenticated) {
                const sUserMetadata = async () => {
                    const domain = "https://dev-xc-yysm1.eu.auth0.com";

                    try {
                        const accessToken = await getAccessTokenSilently({
                            audience: `${domain}/api/v2/`,
                            scope: "update:current_user_metadata",
                        });


                        const userDetailsByIdUrl = `${domain}/api/v2/users/${user.sub}`;
                        const metadataResponse = await fetch(userDetailsByIdUrl, {
                            method: 'PATCH',

                            headers: {
                                Authorization: `Bearer ${accessToken}`,
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(user_data),
                        })

                        let user_metadata = await metadataResponse.json();
                        console.log(user_metadata)
                    } catch (e) {
                        console.log(e);
                    }
                };

                sUserMetadata().then(r => {
                        const getUserMetadata = async () => {
                            const domain = "https://dev-xc-yysm1.eu.auth0.com";

                            try {
                                const accessToken = await getAccessTokenSilently({
                                    audience: `${domain}/api/v2/`,
                                    scope: "read:current_user",
                                });

                                const userDetailsByIdUrl = `${domain}/api/v2/users/${user.sub}`;

                                const metadataResponse = await fetch(userDetailsByIdUrl, {
                                    headers: {
                                        Authorization: `Bearer ${accessToken}`,

                                    },
                                });

                                const {user_metadata} = await metadataResponse.json();

                                setUserMetadata(user_metadata);
                            } catch (e) {
                                console.log(e.message);
                            }
                        };

                        getUserMetadata().then(r => null)
                    }
                );
            }


        }, [getAccessTokenSilently, user?.sub]);


        return (
            isAuthenticated && (
                <div>
                    <img src={user.picture} alt={user.name}/>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <h3>User Metadata</h3>
                    <p>{JSON.stringify(user)}</p>
                    {userMetadata ? (
                        <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
                    ) : (
                        "No user metadata defined"
                    )}
                </div>
            )
        );
    };


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