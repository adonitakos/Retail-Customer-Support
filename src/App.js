// File: /src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar/Navbar";
// Pages
import ErrorPage from "./pages/ErrorPage";
import Landing from './pages/Landing';
import Profile from "./pages/Profile";

import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        {/* <Route exact path="/auth/login" element={<Login/>}/>
        <Route exact path="/auth/register" element={<SignUp/>}/> */}
        <Route exact path="*" element={<ErrorPage />}/>
      </Routes>
    </Router>
  );
}

export default withAuthenticator(App);