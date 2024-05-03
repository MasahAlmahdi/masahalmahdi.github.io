import React from "react";

const Navbar = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
    console.log("Search Term:", event.target.value);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "72px",
        backgroundColor: "#1f2021",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 20px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div
        style={{
          fontFamily: "poppins",
          fontWeight: "bold",
          fontSize: "40px",
          color: "#FFFFFF",
          position: "absolute",
          top: "7px",
          left: "136px",
          width: "174px",
          height: "72px",
        }}
      >
        ALERTS
      </div>
      <div
        style={{
          position: "absolute",
          top: "14px",
          left: "120px",
          height: "50px",
          width: "5px",
          borderRadius: "5px",
          backgroundColor: "#53ACFF",
        }}
      ></div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Search By..."
            value={value}
            onChange={handleChange}
            style={{
              width: "611px",
              height: "38px",
              color: "white",
              backgroundColor: "#444",
              border: "none",
              paddingLeft: "10px",
              borderRadius: "5px",
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#888888"
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </div>
      </div>
      <style>
        {`
          @media only screen and (max-width: 768px) {
            input[type="text"] {
              display: none; // Hide search input on mobile screens
            }
            svg {
              display: block; // Show search icon on mobile screens
              right: 20px; // Position search icon on the right side
            }
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
