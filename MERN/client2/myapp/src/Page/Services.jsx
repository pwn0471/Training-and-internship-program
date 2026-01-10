const Services = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 px-6 py-14">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Our Services
      </h1>

      <div className="grid gap-8 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition">
          <h2 className="text-xl font-bold text-indigo-600">Web Development</h2>
          <p className="text-gray-600 mt-2">
            Modern, scalable, and responsive web applications.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition">
          <h2 className="text-xl font-bold text-purple-600">UI / UX Design</h2>
          <p className="text-gray-600 mt-2">
            Clean and intuitive user interfaces with great UX.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition">
          <h2 className="text-xl font-bold text-pink-600">Backend Systems</h2>
          <p className="text-gray-600 mt-2">
            Secure APIs, databases, and server-side logic.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
