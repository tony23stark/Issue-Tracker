import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import MessageCardOther from "../../Components/MessageCardOther";
import MessageCardUser from "../../Components/MessageCardUser";
import "./ChatPage.css";
import MessageInput from "../../Components/MessageInput";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import Spinner from "react-bootstrap/esm/Spinner";
// Messages
// const messages = [
//     {
//         author : 'Ambani',
//         text : 'Hello!',
//         dateTime : '7:30 AM 24th April 2022',
//         userAuth : false
//     },
// ];

export default function ChatPage() {
     const navigate = useNavigate();
     const [HtmlLoaded, setHtmlLoaded] = useState(false);
     const [MessageComponent, setMessageComponent] = useState(<></>);
     const [alertHead, setAlertHead] = useState("");
     const [alertBody, setAlertBody] = useState("");
     const [alertVarient, setAlertVarient] = useState("");
     const [Alertshow, setAlertShow] = useState(false);
     const [currentSender, setCurrentSender] = useState("");
     const [currentIssue, setCurrentIssue] = useState("");
     const [chatReloader, setChatReloader] = useState(1);

     const startReloading = () => {
          setChatReloader(chatReloader + 1);
     };
     let currentUser_ = {};

     useEffect(() => {
          currentUser_ = JSON.parse(localStorage.getItem("currentUser"));
          if (currentUser_ == null) {
               navigate("/landing");
               return;
          }

          const dizkuzData = JSON.parse(localStorage.getItem("dizkuzData"));
          if (!dizkuzData || dizkuzData.currentIssue === "none") {
               setAlertHead("No Issue Selected");
               setAlertBody("Please select an issue to view its chat messages.");
               setAlertVarient("warning");
               setAlertShow(true);
               setHtmlLoaded(true);
               return;
          }

          const doWork = async () => {
               try {
                    const currentUser_ = JSON.parse(localStorage.getItem("currentUser"));
                    const IssID = dizkuzData.currentIssue;
                    const UsrID = currentUser_._id;

                    setCurrentSender(UsrID);
                    setCurrentIssue(IssID);

                    const inp = {
                         email: currentUser_.email,
                         password: currentUser_.password,
                         IssueID: IssID,
                         UserID: UsrID,
                    };
                    const response = await fetch(
                         "http://localhost:5000/chats",
                         {
                              method: "POST",
                              body: JSON.stringify(inp),
                              headers: {
                                   "Content-Type": "application/json",
                              },
                         }
                    );
                    const fetchData = await response.json();
                    if (fetchData.status === "authFailed") {
                         localStorage.removeItem("currentUser");
                         navigate("/landing");
                    } else if (fetchData.status === "failed") {
                         setAlertHead("Unknown error occurred");
                         setAlertBody(
                              "Due to some unexpected error messages are unable to be loaded. Please try again."
                         );
                         setAlertVarient("danger");
                         setAlertShow(true);
                    } else {
                         const LoadedData = fetchData.data;
                         const Messages = LoadedData;
                         let tempVar;
                         if (Messages.length === 0) {
                              tempVar = (
                                   <div
                                        style={{
                                             paddingTop: "100px",
                                             paddingBottom: "50px",
                                             color: "darkred",
                                        }}
                                   >
                                        <h4>
                                             No conversation exists in this chat. Send a message to start a conversation...
                                        </h4>
                                   </div>
                              );
                         } else {
                              tempVar = Messages.map((message, index) => (
                                   <div key={index}>
                                        {message.userAuth ? (
                                             <MessageCardOther
                                                  author={message.author}
                                                  text={message.text}
                                                  dateTime={message.dateTime}
                                             />
                                        ) : (
                                             <MessageCardUser
                                                  author={message.author}
                                                  text={message.text}
                                                  dateTime={message.dateTime}
                                             />
                                        )}
                                   </div>
                              ));
                         }
                         setMessageComponent(tempVar);
                         setHtmlLoaded(true);
                    }
               } catch (error) {
                    setAlertHead("Unexpected error occurred!");
                    setAlertBody(
                         "Due to some unexpected error we were not able to get the Messages for you. Please check your connection and try again..."
                    );
                    setAlertVarient("danger");
                    setAlertShow(true);
               }
          };
          doWork();
          
          // Set up auto-refresh interval
          const intervalId = setInterval(() => {
               startReloading();
          }, 5000);

          // Cleanup interval on component unmount
          return () => clearInterval(intervalId);
     }, [chatReloader]);

     return HtmlLoaded ? (
          Alertshow ? (
               <>
                    <NavBar />
                    <div style={{ height: "56px" }}></div>
                    <Alert
                         variant={alertVarient}
                         onClose={() => setAlertShow(false)}
                         dismissible
                    >
                         <Alert.Heading>{alertHead}</Alert.Heading>
                         <p>{alertBody}</p>
                    </Alert>
                    <div
                         className="ChatPageContainer"
                         style={{ paddingTop: "0px" }}
                    >
                         <div className="ChatPageContainer2">
                              {MessageComponent}
                         </div>
                    </div>
                    <MessageInput
                         senderID={currentSender}
                         IssueID={currentIssue}
                         chatReloader={chatReloader}
                         setChatReloader={setChatReloader}
                    />
                    <div style={{ height: "64px" }}></div>
               </>
          ) : (
               <>
                    <NavBar />
                    <div style={{ height: "56px" }}></div>
                    <div className="ChatPageContainer">
                         <div className="ChatPageContainer2">
                              {MessageComponent}
                         </div>
                    </div>
                    <div style={{ height: "64px" }}></div>
                    <MessageInput
                         senderID={currentSender}
                         IssueID={currentIssue}
                         chatReloader={chatReloader}
                         setChatReloader={setChatReloader}
                    />
               </>
          )
     ) : (
          <>
               <NavBar />
               <div className="SpinnerContainer">
                    <Spinner animation="border" variant="dark" />
               </div>
               <Footer />
          </>
     );
}
