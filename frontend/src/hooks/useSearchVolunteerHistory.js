// hooks/useSearchVolunteerHistory.js
import { useState } from 'react';

export const useSearchVolunteerHistory = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [eventHistory, setEventHistory] = useState([]);

    const searchVolunteerHistory = async (email) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('http://localhost:3000/api/history/searchVolunteerHistory', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }

        if (response.ok) {
            setEventHistory(json.eventsAttended || []);
            setIsLoading(false);
        }
    };

    return { searchVolunteerHistory, eventHistory, error, isLoading };
};
