import {useEffect, useState} from "react";
import {Carousel, Input, Space} from "antd";
import SliderInput from "./SliderInput";

import moment from "moment";
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import {old_marked_state, user_meta_data_state} from "../../atoms/atoms";
import Paragraph from "antd/es/typography/Paragraph";
import {cloneDeep} from "lodash";

//DATABASE =>

export default function SliderView() {

    console.log("INSIDE SLIDER VIEW");
    const [user_data, setUserMetadata] = useRecoilState(user_meta_data_state);
    const [fff, setfff] = useRecoilState(old_marked_state);

    let habits = user_data.habits;




    function LogoutButton(props) {
        const {logout, isAuthenticated} = useAuth0();

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

    function Profil(props) {
        const {logout, isAuthenticated} = useAuth0();
        const navigate = useNavigate();

        function redirect() {
            navigate("/Profil");
        }
        return (
            isAuthenticated && (
                <button onClick={redirect.bind(this)}>
                    Profil
                </button>
            )
        );
    }

    function ContactUs(props) {
        const {logout, isAuthenticated} = useAuth0();
        const navigate = useNavigate();

        function redirect() {
            navigate("/contact");
        }
        return (
            isAuthenticated && (
                <button onClick={redirect.bind(this)}>
                    Contact US
                </button>
            )
        );
    }





    let tt = moment().format('YYYY-MM-DD').toString();


    const [plainOptions, setPlainOptions] = useState({plainOption:[], marked: [""]});
    const [slide_date, setSlideDate] = useState(tt);


    function getHabitsForSlide(date) {
        const plainOptions = {plainOption:[], marked: []};

        for (let i = 0; i < habits.length; i++) {
            let current_slide_date = date;
            let start_date = moment(habits[i].start_date.toString(), "YYYY-MM-DD");

            if (moment(current_slide_date).isSame(start_date)) {
                plainOptions.plainOption.push({ label: habits[i].habit_name, value: habits[i].habit_name });

                for (let b = 0; b < habits[i].marked.length; b++) {
                    if (moment(current_slide_date).isSame(habits[i].marked[b].date)) {
                        plainOptions.marked.push(habits[i].habit_name);
                        console.log("MARKIERT MUSS SEIN Date " + current_slide_date + " found: " + plainOptions.marked[plainOptions.marked.length-1]);
                    }
                }

                continue;
            }
            while (moment(start_date).isBefore(current_slide_date)) {
                start_date = start_date.add(habits[i].frequency_in_days, 'days').format('YYYY-MM-DD');
                start_date = moment(start_date.toString(), "YYYY-MM-DD");
                if (moment(current_slide_date).isSame(start_date)) {

                    plainOptions.plainOption.push({ label: habits[i].habit_name, value: habits[i].habit_name });
                    for (let b = 0; b < habits[i].marked.length; b++) {
                        if (moment(current_slide_date).isSame(habits[i].marked[b].date)) {
                            plainOptions.marked.push(habits[i].habit_name);
                            console.log("Date " + current_slide_date + " found: " + plainOptions.marked);
                        }
                    }
                    continue;
                }
            }

        }

        setfff(plainOptions.marked);

        return plainOptions;
    }


    const onChange = (from, to) => {
        if ((from === 2 && to === 0) || (from === 0 && to === 1) || (from === 1 && to === 2)) {



            let date = moment(slide_date, "YYYY-MM-DD");
            date = date.add(1, 'days').format('YYYY-MM-DD');
            setSlideDate(date.toString());
        }
        if ((from === 0 && to === 2) || (from === 1 && to === 0) || (from === 2 && to === 1)) {

            let date = moment(slide_date, "YYYY-MM-DD");
            date = date.subtract(1, 'days').format('YYYY-MM-DD');
            setSlideDate(date.toString());
        }

    };


    let slide = <SliderInput
        plainOptions={plainOptions.plainOption}
        date={slide_date}
        marked={plainOptions.marked} //TODO hier noch hinzufügen das es angeklickt wurde etc
    />;
    useEffect(() => {

        setPlainOptions(getHabitsForSlide(slide_date));


    }, [slide_date]);




    return (
        <>
            <Carousel dots={false} beforeChange={onChange} effect="fade">
                <div>
                    {slide}
                </div>
                <div>
                    {slide}
                </div>
                <div>
                    {slide}
                </div>
            </Carousel>
            <LogoutButton/>
            <Profil></Profil>
            <ContactUs></ContactUs>
        </>
    );
}
