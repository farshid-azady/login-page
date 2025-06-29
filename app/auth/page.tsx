'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import Input from '../components/Input';
import styles from './page.module.scss';

// Import the local API data
import localApiData from '../../api.json';

const AuthPage: React.FC = () => {
  const router = useRouter();
  const { login } = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    iranianPhone: '',
  });
  
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    iranianPhone?: string;
    general?: string;
  }>({});
  
  const [isLoading, setIsLoading] = useState(false);

  // Iranian phone number validation function
  const validateIranianPhone = (phone: string): boolean => {
    // Remove all non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Iranian phone number patterns:
    // Mobile: 09xxxxxxxxx (11 digits starting with 09)
    // Landline: 0xxxxxxxxx (10 digits starting with 0)
    // International: +98xxxxxxxxx (12 digits starting with +98)
    
    const mobilePattern = /^09\d{9}$/;
    const landlinePattern = /^0\d{9}$/;
    const internationalPattern = /^\+98\d{10}$/;
    
    return mobilePattern.test(cleanPhone) || 
           landlinePattern.test(cleanPhone) || 
           internationalPattern.test(cleanPhone);
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    // Iranian phone number validation (required field)
    if (!formData.iranianPhone) {
      newErrors.iranianPhone = 'Iranian phone number is required';
    } else if (!validateIranianPhone(formData.iranianPhone)) {
      newErrors.iranianPhone = 'Please enter a valid Iranian phone number (e.g., 09123456789 or +989123456789)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    setErrors({});
    
    try {
      // Use local API data for reliable authentication
      const user = localApiData.results[0];
      
      // Simulate authentication delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      login(user);
      router.push('/dashboard');
      
    } catch (error) {
      console.error('Login error:', error);
      setErrors({
        general: 'Login failed. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  // Format Iranian phone number as user types
  const handlePhoneChange = (value: string) => {
    // Remove all non-digit characters except +
    let cleanValue = value.replace(/[^\d+]/g, '');
    
    // Ensure only one + at the beginning
    if (cleanValue.startsWith('+')) {
      cleanValue = '+' + cleanValue.substring(1).replace(/\+/g, '');
    }
    
    // Limit length
    if (cleanValue.length > 13) {
      cleanValue = cleanValue.substring(0, 13);
    }
    
    handleInputChange('iranianPhone', cleanValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.authCard}>
        <div className={styles.header}>
          <h1>Welcome Back</h1>
          <p>Sign in to your account to continue</p>
        </div>
        
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <Input
            type="email"
            label="Email Address"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(value) => handleInputChange('email', value)}
            error={errors.email}
            required
          />
          
          <Input
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(value) => handleInputChange('password', value)}
            error={errors.password}
            required
          />
          
          <Input
            type="tel"
            label="Iranian Phone Number"
            placeholder="e.g., 09123456789 or +989123456789"
            value={formData.iranianPhone}
            onChange={handlePhoneChange}
            error={errors.iranianPhone}
            required
          />
          
          {errors.general && (
            <div className={styles.errorMessage}>
              {errors.general}
            </div>
          )}
          
          <Button
            onClick={handleLogin}
            disabled={isLoading}
            className={styles.loginButton}
          >
            {isLoading ? 'Signing in...' : 'Login'}
          </Button>
        </form>
        
        <div className={styles.footer}>
          <p>
            Demo: Use any email, password, and valid Iranian phone number to login
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage; 