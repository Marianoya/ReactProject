import React from "react";
import styled from "styled-components";


const ColorName = styled.h2`
color: blue;
text-align: center;`;

const ColorGender = styled.h4`
color: green;
text-align: center`;

const PhysicalColors = styled.h3`
color: red;
text-align: center;`;

function PeopleDetails({person, onBack}){

    return (
        <div className="container">
    <div className="people-detail">
        <ColorName>{person.name}</ColorName>
        <PhysicalColors> <strong>Character Height:</strong> {person.height}</PhysicalColors>
        <PhysicalColors>Character Mass: {person.mass}</PhysicalColors>
        <PhysicalColors>Character Hair color: {person.hair_color}</PhysicalColors>
        <PhysicalColors>Character Birth Year: {person.birth_year}</PhysicalColors>
        <ColorGender>Character Gender: {person.gender}</ColorGender>
        <button onClick={onBack}>Go back to Star Wars characters</button>
    </div>
        </div>
    );
    }
    
    export default PeopleDetails;