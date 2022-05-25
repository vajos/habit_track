/* istanbul ignore file */
import { Route, Routes } from "react-router-dom";
import DeadlineView from "./DeadlineView";

export default function LoginRoutes() {
  return (
    <Routes>
      <Route index element={<DeadlineView />} />
    </Routes>
  );
}
