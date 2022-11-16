import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cronologia.scss";
import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';
import Footer from "../Footer/Footer";
import BtnHome from "../BtnHome/BtnHome";
import Back from "../Back/Back";


const Cronologia = () => {
  const [character, setCharacter] = useState([]);
  const charactersFilter = [];
  const [ageOrder, setAgeOrder] = useState(true);
  const characterPar = [];
  const characterImpar = [];

  for (let item of character) {
    if (item.age && item.age.age !== null && item.age.age !== undefined) {
      charactersFilter.push(item);
    }
  }
  if (ageOrder === false) {
    //ascending
    charactersFilter.sort(
      (a, b) => parseFloat(a.age.age) - parseFloat(b.age.age)
    );
  } else {
    //descending
    charactersFilter.sort(
      (a, b) => parseFloat(b.age.age) - parseFloat(a.age.age)
    );
  }
  for (let i = 0; i < charactersFilter.length; i++) {
    if (i % 2 === 0) {
      characterPar.push(charactersFilter[i]);
    } else {
      characterImpar.push(charactersFilter[i]);
    }
  }

  useEffect(() => {
    const getData = async () => {
        const {data} = await axios.get("https://api.got.show/api/show/characters/");
        console.log(data);
        setCharacter(data)
        
    };
    getData()
}, [])

return (
    
  <div className="background">
    <div className="boxHead">
      <Back></Back>
      <div className="btnHome">
      <BtnHome ></BtnHome>
      </div>
    </div>
    <div className="chronology-container">
    <SimpleBar className="bar">
      <div className="btn-container">
      
        <button onClick={() => {
            ageOrder === true ? setAgeOrder(false) : setAgeOrder(true);
          }}> {ageOrder === true ? "↑" : "↓"}
          </button>     
        
      </div>    
      
      <div className="list-container">     
      
        <div className="par">          
          {characterPar.map((character) => (
            <div className="cardCharacter">
            
              <h3>{character.age.age}</h3>
              <h3> {character.name} </h3>
              <div className="img-container">
                <img src={character.image} alt={character.name} />
              
            </div>
             
          </div>
        ))}         
      </div>
      
      <div className="impar">
        {characterImpar.map((character) => (
        <div className="cardCharacter">
            
          <h3>{character.age.age}</h3>
          <h3> {character.name} </h3>
          <div className="img-container">
            <img src={character.image} alt={character.name} />
          </div>
           
        </div>
        
        ))}
      </div>
        
      </div>     
    </SimpleBar>    
      
    </div>
    <div className="navBar navBar--home">
            <Footer></Footer> 
        </div>
  </div>
  

);
};


export default Cronologia;