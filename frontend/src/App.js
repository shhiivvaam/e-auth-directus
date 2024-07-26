import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
import ForgotPassword from './components/Auth/ForgotPassword';
import OTPVerification from './components/Auth/OTPVerification';
import OrderedProducts from './Products/OrderedProducts';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/otp-verification" component={OTPVerification} />
        <Route path="/ordered-products" component={OrderedProducts} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
