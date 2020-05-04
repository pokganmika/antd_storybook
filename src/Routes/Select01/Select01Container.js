import React, { useState } from 'react';
import Select01Presenter from './Select01Presenter';

const initialState = {};

export default () => { 
  const [state, setState] = useState(initialState);
  const [data, setData] = useState([]);
  const [showDetail, setShowDetail] = useState(false);

  const changeShowDetailState = val => {
    console.log('이거 확인', val);
    typeof val === 'boolean' ? setShowDetail(val) : setShowDetail(!showDetail)
  };

  return (
    <Select01Presenter
      data={data}
      showDetailState={showDetail}
      changeShowDetailState={changeShowDetailState}
    />
  )
}
