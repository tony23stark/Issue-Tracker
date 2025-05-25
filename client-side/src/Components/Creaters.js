import React from "react";
import UserCard from "./UserCard";
import vijay from "./StaticRES/Vijay.jpg";
export default function Creaters() {
     return (
          <div style={{ padding: "20px" }}>
               <h2 style={{ color: "darkcyan" }}>Creators</h2>
               <div className="UserCardOuterContainer">
                    <div className="UserCardContainer">
                         <UserCard
                              name={"Vijay Chand Sharma"}
                              branch={"Information and Technology"}
                              image={vijay}
                              gitLink={"https://github.com/tony23stark"}
                         />
                    
                    </div>
               </div>
          </div>
     );
}
