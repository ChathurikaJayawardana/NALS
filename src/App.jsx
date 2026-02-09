/*import Layout from "./components/Layout";

/*const App = () => {
  return (
    <Layout>
      <h2>Hello John, Welcome Back!</h2>
      <p>Your dashboard content goes here.</p>
    </Layout>
  );
};

export default App;*/
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";

import AddCourse from "./pages/AddCourse";
import AddCollage from "./pages/AddCollage";
import AddAgreement from "./pages/AddAgreement";
import AddEnrolment from "./pages/AddEnrolment";
import EnrolmentChecklist from "./pages/EnrolmentChecklist";
import AddFlyer from "./pages/AddFlyer";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* default page */}

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addcourse" element={<AddCourse />} />
        <Route path="/addcollage" element={<AddCollage />} />
        <Route path="/addagreement" element={<AddAgreement />} />
        <Route path="/addenrolment" element={<AddEnrolment />} />
        <Route path="/enrolmentchecklist" element={<EnrolmentChecklist />} />
        <Route path="/addflyer" element={<AddFlyer />} />


      </Route>
    </Routes>
  );
};

export default App;

