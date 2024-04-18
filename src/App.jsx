// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QRScanner from './QRScanner';
import AddStudentDetails from './AddStudentDetails';
import AdminPage from './Admin';
import LandingPage from './LandingPage';
import SignupForm from './Signup';
import SigninForm from './Login';
import SigninAdmin from './AdminLogin';
import AdminConsole from './AdminChoose';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} /> 
        <Route path='/signup' element={<SignupForm/>}/>
        <Route path='/adminpage' element={<AdminConsole/>}/>
        <Route path='/signinAdmin' element={<SigninAdmin/>}/>
        <Route path='/login' element={<SigninForm/>}/>
        <Route path="/home" element={<QRScanner />} /> 
        <Route path="/add-student" element={<AddStudentDetails />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
