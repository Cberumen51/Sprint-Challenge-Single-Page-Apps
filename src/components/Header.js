import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div `
displey: flex;
flex-wrap: wrap;
align-items: center;
justtify-content: center;
`
const LinkWrapper = styled.div `
display:flex;
justify-content: space-evenly;
`

export default function Header() {
  return (
    <HeaderWrapper>
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <LinkWrapper>
      <Link exact className="home-button" to ="/">Home</Link>
      <Link to ="/character/:id">Character List</Link>
      </LinkWrapper>
    </header>
    </HeaderWrapper>
  );
}
