/* istanbul ignore file */
import { Route, Routes } from "react-router-dom";
import LoginView from "./LoginView";

export default function LoginRoutes() {
  return (
    <Routes>
      <Route index element={<LoginView />} />
    </Routes>
  );
}
