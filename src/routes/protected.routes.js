/* istanbul ignore file */
import { Route, Routes, Navigate } from "react-router-dom";
import NotFound from "../views/error/NotFoundView";
import HomeRoutes from "../views/home/Home.routes";
import { RouteName } from "./routesnames";
import TimeTableView from "../views/7. timetable/TimeTableView";
import DeadlineView from "../views/8. deadline/DeadlineView";
import EvaluateView from "../views/5. evaluate/EvaluateView";
import SliderView from "../views/3. slidercalender/SliderView";
import CategoryView from "../views/4. category/CategoryView";
import DefineHabitView from "../views/6. defineHabit/DefineHabitView";

export default function ProtectedRoutes() {
  return (
    <Routes>
      <Route
        path={RouteName.INDEX}
        element={<Navigate to={RouteName.HOME} />}
      />
      <Route path={`${RouteName.HOME}/*`} element={<HomeRoutes />} />
      <Route path={`${RouteName.SLIDECALENDER}/*`} element={<SliderView />} />
      <Route path={`${RouteName.CATEGORY}/*`} element={<CategoryView />} />
      <Route path={`${RouteName.EVALUATE}/*`} element={<EvaluateView />} />
      <Route path={`${RouteName.DEFINEHABIT}/*`} element={<DefineHabitView />} />
      <Route path={`${RouteName.TIMETABLE}/*`} element={<TimeTableView />} />
      <Route path={`${RouteName.DEADLINE}/*`} element={<DeadlineView />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
