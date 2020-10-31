import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProductsStart } from '../../redux/Products/products.actions';
import Product from './Product';
import FormSelect from './../forms/FormSelect';
import './styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products
});

const ProductsResults = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { products } = useSelector(mapState);
 
  useEffect(() => {
    dispatch(
      fetchProductsStart({ filterType })
    )
  }, [filterType]);

  const handleFiter = (e) => {
    const nextFilter = e.target.value;
    history.push(`/search/${nextFilter}`);
  };

  if (!Array.isArray(products)) return null;

  if (products.length < 1) {
    return (
      <div className="products">
        <p>
          결과가 없습니다.
        </p>
      </div>
    );
  }

  const configFiters = {
    defaultValue: filterType,
    options: [{
      name: 'show all',
      value: ''
    }, {
      name: 'Mens',
      value: 'mens'
    }, {
      name: 'Womens',
      value: 'womens'
    }],
    handleChange: handleFiter
  }; 

  return (
    <div className="products">
      
      <h1>
        상품 목록
      </h1>

      <FormSelect {...configFiters}/>

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