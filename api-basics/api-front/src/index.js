import React from 'react';
import ReactDOM from 'react-dom/client';
import { Form } from './form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Views } from './view';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AppNav from './AppNav';
import { Update } from './Update';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>      
      {/* <div>
        <a className='btn btn-outline-primary' href="/">View All</a>
        <a className='btn btn-outline-primary' href="/new">New One</a>
      </div> */}
      <AppNav/>
      <Routes>
        <Route exact path='/' Component={()=><Views/>}/>
        <Route exact path='/new' Component={()=><Form/>}/>
        <Route exact path='/:id' Component={()=><Update/>}/>
      </Routes>
    </BrowserRouter>
    {/* <Form/> */}
    {/* <Views/> */}
  </React.StrictMode>
);
