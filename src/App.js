import React, {useState} from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import WelcomePage from './components/WelcomePage'
import CharacterList from "./components/CharacterList.js";


export default function App() {
  const [chars, setChars] = useState([])
   

  return (
    <main>
      <Header />
      <Route path="/" exact>
        <WelcomePage chars={chars} setChars={setChars} />
        </Route> 
        <Route path="/character/:id">
         <CharacterList chars={chars} setChars={setChars} />
         </Route>
    </main>
  );
}
