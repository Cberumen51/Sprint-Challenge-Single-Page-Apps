import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import SearchForm from "./SearchForm";

const InfoWrap = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 20px;
    padding-left 3%;
    justify-content: space-between;
`

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([])

  useEffect(() => {
      axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        setData(res.data.results);
        console.log(res)
      })
      .catch(err => {
        console.log("error",err)
      })
    
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
   
  }, []);

  return (
    <section className="character-list">
          <SearchForm />

      <InfoWrap>
        {data.map((char) => {
          return <Link to={`/character/${char.id}`}><CharacterCard key={char.id} char={char} /></Link>
        })}
      </InfoWrap>
    </section>
  );
}
