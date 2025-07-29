function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="text-center max-w-2xl">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
          Welcome to Our Site
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          We craft beautiful and effective solutions to help your business grow.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
