
const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Hi, welcome to the Home Page 👋
        </h2>
        <p className="text-gray-600 text-lg">
          This is the landing page of your React application built with
          Tailwind CSS and React Router.
        </p>
      </div>
    </section>
  );
};

export default Home;
