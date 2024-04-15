


import Map from "../../../Map";
import Select from "react-select";

const PostBoxForm = () => {
  const specialisms = [
    
    { value: "Creative Art", label: "Creative Art" },

    { value: "Web Development", label: "Web Development" },
    { value: "Mobile Development", label: "Mobile Development" },
    { value: "Data science", label: "Data science" },
    { value: "Security Development", label: "Security Development" },
    { value: "CRM Development", label: "CRM Development" },
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Managemnet", label: "Managemnet" },
    { value: "Accounting & Finance", label: "Accounting & Finance" },
    { value: "Digital", label: "Digital" },
    { value: "Agile Development", label: "Agile Development" },
  ];

  return (
    <form className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Job Title</label>
          <input type="text" name="name" placeholder="Title" />
        </div>

        {/* <!-- About Company --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Job Description</label>
          <textarea placeholder="...."></textarea>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Email Address</label>
          <input type="text" name="name" placeholder="@gmail.com" />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Username</label>
          <input type="text" name="name" placeholder="" />
        </div>

        {/* <!-- Search Select --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Specialisms </label>
          <Select
            defaultValue={[specialisms[2]]}
            isMulti
            name="colors"
            options={specialisms}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Job Type</label>
          <select className="chosen-single form-select">
            <option>Select</option>
            <option>Web Development</option>
            <option>Mobile Development</option>
            <option>Data science</option>
            <option>Security Development</option>
            <option>CRM Development</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Human Resources</option>
            <option>Management</option>

           
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Offered Salary</label>
          <select className="chosen-single form-select">
            <option>Select</option>
            <option>$1000</option>
            <option>$1200</option>
            <option>$1500</option>
            <option>$2000</option>
            <option>$4000</option>
            
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Career Level</label>
          <select className="chosen-single form-select">
          <option>Select</option>
            <option>Web Development</option>
            <option>Mobile Development</option>
            <option>Data science</option>
            <option>Security Development</option>
            <option>CRM Development</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Human Resources</option>
            <option>Management</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Experience</label>
          <select className="chosen-single form-select">
          <option>Select</option>
            <option>Web Development</option>
            <option>Mobile Development</option>
            <option>Data science</option>
            <option>Security Development</option>
            <option>CRM Development</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Human Resources</option>
            <option>Management</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Gender</label>
          <select className="chosen-single form-select">
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Industry</label>
          <select className="chosen-single form-select">
          <option>Select</option>
            <option>Web Development</option>
            <option>Mobile Development</option>
            <option>Data science</option>
            <option>Security Development</option>
            <option>CRM Development</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Human Resources</option>
            <option>Management</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Qualification</label>
          <select className="chosen-single form-select">
          <option>Select</option>
            <option>Web Development</option>
            <option>Mobile Development</option>
            <option>Data science</option>
            <option>Security Development</option>
            <option>CRM Development</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Human Resources</option>
            <option>Management</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Application Deadline Date</label>
          <input type="text" name="name" placeholder="06.04.2024" />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Country</label>
          <input
            type="text"
            name="name"
            placeholder=""
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>City</label>
          <input
            type="text"
            name="name"
            placeholder=""
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Complete Address</label>
          <input
            type="text"
            name="name"
            placeholder="Campus Universitaire BP 05 -5111 Mahdia, Tunisia."
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Find On Map</label>
          <input
            type="text"
            name="name"
            placeholder="Campus Universitaire BP 05 -5111 Mahdia, Tunisia."
          />
        </div>

        

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <button className="theme-btn btn-style-three">Search Location</button>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <div className="map-outer">
            <div style={{ height: "420px", width: "100%" }}>
              <Map />
            </div>
          </div>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12 text-right">
          <button className="theme-btn btn-style-one">Next</button>
        </div>
      </div>
    </form>
  );
};

export default PostBoxForm;
