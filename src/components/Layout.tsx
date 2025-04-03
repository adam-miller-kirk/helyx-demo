import { Outlet, Link } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="appContainer">
      <nav className="pageTitle">
        <Link to="/" className="pageLink">
          Home
        </Link>
        <Link to="/about" className="pageLink">
          About
        </Link>
      </nav>

      <main className="pageBody">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
