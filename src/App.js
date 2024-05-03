import './App.css';
import Sidebar from './Components/Sidebar';
import Company from './Components/Company'
import Navbar from './Components/Navbar';
import { useState } from 'react';
import Filters from './Components/Filters';

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

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className='app'>
      <Navbar value={searchTerm} onChange={handleSearch} />
      <Company searchTerm={searchTerm} />
      <Company searchTerm={searchTerm} />
      <Company searchTerm={searchTerm} />

      <Sidebar />
      <Filters />
    </div>
  );
}

export default App;
