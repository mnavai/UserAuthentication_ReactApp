import { useEffect, useState } from "react";
import axios from "axios";
import Logout from "./Logout";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8077/api/v1/user/apiprofile", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkaGVlcmFqLnNpbmdoQHNudmEuY29tIiwicm9sZXMiOlsiUEFSVElDSVBBTlQiXSwiZXhwIjoxNjgzMzk2NTU3fQ.y3W8DPFDRbsCS3f4TI3Tgv2pf3wXRVxDhZ7JC4mKWys2WDuQmO4Wrip1Kiy9ouADGauo5oNSo2c43tRq1P-hKw`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div class="container mt-5">
      <div class="dashboard-message bg-white p-4 rounded shadow-sm">
        <p class="h4 text-center mb-0">Welcome {userInfo.firstName}!,You have successfully logged in!</p>
        <br/>
        <Logout></Logout>
      </div>
    </div>
  );
};

export default Dashboard;