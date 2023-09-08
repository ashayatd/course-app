import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../../../layouts/Header/Header";
import Footer from "../../../layouts/Footer/Footer";
import { useAuth } from "../../../authentication/AuthContext";
import "./userdashboard.css";

function Userdashboard() {
  const navigate = useNavigate();
  const [userDataArray, setUserDataArray] = useState([]);
  const { user } = useAuth();

  const [courseId, setCourseId] = useState([]);

  useEffect(() => {
    setCourseId(user.orderedItems); // Set the courseId once on mount
  }, [user.orderedItems]);

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        console.log("Course Array", JSON.stringify({courseId}));
        const response = await fetch(
          process.env.REACT_APP_API + "/user/ordereditems",
          {
            method: "POST",
            body: JSON.stringify({courseId}),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log("User Dashboard Response", data);

        if (response.status === 401) {
          alert("Something went wrong");
        }

        if (response.ok) {
          setUserDataArray(data.coursesData);
          console.log("Dashboard successful");
        } else {
          console.log("Dashboard failed");
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchResponse();
  }, [courseId]);

  return (<>
      <Header />
        <h1 className="login-heading">
          Ordered&nbsp;<span>Items</span>
        </h1>
        <div className="container">
          {userDataArray.map((userdata, index) => (
            <div className="divtable" key={index}>
              <img src={userdata.imageLink} alt="graphic" className="pic1" />
              <div className="logoname">
                <h3 className="author">{userdata.createdBy}</h3>
                <div className="price">${userdata.price}</div>
              </div>
              <div className="tname">{userdata.title}</div>

              <div className="description">
                Last visited: 3 days ago
                <br />
                Chapter Completed: 4/20
                <br />
                Leave a rating{" "}
                <sapn className="rating">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </sapn>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${20}%` }}></div>
              </div>
              <div className="buttons">
                <button className="pricebutton">Resume Learning</button>
              </div>
            </div>
          ))}
        </div>
      <Footer />
    </>
  );
}

export default Userdashboard;
