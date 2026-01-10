import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg text-center">
        <h1 className="text-6xl font-extrabold text-red-500 mb-4">
          404
        </h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <NavLink
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition duration-200"
        >
          Go Back Home
        </NavLink>
      </div>
    </section>
  );
};

export default ErrorPage;
