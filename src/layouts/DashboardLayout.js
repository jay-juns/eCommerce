import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutUserStart } from './../redux/User/user.actions';

import Header from './../components/Header';
import VerticalNav from './../components/VerticalNav';
import Footer from './../components/Footer';

const DashBoardLayout = props => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  }
  
  return (
    <div className="dashboardLayout">
      <Header {...props} />
      <div className="controlPanal">
        <div className="sideBar">
          <VerticalNav>
            <ul>
              <li>
                <Link to="/dashboard">
                  홈
                </Link>
              </li>
              <li>
                <span className="signOut" onClick={() => signOut()}>
                  로그아웃
                </span>
              </li>
            </ul>
          </VerticalNav>
        </div>
        <div className="content">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DashBoardLayout;