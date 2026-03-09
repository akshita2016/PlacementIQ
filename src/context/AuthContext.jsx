import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const API_BASE_URL = 'http://localhost:5000/auth';

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Initialize auth state from localStorage
    useEffect(() => {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');
        
        if (token && userData) {
            try {
                setUser(JSON.parse(userData));
                // Set default authorization header
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            } catch (error) {
                console.error('Error parsing stored user data:', error);
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            }
        }
        setIsLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            setIsLoading(true);
            setError(null);
            
            const response = await axios.post(`${API_BASE_URL}/login`, {
                email,
                password
            });

            if (response.data.success) {
                const { user: userData, token } = response.data;
                
                // Store in localStorage
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(userData));
                
                // Set default authorization header
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                
                setUser(userData);
                return { success: true, message: response.data.message };
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Login failed';
            setError(errorMessage);
            return { success: false, message: errorMessage };
        } finally {
            setIsLoading(false);
        }
    };

    const signup = async (name, email, password) => {
        try {
            setIsLoading(true);
            setError(null);
            
            const response = await axios.post(`${API_BASE_URL}/signup`, {
                name,
                email,
                password
            });

            if (response.data.success) {
                const { user: userData, token } = response.data;
                
                // Store in localStorage
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(userData));
                
                // Set default authorization header
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                
                setUser(userData);
                return { success: true, message: response.data.message };
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Signup failed';
            setError(errorMessage);
            return { success: false, message: errorMessage, errors: error.response?.data?.errors };
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        delete axios.defaults.headers.common['Authorization'];
        setUser(null);
        setError(null);
    };

    const clearError = () => {
        setError(null);
    };

    const value = {
        user,
        isLoading,
        error,
        login,
        signup,
        logout,
        clearError,
        isAuthenticated: !!user
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};