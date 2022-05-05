/* istanbul ignore file */
import { Route, Routes } from "react-router-dom";
import HomeView from "./HomeView";
<<<<<<< HEAD
import HomeCreateView from "./HomeCreateView";

export default function HomeRoutes() {
  return (
    <Routes>
      <Route index element={<HomeView />} />
      <Route path="create" element={<HomeCreateView />} />
=======

export default function ProductRoutes() {
  return (
    <Routes>
      <Route index element={<HomeView />} />
>>>>>>> d193a2d53e810fa461db9f876c1eccbb90e7cf54
    </Routes>
  );
}
