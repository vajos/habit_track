/* istanbul ignore file */
import { Route, Routes } from "react-router-dom";
import LoginView from "./LoginView";
import EvaluateView from "./EvaluateView";

export default function LoginRoutes(message) {
  return (
    <Routes>
      {console.log("message")}
      <Route index element={<EvaluateView message={message} />} />
    </Routes>
  );
}
