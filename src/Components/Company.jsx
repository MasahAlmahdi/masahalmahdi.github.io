import React, { useState } from "react";
import "../Styles/Company.css";

const Company = ({ searchTerm }) => {
  const [selectedCompany, setCompany] = useState(null);

  const companyData = [
    {
      name: "Amazon",
      dollars: 2000,
      risk: "High Risk",
      change: "-0.25 %",
      description:
        "Amazon is a multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.Amazon is a multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.Amazon is a multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      industry: "Technology",
      strategy: "E-commerce",
    },
    {
      name: "Tesla",
      dollars: 700,
      risk: "High Risk",
      change: "-0.25 %",
      description:
        "Tesla is an American electric vehicle and clean energy company known for its electric cars and renewable energy products.Tesla is an American electric vehicle and clean energy company known for its electric cars and renewable energy products.Tesla is an American electric vehicle and clean energy company known for its electric cars and renewable energy products.Tesla is an American electric vehicle and clean energy company known for its electric cars and renewable energy products.",
      industry: "Automotive",
      strategy: "Electric vehicles",
    },
    {
      name: "Netflix",
      dollars: 500,
      risk: "Low Risk",
      change: "-0.25 %",
      description:
        "Netflix is a streaming service offering a wide variety of TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.Netflix is a streaming service offering a wide variety of TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      industry: "Entertainment",
      strategy: "Streaming",
    },
  ];

  const handleClick = (index) => {
    setCompany(selectedCompany === index ? null : index);
  };

  const filteredCompanies = companyData.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="poppins-regular">
      {filteredCompanies.map((company, index) => (
        <div
          key={index}
          className="company-container"
          onClick={() => handleClick(index)}
        >
          <div
            className={`company-info ${
              selectedCompany === index ? "selected" : ""
            }`}
          >
            <img src="tag.png" alt="tag" className="icon" />
            <span className="company-name">{company.name}</span>
            <hr style={{ borderRight: "1px solid grey", height: "26px" }} />
            <img
              style={{ width: "24px", height: "24px" }}
              src="file.png"
              alt="file"
            />
            <span className="company-detail" style={{ width: "91.8px" }}>
              {company.dollars}
            </span>
            <hr style={{ borderRight: "1px solid grey", height: "26px" }} />

            <img
              style={{ width: "24px", height: "24px" }}
              src="arrows.png"
              alt="arrows"
            />
            <span
              className="company-detail"
              style={{
                width: "91.8px",
                color: company.risk === "High Risk" ? "#118F4B" : "#D94111",
              }}
            >
              {company.change}
            </span>
            <hr style={{ borderRight: "1px solid grey", height: "26px" }} />
            <img
              style={{ width: "24px", height: "24px" }}
              src="dollar.png"
              alt="dollar"
            />
            <span className="company-detail" style={{ width: "91.8px" }}>
              {company.risk}
            </span>
          </div>
          {selectedCompany === index && (
            <div className="company-description">{company.description}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Company;
