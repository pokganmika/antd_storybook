import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  /* color: white; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  /* padding: 0px 10px; */
  /* background-color: rgba(20, 20, 20, 0.8); */
  background-color: rgba(20, 20, 20, -0.2);
  z-index: 10;
  /* box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8); */
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    Pokganmika UI
  </Header>
))
