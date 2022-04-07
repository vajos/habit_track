import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NotFound from "../views/error/NotFoundView";
import { RouteName } from "./routesnames";
import HomeRoutes from "../views/home/Home.routes";

export default function RootRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={RouteName.HOME} />} />
        <Route path={`${RouteName.HOME}/*`} element={<HomeRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
