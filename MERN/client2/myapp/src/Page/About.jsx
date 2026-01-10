const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          This is About Page
        </h1>
        <p className="text-gray-600 leading-relaxed">
          This page provides information about the application.  
          It is built using React, React Router, and Tailwind CSS.
        </p>
      </div>
    </section>
  );
};

export default About;
