import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from './../../redux/Cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import './styles.scss';
import Button from './../Forms/Button';
import Item from './Item';

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

const Checkout = ({}) => {
  const history = useHistory();
  const { cartItems, total } = useSelector(mapState);

  const errMsg = '장바구니가 비었습니다.';

  return (
    <div className="checkout">
      <hi>
        체크아웃
      </hi>

      <div className="cart">
        {cartItems.length > 0 ? (
        <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            
            <tr>
              <table className="checkoutHeader" border="0" cellPadding="0" cellSpacing="10">
                <tbody>
                  <tr>
                    <th>
                      상품  
                    </th>
                    <th>
                      설명  
                    </th>
                    <th>
                      갯수
                    </th>
                    <th>
                      가격  
                    </th>
                    <th>
                      삭제
                    </th>     
                  </tr>
                </tbody>
              </table>
            </tr>

            <tr>
              <table border="0" cellPadding="0" cellSpacing="0">
                <tbody>
                  {cartItems.map((item, pos) => {
                    return (
                      <tr key={pos}>
                        <td>
                          <Item {...item} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </tr>

            <tr>
              <table algin="right" border="0" cellPadding="10" cellSpacing="0">
                <tr algin="right">
                  <td>
                    <h3>
                      총합계: {total} 원
                    </h3>
                  </td>
                </tr>
                <tr>
                  <table border="0" cellPadding="10" cellSpacing="0">
                    <body>
                      <tr>
                        <td>
                          <Button onClick={() => history.goBack()}>
                            쇼핑 계속하기
                          </Button>
                        </td>
                        <td>
                          <Button>
                            체크아웃
                          </Button>
                        </td>
                      </tr>
                    </body>
                  </table>
                </tr>
              </table>
            </tr>

          </tbody>
        </table>
        ) : (
           <p>
             {errMsg}
           </p> 
        )}
      </div>
    </div>
  );
};

export default Checkout;