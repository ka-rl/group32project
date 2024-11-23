import React, { useState } from 'react';

const ServerTest = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null); // Clear any previous errors
      const res = await fetch('http://localhost:3000/api/user'); // Replace with your backend route
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      
      const data = await res.json(); // Parse JSON response
      setResponse(data); // Store the response
    } catch (err) {
      setError(err.message); // Store the error message
    }
  };

  return (
    <div>
      <h1>Server Test</h1>
      <button onClick={fetchData}>Fetch Data from Server</button>
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ServerTest;
