import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddInventoryItem from './Pages/AddInventoryItem/AddInventoryItem';
import Banner from './Pages/Banner/Banner';
import Blogs from './Pages/Blogs/Blogs';
import Inventory from './Pages/Inventory/Inventory';
import Login from './Pages/Login/Login';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyItems from './Pages/MyItems/MyItems';
import NotFound from './Pages/NotFound/NotFound';
import ProtectedRoute from './Pages/ProtectedRoute/ProtectedRoute';
import Register from './Pages/Register/Register'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Banner></Banner>}></Route>
        <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>
        <Route path='/manageinventory' element={
          <ProtectedRoute>
            <ManageInventory></ManageInventory>
          </ProtectedRoute>
        }></Route>
        <Route path='/addinventoryitem' element={<AddInventoryItem></AddInventoryItem>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
