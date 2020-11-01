import React from 'react';
import { Link } from 'react-router-dom';
import Button from './../../forms/Button';
import { useDispatch } from 'react-redux';
import { addProduct } from './../../../redux/Cart/cart.actions';

const Product = (product) => {
  const dispatch = useDispatch();
  const {
    documentID,
    productThumbnail,
    productName,
    productPrice
  } = product;
  if(!documentID || !productThumbnail || !productName || 
    typeof productPrice === 'undefined') return null;

    const configAddToCardBtn = {
      type: 'button'
    };

    const handleAddToCart = (product) => {
      if (!product) return;
      dispatch(
        addProduct(product)
      );
    };

  return (
    <div className="product">
      <div className="thumb">
        <Link to={`/product/${documentID}`}>
          <img src={productThumbnail} alt={productName} />
        </Link>
      </div>
      <div className="details">
        <ul>
          <li>
            <span className="name">
              <Link to={`/product/${documentID}`}>
                {productName} 
              </Link>
            </span>
          </li>
          <li>
            <span className="price">
              {productPrice} 
            </span>
          </li>
          <li>
            <div className="addToCart">
              <Button {...configAddToCardBtn} onClick={() => handleAddToCart(product)}>
                카트에 담기
              </Button>
            </div>  
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Product;