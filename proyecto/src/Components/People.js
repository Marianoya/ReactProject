import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";



const ColorName = styled.h2`
color: blue;
text-align: center;`;

const Skin = styled.h3`
color: gold;
text-align: center`;

const GenderColor = styled.h3`
color: red;
text-align: center;`;


function People (){
const [Loading, setLoading] = useState(true);
const [peoples, setPeopleStarWarsData] = useState();
const [PeopleLink, setPeopleLink] = useState(`https://swapi.dev/api/people/?page=1`);


useEffect(()=>{
    axios.get(PeopleLink).then((response)=>{
        setPeopleStarWarsData(response.data);
        setLoading(false);
    });
}, [PeopleLink]);


if (Loading){
    return (
        <div>
            <div>
                <h2>Star Wars People</h2>
                <button disabled={true}>Previous Page</button>
                <button disabled={true}>Next Page</button>
            </div>
            <div className="overlay">Loading...</div>
        </div>
    );
}
const AllPeople = peoples.results.map((people) =>{
    return (
        <div>
            <ColorName key={people.name} > Character Name: {people.name}</ColorName>
            <Skin> Mass: {people.mass}</Skin>
            <Skin> Height: {people.height}</Skin>
            <GenderColor> Gender: {people.gender}</GenderColor>
           

        </div>
    );
});



return  (
    <div>
        <h1 className="txt-shadow-gold">People</h1>
        <button
            onClick={previousPage}
            disabled={peoples.previous ? false : true}
        >
            Previous Page
        </button>
        <button
            onClick={nextPeoplePage}
            disabled={peoples.next ? false : true}
        >
            Next Page
        </button>

        <main>{AllPeople}</main>
    </div>
);

function nextPeoplePage() {
    setLoading(true);
    setPeopleLink(peoples.next);
}

function previousPage() {
    setLoading(true);
    setPeopleLink(peoples.previous);
}
}

export default People;
