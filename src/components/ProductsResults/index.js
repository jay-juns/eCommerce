import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProductsStart } from '../../redux/Products/products.actions';
import Product from './Product';
import FormSelect from './../Forms/FormSelect';
import LoadMore from './../LoadMore';
import './styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products
});

const ProductsResults = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { products } = useSelector(mapState);

  const { data, queryDoc, isLastPage } = products;
 
  useEffect(() => {
    dispatch(
      fetchProductsStart({ filterType })
    )
  }, [filterType]);

  const handleFiter = (e) => {
    const nextFilter = e.target.value;
    history.push(`/search/${nextFilter}`);
  };

  if (!Array.isArray(data)) return null;

  if (data.length < 1) {
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

  const handleLoadmore = () => {
    dispatch(
      fetchProductsStart({ 
        filterType, 
        startAfterDoc: queryDoc,
        persistProducts: data 
      })
    )
  };
  
  const configLoadMore = {
    onLoadMoreEvt: handleLoadmore,
  };

  return (
    <div className="products">
      
      <h1>
        상품 목록
      </h1>

      <FormSelect {...configFiters} />

      <div className="productResults">
        {data.map((product, pos) => {
          const { productThumbnail, productName, productPrice } = product;
          if(!productThumbnail || !productName || 
            typeof productPrice === 'undefined') return null;
          
          const configProduct = {
            ...product
          };   

          return (
          <Product {...configProduct} />
          );
        })}
      </div>

      { !isLastPage && (
        <LoadMore {...configLoadMore}/>  
      )}

    </div>
  );
};

export default ProductsResults;