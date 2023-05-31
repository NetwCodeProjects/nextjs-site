'use client';
import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading'; 
import SignupServerComponent from '../components/SignupServerComponent';


const SignUpPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // duration
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
        <Loading /> {}
      </div>
    );
  }

  return (
    <div>
      <h1>Sign Up Page</h1>
      <SignupServerComponent />
    </div>
  );
};

export default SignUpPage;
