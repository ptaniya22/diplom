import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usersSelector } from '../redux/product/productSlice';
import { Link } from 'react-router-dom';
import { getProduct } from '../redux/product/productSlice';
import ReactPaginate from 'react-paginate';

const Products = () => {
  const handlePageClick = data => {
    console.log(data.selected);
    let currentPage = data.selected + 1;
    const commentsFormServer = dispatch(getProduct(currentPage));
    setItems(commentsFormServer);
  };

  const { isError, product } = useSelector(usersSelector);
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProduct(currentPage));
  //   setItems(product);
  // }, []);

  console.log('items is', items);

  if (isError) {
    return <h1>Ошибка в запросе</h1>;
  }

  return (
    <div className="container">
      {/* <div className="box"></div> */}
      <div className="main">
        {product?.map(item => (
          <div key={item.id} className="main_item">
            <img src={item.thumbnail} alt="" />
            {/* {console.log(item.title)} */}
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>Prise:{item.price}</p>
            <p>Discount Pice:{item.discountPercentage}</p>
            <p>Stock{item.stock}</p>
            <Link to={`/product/${item.id}`}>More: {item.title}</Link>
          </div>
        ))}
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          pageCount={15}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
};

export default Products;
