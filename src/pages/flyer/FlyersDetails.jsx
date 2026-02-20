import React from "react";
import DataTable from "../../components/tables/DataTable";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const FlyersDetails = () => {
  const columns = [
    { key: "collage", label: "COLLAGE / PROVIDER" },
    { key: "flyers", label: "FLYERS", type: "file" },
  ];

  const data = [
    {
      collage: "Australia Study Link Institute",
      flyers: [
        { name: "Flyer 1", url: "/files/flyer1.pdf" },
        { name: "Flyer 2", url: "/files/flyer2.pdf" },
        { name: "Flyer 3", url: "/files/flyer3.pdf" },
      ],
    },
    {
      collage: "Australia Study Link Institute",
      flyers: [
        { name: "Flyer 1", url: "/files/flyer1.pdf" },
        { name: "Flyer 2", url: "/files/flyer2.pdf" },
        { name: "Flyer 3", url: "/files/flyer3.pdf" },
        { name: "Flyer 4", url: "/files/flyer4.pdf" },
        { name: "Flyer 5", url: "/files/flyer5.pdf" },
      ],
    },
  ];

  return (
    <div className="container-full">
      <div className="content-header">
        <h2>FLYERS DETAILS</h2>

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

export default FlyersDetails;
