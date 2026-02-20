import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";

import AddCourse from "./pages/course/AddCourse";
import CourseDetails from "./pages/course/CourseDetails";

import AddCollage from "./pages/collage/AddCollage";

import AddAgreement from "./pages/agreement/AddAgreement";
import AgreementCollageDetails from "./pages/agreement/AgreementCollageDetails";

import AddEnrolment from "./pages/enrolment/AddEnrolment";
import StudentEnrolmentDetails from "./pages/enrolment/StudentEnrolmentDetails";
import EnrolmentChecklist from "./pages/enrolment/EnrolmentChecklist";

import AddFlyer from "./pages/flyer/AddFlyer";
import FlyersDetails from "./pages/flyer/FlyersDetails";

import Profile from "./pages/profile/Profile";

import ChatPage from "./pages/chat/ChatPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
     
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addcourse" element={<AddCourse />} />
        <Route path="/addcollage" element={<AddCollage />} />
        <Route path="/addagreement" element={<AddAgreement />} />
        <Route path="/addenrolment" element={<AddEnrolment />} />
        <Route path="/enrolmentchecklist" element={<EnrolmentChecklist />} />
        <Route path="/addflyer" element={<AddFlyer />} />
        <Route path="/courses" element={<CourseDetails />} />
        <Route path="/agreement" element={<AgreementCollageDetails />} />
        <Route path="/enrolment" element={<StudentEnrolmentDetails />} />
        <Route path="/flyer" element={<FlyersDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<ChatPage />} />

      </Route>
    </Routes>
    
  );
};

export default App;

