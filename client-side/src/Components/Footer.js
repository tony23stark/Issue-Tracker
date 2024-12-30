import React from "react";
import "./Components.css";

export default function Footer() {
     return (
          <div className="FooterContainer">
               <p style={{ textAlign: "centre", fontWeight: "bold" }}>
                    Created in 2024
               </p>
               <hr />
               <div style={{ textAlign: "start" }}>
                    <p>@Creators : </p>
                    <a
                         href="https://github.com/tony23stark"
                         style={{ textDecoration: "none", color: "azure" }}
                    >
                         Vijay Chand Sharma
                    </a>
                    
               </div>
          </div>
     );
}
