import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Product from '../components/Product';

const ProductItem = () => {
  let { id } = useParams();

  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    let res = await fetch(`https://dummyjson.com/products/${id}`);
    let result = await res.json();
    console.log(result);
    setProduct(result);
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 2000);
  }, []);

  return (
    <div className="container">
      <div className="main__cars">
        <Link to="/">Назад</Link>
        <div className="main__item">
          {product ? <Product product={product} /> : <Loader />}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
