import React from "react";
import styled from "styled-components";
import Chewbaca from '../Images/Chewbaca.jpg';


const StarWarsName = styled.h2`
text-align: center;
color: blue;
border-radius: 2px solid yellow;

:hover{
   text-color: gray;
}
`;


const Chewbacaimage = styled.img`
width: 500px;
display: block;
margin: auto;
  `;

const MoreWords = styled.h2`
text-align: center;
color: red;
fonts: ["Arial", "sans-serif"];`;

function MainPage (){
    return (
        <div>
      
        <StarWarsName>Star Wars World</StarWarsName>
 
        <MoreWords>May The Force be with you</MoreWords>
     
        <MoreWords>React StarWars Project</MoreWords>
        <Chewbacaimage src={Chewbaca}></Chewbacaimage>
        </div>
    );  
}


export default MainPage;