import React from 'react';

const Product = ({ product }) => {
  return (
    <>
      <div className="note">
        <img src={product.thumbnail} className="receipe__pic" alt="" />
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>Prise:{product.price}</p>
        <p>Discount Pice:{product.discountPercentage}</p>
        <p>Stock{product.stock}</p>
      </div>
    </>
  );
};

export default Product;
