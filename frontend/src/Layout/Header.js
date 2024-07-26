import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                    <li><Link to="/forgot-password">Forgot Password</Link></li>
                    <li><Link to="/ordered-products">Ordered Products</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
