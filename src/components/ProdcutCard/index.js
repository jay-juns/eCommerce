import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart, setProduct } from './../../redux/Products/products.actions';
import Button from './../forms/Button';
import './styles.scss';

const mapState = state => ({
  product: state.productsData.product
});

const ProductCard = ({}) => {
  const dispatch = useDispatch();
  const { productID } = useParams();
  const { product } = useSelector(mapState);

  const {
    productThumbnail,
    productName,
    productPrice,
    productDesc

  } = product; 

  useEffect(() => {
    dispatch(
      fetchProductsStart(productID)
    )

    return () => {
      dispatch(
        setProduct({})
      )
    }

  }, []);

  const configAddToCartBtn = {
    type: 'button'
  }

  return (
    <div className="productCard">
      <div className="hero">
        <img src={productThumbnail} alt={productName} />
      </div>
      <div className="productDetails">
        <ul>
          <li>
            <h1>
              {productName}
            </h1>
          </li>

          <li>
            <span>
              {productPrice}원
            </span>
          </li>

          <li>
            <div className="addToCart">
              <Button {...configAddToCartBtn}>
                카트 추가
              </Button>
            </div>
          </li>
          <li>
            <span className="disc"
              dangerouslySetInnerHTML={{ __html: productDesc }} />
          </li>

        </ul>
      </div>
    </div>
  );
}

export default ProductCard; 