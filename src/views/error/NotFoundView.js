import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <div>
      <p>💩 This page "{location.pathname}" does not exist.</p>
      <Link to="/">Go home</Link>
    </div>
  );
}
