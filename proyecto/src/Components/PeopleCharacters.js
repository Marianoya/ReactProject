import React, { useEffect, useState } from "react";
import styled from "styled-components";
import R5D4 from '../Images/R5D4.jpeg'

const ImageFormat = styled.img`
width: 50 px;
height: 30 px;
background-color: gray;
`;

const ColorName = styled.h2`
color: blue;
text-align: center;`;


function PeopleCharacters ({onSelectedPerson}) {
    const [persons, setPersons] = useState([]);

    useEffect(()=>{
const fetchPersons = async () =>{
    const response = await fetch('https://swapi.dev/api/people');
    const data = await response.json();
    setPersons(data.results);

};
      fetchPersons();
    }, []);
    return (
        <div className="container">
            {persons.map(person => (
                <div key={person.name} className="person-card" onClick={()=> onSelectedPerson(person)}>
                <ColorName><strong>Character Name:</strong> {person.name}</ColorName>
                <ImageFormat src={R5D4}/>
          

               </div>
            ))}
        </div>

    );
}

export default PeopleCharacters;