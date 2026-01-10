import { NavLink } from "react-router-dom";

const Signup= () => {
  return (
    <NavLink
      to="/signup"
      className="bg-gradient-to-r from-green-500 to-emerald-600 
                 hover:from-green-600 hover:to-emerald-700
                 text-white font-semibold px-6 py-2 rounded-full
                 shadow-lg transition duration-300 inline-block"
    >
      Sign Up
    </NavLink>
  );
};

export default Signup;
