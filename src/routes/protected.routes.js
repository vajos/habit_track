/* istanbul ignore file */
import { Route, Routes, Navigate } from "react-router-dom";
import NotFound from "../views/error/NotFoundView";
import HomeRoutes from "../views/home/Home.routes";
import { RouteName } from "./routesnames";

export default function ProtectedRoutes() {
  return (
    <Routes>
      <Route
        path={RouteName.INDEX}
        element={<Navigate to={RouteName.HOME} />}
      />
      <Route path={`${RouteName.HOME}/*`} element={<HomeRoutes />} />
      <Route path={`${RouteName.SLIDECALENDER}/*`} element={<HomeRoutes />} />
      <Route path={`${RouteName.CATEGORY}/*`} element={<HomeRoutes />} />
      <Route path={`${RouteName.EVALUATE}/*`} element={<HomeRoutes />} />
      <Route path={`${RouteName.DEFINEHABIT}/*`} element={<HomeRoutes />} />
      <Route path={`${RouteName.TIMETABLE}/*`} element={<HomeRoutes />} />
      <Route path={`${RouteName.DEADLINE}/*`} element={<HomeRoutes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
