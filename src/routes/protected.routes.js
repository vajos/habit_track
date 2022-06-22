/* istanbul ignore file */
import { Route, Routes, Navigate } from "react-router-dom";
import NotFound from "../views/error/NotFoundView";
import HomeRoutes from "../views/home/Home.routes";
import { RouteName } from "./routesnames";
import EvaluateView from "../views/5. evaluate/EvaluateView";
import SliderView from "../views/3. slidercalender/SliderView";
import CategoryView from "../views/4. category/CategoryView";
import LoginView from "../views/1. login/LoginView";
import ProfilView from "../views/profil/ProfilView";
import ContactUs from "../views/ContactUs/contactForm";

export default function ProtectedRoutes() {
  return (
    <Routes>
      <Route path={RouteName.INDEX} element={<Navigate to={RouteName.HOME} />}/>
      <Route path={`${RouteName.HOME}/*`} element={<LoginView />} />
      <Route path={`${RouteName.SLIDECALENDER}/*`} element={<SliderView />} />
      <Route path={`${RouteName.CATEGORY}/*`} element={<CategoryView />} />
      <Route path={`${RouteName.EVALUATE}/*`} element={<EvaluateView />} />
      <Route path={`${RouteName.LOGIN}/*`} element={<LoginView />} />
        <Route path={`${RouteName.PROFIL}/*`} element={<ProfilView />} />
        <Route path={`${RouteName.CONTACT}/*`} element={<ContactUs />} />
        <Route path="/habit_track" element={<LoginView />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
