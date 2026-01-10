import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <NavLink
      to="/login"
      className="bg-gradient-to-r from-blue-500 to-indigo-600
                 hover:from-blue-600 hover:to-indigo-700
                 text-white font-semibold px-6 py-2 rounded-full
                 shadow-lg transition duration-300 inline-block"
    >
      Login
    </NavLink>
  );
};

export default Login;
