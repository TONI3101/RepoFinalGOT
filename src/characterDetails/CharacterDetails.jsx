import axios from 'axios';
import React, { useContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Back from '../Back/Back';
import Header from '../Header/Header';


import { MyContext } from './../../src/components/mycontext/MyContext';
// // import Traductor from '../components/Traductor/Traductor';


const CharacterDetails = () => {
  const {t} = useContext(MyContext)
    const {id} = useParams();
    const navigate = useNavigate();
    // console.log(id);
    const [characterById, setCharacterById] = useState({})
    const [houseLogo, setHouseLogo] = useState([])

    useEffect(() => {
      const gethouse = async (house) =>{
        const {data} = await axios.get("https://api.got.show/api/show/houses/"+ house)
        setHouseLogo(data)
        console.log(data);
        console.log(house);
      };
      const getCharacter = async () => {
            const {data} = await axios.get(`https://api.got.show/api/show/characters/${id}`)
            setCharacterById(data);
            // console.log(data);
            await gethouse(data.house)
      };

    getCharacter();
    },[]);
  return (
    
    
    <div className='background-2'>
    
      {/* <Traductor/> */}

        <Back></Back>
        <Header />
      

      <div className='bigBox'>
        <div className='imgAndText'>

          <img src={characterById.image} alt={characterById.name} />
          <h1>{characterById.name}</h1>
          
        </div>  

        <div className='genInfoBox'>

            <h3>{t('casa')}</h3>
            {/* poner el link de la direccion de hauses de sergio aqui con la imagen  */}
            {/* <img src={house.logoURL} alt="" /> */}

            <div className='infoBox'>
            {houseLogo && houseLogo.map((logo, index) => {
              return(
                <div key={index}>
                  <img src= {logo.logoURL} alt="" />
                </div>
              )
            }) }
            </div>
              <p>{characterById.house}</p>
            
            <div className='infobox'>
            <h3>{t('alianza')}</h3>
              {characterById.allegiances && characterById.allegiances.map((hause, index) => {
                  return(
                    <div className='titles' key={index}>
                      <p className="titles titles--info">{hause}</p>
                    </div>
                )
              })}
              </div>
            
            <h3>{t('apariciones')}</h3>
              {characterById.appearances && characterById.appearances.map((appa, index) => {
                return (
                  <div key={index}>
                    <p className="titles titles--info">{appa}</p>
                  </div>
                )
              })}
            
          </div>

          <div>
            <h3>{t('padre')}</h3>
              <p className="titles titles--info">{characterById.father}</p>
            
            <h3>{t('relaciones')}</h3>
              {characterById.related && characterById.related.map((rela, index) =>{
                return(
                  <div key={index}>
                    <p className="titles titles--info">{rela.name}</p>
                  </div>
                )
              })}
            
            <h3>{t('titulos')}</h3> 
              {characterById.titles && characterById.titles.map((tit, index) => {
                return(
                  <div key={index}>
                    <p className="titles titles--info">{tit}</p>
                  </div>
                )
              })} 
            
        </div>
          
      </div>
      
    </div>
  )
}

export default CharacterDetails;