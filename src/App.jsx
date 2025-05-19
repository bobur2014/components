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

   {/* About Skilline Section */}
<section className="py-16 px-6 bg-white text-center lg:text-left">
  <h2 className="text-2xl font-bold text-center mb-4">
    What is <span className="text-orange-500">Skilline</span>?
  </h2>
  <p className="max-w-3xl mx-auto text-gray-600 mb-10">
    Skilline is a platform that allows educators to create online classes whereby they can
    store the course materials online, manage assignments, quizzes and exams, monitor
    due dates, grade results and provide students with feedback all in one place.
  </p>

  <div className="grid md:grid-cols-2 gap-6 mb-16">
    <div className="bg-gray-100 p-6 rounded-xl flex flex-col items-center">
      <img src="./src/assets/pu.png" alt="Instructor" className="rounded-md mb-4 h-40 object-cover" />
      <h3 className="text-lg font-semibold mb-2">FOR INSTRUCTORS</h3>
      <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
        Start a class today
      </button>
    </div>
    <div className="bg-gray-100 p-6 rounded-xl flex flex-col items-center">
      <img src="./src/assets/pt.png" alt="Student" className="rounded-md mb-4 h-40 object-cover" />
      <h3 className="text-lg font-semibold mb-2">FOR STUDENTS</h3>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Enter access code
      </button>
    </div>
  </div>

  <div className="flex flex-col lg:flex-row items-center gap-10">
    <div className="lg:w-1/2">
      <h3 className="text-xl font-semibold mb-4 text-left">
        <span className="text-orange-500">Everything you can do in a physical classroom</span>, you can do with Skilline
      </h3>
      <p className="text-gray-600 mb-4 text-left">
        Skilline’s school management software helps traditional and online schools manage
        scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.
      </p>
      <a href="#" className="text-blue-600 font-semibold hover:underline text-left block">
        Learn more
      </a>
    </div>
    <div className="lg:w-1/2">
      <img src="./src/assets/oy.png" alt="Classroom Preview" className="rounded-xl shadow-md" />
    </div>
  </div>

  <div className="mt-16 text-center">
    <h3 className="text-xl font-bold text-blue-700 mb-2">Our Features</h3>
    <p className="text-gray-600 max-w-xl mx-auto">
      This very extraordinary feature, can make learning activities more efficient
    </p>
  </div>

  <div className="mt-10 grid md:grid-cols-2 items-center gap-10">
    <div>
      <img src="./src/assets/girl.png" alt="Teacher" className="rounded-xl shadow" />
    </div>
    <div className="text-left">
      <h4 className="text-lg font-bold text-orange-500 mb-2">Tools For Teachers And Learners</h4>
      <p className="text-gray-600">
        Class has a dynamic set of teaching tools built to be deployed and used during class.
        Teachers can handout assignments in real-time for students to complete and submit.
      </p>
    </div>
  </div>
</section>
{/* New Features Section */}
<section className="bg-white py-16 px-6">
  <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
    <div>
      <h3 className="text-2xl font-bold mb-2">
        <span className="text-blue-800">Assessments,</span>{" "}
        <span className="text-orange-500">Quizzes,</span> Tests
      </h3>
      <p className="text-gray-600">
        Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.
      </p>
    </div>
    <img src="./src/assets/ou.png" alt="Quiz" className="rounded-lg shadow-md" />
  </div>

  <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
    <img src="./src/assets/ry.png" alt="Gradebook" className="rounded-lg shadow-md" />
    <div>
      <h3 className="text-2xl font-bold mb-2">
        <span className="text-orange-500">Class Management</span>{" "}
        <span className="text-blue-800">Tools for Educators</span>
      </h3>
      <p className="text-gray-600">
        Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. Teachers can review and grade tests and quizzes in real-time.
      </p>
    </div>
  </div>

  <div className="grid lg:grid-cols-2 gap-12 items-center">
    <div>
      <h3 className="text-2xl font-bold mb-2 text-blue-800">One-on-One Discussions</h3>
      <p className="text-gray-600">
        Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
      </p>
    </div>
    <img src="./src/assets/34.png" alt="One-on-One Discussion" className="rounded-lg shadow-md" />
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
