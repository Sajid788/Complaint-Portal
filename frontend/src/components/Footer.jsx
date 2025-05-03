const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Community Complaint Portal</h3>
            <p className="text-sm text-gray-400 mt-1">Report issues in your community</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Community Complaint Portal</p>
            <p className="text-sm text-gray-400 mt-1">All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 