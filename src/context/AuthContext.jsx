import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const API_BASE_URL = 'http://localhost:5000/auth';

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const login = async (email, password) => {
        try {

            setIsLoading(true);
            setError(null);

            const response = await axios.post(`${API_BASE_URL}/login`, {
                email,
                password
            });

            setUser(response.data.user);

            return { success: true };

        } catch (error) {

            const message = error.response?.data?.message || "Login failed";
            setError(message);

            return { success: false, message };

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

            setUser(response.data.user);

            return { success: true };

        } catch (error) {

            const message = error.response?.data?.message || "Signup failed";
            setError(message);

            return { success: false, message };

        } finally {
            setIsLoading(false);
        }

    };


    const logout = () => {
        setUser(null);
    };


    const clearError = () => {
        setError(null);
    };


    const value = {
        user,
        login,
        signup,
        logout,
        clearError,
        error,
        isLoading,
        isAuthenticated: !!user
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );

};