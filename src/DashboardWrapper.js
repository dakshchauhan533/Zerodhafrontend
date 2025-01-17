import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./landing_page/context/AuthContext";

const DashboardWrapper = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      // Redirect to dashboard URL
      window.location.href = "http://localhost:3001";
    }
  }, [isAuthenticated, navigate]);

  return null;
};

export default DashboardWrapper;
