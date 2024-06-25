import React from "react";

//Async operation supported in server components
const Users = async () => {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <span>
      Users Page
      {users.map((user) => (
        <span key={user.id}>
          <span>
            <span>
              <h2>{user.name}</h2>
              <p>{user.username}</p>
            </span>
            <span>
              <span>{user.email}</span>
              <span>{user.phone}</span>
            </span>
          </span>
        </span>
      ))}
    </span>
  );
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};
const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "0.5rem",
  padding: "1rem",
};

const cardStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem",
  backgroundColor: "white",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
  borderRadius: "0.5rem",
  color: "#4A5568", // gray-600
};

const flexColStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem", // space-y-1 equivalent
};

const textLgStyle = {
  fontSize: "1.125rem", // text-lg
  fontWeight: "600", // font-semibold
};

const textSmStyle = {
  fontSize: "0.875rem", // text-sm
};

const textMdStyle = {
  fontSize: "1rem", // text-md
};

const flexColEndStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "0.25rem", // space-y-1 equivalent
};

export default Users;
