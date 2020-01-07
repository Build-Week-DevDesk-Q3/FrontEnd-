import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <p>Hello: Student Name!</p>arrow_drop_down
      <div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div>
        <Link to="/help-student">Help Student</Link>
      </div>
      <div>
        <Link to="/open-tickets">Open Tickets</Link>
      </div>
      <div>
        <Link to="/assigned-tickets">Assigned Tickets</Link>
      </div>
      <div>
        <Link to="/logout-page">Log Out</Link>
      </div>
      <div>
        <Link to="/student-account">Student Account</Link>
      </div>
    </div>
  );
};

export default Navigation;
