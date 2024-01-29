import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ColorName = styled.h2`
color: blue;
text-align: center;`;

const PlanetColor = styled.h2`
color: green;
text-align: center`;

const ColorPopulation = styled.h3`
color: red;
text-align: center;`;

function Planets (){
const [Loading, setLoading] = useState(true);
const [planets, setPlanetStarWarsData] = useState();
const [PlanetLink, setPlanetLink] = useState(`https://swapi.dev/api/planets/?page=1`);

useEffect(()=>{
    axios.get(PlanetLink).then((response)=>{
        setPlanetStarWarsData(response.data);
        setLoading(false);
    });
}, [PlanetLink]);

if (Loading){
    return (
        <div>
            <div>
                <h2>Star Wars Planets</h2>
                <button disabled={true}>Previous Page</button>
                <button disabled={true}>Next Page</button>
            </div>
            <div className="overlay">Loading...</div>
        </div>
    );
}
const AllPlanets = planets.results.map((planet) =>{
    return (
        <div>
            <PlanetColor key={planet.name} > Planet: {planet.name}</PlanetColor>
            <ColorName> Climate: {planet.climate}</ColorName>
            <ColorName> Terrain: {planet.terrain}</ColorName>
            <ColorPopulation> Population: {planet.population}</ColorPopulation>
         
        </div>
    );
});

return  (
    <div>
        <h1 className="txt-shadow-gold">Planets</h1>
        <button
            onClick={previousPage}
            disabled={planets.previous ? false : true}
        >
            Previous Page
        </button>
        <button
            onClick={nextPlanetPage}
            disabled={planets.next ? false : true}
        >
            Next Page
        </button>

        <main>{AllPlanets}</main>
    </div>
);

function nextPlanetPage() {
    setLoading(true);
    setPlanetLink(planets.next);
}

function previousPage() {
    setLoading(true);
    setPlanetLink(planets.previous);
}
}

export default Planets;

