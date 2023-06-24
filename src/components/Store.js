import React from 'react';
import { Link } from 'react-router-dom';

const Store = () => {
  const handleLogout = () => {
    // Perform logout logic here
  };

  return (
    <div className="store">
      <h2>Welcome to the store!</h2>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Store;
