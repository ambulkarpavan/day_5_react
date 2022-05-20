import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Offers from './components/Offers';
import Restaurants from './components/Restaurants';

function App() {
  return (
    <div className="">
    <Navbar />
    <Filters/>
    <Offers/>
    <Restaurants/>
    </div>
  );
}

export default App;
