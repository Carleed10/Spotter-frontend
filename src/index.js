import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
// import Footer from './Components/Footer';
import Signin from "./Components/Signin";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import Postproject from "./Components/Postproject";
import Landing from "./Components/Landing";
import Notfound from "./Components/Notfound";
import Dashboard1 from "./Dashboard/Dashboard1";
import Jobdetails from "./Dashboard/Jobdetails";
import Sidebar from "./Components/Sidebar";
// import Changepassword from "./Dashboard/Changepassword";
import Profile from "./Dashboard/Profile";
import Jobs from "./Dashboard/Jobs";
import Deleteaccount from "./Dashboard/Deleteaccount";
import Dash from "./Dashboard/Dash";
import Appliedjobs from "./Dashboard/Appliedjobs";
import Applicants from "./Dashboard/Applicants";
import { Createdjobs } from "./Dashboard/Createdjobs";
import Postjob from "./Components/Postjob";
import Intro from "./Components/Intro";
import App from "./App";
import Appli from "./Dashboard/Appli";
import Profilepage from "./Dashboard/Profilepage";
import CandidateProfile from "./Dashboard/CandidateProfile";
import ForgotPassword from "./Components/ForgotPassword";
import Otp from "./Components/Otp";
import Modal from "./Components/Modal";
import ResetPassword from "./Components/ResetPassword";
import Notauthorised from "./Components/Notauthorised";
import Analytics from "./Dashboard/Analytics";
import Camera from "./Components/Camera";
import Capture from "./Components/Capture";
import Notification from "./Dashboard/Notification";
import NavBar4 from "./Components/NavBar4";
import { Provider } from 'react-redux'
import { persistor, Store } from "./Redux/Store";
import { PersistGate } from "redux-persist/integration/react";

// import Dam from "./Components/Dam";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    

    <PersistGate loading={null} persistor={persistor}>

    <BrowserRouter>
      <Routes>
      <Route path="/app" element={<App/>} />

      <Route path="/" element={<Intro />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/notauthorised" element={<Notauthorised />} />
      <Route path="/camera" element={<Camera />} />
      <Route path="/capture" element={<Capture />} />
      {/* <Route path="/dam" element={<Dam />} /> */}
      

      





        <Route path="/landing" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/forgotpassword/otp" element={<Otp />} />


        <Route path="/navbar" element={<Navbar />} />
        <Route path="/navbar4" element={<NavBar4 />} />

        <Route path="/postproject" element={<Postproject />} />
        <Route path="/jobdetails/:id" element={<Jobdetails />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/postjob" element={<Postjob />} />
        <Route path="/profile" element={<Profilepage />} />



        {/* <Route path='/dashboard/changepassword' element = {<Changepassword />}/> */}

        {/* <Route path='/dashboard' element = {<Dashboard1 />}/> */}

        <Route path="/dashboard" element={<Dashboard1 />}>
          <Route index element={<Dash />} />
          {/* <Route path="/dashboard/changepassword" element={<Changepassword />} /> */}
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/deleteaccount" element={<Deleteaccount />} />
          <Route path="/dashboard/applied" element={<Appliedjobs />} />
          <Route path="/dashboard/applicants" element={<Applicants />} />
          <Route path="/dashboard/analytics" element={<Analytics/>} />
          <Route path="/dashboard/notification" element={<Notification/>} />


          <Route path="/dashboard/applicants/appli/:id" element={<Appli />} />
          <Route path="/dashboard/applicants/candidateProfile/:id" element={<CandidateProfile />} />


          <Route path="/dashboard/created" element={<Createdjobs />} />
        </Route>

        <Route path="/*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>

    </PersistGate>


    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
