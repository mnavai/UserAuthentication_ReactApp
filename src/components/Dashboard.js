import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8077/user", {
        headers: {
          Authorization: `Bearer ${eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkaGVlcmFqLnNpbmdoQHNudmEuY29tIiwicm9sZXMiOlsiUEFSVElDSVBBTlQiXSwiZXhwIjoxNjgzMjE4NjU1fQ.XhVfZp3mk4y7y9Inh5AsbZN6iMBZiSGdglo9E77jJeoh575Ef8vxMq66DdIS7J8IKAsw77vYdwLAoTafXBsG0g}`,
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
    <div>
      <h1>Welcome, {userInfo.name}!</h1>
      <p>Email: {userInfo.email}</p>
    </div>
  );
};

export default Dashboard;
