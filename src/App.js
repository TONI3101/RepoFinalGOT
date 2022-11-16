import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.scss';
import Home from "./homePage/Home";

import HousesPage from "./HousesPage/HousesPage";
import HouseDetail from "./HouseDetail/HouseDetail";
import Cronologia from "./Pages/Cronologia";
import Characters from "./characterPage/Characters";
import CharacterDetails from "./characterDetails/CharacterDetails";

import {MyContext} from './components/mycontext/MyContext';
import { useTranslation } from "react-i18next";
import Header from "./Header/Header";


function App() {
  const {t,i18n} = useTranslation(['translation'])
  const changeLanguaje = (code) => {
    i18n.changeLanguage(code)
  }
  return (
<MyContext.Provider value={{t, changeLanguaje}}>
    <Router>

      <div>
        <div>
          <header>
           {/* <Header></Header> */}
          </header>
          
          <Routes>


            <Route exact path="/" element={<Home></Home>}></Route>

            <Route exact path="/characters" element={<Characters></Characters>}></Route>
            
            <Route exact path="/characters/:id" element={<CharacterDetails></CharacterDetails>}></Route>

            <Route path="/houses" element={<HousesPage></HousesPage>}></Route>
           

            <Route path="/houses/:houseName" element={<HouseDetail></HouseDetail>}></Route>

            <Route exact path="/cronologia" element={<Cronologia></Cronologia>} />

          </Routes>
          
        </div>
        
      </div>

    </Router>  
    </MyContext.Provider>
  );
}

export default App;
