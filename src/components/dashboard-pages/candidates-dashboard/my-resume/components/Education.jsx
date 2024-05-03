import React, { useState } from 'react';
import Form from './EducationForm'; // Assuming the Form component is in the same directory

const Education = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddEducation = () => {
    setShowForm(true);
  };

  return (
    <div className="resume-outer">
      <div className="upper-title">
        <h4>Education</h4>
        <button className="add-info-btn" onClick={handleAddEducation}>
          <span className="icon flaticon-plus"></span> Add Education
        </button>
      </div>
      {showForm && <Form />}
    </div>
  );
};

export default Education;
