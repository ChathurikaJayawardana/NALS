import React from "react";
import DataTable from "../../components/tables/DataTable";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const StudentEnrolment = () => {
  const columns = [
    { key: "collage", label: "COLLAGE / PROVIDER" },
    { key: "enrolmentUrl", label: "ENROLMENT URL" },
    { key: "userName", label: "USER NAME" },
    { key: "password", label: "PASSWORD" },
    { key: "enrolmentEmail", label: "ENROLMENT EMAIL" },
    { key: "relatedForms", label: "RELATED FORMS", type: "file" },
  ];

  const data = [
    {
      collage: "Australia Study Link Institute",
      enrolmentUrl: "https://example.com/",
      userName: "ABC",
      password: "******",
      enrolmentEmail: "abc@gmail.com",
      relatedForms: [
        { name: "Form 1", url: "/files/form1.pdf" },
        { name: "Form 2", url: "/files/form2.pdf" },
        { name: "Form 3", url: "/files/form3.pdf" },
      ],
    },
    {
      collage: "Australia Study Link Institute",
      enrolmentUrl: "https://example.com/",
      userName: "XYZ",
      password: "******",
      enrolmentEmail: "xyz@gmail.com",
      relatedForms: [
        { name: "Form 1", url: "/files/form1.pdf" },
        { name: "Form 2", url: "/files/form2.pdf" },
        { name: "Form 3", url: "/files/form3.pdf" },
      ],
    },
  ];

  return (
    <div className="container-full">
      <div className="content-header">
        <h2>STUDENT ENROLMENT DETAILS</h2>

        <p className="sub-title">
          <span>
            <FontAwesomeIcon icon={faHome} className="home" /> - Tables
          </span>{" "}
          - Data Tables
        </p>
      </div>

      <div className="table-card">
        <DataTable columns={columns} data={data} showActions={true} />
      </div>
    </div>
  );
};

export default StudentEnrolment;
