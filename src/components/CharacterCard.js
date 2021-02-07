import React from "react";
import styled from 'styled-components'

const Card = styled.div `
display: flex;
width: 200px;
padding 1px;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
margin: 5px;
border: 3px solid red;
color: green;
`
const CharName = styled.div `
font-size: 17px;
padding-top:10px;
`


const CharInfo = styled.p `
font-size: 15px;
align-items:space-evenly;
`


export default function CharacterCard(props) {
  return (
    <Card>
      <CharName>Name: {props.char.name}</CharName>
      <CharInfo>Status:{props.char.status}</CharInfo>
      <CharInfo>Species: {props.char.species}</CharInfo>
      <CharInfo>Gender: {props.char.gender}</CharInfo>
    </Card>
  );
}
