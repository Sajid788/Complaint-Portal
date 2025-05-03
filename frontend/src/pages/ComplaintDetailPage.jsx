import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getComplaint, deleteComplaint, updateComplaint } from '../services/api';
import { showSuccess, showError } from '../utils/toast';

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

const ComplaintDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [complaint, setComplaint] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [newStatus, setNewStatus] = useState('');

  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const data = await getComplaint(id);
        setComplaint(data);
        setNewStatus(data.status);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch complaint details. Please try again later.');
        setLoading(false);
        showError('Failed to fetch complaint details');
      }
    };

    fetchComplaint();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this complaint?')) {
      setDeleteLoading(true);
      try {
        await deleteComplaint(id);
        setDeleteLoading(false);
        showSuccess('Complaint deleted successfully');
        navigate('/complaints');
      } catch (err) {
        setDeleteLoading(false);
        setError('Failed to delete complaint. Please try again.');
        showError('Failed to delete complaint');
      }
    }
  };

  const handleStatusUpdate = async () => {
    if (newStatus === complaint.status) {
      showInfo('Status is unchanged');
      return;
    }
    
    setUpdateLoading(true);
    try {
      const updatedComplaint = await updateComplaint(id, { ...complaint, status: newStatus });
      setComplaint(updatedComplaint);
      setUpdateLoading(false);
      showSuccess(`Status updated to ${newStatus}`);
    } catch (err) {
      setUpdateLoading(false);
      showError('Failed to update status');
    }
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
        <Link to="/complaints" className="text-blue-600 hover:underline">
          ← Back to Complaints
        </Link>
      </div>
    );
  }

  if (!complaint) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-yellow-100 text-yellow-700 p-4 rounded-md mb-4">
          Complaint not found.
        </div>
        <Link to="/complaints" className="text-blue-600 hover:underline">
          ← Back to Complaints
        </Link>
      </div>
    );
  }

  const {
    title,
    description,
    location,
    category,
    status,
    phone,
    email,
    name,
    createdAt,
    updatedAt,
  } = complaint;

  const formattedCreatedAt = new Date(createdAt).toLocaleString();
  const formattedUpdatedAt = new Date(updatedAt).toLocaleString();
  const statusClass = getStatusColor(status);
  const categoryIcon = getCategoryIcon(category);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link to="/complaints" className="text-blue-600 hover:underline inline-flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Complaints
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
            <span className={`text-sm font-medium px-3 py-1 rounded-full ${statusClass}`}>
              {status}
            </span>
          </div>

          <div className="flex items-center text-gray-600 mb-6">
            <span className="mr-2 text-xl">{categoryIcon}</span>
            <span className="font-medium">{category}</span>
          </div>

          <div className="mb-6 p-4 bg-gray-50 rounded-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Update Status</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
                <option value="Rejected">Rejected</option>
              </select>
              <button
                onClick={handleStatusUpdate}
                disabled={updateLoading}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {updateLoading ? 'Updating...' : 'Update Status'}
              </button>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Description</h2>
            <p className="text-gray-700 whitespace-pre-line">{description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Location</h2>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-gray-700">{location}</p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Contact Information</h2>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Name:</span> {name}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Email:</span> {email}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Phone:</span> {phone}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-500">
              <p className="mb-2 sm:mb-0">
                <span className="font-medium">Created:</span> {formattedCreatedAt}
              </p>
              <p>
                <span className="font-medium">Last Updated:</span> {formattedUpdatedAt}
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={handleDelete}
              disabled={deleteLoading}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {deleteLoading ? 'Deleting...' : 'Delete Complaint'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintDetailPage; 