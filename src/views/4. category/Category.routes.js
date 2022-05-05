/* istanbul ignore file */
import { Route, Routes } from "react-router-dom";
import LoginView from "./LoginView";
import CategoryView from "./CategoryView";

export default function LoginRoutes() {
  return (
    <Routes>
      <Route index element={<CategoryView />} />
    </Routes>
  );
}
