import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8077/api";
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkaGVlcmFqLnNpbmdoQHNudmEuY29tIiwicm9sZXMiOlsiUEFSVElDSVBBTlQiXSwiZXhwIjoxNjgzMjE4NjU1fQ.XhVfZp3mk4y7y9Inh5AsbZN6iMBZiSGdglo9E77jJeoh575Ef8vxMq66DdIS7J8IKAsw77vYdwLAoTafXBsG0g}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
