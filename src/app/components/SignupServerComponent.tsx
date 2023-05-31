import React,  { useCallback } from 'react';
import SignupForm from './SignupForm';

// Placeholder signup function
async function signup({ username, password }: { username: string; password: string }) {
  // Perform signup logic, such as making an API call to create a user account
  // Example API call using fetch:
  const response = await fetch('/api/signup', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Handle the response and perform any necessary actions
  if (response.ok) {
    console.log('Signup successful');
    // Perform any additional actions, such as redirecting to a success page
  } else {
    console.error('Signup failed');
    // Handle the error, display an error message, or perform any other necessary actions
  }
}

const SignupServerComponent: React.FC = () => {
    const handleSubmit = useCallback(
      async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
          username: { value: string };
          password: { value: string };
        };
        const username = target.username.value;
        const password = target.password.value;
  
        await signup({ username, password });
      },
      []
    );

    return <SignupForm onSubmit={handleSubmit} />;
  };
  
  export default SignupServerComponent;