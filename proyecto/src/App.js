import React, { useState } from 'react';
import PeopleCharacters from './Components/PeopleCharacters';
import PeopleDetails from './Components/PeopleCharacters';
import styled from 'styled-components';
import axios from 'axios';
import Planets from './Components/Planets';
import MainPage from './Components/main';
import './App.css';
import Starships from './Components/Starships';
import People from './Components/People';

function App() {
  const [selectedComponent, setSelectedComponent] = useState('');

  return (

    <div>
  <nav>
<button onClick={() => setSelectedComponent("MainPage")}>Main Page</button>
<button onClick={() => setSelectedComponent("Planets")}>Planets</button>
<button onClick={() => setSelectedComponent("Starships")}>Starships</button>
<button onClick={() => setSelectedComponent("People")}>People</button>
  </nav>

<div id="ctn-main ">
  {selectedComponent === "MainPage" && <MainPage/>}
  {selectedComponent === "Planets" && <Planets />}
  {selectedComponent === "Starships" && <Starships />}
  {selectedComponent === "People" && <People />}
</div>

</div>
  );
}



export default App;
