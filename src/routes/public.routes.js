/* istanbul ignore file */
import { Route, Routes } from "react-router-dom";
import NotFound from "../views/error/NotFoundView";
import LoginRoutes from "../views/1. login/Login.routes";
import RegisterRoutes from "../views/2. register/Register.routes";
import { RouteName } from "./routesnames";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path={`${RouteName.LOGIN}/*`} element={<LoginRoutes />} />
      <Route path={`${RouteName.REGISTER}/*`} element={<RegisterRoutes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
