import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
     MDBContainer,
     MDBNavbar,
     MDBNavbarBrand,
     MDBNavbarToggler,
     MDBIcon,
     MDBNavbarNav,
     MDBNavbarItem,
     MDBNavbarLink,
     MDBCollapse,
     MDBBtn,
} from "mdb-react-ui-kit";
import "./NavBar.css";

export default function NavBar() {
     const [showBasic, setShowBasic] = useState(false);
     const [currentUser, setCurrentUser] = useState(null);
     const navigate = useNavigate();
     const location = useLocation();

     useEffect(() => {
          const user = JSON.parse(localStorage.getItem("currentUser"));
          setCurrentUser(user);
     }, [location]);

     const logout = async () => {
          await localStorage.removeItem("currentUser");
          navigate("/landing");
     };

     const isActive = (path) => {
          return location.pathname === path;
     };

     return (
          <MDBNavbar expand="lg" className="navbar-main">
               <MDBContainer fluid>
                    <MDBNavbarBrand href="/" className="navbar-brand">
                         <MDBIcon fas icon="bug" className="me-2" />
                         IssueTracker
                    </MDBNavbarBrand>

                    <MDBNavbarToggler
                         aria-controls="navbarSupportedContent"
                         aria-expanded="false"
                         aria-label="Toggle navigation"
                         onClick={() => setShowBasic(!showBasic)}
                         className="navbar-toggler"
                    >
                         <MDBIcon icon="bars" fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}>
                         <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                              {currentUser && (
                                   <>
                                        <MDBNavbarItem>
                                             <MDBNavbarLink 
                                                  className={`nav-link ${isActive('/organisations') ? 'active' : ''}`}
                                                  onClick={() => { navigate("/organisations")}}
                                             >
                                                  <MDBIcon fas icon="building" className="me-2" />
                                                  Organizations
                                             </MDBNavbarLink>
                                        </MDBNavbarItem>

                                        <MDBNavbarItem>
                                             <MDBNavbarLink 
                                                  className={`nav-link ${isActive('/issues') ? 'active' : ''}`}
                                                  onClick={() => { navigate("/issues")}}
                                             >
                                                  <MDBIcon fas icon="tasks" className="me-2" />
                                                  Issues
                                             </MDBNavbarLink>
                                        </MDBNavbarItem>

                                        <MDBNavbarItem>
                                             <MDBNavbarLink 
                                                  className={`nav-link ${isActive('/chats') ? 'active' : ''}`}
                                                  onClick={() => { navigate("/chats")}}
                                             >
                                                  <MDBIcon fas icon="comments" className="me-2" />
                                                  Chats
                                             </MDBNavbarLink>
                                        </MDBNavbarItem>
                                   </>
                              )}

                              <MDBNavbarItem>
                                   <MDBNavbarLink 
                                        className={`nav-link ${isActive('/aboutus') ? 'active' : ''}`}
                                        onClick={() => { navigate("/aboutus")}}
                                   >
                                        <MDBIcon fas icon="info-circle" className="me-2" />
                                        About Us
                                   </MDBNavbarLink>
                              </MDBNavbarItem>
                         </MDBNavbarNav>

                         <div className="d-flex align-items-center">
                              {currentUser ? (
                                   <MDBBtn
                                        className="logout-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={logout}
                                   >
                                        <MDBIcon fas icon="sign-out-alt" className="me-2" />
                                        Logout
                                   </MDBBtn>
                              ) : (
                                   <MDBBtn
                                        className="login-btn"
                                        color="success"
                                        size="sm"
                                        onClick={() => navigate("/login")}
                                   >
                                        <MDBIcon fas icon="sign-in-alt" className="me-2" />
                                        Login
                                   </MDBBtn>
                              )}
                         </div>
                    </MDBCollapse>
               </MDBContainer>
          </MDBNavbar>
     );
}
