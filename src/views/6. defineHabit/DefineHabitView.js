import { useState } from "react";
import {Alert, Button, Form, Input, message, Space} from "antd";
import auth0 from "../../config/auth0";
import {Link, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser, resetUser } from "./../../user/userReducer";
import { RouteName } from "../../routes/routesnames";
import Paragraph from "antd/es/typography/Paragraph";
import {useRecoilState} from "recoil";
import {evaluate_state, habit_name_state} from "../../atoms/atoms";

export default function DefineHabitView() {

    const [input,setInput] = useState("");

    const [habit_name, sethabit_name] = useRecoilState(habit_name_state);
    const navigate = useNavigate();

    function redirect() {
        sethabit_name(input);
        navigate("/timetable")
    }

  return (
      <Space direction="vertical">
          <Paragraph>Definieren Sie Ihre Gewohnheit</Paragraph>
          <Input onChange={(event)=>setInput(event.target.value)} placeholder="Name der Gewohnheit" />
              <Button onClick={redirect.bind(this)}>Weiter</Button>
      </Space>
  );
}
