import {useEffect, useState} from "react";
import {Alert, Button, DatePicker, Form, Input, message, Select, Space, Switch, TimePicker} from "antd";
import auth0 from "../../config/auth0";
import {Link, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateUser, resetUser} from "./../../user/userReducer";
import {RouteName} from "../../routes/routesnames";
import Paragraph from "antd/es/typography/Paragraph";
import moment from "moment";
import {useRecoilState} from "recoil";
import {category_state, evaluate_state} from "../../atoms/atoms";

export default function EvaluateView() {


    const [evaluate, setEvaluate] = useRecoilState(evaluate_state);
    const navigate = useNavigate();

    function redirect(evaluate) {
        setEvaluate(evaluate);
        navigate("/definehabit")
    }


    return (
        <> <Space direction="vertical">
            <Paragraph>Wie möchten Sie ihre Fortschritte bewerten?</Paragraph>
                <Button onClick={redirect.bind(this,"JA_NEIN")}>MIT JA ODER NEIN</Button>
            <Button onClick={redirect.bind(this,"BEITRAG")}>MIT EINEM BEITRAG</Button>
        </Space>
        </>
    );
}