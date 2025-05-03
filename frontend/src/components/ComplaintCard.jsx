import { Link } from 'react-router-dom';

const getStatusColor = (status) => {
  switch (status) {
    case 'Pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'In Progress':
      return 'bg-blue-100 text-blue-800';
    case 'Resolved':
      return 'bg-green-100 text-green-800';
    case 'Rejected':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Road':
      return '🛣️';
    case 'Electricity':
      return '⚡';
    case 'Water':
      return '💧';
    case 'Sanitation':
      return '🧹';
    default:
      return '📋';
  }
};

const ComplaintCard = ({ complaint }) => {
  const { _id, title, description, category, status, location, createdAt } = complaint;
  const formattedDate = new Date(createdAt).toLocaleDateString();
  const statusClass = getStatusColor(status);
  const categoryIcon = getCategoryIcon(category);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-800 truncate">{title}</h3>
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusClass}`}>
            {status}
          </span>
        </div>
        
        <div className="flex items-center mb-2 text-gray-600">
          <span className="mr-1">{categoryIcon}</span>
          <span className="text-sm">{category}</span>
        </div>
        
        <p className="text-gray-600 mb-3 line-clamp-2">{description}</p>
        
        <div className="text-sm text-gray-500 mb-3">
          <div className="flex items-center mb-1">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span>{formattedDate}</span>
          </div>
        </div>
        
        <Link 
          to={`/complaints/${_id}`} 
          className="inline-block mt-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default ComplaintCard; 