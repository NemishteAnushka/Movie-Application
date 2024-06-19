import { Link, Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <nav>
        <Link to="/">Movie Search</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Root;
