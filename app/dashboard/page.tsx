'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import styles from './page.module.scss';

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const { user, logout, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/auth');
    }
  }, [user, isLoading, router]);

  const handleLogout = () => {
    logout();
    router.push('/auth');
  };

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to auth page
  }

  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>
        <div className={styles.welcomeCard}>
          <h1>Welcome to the Dashboard</h1>
          <Button
            onClick={handleLogout}
            variant="secondary"
            className={styles.logoutButton}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 