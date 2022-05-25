/* istanbul ignore file */
import { Route, Routes } from "react-router-dom";
import LoginView from "./LoginView";
import CategoryView from "./CategoryView";
import SliderView from "./SliderView";

export default function SliderRoutes() {
  return (
    <Routes>
      <Route index element={<SliderView />} />
    </Routes>
  );
}
