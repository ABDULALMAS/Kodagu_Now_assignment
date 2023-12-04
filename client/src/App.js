import React, { useEffect} from 'react';
import './App.css';
import TaskMain from './components/Task/Task';
import { useDispatch } from 'react-redux';
import { getTask } from './actions/Task';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Auth from "./components/auth/Auth"


function App() {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getTask());
  },[dispatch])


  return (
   
    <GoogleOAuthProvider clientId="451541305632-fhfu6mpup3lgicouu3ufm9vr0apb55dm.apps.googleusercontent.com">
      <Router>
       
          
          <Routes>

          <Route
              path="/task"
              element={ <TaskMain /> }
            />
          <Route
              path="/"
              element={<Navigate to="/task" />}
            />
          

          <Route
              path="/auth"
              element={ <Auth /> }
            />
          
          </Routes>
        
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
