import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Plants from './components/Plants/Plants';
import OrderReview from './components/OrderReview/OrderReview';
import Cart from './components/Cart/Cart';
import PlantDetails from './components/PlantDetails/PlantDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/plants' element={<Plants />}></Route>
        <Route path='/plants/:plantId' element={<PlantDetails />}></Route>
        <Route path='/order-review' element={<OrderReview />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
