import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <section className="min-h-screen bg-white flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            This section demonstrates that scrolling now works smoothly. The 3D
            model above only renders when visible, improving performance
            significantly.
          </p>
        </div>
      </section>

      <section className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Specifications
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Another section to test smooth scrolling performance. The optimized
            3D model should no longer interfere with page scrolling.
          </p>
        </div>
      </section>
    </main>
  );
}
