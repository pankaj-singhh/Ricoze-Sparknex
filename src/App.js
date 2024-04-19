import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./homepage/Main";
import Discover from "./homepage/Discover";
import Home from "./components/Home";

import { NavLink, Route, Routes } from "react-router-dom";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import AdminLogin from "./login-signuppage/AdminLogin";
import AdminSignUp from "./login-signuppage/AdminSignUp";
import DashboardLayout from "./adminpage/DashboardLayout";
import UserManagement from "./AdminMenubarPage/UserManagement";
import DashboardSection from "./adminpage/DashboardSection";
import TicketSection from "./adminpage/TicketSection";
import EditViewSection from "./adminpage/EditViewSection";
import EditViewUser from "./AdminMenubarPage/EditViewUser";
import UploadBlogs from "./AdminMenubarPage/UploadBlogs";
import UserFeedbackRecieved from "./AdminMenubarPage/UserFeedbackRecieved";

function App() {
  return (
    <div className="overflow-x-hidden">
      {/**Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/adminlogin" element={<AdminLogin />}></Route>
        <Route path="/adminSignup" element={<AdminSignUp />}></Route>
        <Route path="/dashboardlayout" element={<DashboardLayout />}>
         {/* <Route path="usermanagement" element={<UserManagement/>}></Route> */}
         <Route index element={<DashboardSection />} />
         <Route path="dashboardsection" element={<DashboardSection/>}></Route>
         <Route path="ticketsection" element={<TicketSection/>}></Route>
         <Route path="editviewsection/:requestid/:category/:date" element={<EditViewSection/>}></Route>
         {/**nasted routing for admin menubar/page */}
         <Route path="usermanagement" element={<UserManagement/>}></Route> 
         <Route path="editviewuser/:username/:email" element={<EditViewUser/>}></Route>   
         <Route path="uploadblogs" element={<UploadBlogs/>}></Route>  
         <Route path="userfeedbackrecieved" element={<UserFeedbackRecieved/>}></Route>  
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;