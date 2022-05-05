/* istanbul ignore file */
import { Route, Routes } from "react-router-dom";
import LoginView from "./LoginView";
import EvaluateView from "./EvaluateView";

export default function LoginRoutes() {
  return (
    <Routes>
      <Route index element={<EvaluateView />} />
    </Routes>
  );
}
