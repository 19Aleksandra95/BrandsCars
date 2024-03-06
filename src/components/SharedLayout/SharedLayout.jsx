import { Outlet, Link } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorite">Favorite</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default SharedLayout;