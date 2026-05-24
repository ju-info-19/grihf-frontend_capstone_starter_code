import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Notification from './components/Notification';
import FindDoctorSearch from './components/FindDoctorSearch';
import Login from './components/Login';
import Sign_Up from './components/Sign_Up';

function App() {
    return (
        <BrowserRouter>
            <Notification />
            <Navbar />
            <Routes>
                <Route path="/" element={<FindDoctorSearch />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Sign_Up />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;