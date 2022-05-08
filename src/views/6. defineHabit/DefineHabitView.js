import { useState } from "react";
import {Alert, Button, Form, Input, message, Space} from "antd";
import auth0 from "../../config/auth0";
import {Link, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser, resetUser } from "./../../user/userReducer";
import { RouteName } from "../../routes/routesnames";
import Paragraph from "antd/es/typography/Paragraph";

export default function DefineHabitView() {

    const [input,setInput] = useState("");
    let {category} = useParams();
    let {bewertung} = useParams();
  return (
      <Space direction="vertical">
          <Paragraph>Definieren Sie Ihre Gewohnheit</Paragraph>
          <Input onChange={(event)=>setInput(event.target.value)} placeholder="Name der Gewohnheit" />
          <Link to={"/timetable/"+category+"/"+ bewertung + "/" + input}>
              <Button>Weiter</Button>
          </Link>
      </Space>
  );
}
