import React from 'react';
import Button from './../forms/Button';

const LoadMore = ({
  onLoadMoreEvt = () => { }, 
}) => {
  return (
    <Button onClick={() => onLoadMoreEvt()}>
      더 불러오기
    </Button>
  );
};

export default LoadMore;