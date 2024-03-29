import React, { useState, useEffect } from "react";
import './App.css'
import Headline from './components/Headline'
import Card from './components/Card'

function App() {
  const [currentScore,setCurrentScore] = useState(0)
  const [bestScore,setBestScore] = useState(0)
  const [memory,setMemory]= useState([''])
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(undefined);
  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  }
  useEffect( () => {
    const fetchData = async () => {
      try {
        const random_offset = Math.floor(Math.random()* 1000) + 1;
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=" + random_offset);
        const data = await response.json();

        setPokemons(data.results);
      } catch (e){
        setError(e.message || "Something went wrong");
      }
    };
    fetchData();
  }, [bestScore])
  if (error) {
    return <div>{error}</div>
  }

  function handleClick(e){
    const name =e.currentTarget.value;
    if(memory.includes(name)){   //exw pathsei ksana thn karta
      handleResetMemory()
      handleScore(e,true)
      shuffle(pokemons);
    }else{
      handleAddMemory(name)
      handleScore(e,false)
      shuffle(pokemons);
    }
  }
  function handleAddMemory(name){
    setMemory([ // with a new array
    ...memory, // that contains all the old items
    name // and one new item at the end
    ])
  }
  function handleResetMemory(){
    setMemory([])
  }
  function handleScore(e,clickedAgain){
    if(clickedAgain){   //exw pathsei ksana thn karta
      if(currentScore>bestScore){
        setBestScore(currentScore)
      }
      setCurrentScore(0)
    }else{
      setCurrentScore(currentScore+1)
    }
  }


  
  return (
    <div className='display'>
      <Headline
        currentScore={currentScore}
        bestScore={bestScore}
      ></Headline>
      <div className='cards'>
        {pokemons.map(({ name, url }) => (
          <Card
          handleClick={handleClick}
          name={name}
          url={url}
          key={url}>{name}</Card>
        ))}
      </div>
    </div>
  )
}

export default App
