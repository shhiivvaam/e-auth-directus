import React, { useState } from 'react';
import authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    const handleOTPVerification = async () => {
        try {
            await authService.verifyOTP(otp);
            navigate('/login');
        } catch (error) {
            console.error('OTP verification failed', error);
        }
    };

    return (
        <div>
            <h2>OTP Verification</h2>
            <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
            />
            <button onClick={handleOTPVerification}>Verify OTP</button>
        </div>
    );
};

export default OTPVerification;
