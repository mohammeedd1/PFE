


import Select from "react-select";

const SkillsMultiple = () => {
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
    <Select
      defaultValue={[catOptions[1]]}
      isMulti
      name="colors"
      options={catOptions}
      className="basic-multi-select"
      classNamePrefix="select"
      required
    />
  );
};

export default SkillsMultiple;
