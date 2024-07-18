import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Login } from './login';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    (sessionStorage.getItem('logged'))
    ?
    <>
    <BrowserRouter>
      <div>
        <h1>Dashboard</h1>
        <button onClick={()=>{
          sessionStorage.removeItem('logged')
          window.location.assign("/")
        }}>logout</button>
      </div>

      <Routes>
        
      </Routes>
    </BrowserRouter>
    </>
    :
    <Login/>
  
);
