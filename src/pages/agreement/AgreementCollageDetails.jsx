import React from "react";
import DataTable from "../../components/tables/DataTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const AgreementCollage = () => {
  const columns = [
    { key: "collageId", label: "Collage/Provider ID" },
    { key: "tradingName", label: "Trading Name" },
    { key: "instituteName", label: "Institute Name" },
    { key: "cricosCode", label: "CRICOS Code" },
    { key: "websiteLink", label: "Website Link" },
    { key: "amAgreement", label: "AM Agreement" },
    { key: "agreementName", label: "Agreement Name" },
    { key: "startDate", label: "Start Date" },
    { key: "expireDate", label: "Expire Date" },
    { key: "renewalDate", label: "Renewal Date" },
    { key: "status", label: "Status" },
    { key: "remark", label: "Remark" },
    { key: "attachment", label: "Attachment", type: "file" },
  ];

  const data = [
    {
      collageId: "01",
      tradingName: "Australian Study Link Institute",
      instituteName: "Australian Study Link Institute",
      cricosCode: "03444C",
      websiteLink: "www.example.com",
      amAgreement: "Yes",
      agreementName: "AA01",
      startDate: "2023/01/12",
      expireDate: "2024/01/12",
      renewalDate: "2024/01/15",
      status: "Active",
      remark: "Great institute for students",
      attachment: [
        { name: "agreement01.pdf", url: "/files/agreement01.pdf" },
        { name: "terms.pdf", url: "/files/terms.pdf" },
      ],
    },
    {
      collageId: "02",
      tradingName: "Australian Study Link Institute",
      instituteName: "Australian Study Link Institute",
      cricosCode: "53444C",
      websiteLink: "www.example2.com",
      amAgreement: "No",
      agreementName: "AA02",
      startDate: "2023/02/12",
      expireDate: "2024/02/12",
      renewalDate: "2024/02/15",
      status: "Active",
      remark: "Check for next intake",
      attachment: [
        { name: "agreement01.pdf", url: "/files/agreement01.pdf" },
        { name: "terms.pdf", url: "/files/terms.pdf" },
      ],
    },
  ];

  return (
    <div className="container-full">
      <div className="content-header">
        <h2>AGREEMENT / COLLAGE DETAILS</h2>
        <p className="sub-title">
          <span>
            <FontAwesomeIcon icon={faHome} className="home" /> - Tables
          </span>{" "}
          - Data Tables
        </p>
      </div>

      <div className="table-card">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default AgreementCollage;