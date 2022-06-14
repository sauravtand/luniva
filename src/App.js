import React from 'react'
import 'antd/dist/antd.css';
import Design from './component/Design'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './component/Register';
import Counter from './component/Counter';
import Vehicle from './component/Vehicle';
import Post from './component/VehicleOwner';
import Staff from './component/VehicleStaff';
import Detail from './component/Details';


const App = () => {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Design />} />


          <Route path="/register" element={< Register />} />
          <Route path="/counter" element={< Counter />} />
          <Route path="/vehicle" element={< Vehicle />} />
          <Route path="/post" element={< Post />} />
          <Route path="/staff" element={< Staff />} />
          <Route path="/detail" element={< Detail />} />
        </Routes>
      </Router>

    </>)
}

export default App;