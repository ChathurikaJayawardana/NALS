import { useState } from "react";
import { Outlet } from "react-router-dom"; 
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Layout.css";

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`app-layout ${collapsed ? "collapsed" : ""}`}>
      
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} />

      {/* Main content */}
      <div className="main-area">
        <Header toggleSidebar={() => setCollapsed(!collapsed)} />

        {/* Page Content */}
        <main className="content">
          <Outlet /> {/* Renders child routes */}
        </main>
      </div>
    </div>
  );
};

export default Layout;