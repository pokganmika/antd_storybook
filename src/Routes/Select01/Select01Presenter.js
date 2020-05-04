import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const Container = styled.div`
  border: 1px solid red;
  height: 400px;
  width: 50%;
`;

const DetailView = styled.div`
  border: 1px solid blue;
  height: 300px;
  width: 50%;
`;

/**
 * 
 * @param {array} data
 * @param {boolean} showDetailState
 * @param {function} changeShowDetailState
 */
const Select01Presenter = ({
  data,
  showDetailState,
  changeShowDetailState
}) => { 

  /**
   * @type {{ current: HTMLDivElement }}
   */
  const ref = useRef();

  useEffect(() => {
    ref.current.onblur = () => changeShowDetailState(false);
  }, [])

  return (
    <Container  >
      <div tabIndex={0} ref={ref} onClick={e => {
        e.preventDefault();
        changeShowDetailState()
      }}>Select01Presenter Component</div>

      {showDetailState && <DetailView>DetailView</DetailView>}
    </Container>
  );
}

Select01Presenter.propTypes = {
  data: PropTypes.array.isRequired,
  showDetailState: PropTypes.bool.isRequired,
  changeShowDetailState: PropTypes.func.isRequired
};

export default Select01Presenter;
