import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector, sortProducts } from '../redux/product/productSlice';

const Navbar = () => {
  const { isErrorRep, product } = useSelector(usersSelector);
  const dispatch = useDispatch();

  const onClick = sort => {
    dispatch(sortProducts(sort));
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__box">
          <Link to="/" className="logo">
            <b>Дипломная работа</b>
          </Link>
          <ul className="repos__search-list">
            <li>
              <button
                onClick={() => onClick('title')}
                className="repos__search_item"
                href=""
              >
                Название товара
              </button>{' '}
            </li>
            <li>
              {' '}
              <button
                onClick={() => onClick('price')}
                className="repos__search_item"
                href=""
              >
                Цена
              </button>{' '}
            </li>
            <li>
              {' '}
              <button
                onClick={() => onClick('stock')}
                className="repos__search_item"
                href=""
              >
                Наличие
              </button>{' '}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
