import { useState } from "react";
import { Outlet } from "react-router-dom"; // Import Outlet
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Layout.css";

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`layout ${collapsed ? "collapsed" : ""}`}>
      
      <Sidebar collapsed={collapsed} />

      <div className="main-area">
       
        <Header toggleSidebar={() => setCollapsed(!collapsed)} />

       
        <main className="content">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default Layout;
