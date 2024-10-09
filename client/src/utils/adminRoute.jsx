import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    // If no token is present, redirect to login page
    return <Navigate to="/login" />;
  }
  try {
    const decodedToken = jwtDecode(token);
    // Check if the user has the 'admin' role
    if (decodedToken.role !== "admin") {
      // If not admin, redirect to a forbidden or a dashboard page
      return <Navigate to="/dashboard" />;
    }
    return children; // Render admin page if user is admin
  } catch (error) {
    // If token is invalid, redirect to login page
    return <Navigate to="/login" />;
  }
};
export default AdminRoute;
