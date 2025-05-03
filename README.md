# Community Complaint Portal

A web application for residents to report public issues like broken streetlights, potholes, and other community problems to authorities.

## Features

- Submit complaints with details including location, category, and description
- View all submitted complaints
- Filter complaints by category
- View detailed information about specific complaints
- Track complaint status (Pending, In Progress, Resolved, Rejected)

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Express Validator

### Frontend
- React
- Vite
- React Router DOM
- Tailwind CSS
- Axios

## Installation & Setup

### Prerequisites
- Node.js (v14+)
- MongoDB (running locally or a MongoDB Atlas account)

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/complaintPortal
   NODE_ENV=development
   ```

4. Start the backend server:
   ```
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## API Endpoints

- `GET /api/complaints` - Get all complaints
- `GET /api/complaints/:id` - Get a specific complaint
- `POST /api/complaints` - Create a new complaint
- `PUT /api/complaints/:id` - Update a complaint
- `DELETE /api/complaints/:id` - Delete a complaint

## Screenshot
![image](https://github.com/user-attachments/assets/2dcb1b9a-7da5-43f1-98e4-7116c26d73ea)
![image](https://github.com/user-attachments/assets/2e5be4d0-a72b-4fde-814c-a265e537d4e2)
![image](https://github.com/user-attachments/assets/7016f0de-15f8-442e-b3d1-588865a3bf32)




## License

This project is open source. 
