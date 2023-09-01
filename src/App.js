import Saludo from './Components/Saludo';
import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Saludo/>
      <ItemListContainer greeting="Elija los productos que desea llevar"/>
    </div>
  );
}

export default App;
