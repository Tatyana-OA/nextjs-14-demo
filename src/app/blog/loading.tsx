import React from "react";

const Loading = () => {
  const spinnerStyle = {
    display: "inline-block",
    width: "80px",
    height: "80px",
  };

  const spinnerInnerStyle = {
    display: "block",
    width: "64px",
    height: "64px",
    margin: "8px",
    borderRadius: "50%",
    border: "6px solid #ccc",
    borderColor: "#ccc transparent #ccc transparent",
    animation: "spin 1.2s linear infinite",
  };

  const keyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <div>
      <style>{keyframes}</style>
      <div style={spinnerStyle}>
        <div style={spinnerInnerStyle}></div>
      </div>
    </div>
  );
};

export default Loading;
