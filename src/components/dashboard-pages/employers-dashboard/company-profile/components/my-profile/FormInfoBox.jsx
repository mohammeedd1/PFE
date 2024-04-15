


import Select from "react-select";

const FormInfoBox = () => {
    const catOptions = [
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
                <div className="form-group col-lg-6 col-md-12">
                    <label>Company name (optional)</label>
                    <input
                        type="text"
                        name="name"
                        placeholder=""
                        required
                    />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Email address</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="@gmail.com"
                        required
                    />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Phone</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="+216"
                        required
                    />
                </div>

                

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Est. Since</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="06.04.2024"
                        required
                    />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Team Size</label>
                    <select className="chosen-single form-select" required>
                        <option>5 - 10</option>
                        <option>10 - 50</option>
                        <option>50 - 100</option>
                        <option>100 - 200</option>
                       
                    </select>
                </div>

                {/* <!-- Search Select --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Multiple Select boxes </label>
                    <Select
                        defaultValue={[catOptions[2]]}
                        isMulti
                        name="colors"
                        options={catOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Allow In Search & Listing</label>
                    <select className="chosen-single form-select">
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>

                {/* <!-- About Company --> */}
                <div className="form-group col-lg-12 col-md-12">
                    <label>About Company</label>
                    <textarea placeholder="...."></textarea>
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <button className="theme-btn btn-style-one">Save</button>
                </div>
            </div>
        </form>
    );
};

export default FormInfoBox;
