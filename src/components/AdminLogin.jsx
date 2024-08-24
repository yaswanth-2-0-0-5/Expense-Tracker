import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.module.css'; // Make sure you have styles for AdminLogin

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with your authentication logic
        if (email === 'admin@example.com' && password === 'password123') {
            navigate('/admin'); // Redirect to admin page
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Admin Login</h2>
            <label>Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <label>Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Login</button>
        </form>
    );
};

export default AdminLogin;
