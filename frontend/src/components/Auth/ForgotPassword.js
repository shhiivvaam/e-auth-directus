import React, { useState } from 'react';
import authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleForgotPassword = async () => {
        try {
            await authService.forgotPassword(email);
            navigate('/otp-verification')
        } catch (error) {
            console.error('Forgot password failed', error);
        }
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <button onClick={handleForgotPassword}>Send OTP</button>
        </div>
    );
};

export default ForgotPassword;
