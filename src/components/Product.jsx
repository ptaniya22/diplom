import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Product = ({ product }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="main_item">
        {/* <img src={product.thumbnail} className="receipe__pic" alt="" /> */}

        <Slider {...settings}>
          {product.images.map((item, index) => (
            <div key={index} className="main_item">
              <img className="slider_pict" src={item} alt="" />
            </div>
          ))}
        </Slider>

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
