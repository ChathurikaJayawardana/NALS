import React from "react";
import "../assets/styles/style.css";
import dashboard from "../assets/img/dashboard.svg";

import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Agreements",
        data: [12, 19, 15, 25, 22, 30],
        backgroundColor: "#4e73df",
      },
    ],
  };

  const doughnutData = {
    labels: ["Approved", "Pending", "Rejected"],
    datasets: [
      {
        data: [1050, 45, 28],
        backgroundColor: ["#28a745", "#ffc107", "#dc3545"],
      },
    ],
  };

  return (
    <div className="dashboard-container">

      {/* ===== Welcome Banner ===== */}
      <div className="welcome-banner">
        <div className="welcome-image">
          <img src={dashboard} alt="Welcome Illustration" />
        </div>

        <div className="welcome-content">
          <h2>Welcome to Nikee Migration & Business Group</h2>
          <p>
            Your trusted partner in global migration and business success.
            With over 29 years of excellence, we continue to guide individuals
            and businesses toward new opportunities in Australia and beyond.
          </p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card blue">
          <h3>Total Agreements</h3>
          <h2>1,280</h2>
        </div>
        <div className="stat-card yellow">
          <h3>Pending Approvals</h3>
          <h2>45</h2>
        </div>
        <div className="stat-card green">
          <h3>Approved</h3>
          <h2>1,050</h2>
        </div>
        <div className="stat-card red">
          <h3>Rejected</h3>
          <h2>28</h2>
        </div>
      </div>

      <div className="chart-grid">
        <div className="chart-card">
          <h3>Agreements Per Month</h3>
          <Bar data={barData} />
        </div>
        <div className="chart-card">
          <h3>Agreement Status</h3>
          <Doughnut data={doughnutData} />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="activity-card">
          <h3>Recent Activity</h3>
          <ul>
            <li>Agreement #AG1023 approved</li>
            <li>New student registered</li>
            <li>Agreement #AG1045 pending</li>
            <li>New course added</li>
          </ul>
        </div>

        <div className="table-card">
          <h3>Pending Approvals</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Student</th>
                <th>Course</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#AG1105</td>
                <td>Emily Smith</td>
                <td>Biology 101</td>
                <td className="pending">Pending</td>
                <td>
                  <button className="approve-btn">Approve</button>
                  <button className="reject-btn">Reject</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="quick-actions">
        <button>Create Agreement</button>
        <button>Add Student</button>
        <button>Add Course</button>
        <button>View Reports</button>
        <button>Export Data</button>
      </div>

    </div>
  );
};

export default AdminDashboard;