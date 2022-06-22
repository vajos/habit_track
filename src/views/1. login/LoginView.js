import {useEffect, useState} from "react";
import {Alert, Button, Form, Input, message, Space} from "antd";
import auth0 from "../../config/auth0";
import {Link, Routes, useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateUser, resetUser} from "./../../user/userReducer";
import {RouteName} from "../../routes/routesnames";
import {useAuth0} from "@auth0/auth0-react";
import SliderView from "../3. slidercalender/SliderView";
import SliderInput from "../3. slidercalender/SliderInput";
import {useRecoilState} from "recoil";
import {category_state, user_meta_data_state} from "../../atoms/atoms";

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


    function LoginButton(props) {

//TODO Show Slides only when logged in, Make Button on Top
        return (
            !isAuthenticated && (
                <button onClick={() => loginWithRedirect({

                    redirectUri: "https://vajos.github.io/habit_track/" //http://localhost:3000/habit_track/" //Beim pushen auf https://vajos.github.io/habit_track/ ändern
                })}>
                    Anmelden
                </button>
            )
        );
    }

    function LogoutButton(props) {

        const {logout, user, isAuthenticated, getAccessTokenSilently} = useAuth0();
        const [userMetadata, setUserMetadata] = useRecoilState(user_meta_data_state);

        const navigate = useNavigate();

        let user_data = {

            "user_metadata": {
                "habits": [],
                "name": "",
                "alter": 0
            }

        };

        let user_data_2 = {
                "habits": [],
                "name": "",
                "alter": 0
            }
        ;

        useEffect(() => {


            if (isAuthenticated) {

                let response;
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

                        response = await metadataResponse.json();
                        const {user_metadata} = response;
                        setUserMetadata(user_metadata);
                    } catch (e) {
                        console.log(e);
                    }
                };


                getUserMetadata().then(r => {


                    const {user_metadata} = response;

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
                        } catch (e) {
                            console.log(e);
                        }
                    };
                    //wenn noch keine daten beim user drinnen fütter mit leeren objects
                    const isEmpty = Object.keys(user_metadata).length === 0;

                    if (isEmpty) {
                        sUserMetadata().then(r => null);
                        setUserMetadata(user_data_2);
                    }
                    navigate("/slide");


                });

            }


        }, [getAccessTokenSilently, user?.sub]);


        return (
            isAuthenticated && (
                <button onClick={() => logout({
                    returnTo: "https://vajos.github.io/habit_track/"
                })}>
                    Abmelden
                </button>
            )
        );
    }


    return (
        // <>
        <main className="column">
            <h1>Auth0 Login</h1>
            <p>e-mail: beispiel@hft-stuttgart.de</p>
            <p>passwort: Test12345</p>
            {error && <p>Authentication Error</p>}

            <LoginButton/>
            <LogoutButton/>


        </main>


    );
}