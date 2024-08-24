import React, { useEffect, useState } from 'react';
import './AdminPage.module.css';
import { motion } from 'framer-motion';

const AdminPage = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        // Fetch expenses data from API
        fetch('/api/expenses')
            .then(response => response.json())
            .then(data => setExpenses(data));
    }, []);

    return (
        <div className="admin-page">
            <header className="header">
                <motion.h1 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 1 }}
                >
                    Admin Dashboard
                </motion.h1>
                <motion.button 
                    className="logout-btn"
                    whileHover={{ scale: 1.1, backgroundColor: '#ff4c4c' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {/* Handle logout */}}
                >
                    Logout
                </motion.button>
            </header>
            <main className="main-content">
                <motion.h2 
                    initial={{ x: '-100vw' }} 
                    animate={{ x: 0 }} 
                    transition={{ type: 'spring', stiffness: 100 }}
                >
                    Expenses
                </motion.h2>
                <motion.table 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 1 }}
                >
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Payment Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map(expense => (
                            <motion.tr 
                                key={expense.id}
                                whileHover={{ scale: 1.05, backgroundColor: '#e0f7fa' }}
                            >
                                <td>{expense.category}</td>
                                <td>{expense.amount}</td>
                                <td>{expense.date}</td>
                                <td>{expense.name}</td>
                                <td>{expense.paymentMethod}</td>
                            </motion.tr>
                        ))}
                    </tbody>
                </motion.table>
            </main>
        </div>
    );
};

export default AdminPage;
