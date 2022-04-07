import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import FAQPage from './pages/faq/FAQPage';
import PaymentsPage from './pages/payments/PaymentsPage';

import './App.css';


function App() {
    return (
        <div className="app">
            <Router>
                <Navbar />

                <Routes>
                    <Route path="/payments" element={<PaymentsPage />} />
                    <Route path="/faq" element={<FAQPage />} />

                    <Route path="*" element={<Navigate to="/payments" replace />} />
                </Routes>
            </Router>
        </div>
    );
}


export default App;
