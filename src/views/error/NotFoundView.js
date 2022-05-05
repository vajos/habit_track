<<<<<<< HEAD
import { Button, Result } from "antd";
import { useLocation } from "react-router-dom";
=======
import { Link, useLocation } from "react-router-dom";
>>>>>>> d193a2d53e810fa461db9f876c1eccbb90e7cf54

export default function NotFound() {
  const location = useLocation();

  return (
    <div>
<<<<<<< HEAD
      <Result
        status="404"
        title="404 - Not Found"
        subTitle={`Sorry, the page "${location.pathname}" you tried visiting does not exist.`}
        extra={
          <Button type="primary" size="large" href="/">
            Back Home
          </Button>
        }
      />
=======
      <p>💩 This page "{location.pathname}" does not exist.</p>
      <Link to="/">Go home</Link>
>>>>>>> d193a2d53e810fa461db9f876c1eccbb90e7cf54
    </div>
  );
}
