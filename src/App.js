import * as React from 'react';
import SignIn from "./pages/SignIn";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SignUp from "./pages/SignUp";

export default function App() {


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={  <SignIn></SignIn>}/>
          <Route path="/SignUp" element={  <SignUp></SignUp>}/>
        </Routes>

      </BrowserRouter>


  );
}