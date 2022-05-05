/* istanbul ignore file */
import { Route, Routes } from "react-router-dom";
import HomeView from "./HomeView";
import HomeCreateView from "./HomeCreateView";

export default function HomeRoutes() {
  return (
    <Routes>
      <Route index element={<HomeView />} />
      <Route path="create" element={<HomeCreateView />} />
    </Routes>
  );
}
