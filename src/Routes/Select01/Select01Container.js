import React, { useState, useEffect } from 'react';
import Select01Presenter from './Select01Presenter';

export default () => { 
  const [data, setData] = useState([]);
  const [showDetail, setShowDetail] = useState(false);

  /**
   * 
   * @param {string} val 
   */
  const changeShowDetailState = val => {
    console.log('::changeShowDetailState value check::', val);
    typeof val === 'boolean' ? setShowDetail(val) : setShowDetail(!showDetail)
  };

  useEffect(() => {
    setData(tempData);
  }, [])

  console.log('::Selector data check::', data);
  return (
    <Select01Presenter
      data={data}
      showDetailState={showDetail}
      changeShowDetailState={changeShowDetailState}
    />
  )
}

const tempData = [
  { 
    id: 'a10', 
    selector: false,
  },
  { 
    id: 'b11', 
    selector: false,
  },
  { 
    id: 'c12', 
    selector: false,
  },
  { 
    id: 'd13', 
    selector: false,
  },
  { 
    id: 'e14', 
    selector: false,
  },
  { 
    id: 'f15', 
    selector: false,
  },
  { 
    id: 'g16', 
    selector: false,
  },
  { 
    id: 'h17', 
    selector: false,
  },
  { 
    id: 'i18', 
    selector: false,
  },
  { 
    id: 'j19', 
    selector: false,
  },
  { 
    id: 'k20', 
    selector: false,
  },
  { 
    id: 'l21', 
    selector: false,
  },
  { 
    id: 'm22', 
    selector: false,
  },
  { 
    id: 'n23', 
    selector: false,
  },
  { 
    id: 'o24', 
    selector: false,
  },
  { 
    id: 'p25', 
    selector: false,
  },
  { 
    id: 'q26', 
    selector: false,
  },
  { 
    id: 'r27', 
    selector: false,
  },
  { 
    id: 's28', 
    selector: false,
  },
  { 
    id: 't29', 
    selector: false,
  },
  { 
    id: 'u30', 
    selector: false,
  },
  { 
    id: 'v31', 
    selector: false,
  },
  { 
    id: 'w32', 
    selector: false,
  },
  { 
    id: 'x33', 
    selector: false,
  },
  { 
    id: 'y34', 
    selector: false,
  },
  { 
    id: 'z35', 
    selector: false,
  },
];
