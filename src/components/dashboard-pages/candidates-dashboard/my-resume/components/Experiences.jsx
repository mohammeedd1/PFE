import React, { useState } from 'react';
import JobForm from './JobForm'; // Assuming JobForm is in a separate file

const Experiences = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="resume-outer theme-blue">
      <div className="upper-title">
        <h4>Work & Experience</h4>
        <button className="add-info-btn" onClick={toggleForm}>
          <span className="icon flaticon-plus"></span> Add Work
        </button>
      </div>
      {showForm && <JobForm />}
    </div>
  );
};

export default Experiences;
