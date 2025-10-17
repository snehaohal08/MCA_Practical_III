import React, { useState, useEffect } from "react";
const Q13 = () => {
  // State to store API data
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  // useEffect to fetch data on component mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "White" }}>User List</h2>
      <ol style={{ backgroundColor: "white", color: "black" }}>
        {users.map((user) => (
          <li key={user.id} style={{ padding: "10px" }}>
            <strong>{user.name}</strong> ({user.email})
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Q13;
