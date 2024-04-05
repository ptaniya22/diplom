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
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getProduct(-9));
    setItems(product);
  }, []);
  console.log('items is', items);

  let sorteProducts = product?.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (isError) {
    return <h1>Ошибка в запросе</h1>;
  }

  return (
    <div className="container">
      <input
        className="main__input"
        type="text"
        placeholder="Поиск"
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      {/* <div className="box"></div> */}
      <div className="main">
        {sorteProducts?.map(item => (
          <div key={item.id} className="main_item">
            <img src={item.thumbnail} alt="" />
            {/* {console.log(item.title)} */}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>
              {' '}
              <span>Price :</span>
              {item.price}
            </p>
            <p>
              {' '}
              <span>Discount Price:</span> {item.discountPercentage}
            </p>
            <p>
              {' '}
              <span>Stock :</span> {item.stock}
            </p>
            <Link to={`/product/${item.id}`}>
              <span className="item_link">More... </span>
            </Link>
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={15}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center '}
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
  );
};

export default Products;
