import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useEventCreation = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext(); // Assuming you're dispatching updates to the auth context

  const createEvent = async (eventName, eventDescription, eventLocation, eventDate) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/api/event/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventName, eventDescription, eventLocation, eventDate }),
      });

      const json = await response.json();

      if (!response.ok) {
        // Handle error if the response is not OK
        setIsLoading(false);
        setError(json.error);
        return;
      }

      if (response.ok) {
        // Event creation was successful
        // You can save the event or some relevant data to localStorage or context
        const createdEvent = json.event; // Assuming your API sends back the created event
        localStorage.setItem('createdEvent', JSON.stringify(createdEvent));

        // Optionally update the auth context with event-related data (if needed)
        dispatch({
          type: 'SET_EVENT', // Example: You can change this depending on your context actions
          payload: createdEvent,
        });

        setIsLoading(false);
      }
    } catch (err) {
      // Handle unexpected errors (network errors, etc.)
      setIsLoading(false);
      setError('Failed to create event. Please try again.');
    }
  };

  return { createEvent, error, isLoading };
};
