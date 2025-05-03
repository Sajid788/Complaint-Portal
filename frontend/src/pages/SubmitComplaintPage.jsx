import ComplaintForm from '../components/ComplaintForm';

const SubmitComplaintPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Submit a Complaint</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Use the form below to report issues in your community. Please provide as much detail as 
        possible to help authorities address the problem efficiently.
      </p>
      
      <ComplaintForm />
    </div>
  );
};

export default SubmitComplaintPage; 