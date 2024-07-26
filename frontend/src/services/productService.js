import axios from 'axios';

const API_URL = 'http://localhost:8055'; // Update with your Directus instance URL

const getOrderedProducts = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const response = await axios.get(`${API_URL}/items/products`, {
        headers: {
            Authorization: `Bearer ${user.token}`,
        },
    });
    return response.data.data;
};

export default {
    getOrderedProducts,
};
