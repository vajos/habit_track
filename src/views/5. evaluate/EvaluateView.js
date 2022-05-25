import {useEffect, useState} from "react";
import {Alert, Button, DatePicker, Form, Input, message, Select, Space, Switch, TimePicker} from "antd";
import auth0 from "../../config/auth0";
import {Link, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateUser, resetUser} from "./../../user/userReducer";
import {RouteName} from "../../routes/routesnames";
import Paragraph from "antd/es/typography/Paragraph";
import moment from "moment";

export default function EvaluateView() {


    let {category} = useParams();

    console.log(category);

    return (
        <> <Space direction="vertical">
            <Paragraph>Wie möchten Sie ihre Fortschritte bewerten?</Paragraph>
            <Link to={"/definehabit/"+category+"/jaundnein"}>
                <Button>MIT JA ODER NEIN</Button>
            </Link>
            <Link to={"/definehabit/"+category+"/beitrag"}>
            <Button>MIT EINEM BEITRAG</Button>
            </Link>
        </Space>
        </>
    );
}