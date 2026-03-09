import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Auth.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);
    
    const { signup, isLoading, error, clearError, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    // Redirect if already authenticated
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    // Clear error when component mounts
    useEffect(() => {
        clearError();
    }, [clearError]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        
        // Clear validation errors when user starts typing
        if (validationErrors.length > 0) {
            setValidationErrors([]);
        }
        clearError();
    };

    const validateForm = () => {
        const errors = [];
        
        if (formData.name.trim().length < 2) {
            errors.push('Name must be at least 2 characters long');
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            errors.push('Please provide a valid email address');
        }
        
        if (formData.password.length < 6) {
            errors.push('Password must be at least 6 characters long');
        }
        
        if (formData.password !== formData.confirmPassword) {
            errors.push('Passwords do not match');
        }
        
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Client-side validation
        const errors = validateForm();
        if (errors.length > 0) {
            setValidationErrors(errors);
            return;
        }
        
        const result = await signup(formData.name, formData.email, formData.password);
        
        if (result.success) {
            navigate('/');
        } else if (result.errors) {
            setValidationErrors(result.errors);
        }
    };

    const togglePasswordVisibility = (field) => {
        if (field === 'password') {
            setShowPassword(!showPassword);
        } else {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };

    const getPasswordStrength = (password) => {
        if (password.length === 0) return '';
        if (password.length < 6) return 'weak';
        if (password.length < 10) return 'medium';
        return 'strong';
    };

    const passwordStrength = getPasswordStrength(formData.password);

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h2 className="auth-title">Join PlacementIQ!</h2>
                    <p className="auth-subtitle">Create your account and start your placement preparation journey</p>
                </div>

                <form className="auth-form" onSubmit={handleSubmit}>
                    {(error || validationErrors.length > 0) && (
                        <div className="error-message">
                            <i className="error-icon">⚠</i>
                            <div>
                                {error && <div>{error}</div>}
                                {validationErrors.map((err, index) => (
                                    <div key={index}>{err}</div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <div className="input-wrapper">
                            <i className="input-icon">👤</i>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-input"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <div className="input-wrapper">
                            <i className="input-icon">✉</i>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-wrapper">
                            <i className="input-icon">🔒</i>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                className="form-input"
                                placeholder="Create a password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => togglePasswordVisibility('password')}
                            >
                                {showPassword ? '👁' : '👁‍🗨'}
                            </button>
                        </div>
                        {formData.password && (
                            <div className={`password-strength ${passwordStrength}`}>
                                <div className="strength-bar">
                                    <div className={`strength-fill ${passwordStrength}`}></div>
                                </div>
                                <span className="strength-text">
                                    {passwordStrength === 'weak' && 'Weak password'}
                                    {passwordStrength === 'medium' && 'Medium password'}
                                    {passwordStrength === 'strong' && 'Strong password'}
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <div className="input-wrapper">
                            <i className="input-icon">🔒</i>
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                name="confirmPassword"
                                className="form-input"
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => togglePasswordVisibility('confirmPassword')}
                            >
                                {showConfirmPassword ? '👁' : '👁‍🗨'}
                            </button>
                        </div>
                        {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                            <div className="password-mismatch">
                                ❌ Passwords do not match
                            </div>
                        )}
                        {formData.confirmPassword && formData.password === formData.confirmPassword && formData.password.length > 0 && (
                            <div className="password-match">
                                ✅ Passwords match
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className={`auth-button ${isLoading ? 'loading' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Creating Account...' : 'Create Account'}
                    </button>
                </form>

                <div className="auth-footer">
                    <p className="auth-switch">
                        Already have an account? 
                        <Link to="/login" className="auth-link">Sign in here</Link>
                    </p>
                </div>

                <div className="benefits-section">
                    <h4 className="benefits-title">🎯 What you'll get:</h4>
                    <ul className="benefits-list">
                        <li>📚 Comprehensive DSA problem sets</li>
                        <li>🎓 Core subject preparation materials</li>
                        <li>📄 Resume building guidance</li>
                        <li>💼 Interview question banks</li>
                        <li>📊 Progress tracking</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Signup;