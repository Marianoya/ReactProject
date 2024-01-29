import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ColorName = styled.h2`
color: blue;
text-align: center;`;

const StarShipn = styled.h2`
color: gold;
text-align: center`;

const ColorPassengers = styled.h3`
color: red;
text-align: center;`;


function Starships (){
const [Loading, setLoading] = useState(true);
const [starships, setStarshipsStarWarsData] = useState();
const [StarShipLink, setStarshipLink] = useState(`https://swapi.dev/api/starships/?page=1`);

useEffect(()=>{
    axios.get(StarShipLink).then((response)=>{
        setStarshipsStarWarsData(response.data);
        setLoading(false);
    });
}, [StarShipLink]);

if (Loading){
    return (
        <div>
            <div>
                <h2>Star Wars StarShips</h2>
                <button disabled={true}>Previous Page</button>
                <button disabled={true}>Next Page</button>
            </div>
            <div className="overlay">Loading...</div>
        </div>
    );
}
const AllStarships = starships.results.map((starship) =>{
    return (
        <div>
            <StarShipn key={starship.name} > Starship Name: {starship.name}</StarShipn>
            <ColorName> Model: {starship.model}</ColorName>
            <ColorName> Manufacturer: {starship.manufacturer}</ColorName>
            <ColorPassengers> Passengers: {starship.passengers}</ColorPassengers>
        </div>
    );
});

return  (
    <div>
        <h1 className="txt-shadow-gold">Starships</h1>
        <button
            onClick={previousPage}
            disabled={starships.previous ? false : true}
        >
            Previous Page
        </button>
        <button
            onClick={nextStarshipPage}
            disabled={starships.next ? false : true}
        >
            Next Page
        </button>

        <main>{AllStarships}</main>
    </div>
);

function nextStarshipPage() {
    setLoading(true);
    setStarshipLink(starships.next);
}

function previousPage() {
    setLoading(true);
    setStarshipLink(starships.previous);
}
}

export default Starships;
