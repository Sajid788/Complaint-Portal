import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ComplaintsListPage from './pages/ComplaintsListPage';
import ComplaintDetailPage from './pages/ComplaintDetailPage';
import SubmitComplaintPage from './pages/SubmitComplaintPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="complaints" element={<ComplaintsListPage />} />
          <Route path="complaints/:id" element={<ComplaintDetailPage />} />
          <Route path="submit" element={<SubmitComplaintPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
