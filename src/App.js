import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Banner from './Pages/Banner/Banner';
import Inventory from './Pages/Inventory/Inventory';
import ManageInventory from './Pages/ManageInventory/ManageInventory';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Banner></Banner>}></Route>
        <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>
        <Route path='/manageinventory' element={<ManageInventory></ManageInventory>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
