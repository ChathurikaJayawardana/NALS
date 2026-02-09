/*import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Layout.css";

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`layout ${collapsed ? "collapsed" : ""}`}>
      <Sidebar collapsed={collapsed} />
      <div className="main-area">
        <Header toggleSidebar={() => setCollapsed(!collapsed)} />
        <main className="content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;*/
import { useState } from "react";
import { Outlet } from "react-router-dom"; // Import Outlet
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Layout.css";

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`layout ${collapsed ? "collapsed" : ""}`}>
      {/* Sidebar with collapse toggle */}
      <Sidebar collapsed={collapsed} />

      <div className="main-area">
        {/* Header with toggle button */}
        <Header toggleSidebar={() => setCollapsed(!collapsed)} />

        {/* Main content area */}
        <main className="content">
          <Outlet /> {/* Renders nested routes here */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
