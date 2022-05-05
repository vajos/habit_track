<<<<<<< HEAD
/* istanbul ignore file */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedLayout from "./ProtectedLayout";
import PublicLayout from "./PublicLayout";
import RequireAuth from "./components/RequireAuth";
=======
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NotFound from "../views/error/NotFoundView";
import { RouteName } from "./routesnames";
import HomeRoutes from "../views/home/Home.routes";
>>>>>>> d193a2d53e810fa461db9f876c1eccbb90e7cf54

export default function RootRoutes() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route
          path="*"
          element={
            // <RequireAuth isLoggedIn={false}>
            <ProtectedLayout />
            ///* </RequireAuth> *///
          }
        />
        <Route path="/public/*" element={<PublicLayout />} />
=======
        <Route path="/" element={<Navigate to={RouteName.HOME} />} />
        <Route path={`${RouteName.HOME}/*`} element={<HomeRoutes />} />
        <Route path="*" element={<NotFound />} />
>>>>>>> d193a2d53e810fa461db9f876c1eccbb90e7cf54
      </Routes>
    </BrowserRouter>
  );
}
