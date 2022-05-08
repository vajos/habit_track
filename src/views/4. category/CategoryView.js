import { useState } from "react";
import { Alert, Button, Form, Input, message } from "antd";
import auth0 from "../../config/auth0";
import { Link, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser, resetUser } from "./../../user/userReducer";
import { RouteName } from "../../routes/routesnames";

export default function CategoryView() {
  return (
      <>

    <h1>Kaegorie auswählen:</h1>

    <Button onclick="hide" type="primary" >Meditation</Button>
    <br />
    <Button type="primary">Studium</Button>
    <br />
    <Button type="primary">Sport</Button>
    <br />
    <Button type="primary">Unterhaltung</Button>
    <br />
    <Button type="primary">Soziales</Button>
    <br />
    <Button type="primary">Gesundheten</Button>
    <br />
    <Button type="primary">Ernähtung</Button>
    <br />
    <Button type="primary">Zuhause</Button>
    <br />
    <Button type="primary">Im Freien</Button>
    <br />
    <Button type="primary">Kunst</Button>
    <br />
    <Button type="primary">Arbeit</Button>
    <br />
    <Button type="primary">Anderes</Button>
    <br />
    <Button type="primary">kategorie erstellen</Button>
    <br />


      </>
  );
}