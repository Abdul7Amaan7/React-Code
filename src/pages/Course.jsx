
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './style/Course.css';

function Course() {
  return (
    <div className="course-container">
      <h1>Our Courses</h1>
      <p className="course-subtitle">
        Choose your preferred language
      </p>

      <nav className="course-links">
        <Link to="/course/english">English</Link>
        <Link to="/course/hindi">Hindi</Link>
        <Link to="/course/marathi">Marathi</Link>
      </nav>

      <div className="course-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Course;
