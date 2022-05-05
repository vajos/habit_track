/* istanbul ignore file */
import { Route, Routes } from "react-router-dom";
import LoginView from "./LoginView";
import TimeTableView from "./TimeTableView";

export default function LoginRoutes() {
  return (
    <Routes>
      <Route index element={<TimeTableView />} />
    </Routes>
  );
}
