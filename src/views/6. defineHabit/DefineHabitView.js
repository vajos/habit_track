import { useState } from "react";
import {Alert, Button, Form, Input, message, Space} from "antd";
import auth0 from "../../config/auth0";
import { Link, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser, resetUser } from "./../../user/userReducer";
import { RouteName } from "../../routes/routesnames";
import Paragraph from "antd/es/typography/Paragraph";

export default function DefineHabitView() {


  return (
      <Space direction="vertical">
          <Paragraph>Definieren Sie Ihre Gewohnheit</Paragraph>
          <Input placeholder="Name der Gewohnheit" />
          <Input placeholder="Beschreibung(optional)" />
      </Space>
  );
}
