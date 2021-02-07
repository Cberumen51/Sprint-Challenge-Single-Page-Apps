import React from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const TitleWrapper = styled.div `
display: flex
flex-wrap: wrap;
align-items: center;
justify-content: center;

`


export default function WelcomePage() {
  return (
    <TitleWrapper>
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      

    </section>
    </TitleWrapper>
  );
}
