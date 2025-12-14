import React from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Vision from './components/Vision.jsx'
import Endpoints from './components/Endpoints.jsx'
import ProtectedRoute from "./security/ProtectedRoute.jsx";


const root = document.getElementById("root");


ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
          
          <Route 
          path="vision" element={<ProtectedRoute role={["user"]}>
            <Vision />
          </ProtectedRoute>  } />
        
         

          <Route 
          path="endpoints" element={<ProtectedRoute role={["admin"]}>
            <Endpoints />
          </ProtectedRoute>  } />
        
         
      </Route>
      
    </Routes>

  </BrowserRouter>

   
  
)
