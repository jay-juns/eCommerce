import React from 'react';
import './styles.scss';
import Men from './../../assets/men.jpg';
import Women from './../../assets/women.jpg';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${Women})`
          }}
        >
        <a>
          여성 의류
        </a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${Men})`
          }}
        >
        <a>
          남성 의류
        </a>
        </div>
      </div>
    </div>
  );
};

export default Directory;