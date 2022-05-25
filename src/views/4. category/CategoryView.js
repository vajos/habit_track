import { useState } from "react";
import { Alert, Button, Form, Input, message } from "antd";
import auth0 from "../../config/auth0";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser, resetUser } from "./../../user/userReducer";
import EvaluateView from "../5. evaluate/EvaluateView";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function CategoryView() {
  return (
    <>
      <h1>Kaegorie auswählen:</h1>

      <Button onClick="hide" type="primary">
        Meditation
      </Button>
      <br />
      <Link
        to={{
          pathname: "/evaluate",
          // params: { message: "hhh" },
        }}
      >
        <Button
          type="primary"
          onClick={() => (
            <Route
              path="./evaluate"
              render={(props) => <EvaluateView message="value" {...props} />}
            />
          )}
        >
          Studium
        </Button>
      </Link>
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
