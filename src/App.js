import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import {Authenticator} from "@aws-amplify/ui-react";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import Privacy from "./Privacy";
import Terms from "./Terms";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    // Your authentication check logic
    setIsAuthenticated(true); // Temporarily set to true for demonstration
  }, []);

  return (
    // <Authenticator>
    //   {({signOut, user}) => (
    <Router>
      <Routes>
        <Route
          path="/"
          element=<LandingPage />
          // element={isAuthenticated ? <Dashboard /> : <LandingPage />}
        />
        <Route path="/Dashboard" element=<Dashboard /> />
        <Route path="/Privacy" element=<Privacy /> />
        <Route path="/Terms" element=<Terms /> />
      </Routes>
    </Router>
    //   )}
    // </Authenticator>
  );
};

export default App;
