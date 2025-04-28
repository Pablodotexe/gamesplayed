import { useEffect, useState } from 'react'
import VideogameCard from './components/VideogameCard';
import Button from './components/Button';
import SelectOption from './components/SelectOption';

import './App.css'


function App() {
  const [data, setData] = useState(null)
  const [option, setOption] = useState("name");

  useEffect(() => {
    fetch("https://api.rawg.io/api/games?key=624fc12751094f4eb932036f1133fb24")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setData(data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
      })
  }, [])

  // Function to handle the selected option
  const handleOptionChange = (selectedOption) => {
    setOption(selectedOption);
    console.log(option)
  };

    const sortStrategies = {
      name: (a, b) => a.name.localeCompare(b.name),
      rating: (a, b) => b.rating - a.rating,
      released: (a, b) => new Date(b.released) - new Date(a.released),
    }
    
    const sortDataByOption = (data, option) =>
      option in sortStrategies
        ? {
            ...data,
            results: [...data.results].sort(sortStrategies[option]),
          }
        : data
    
    const handleButtonClick = () => {
      console.log("Button clicked with option:", option)
      if (data) {
        const sortedData = sortDataByOption(data, option)
        setData(sortedData)
      }
    }
    


  return (
    <div className="App">
      <h1>Videogames played</h1>
      
      <SelectOption onChange={handleOptionChange}/>
      <Button handleClick={handleButtonClick}/>
      <VideogameCard data={data}/>
      
    </div>
  );
}



export default App
