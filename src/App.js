import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import {Authenticator} from "@aws-amplify/ui-react";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";

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
          // element={isAuthenticated ? <Dashboard /> : <LandingPage />}
          element=<LandingPage />
        />
      </Routes>
    </Router>
    //   )}
    // </Authenticator>
  );
};

export default App;
