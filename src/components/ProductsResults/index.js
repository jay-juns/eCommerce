import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart } from '../../redux/Products/products.actions';
import Product from './Product';
import './styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products
});

const ProductsResults = ({}) => {
  const dispatch = useDispatch();
  const { products } = useSelector(mapState);
 
  useEffect(() => {
    dispatch(
      fetchProductsStart()
    )
  }, []);

  if (!Array.isArray(products)) return null;

  if (products.length < 1) {
    return (
      <div className="products">
        <p>
          결과가 없습니다.
        </p>
      </div>
    )
  }

  return (
    <div className="products">
      
      <h1>
        상품 목록
      </h1>

      <div className="productResults">
        {products.map((product, pos) => {
          const { productThumbnail, productName, productPrice } = product;
          if(!productThumbnail || !productName || 
            typeof productPrice === 'undefined') return null;
          
          const configProduct = {
            productThumbnail, 
            productName, 
            productPrice
          };   

          return (
          <Product {...configProduct} />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsResults;