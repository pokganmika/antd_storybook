import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const Container = styled.div`
  border: 1px solid red;
  height: 400px;
  width: 50%;
  padding: 10px;
`;

const SelectorBox = styled.div`
  width: 100%;
  height: fit-content;
  border: 1px solid #d9d9d9;

  display: flex;
  flex-wrap: wrap;
`;

const Segment = styled.span`
  border-radius: 2px;
  background-color: #f5f5f5;
  margin: 2px 4px 2px 0px;
  padding: 2px 4px 2px 8px;
  font-size: 14px;
  display: inline-block;
`;

const DetailView = styled.div`
  border: 1px solid blue;
  height: 300px;
  width: 100%;
  overflow: auto;
`;

const DetailList = styled.div`
  padding: 4px;
  &:hover {
    background-color: #f5f5f5;
  }
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

      <SelectorBox tabIndex={0} ref={ref} onClick={e => {
        e.preventDefault();
        changeShowDetailState()
      }}>
        {data.map((val, i) => { 
          return val.selector ? (
            <Segment key={i}>
              {val.id}
            </Segment>
          ) : null
        })}

        <input />
      </SelectorBox>

      {showDetailState && (
        <DetailView>
          {data.map((val, i) => (
            <DetailList key={i}>
              {val.id}
            </DetailList>
          ))}
        </DetailView>
      )}
    </Container>
  );
}

Select01Presenter.propTypes = {
  data: PropTypes.array.isRequired,
  showDetailState: PropTypes.bool.isRequired,
  changeShowDetailState: PropTypes.func.isRequired
};

export default Select01Presenter;
