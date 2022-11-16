import axios from "axios";
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import FilterHouses from "../FilterHouses/FilterHouses";
// import Traductor from "../components/Traductor/Traductor";


export default function HousesPage () {

    const [allhouses, setAllHouses]= useState([]);
    const [SearchHouses, setSearchHouses] = useState([])

    const greatHouse = "proyectgot/public/greathouse.png";

    
    useEffect(() => {
        const getHouse = async () => {
            const {data} = await axios.get (`https://api.got.show/api/show/houses`);
            setAllHouses(data);
            setSearchHouses(data)
            
        };

        getHouse();

    }, []);

    const searchHouses = (name) => {
        const filtered = allhouses.filter((house) => house.name.toLowerCase().includes(name.toLowerCase()));
        setSearchHouses(filtered);
    }
    
  return (
    <div className="space background">

        <div>
            <Header className="header"></Header>
        </div>

        <div>
        <FilterHouses setSearchHouses= {searchHouses}></FilterHouses>
        </div>

        <div>
            <SimpleBar className="simplebar-scrollbar::before" autoHide={false} style={{ maxHeight: 570}}>
            <div className="generalBox">
                
                    <div className="housesContainer">
                    
                        <div className="barBox">
                    
                        
                            {SearchHouses.map((house, index) => {
                                return(
                                
                                    <div>

                                        <div className="houseBox">
                                        {house.id === "5cc0751804e71a0010b85ccf" ? house.logoURL = greatHouse : null}
                                        { <Link className="names" to={'/houses/' + house.name}>
                                        <img className="banner" src={house?.logoURL} alt={house?.name + " Banner"}/>
                                            <p>{house?.name}</p>
                                        </Link>}
                                        </div>
    
                                    </div>
                                )
                                      
                            })}
                        </div>

                    </div>
                
    
               
            </div>
            
            </SimpleBar>
        </div>
        <div className="navBar navBar--home">
            <Footer></Footer> 
        </div>
    </div>
  )
}
