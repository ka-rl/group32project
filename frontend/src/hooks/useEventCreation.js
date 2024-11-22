import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useEventCreation = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const createEvent = async (eventName, eventDescription, eventLocation, selectedDate) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:3000/api/event/create', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({eventName, eventDescription, eventLocation, selectedDate}),
        })
        const json = await response.json()
        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // save use to local storage
            

            //update auth context
            setIsLoading(false)
        }
    }
    return { createEvent, error, isLoading }
}