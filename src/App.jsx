import React from 'react';

import './App.css';
import NavBar from './Components/NavBar';
//FuncComp - alias - start with an Uppercase
import FuncComp from './Components/Functional';
import ClassComp from './Components/ClassComponent';
//Page Not Found Component

//Configure the routing paths 
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar/>
      
      {/* Welcome to Online Training : <Emp empname="John"></Emp> */}
     <Routes>
      <Route path="funcom" element={<FuncComp/>}></Route>
      <Route path="classcom" element={<ClassComp/>}></Route>
     
     </Routes>
    </div>
  );
}

export default App;