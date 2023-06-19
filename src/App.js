import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


import MyNavigationLinks from "./pages/MyNavigationLinks";
import UserList from "./pages/UserList";
import ChefProfile from "./pages/ChefProfile";
import Home from "./pages/Home";
import ChefList from "./pages/ChefList";
import ChefsPanel from "./pages/ChefsPanel";
import UserRegistrationPage from "./pages/UserRegistrationPage";
import ContactUs from "./pages/ContactUs";
import LoginPage from "./pages/LoginPage";
import ChefRegistration from "./pages/ChefRegistration";
import { useEffect, useState } from "react";
import AboutUs from "./pages/AboutUs";



function App() {

  const [userLoginData,setUserLoginData] = useState(null);
  

  useEffect(() => {
   const loginData  = localStorage.getItem("loginData") ? JSON.parse(localStorage.getItem("loginData")) : null;
    if(loginData){
      setUserLoginData(loginData);
    }else{
      setUserLoginData(null)
    }
    return () => { setUserLoginData(null)}
    }, [])
  

  return (
    <>
      <BrowserRouter>
        <MyNavigationLinks userLoginData={userLoginData} setUserLoginData={setUserLoginData}  />

        <Routes>
          {/** 1 Route means 1 Page */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<AppLogin />} /> */}

          {/** Private Needs Protection */}
          <Route
            path="/user-registration"
            element={
                <UserRegistrationPage />
            }
          />
          <Route
            path="/home"
            element={
                <Home />
            }
          />

          <Route
            path="/"
            element={
                <Home />
            }
          />
          
          {/* <Route
            path="/user-profile/:user_id"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          /> */}

          <Route
            path="/chef-profile"
            element={
                <ChefProfile />
            }
          />

          <Route
            path="/chef-list"
            element={
                <ChefList />
            }
          />

          <Route
            path="/chef-registration"
            element={
                <ChefRegistration />
            }
          />

          <Route
            path="/contactUs"
            element={
                <ContactUs />
            }
          />


          <Route
            path="/our-chefs"
            element={
                <ChefsPanel />
             }
          />

          <Route
            path="/user-list"
            element={
                <UserList />
             }
          />
        <Route
            path="/aboutus"
            element={
                <AboutUs />
             }
          />

           <Route
            path="/login"
            element={
                <LoginPage setUserLoginData={setUserLoginData} />
             }
          />

          {/* <Route path="/registration" element={<MyRegistration />} />
          <Route path="/validation-demo" element={<ValidationDemo />} /> */}

          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// lets protect the pages

export default App;
