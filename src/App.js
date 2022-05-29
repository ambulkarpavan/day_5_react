import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Offers from './components/Offers';
import Restaurants from './components/Restaurants';

import userInfo from "./data/userInfo.json"
import offers from "./data/offers.json"
import restaurants from "./data/restaurants.json"

function App() {
  return (
    <div className="">
    <Navbar {...userInfo.location}/>
    <Offers offers={offers}/>
    <section className='near-you'>
    <Filters/>
    <Restaurants restaurants={restaurants}/>
    </section>
   
   
    </div>
  );
}

export default App;
