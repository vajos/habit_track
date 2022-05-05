import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }) {
  const user = useSelector((state) => state.user);

  const location = useLocation();

  if (user.isAuthenticated) {
    return children;
  }

  return <Navigate to="/public/login" state={{ from: location }} />;
}
