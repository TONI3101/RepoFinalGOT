import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Search from "../components/Search";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import Traductor from "../components/Traductor/Traductor";



const Characters = () => {
    const [allCharacters, setAllCharacters] = useState ([]);
    const [searchPj, setSearchPj] = useState([]) // esta forma parte del buscador cambiar nombres 1º
    useEffect(() => {
        const getData = async () => {
        const {data} = await axios.get("https://api.got.show/api/show/characters/");
        setAllCharacters(data);
    
        };
        getData()
  
    },[]);
    const filterCharacter = allCharacters.filter((characters)=> characters.name.toLowerCase().includes(searchPj)) // esto es el filtro 4

    return (

        <div className="space background">


            <div>
                <Search setSearchPj={setSearchPj}></Search>
                <Header className="header"></Header>
            </div>  

            <div>
                <SimpleBar className="simplebar-scrollbar::before" autoHide={false} style={{ maxHeight: 570}}>

                <div className="generalBoxChar">

                    <div className="charContainer">
                        <div className="barBox">

                            {filterCharacter.map((item, index) =>{

                            return(

                                    <Link  to={`/characters/${item.name}`}>

                                        <div className="charBox" key={index}>

                                            <div>
                                                <img className="image" src={item.image} alt="" /> 
                                            </div>

                                            <div className="namesChar">
                                                <div className="backg">
                                                    <h2 className="textOn">{item?.name}</h2>
                                                </div>    
                                            </div>

                                        </div>

                                    </Link>           
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

export default Characters;