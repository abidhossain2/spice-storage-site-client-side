import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Pages/Banner/Banner';
import Inventory from './Pages/Inventory/Inventory';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Banner></Banner>}></Route>
        <Route path='/inventory/:_id' element={<Inventory></Inventory>}></Route>
      </Routes>
    </div>
  );
}

export default App;
