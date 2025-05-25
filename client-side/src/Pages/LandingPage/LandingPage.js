import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Landing_img from "./Landing_img.jpg";
import Button from "react-bootstrap/Button";
import "./LandingPage.css";

export default function LandingPage() {
     const navigate = useNavigate();
     const jumptoLogin = () => {
          navigate("/login");
     };

     const jumptoSignup = () => {
          navigate("/signup");
     };

     useEffect(() => {
          const currentUser_ = JSON.parse(localStorage.getItem("currentUser"));
          if (currentUser_ && currentUser_.name == null) {
               navigate("/landing");
          }
     }, []);

     return (
          <>
               <div className="LandingContainer">
                    <div className="LandingPageContainer">
                         <div className="LandingPageChild1">
                              <img src={Landing_img} alt="img" />
                         </div>
                         <div className="LandingPageChild2">
                              <h1>
                                   Welcome to <b>Issue Tracker</b>
                              </h1>
                              <Button
                                   className="button"
                                   variant="primary"
                                   onClick={jumptoLogin}
                              >
                                   Login
                              </Button>
                              <Button
                                   className="button"
                                   variant="primary"
                                   onClick={jumptoSignup}
                              >
                                   Sign up
                              </Button>{" "}
                         </div>
                    </div>
               </div>
          </>
     );
}
