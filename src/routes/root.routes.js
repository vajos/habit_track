/* istanbul ignore file */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedLayout from "./ProtectedLayout";
import PublicLayout from "./PublicLayout";
import RequireAuth from "./components/RequireAuth";

export default function RootRoutes() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="*"
          element={
            // <RequireAuth isLoggedIn={false}>
            <ProtectedLayout />
            ///* </RequireAuth> *///
          }
        />
        <Route path="/public/*" element={<PublicLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
