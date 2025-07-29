function ServicesSection() {
  return (
    <section className="min-h-screen bg-white text-center py-20 px-4">
      <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="p-6 shadow rounded-lg border">Web Design</div>
        <div className="p-6 shadow rounded-lg border">Development</div>
        <div className="p-6 shadow rounded-lg border">SEO Optimization</div>
      </div>
    </section>
  );
}

export default ServicesSection;
