import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./Footer.css";

// Import social media logos
import githubLogo from '../assets/social-icons/github.svg';
import linkedinLogo from '../assets/social-icons/linkedin.svg';
import twitterLogo from '../assets/social-icons/twitter.svg';
import facebookLogo from '../assets/social-icons/facebook.svg';
import instagramLogo from '../assets/social-icons/instagram.svg';
import youtubeLogo from '../assets/social-icons/youtube.svg';

export default function Footer() {
     const currentYear = new Date().getFullYear();

     return (
          <footer className="footer-main">
               <MDBContainer>
                    <MDBRow className="py-4">
                         <MDBCol md="4" className="mb-4 mb-md-0">
                              <h5 className="text-uppercase mb-4">IssueTracker</h5>
                              <p className="mb-0">
                                   A modern issue tracking system for efficient project management
                                   and team collaboration.
                              </p>
                         </MDBCol>

                         <MDBCol md="4" className="mb-4 mb-md-0">
                              <h5 className="text-uppercase mb-4">Quick Links</h5>
                              <ul className="list-unstyled mb-0">
                                   <li className="mb-2">
                                        <a href="/organisations" className="footer-link">
                                             Organizations
                                        </a>
                                   </li>
                                   <li className="mb-2">
                                        <a href="/issues" className="footer-link">
                                             Issues
                                        </a>
                                   </li>
                                   <li className="mb-2">
                                        <a href="/chats" className="footer-link">
                                             Chats
                                        </a>
                                   </li>
                                   <li>
                                        <a href="/aboutus" className="footer-link">
                                             About Us
                                        </a>
                                   </li>
                              </ul>
                         </MDBCol>

                         <MDBCol md="4" className="mb-4 mb-md-0">
                              <h5 className="text-uppercase mb-4">Connect With Us</h5>
                              <div className="social-links">
                                   <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <img src={githubLogo} alt="GitHub" />
                                   </a>
                                   <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <img src={linkedinLogo} alt="LinkedIn" />
                                   </a>
                                   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <img src={twitterLogo} alt="Twitter" />
                                   </a>
                                   <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <img src={facebookLogo} alt="Facebook" />
                                   </a>
                                   <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <img src={instagramLogo} alt="Instagram" />
                                   </a>
                                   <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <img src={youtubeLogo} alt="YouTube" />
                                   </a>
                              </div>
                         </MDBCol>
                    </MDBRow>

                    <hr className="my-4" />

                    <div className="text-center py-3">
                         <p className="mb-0">
                              © {currentYear} IssueTracker. Created by{" "}
                              <a href="https://github.com/vijaychandsharma" className="footer-link">
                                   Vijay Chand Sharma
                              </a>
                         </p>
                    </div>
               </MDBContainer>
          </footer>
     );
}
