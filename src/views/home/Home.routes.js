/* istanbul ignore file */
import { Route, Routes } from "react-router-dom";
import HomeView from "./HomeView";

export default function ProductRoutes() {
  return (
    <Routes>
      <Route index element={<HomeView />} />
    </Routes>
  );
}
