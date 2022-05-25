/* istanbul ignore file */
import { Route, Routes } from "react-router-dom";
import LoginView from "./LoginView";
import DefineHabitView from "./DefineHabitView";

export default function LoginRoutes() {
  return (
    <Routes>
      <Route index element={<DefineHabitView />} />
    </Routes>
  );
}
