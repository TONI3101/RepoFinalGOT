import axios from "axios";
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Back from "../Back/Back";
// import NavBar from "../NavBar/NavBar";



export default function HouseDetails (){
    const {houseName} = useParams();
    const [houses, setHouses] = useState({});

    useEffect(() => {
        const getData = async () => {
            const data = await axios.get(`https://api.got.show/api/show/houses/${houseName}`);
            console.log(data);
            setHouses(data.data[0]);
    }
    getData();
  }, []);


  return(
    <div className="background-2">

        <Back></Back>

        <div className="bigBox">
            <div className="imgAndText">
                
                <img className="bigBanner" src={houses?.logoURL} alt="banner"></img>
                <h1 className="houseName">{houses?.name}</h1>

            </div>

                <div className="genInfoBox">

                    <div className="infoBox">
                        <h3 className="titles">LEMA</h3>
                        <p className="titles titles--info">{houses?.words}</p>
                    </div>

                    <div className="infoBox">
                        <h3 className="titles">Sede</h3>
                        <p className="titles titles--info">{houses?.seat}</p>
                    </div>

                    <div className="infoBox">
                        <h3 className="titles">Region</h3>
                        <p className="titles titles--info">{houses?.region}</p>
                    </div>

                    <div className="infoBox">
                        <h3 className="titles">ALIANZAS</h3>
                        <ul className="titles titles--info">{houses.allegiances && houses?.allegiances.map((item, index) => {
                            return(
                                <li key={index}>
                                    {item}
                                </li>
                            )
                        })}</ul>
                    </div>

                    <div className="infoBox">
                        <h3 className="titles">DIOSES</h3>
                        <p className="titles titles--info">{houses?.religion}</p>
                    </div>

                </div>
        </div>
    </div>
    
  )
  
}