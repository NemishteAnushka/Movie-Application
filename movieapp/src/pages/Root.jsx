import { Link, Outlet, useNavigation } from "react-router-dom";

function Root() {
  const navigation = useNavigation(); // this will show state if state is loading then it will show loader
  return (
    <div>
      <nav>
        <Link to="/">Movie Search</Link>
      </nav>
      {navigation.state === "loading" ? <h1>Loading.....</h1> : <Outlet />}
    </div>
  );
}

export default Root;
