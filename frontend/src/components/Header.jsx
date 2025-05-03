import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Community Complaint Portal
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/complaints" className="hover:text-blue-200">
                Complaints
              </Link>
            </li>
            <li>
              <Link to="/submit" className="hover:text-blue-200">
                Submit Complaint
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 