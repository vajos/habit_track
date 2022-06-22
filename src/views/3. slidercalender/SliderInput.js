import {Button, Checkbox} from "antd";
import {Fragment, useState,useEffect} from "react";
import {Link} from "react-router-dom";
import Text from "antd/es/typography/Text";
import {cloneDeep} from "lodash";
import {useRecoilState} from "recoil";
import {old_marked_state, user_meta_data_state} from "../../atoms/atoms";
import * as JS from "lodash";
import {useAuth0} from "@auth0/auth0-react";

const CheckboxGroup = Checkbox.Group;

export default function SliderInput({plainOptions, date, marked}) {

    const {user, isAuthenticated, getAccessTokenSilently} = useAuth0();
    const [userMetadata, setUserMetadata] = useRecoilState(user_meta_data_state);


    const [mm, setmm] = useState(marked);

    let checkbox =  <CheckboxGroup
        options={plainOptions}
        onChange={useOnChange}
        style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            fontWeight: "20px",
            margin: "20px",
        }}
    />;

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


    // TODO marked zur Datenbank einfügen
    // TODO gewohnheit entfernen seite machen
    function useOnChange(e) {

        console.log("e: " + e);
        console.log("marked: " + mm);

        let element_markiert = mm.length < e.length;
        if(element_markiert){
            let difference = e.filter(x => !mm.includes(x));
            let clicked_habit = difference.toString();
            console.log("markiert wurde: " + difference);
            //TODO find element if not exists add it to databse
            let new_marked_habit = {date: date};


            let user_metadata = cloneDeep(userMetadata);



            let result = null;
            for (let i = 0; i < user_metadata.habits.length; i++) {
                if (user_metadata.habits[i].habit_name === clicked_habit) {

                    let found= false;
                    for(let b = 0; b<user_metadata.habits[i].marked.length;b++){
                        if(user_metadata.habits[i].marked[b].date === date){
                            found = true;
                            break;
                        }
                    }
                    if(!found){
                        user_metadata.habits[i].marked.push(new_marked_habit);
                    }



                    break;
                }
            }





            let user_data = {
                user_metadata
            };

            console.log(user_data);


            add_user_Data(user_data);
            setUserMetadata(user_metadata);


        }



        let element_UNmarkiert = mm.length > e.length;
        if(element_UNmarkiert){
            let difference = mm.filter(x => !e.includes(x));
            console.log("UNmarkiert wurde: " + difference);
            let clicked_habit = difference.toString();

            //TODO find element and delete it from user_metdata
            let user_metadata = cloneDeep(userMetadata);



            let result = null;
            for (let i = 0; i < user_metadata.habits.length; i++) {
                //console.log("habit name: " + user_metadata.habits[i].habit_name);
                //console.log("clicked habit: " + clicked_habit);
                if (user_metadata.habits[i].habit_name === clicked_habit) {
                    //console.log("GEFUNDEN");

                    for(let b = 0; b<user_metadata.habits[i].marked.length;b++){
                        if(user_metadata.habits[i].marked[b].date === date){
                            user_metadata.habits[i].marked.splice(b,1);
                            console.log("gelöscht");
                        }
                    }
                    break;
                }
            }


            let user_data = {
                user_metadata
            };

            add_user_Data(user_data);
            setUserMetadata(user_metadata);

        }

        marked = e;
        setmm(e);
    }


    return (
        <>

            <div
                style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    height: "400px",
                    padding: "20px",
                    backgroundColor: "#FF0000",
                    flexDirection: "column",
                }}
            >

                <Text>{date}</Text>
                {checkbox}
                <Link to={"/category"}>
                    <Button type="primary" shape="circle">
                        ADD OR DELETE HABIT
                    </Button>
                </Link>
            </div>
        </>
    );
}
