import { useState } from "react";
import DataTable from "../../components/tables/DataTable";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const CourseDetails = () => {
  const [courses, setCourses] = useState([
    
    {
      collageId: "C001",
      courseName: "Diploma of IT",
      tradingName: "ABC Institute",
      duration: "12 Months",
      totalFee: "$8000",
      state: "NSW",
      cricosCode: "12345A",
    },
    {
      collageId: "C002",
      courseName: "Business Management",
      tradingName: "XYZ College",
      duration: "10 Months",
      totalFee: "$7500",
      state: "VIC",
      cricosCode: "67890B",
    },
  ]);

  const columns = [
    { key: "collageId", label: "Collage ID" },
    { key: "courseName", label: "Course Name" },
    { key: "tradingName", label: "Trading Name" },
    { key: "duration", label: "Duration" },
    { key: "totalFee", label: "Total Fee" },
    { key: "state", label: "State" },
    { key: "cricosCode", label: "CRICOS Code" },
  ];

  return (
    <div className="container-full">
      <div className="content-header">
        <h2>Course Details</h2>

        <p className="sub-title">
          <span>
            <FontAwesomeIcon icon={faHome} className="home" /> - Tables
          </span>{" "}
          - Data Tables
        </p>
      </div>

      <DataTable columns={columns} data={courses} />
    </div>
  );
};

export default CourseDetails;
