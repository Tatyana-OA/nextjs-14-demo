import React from "react";

// Parallel Routes (Slots @SlotName) - split a single layout into various slots
// Cannot be accessed alone e.g. /users
// Each parallel route can have loading/error state
// Passed as parameters to the layout

const DashboardLayout = ({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isLoggedIn = false;
  return (
    <>
      {children}
      <div>Dashboard Layout</div>
      {isLoggedIn ? (
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                marginBottom: "10px",
                border: "1px solid black",
                padding: "10px",
              }}
            >
              {users}
            </div>
            <div style={{ border: "1px solid black", padding: "10px" }}>
              {revenue}
            </div>
          </div>
          <div
            style={{
              marginLeft: "10px",
              border: "1px solid black",
              padding: "10px",
            }}
          >
            {notifications}
          </div>
        </div>
      ) : (
        <div>{login}</div>
      )}
    </>
  );
};

export default DashboardLayout;
