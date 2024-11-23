import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useRegister = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const register = async (firstName, lastName, email, password, location, preference, availability, skills) => {
        setIsLoading(true);
        setError(null);

        // Send the data to the server for registration
        const response = await fetch('http://localhost:3000/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
                location,
                preference,
                availability,
                skills,
            }),
        });

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error || 'Registration failed');
        } else {
            // If registration is successful, save the user to localStorage
            localStorage.setItem('user', JSON.stringify(json));

            // Update auth context with the registered user data
            dispatch({ type: 'LOGIN', payload: json });

            setIsLoading(false);
        }
    };

    return { register, error, isLoading };
};
