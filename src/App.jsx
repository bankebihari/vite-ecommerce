import { useState } from 'react'
import Header from './components/header';
import Categories from './components/categories';
import Footer from './components/footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Men from './components/men';
import Shoes from './components/shoes';
import Women from './components/women'
import Watch from './components/watches';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Header cart={cart} setCart={setCart} />
      <Routes>
        <Route exact path='/' element={<div><Categories /></div>}></Route>
        <Route exact path='/men' element={<div><Men cart={cart} setCart={setCart} /></div>}></Route>
        <Route exact path='/women' element={<div><Women cart={cart} setCart={setCart} /></div>}></Route>
        <Route exact path='/shoes' element={<div><Shoes cart={cart} setCart={setCart} /></div>}></Route>
        <Route exact path='/watches' element={<div><Watch cart={cart} setCart={setCart} /></div>}></Route>
        <Route exact path='/checkout' element={<div className='flex justify-center items-center h-screen text-5xl text-green-700 w-full'> Thank You: Your Order will be delivered soon</div>}></Route>

      </Routes>
      <Footer />
    </Router>
  )
}

export default App


