
import {Button, Input, Space} from "antd";
import {Link, useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import {category_state, user_meta_data_state} from "../../atoms/atoms";
import {useAuth0} from "@auth0/auth0-react";
import {cloneDeep} from "lodash";
import Paragraph from "antd/es/typography/Paragraph";
import {useEffect, useState} from "react";

export default function CategoryView() {


    const b = ["Gesundheit", "Meditation", "Studium", "Sport", "Unterhaltung"];
    const [category, setCategory] = useRecoilState(category_state);
    const navigate = useNavigate();
    const [userMetadata, setUserMetadata] = useRecoilState(user_meta_data_state);
    function redirect(category) {
        setCategory(category);
        navigate("/evaluate")
    }

    const {user, isAuthenticated, getAccessTokenSilently} = useAuth0();
    function add_user_Data(user_data) {
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

                } catch (e) {
                    console.log("error adding habit" + e);
                }

            };
            sUserMetadata().then(r => {
                //setUserMetadata(user_data);

            });
        }
    }

    function DeleteHabit(props) {
        const {logout, isAuthenticated} = useAuth0();
        const [input, setInput] = useState("");

        function deletetry() {

            let user_metadata = cloneDeep(userMetadata);


            for (let i = 0; i < user_metadata.habits.length; i++) {
                if (user_metadata.habits[i].habit_name === input) {
                    user_metadata.habits.splice(i,1);

                    let user_data = {
                        user_metadata
                    };



                    add_user_Data(user_data);
                    setUserMetadata(user_metadata);
                    navigate("/slide");
                }
            }

        }

        return (
            isAuthenticated && (
                <Space direction="vertical">
                    <Paragraph>Schreibe die Gewohnheit die du löschen willst</Paragraph>
                    <Input onChange={(event) => setInput(event.target.value)} placeholder="Name der Gewohnheit"/>
                    <button onClick={deletetry.bind(this)}> Lösche</button>
                </Space>

            )
        );
    }

    return (
        <>
            <h1>Kategorie auswählen um Gewohnheit hinzufügen:</h1>


            {b.map(x=>{
                return (<Button key= {x} type="primary" onClick={redirect.bind(this,x)}>{x}</Button>)
            })}

            <h1>HIER LÖSCHEN</h1>
            <DeleteHabit></DeleteHabit>
        </>
    );
}