import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import {Link} from 'react-router-dom'


export default function SearchForm({chars, setChars}) {
  const [input, setInput] = useState("");
  const [filteredChars, setFilteredChars] = useState([])

  useEffect(() => {
    axios 
    .get(`https://rickandmortyapi.com/api/character/`)
    
    .catch(err => {
      console.log("error", err)
    })
  }, [chars])

  const submithandler = e => {
    e.preventDefault();
    const fil = chars.filter(el => {
      return el.name === input
    })
    setFilteredChars(fil)
  }
 
  return (
    <section className="search-form">
      <form onSubmit={(e) => submithandler(e)}>
        <input name="search" placeholder="Enter A name" onChange={(e) =>setInput(e.target.value)} />
        <button>Search</button>
      </form>
      <button onClick={() => setFilteredChars(chars)}>Clear Filters</button>
      {filteredChars.map((char) =>{
        return <Link key={char.name} to={`/chars/${char.name}`}>< CharacterCard char={char}/> </Link>
      })}
    </section>
  );
  }
