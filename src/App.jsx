import React from 'react';

const App = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6 bg-white shadow">
        <div className="text-2xl font-bold text-blue-600">EduSite</div>
        <nav className="space-x-6">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Courses</a>
          <a href="#" className="hover:text-blue-600">Blog</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Sign Up
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center px-8 py-16 bg-yellow-50">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4">Studying Online is now much easier</h1>
          <p className="mb-6 text-gray-600">
            SkillUp helps students achieve their goals with flexible and affordable courses.
          </p>
          <div className="space-x-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600">
              Join for Free
            </button>
            <button className="text-orange-500 font-semibold underline">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img src="./src/assets/pi.png" alt="Hero" className="w-full max-w-md mx-auto" />
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="text-center py-10">
        <p className="uppercase text-gray-500 text-sm mb-4">Trusted by over 100+ companies</p>
        <div className="flex justify-center space-x-6 opacity-70">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-6" />
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Watch the Introduction</h2>
        <p className="mb-6 text-gray-600">Learn how our platform works in just a few minutes.</p>
        <div className="max-w-3xl mx-auto">
          <img src="./src/assets/pt.png" alt="Video Placeholder" className="rounded-xl w-full" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-center text-3xl font-bold mb-10">Our Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard
            title="Expert Tutors"
            text="Learn from the best professionals in the industry."
            image="https://i.ibb.co/N6qChLF/feature1.png"
          />
          <FeatureCard
            title="Assessments"
            text="Test your knowledge with regular quizzes."
            image="https://i.ibb.co/58R0ZDd/feature2.png"
          />
          <FeatureCard
            title="Live Classes"
            text="Join interactive live sessions with mentors."
            image="https://i.ibb.co/nCfZTL5/feature3.png"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10 px-6 text-center">
        <p>&copy; 2025 EduSite. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Support</a>
        </div>
      </footer>
    </div>
  );
};

// Reusable FeatureCard Component
const FeatureCard = ({ title, text, image }) => (
  <div className="bg-white shadow-md p-6 rounded-xl text-center">
    <img src={image} alt={title} className="mx-auto mb-4 h-32 object-contain" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

export default App;
