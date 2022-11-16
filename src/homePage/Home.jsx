// import React, { useContext} from 'react';
// import { MyContext } from '../components/mycontext/MyContext';
import "./Home.scss";
import Footer from '../Footer/Footer';

const Home = () => {
  // const {t} = useContext(MyContext)
  return (
    <div className="img">

      <div className="titlebox">
        <h1 className="title">Game    Of    Thrones</h1>
      </div>

      <div className="navBar">

        <Footer></Footer> 

      </div>

    </div>
    

  )
}

export default Home;