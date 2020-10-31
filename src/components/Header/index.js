import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from  'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions';
import './styles.scss';

import Logo from './../../assets/logo.png';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
});

const Header = props => {
  const dispatch = useDispatch(); 
  const { currentUser } = useSelector(mapState);

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
          
          {currentUser && (
            <ul>
              <li>
                <Link to="/dashboard">
                  내 정보
                </Link>
              </li>
              <li>
                <span onClick={() => signOut()}>
                  로그아웃
                </span>
              </li>
            </ul>
          )}
      
          {!currentUser && (
            <ul>
              <li>
                <Link to="/registration">
                  회원가입
                </Link>
              </li>
              <li>
                <Link to="/login">
                  로그인
                </Link>
              </li>
            </ul>
          )}

        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null
};


export default Header;