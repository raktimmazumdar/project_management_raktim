import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Header = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  // Log Out function
  const handleLogout = () => {
    console.log("logged out");
    logout();
    navigate("/login");
  };

  return (
    <div
      id="header"
      className=" text-green-600 font-semibold text-xl border-2 p-4 mb-4
    border-green-600 rounded-xl"
    >
      <nav className="flex justify-evenly gap-4">
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "text-slate-400" : "")}
        >
          Log In
        </NavLink>
        <NavLink
          to="/admin"
          className={({ isActive }) => (isActive ? "text-slate-400" : "")}
        >
          Admin
        </NavLink>
        <NavLink
          to="/employee"
          className={({ isActive }) => (isActive ? "text-slate-400" : "")}
        >
          Employee
        </NavLink>

        {!isLoginPage && (
          <button
            onClick={handleLogout}
            className="cursor-pointer hover:text-slate-400"
          >
            Log Out
          </button>
        )}
      </nav>
    </div>
  );
};
