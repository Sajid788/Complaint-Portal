import { useState, useEffect } from 'react';
import { getComplaints } from '../services/api';
import ComplaintCard from '../components/ComplaintCard';
import { showInfo } from '../utils/toast';

const ComplaintsListPage = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const data = await getComplaints();
        setComplaints(data);
        setFilteredComplaints(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch complaints. Please try again later.');
        setLoading(false);
      }
    };

    fetchComplaints();
  }, []);

  const filterComplaints = (filter) => {
    setActiveFilter(filter);
    
    if (filter === 'all') {
      setFilteredComplaints(complaints);
      showInfo('Showing all complaints');
      return;
    }
    
    const filtered = complaints.filter((complaint) => complaint.category === filter);
    setFilteredComplaints(filtered);
    showInfo(`Showing ${filter} complaints`);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 text-red-700 p-4 rounded-md mb-4">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">All Complaints</h1>
      
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => filterComplaints('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            All
          </button>
          <button
            onClick={() => filterComplaints('Road')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === 'Road'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Road
          </button>
          <button
            onClick={() => filterComplaints('Electricity')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === 'Electricity'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Electricity
          </button>
          <button
            onClick={() => filterComplaints('Water')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === 'Water'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Water
          </button>
          <button
            onClick={() => filterComplaints('Sanitation')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === 'Sanitation'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Sanitation
          </button>
          <button
            onClick={() => filterComplaints('Others')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === 'Others'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Others
          </button>
        </div>
      </div>
      
      {filteredComplaints.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 text-lg">No complaints found for this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComplaints.map((complaint) => (
            <ComplaintCard key={complaint._id} complaint={complaint} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ComplaintsListPage; 