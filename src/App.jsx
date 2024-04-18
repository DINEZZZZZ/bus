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
        <Route exact path="/bus/" element={<LandingPage />} /> 
        <Route path='/bus/signup' element={<SignupForm/>}/>
        <Route path='/bus/adminpage' element={<AdminConsole/>}/>
        <Route path='/bus/signinAdmin' element={<SigninAdmin/>}/>
        <Route path='/bus/login' element={<SigninForm/>}/>
        <Route path="/bus/home" element={<QRScanner />} /> 
        <Route path="/bus/add-student" element={<AddStudentDetails />} />
        <Route path="/bus/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
