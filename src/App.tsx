
import React, { useRef, useState } from 'react';
import Layouts from './Layouts';
import Login from './views/Login';
import './App.scss';


const App: React.FC = () => {

  return (
    <div>
      {/* <Layouts /> */}
      <Login/>
    </div>
  );
};

export default App;