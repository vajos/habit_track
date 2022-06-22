import {useEffect, useState} from "react";
import {Alert, Button, DatePicker, Form, Input, InputNumber, message, Select, Space, Switch, TimePicker} from "antd";
import auth0 from "../../config/auth0";
import {Link, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateUser, resetUser} from "./../../user/userReducer";
import {RouteName} from "../../routes/routesnames";
import Paragraph from "antd/es/typography/Paragraph";
import moment from "moment";
import {useRecoilState} from "recoil";
import {category_state, evaluate_state, habit_name_state, user_meta_data_state} from "../../atoms/atoms";
import {useAuth0} from "@auth0/auth0-react";
import {cloneDeep} from "lodash";

export default function EvaluateView() {

    const [input, setInput] = useState(null);
    const [frequency, setfrequency] = useState(null);
    const [date, setDate] = useState(null);

    const navigate = useNavigate();

    const {user, isAuthenticated, getAccessTokenSilently} = useAuth0();
    const [userMetadata, setUserMetadata] = useRecoilState(user_meta_data_state);

    let user_data = {
        "user_metadata":
            {
                "habits":
                    [
                        {
                            "habit_name": "test",
                            "start_date": "2022-05-18",
                            "end_date": null,
                            "frequency_in_days": 3,
                            "marked":[]
                        },
                        {
                            "habit_name": "zocfdsfdken",
                            "start_date": "2022-04-18",
                            "end_date": null,
                            "frequency_in_days": 5,
                            "marked":[]
                        },
                    ],
                "name": "",
                "alter": 0
            }
    };

    function add_user_Data(user_data) {
        console.log(isAuthenticated);
        if (isAuthenticated) {
            const sUserMetadata = async () => {
                const domain = "https://dev-xc-yysm1.eu.auth0.com";
                console.log("TEST");
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
                    console.log("error adding habit" + e);
                }

            };
            sUserMetadata().then(r => {
                //setUserMetadata(user_data);

            });
        }
    }


    function redirect() {

        if (input !== null && frequency !== null && date !== null) {

            let new_habit = {
                "habit_name": input,
                "start_date": date,
                "end_date": null,
                "frequency_in_days": frequency,
                "marked":[]
            };

            console.log("HIER HIER HIER HIER ");
            console.log(userMetadata);
            let user_metadata = cloneDeep(userMetadata);

            console.log(user_metadata);
            //TODO das problem ist hier das user_metadata neu hinzufügt werden muss sprich so wie bei loginview die testdaten + die neuen
            user_metadata.habits.push(new_habit);
            console.log(user_metadata);
            let user_data = {
                user_metadata
            };

            console.log(user_data);


            add_user_Data(user_data);
            setUserMetadata(user_metadata);
            navigate("/slide")
        }

    }

    function onChangeStartDate(date, dateString) {

        setDate(dateString);

    }

    const onChangeFrequency = (value) => {
        setfrequency(value);
    };

    const onChangeDate = (value) => {
        console.log('Name', value);
    };
    return (


        <Space direction="vertical">


            <Space direction="vertical">
                <Paragraph>Definieren Sie Ihre Gewohnheit</Paragraph>
                <Input onChange={(event) => setInput(event.target.value)} placeholder="Name der Gewohnheit"/>

            </Space>

            <Paragraph>Wie oft wird die Gewohnheit wiederholt in Tagen?</Paragraph>
            <InputNumber min={1} onChange={onChangeFrequency}/>;

            <Space direction="horizontal">
                <Paragraph>Anfangsdatum wählen</Paragraph>
                <DatePicker onChange={onChangeStartDate}/>
                <Button onClick={redirect.bind(this)}>Weiter</Button>
            </Space>
        </Space>
    );
}