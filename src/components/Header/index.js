import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from  'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';
import './styles.scss';

import Logo from './../../assets/logo.png';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state)
});

const Header = props => {
  const dispatch = useDispatch(); 
  const { currentUser, totalNumCartItems } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
           <img src={Logo} alt="LOGO" />
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/"> 
                홈
              </Link>
            </li>
            <li>
              <Link to="/search"> 
                검색
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="callToActions">

          <ul>
            <li>
              <Link to="/cart">
                장바구니 ({totalNumCartItems})
              </Link>
            </li>

            {currentUser && [
              <li>
                <Link to="/dashboard">
                  내 정보
                </Link>
              </li>,
              <li>
                <span onClick={() => signOut()}>
                  로그아웃
                </span>
              </li>
            ]}

          {!currentUser && [
            <li>
              <Link to="/registration">
                회원가입
              </Link>
            </li>,
            <li>
              <Link to="/login">
                로그인
              </Link>
            </li>
            
          ]}

          </ul>
          
          
      
          

        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null
};


export default Header;