import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/utils';

import Logo from './../../assets/logo.png';

const Header = props => {
  const { currentUser } = props;

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
           <img src={Logo} alt="LOGO" />
          </Link>
        </div>
        
        {currentUser && (
          <div className="callToActions">
            <ul>
              <li>
                <span onClick={() => auth.signOut()}>
                  LogOut
                </span>
              </li>
            </ul>
          </div>
        )}
        
        {!currentUser && (
          <div className="callToActions">
            <ul>
              <li>
                <Link to="/registration">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
        
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null
};

export default Header;