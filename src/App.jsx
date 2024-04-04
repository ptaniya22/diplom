import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

import Products from './pages/Products';
import ProductItem from './pages/ProductItem';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />

        <Route path="/product/:id" element={<ProductItem />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
