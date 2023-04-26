import { useEffect, useState } from "react";
import axios from "axios";
import Logout from "./Logout";
import { login, profile } from "../utils/apiUtils";
import { json } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login")
    }
    else{

      profile()
      .then((response) => {
              setUserInfo(response.data);
              console.log("Getting User Profile")
            })
            .catch((error) => {
              console.error(error);
            });
  //  axios
  //     .post("http://localhost:8077/api/v1/user/apiprofile", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((response) => {
  //       setUserInfo(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
    }
    


 
  }, []);

  return (
    <div class="container mt-5">
      <div class="dashboard-message bg-white p-4 rounded shadow-sm">
        {
          userInfo == null ? <>{JSON.stringify(userInfo)}</> :
            <>
              <p class="h4 text-center mb-0">Welcome {userInfo.firstName}!,You have successfully logged in!</p>
            </>
        }
        <br />
        <Logout></Logout>
      </div>
    </div>
  );
};

export default Dashboard;