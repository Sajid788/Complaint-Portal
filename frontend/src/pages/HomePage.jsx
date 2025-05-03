import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="bg-blue-600 text-white rounded-lg p-8 mb-10 shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Community Complaint Portal</h1>
          <p className="text-xl mb-8">
            Report public issues like broken streetlights, potholes, and more to the relevant authorities.
            Help make your community a better place!
          </p>
          <Link
            to="/submit"
            className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-md hover:bg-blue-50 transition duration-300"
          >
            Submit a Complaint
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
              <span className="text-blue-600 text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Submit</h3>
            <p className="text-gray-600">
              Fill out the complaint form with details about the issue you've encountered.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
              <span className="text-blue-600 text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Track</h3>
            <p className="text-gray-600">
              Check the status of your complaint and receive updates as it's being processed.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
              <span className="text-blue-600 text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Resolve</h3>
            <p className="text-gray-600">
              Authorities review and take action on reported issues to improve community conditions.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">🛣️</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Road Issues</h3>
            <p className="text-gray-600">
              Potholes, broken pavements, road damage, missing signs, or traffic light problems.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Electricity</h3>
            <p className="text-gray-600">
              Street light outages, exposed wiring, power outages, or damaged electrical infrastructure.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">💧</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Water Supply</h3>
            <p className="text-gray-600">
              Water leaks, contamination, supply interruptions, or sewage problems.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">🧹</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Sanitation</h3>
            <p className="text-gray-600">
              Garbage collection issues, public area cleanliness, or illegal dumping.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 