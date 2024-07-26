import axios from 'axios';

const API_URL = 'http://localhost:8055'; // Update with your Directus instance URL

const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
    });
    localStorage.setItem('user', JSON.stringify(response.data));
};

const logout = () => {
    localStorage.removeItem('user');
};

const forgotPassword = async (email) => {
    await axios.post(`${API_URL}/auth/password/request`, {
        email,
    });
};

const verifyOTP = async (otp) => {
    await axios.post(`${API_URL}/auth/password/verify`, {
        otp,
    });
};

export default {
    login,
    logout,
    forgotPassword,
    verifyOTP,
};
