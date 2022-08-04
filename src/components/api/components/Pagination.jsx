import React from 'react';
import styled from 'styled-components';
import { useApiGlobalContext } from '../../../context/appApiContext';

const Pagination = () => {
  const {
    page,
    nbPages,
    prevPage,
    nextPage
  } = useApiGlobalContext();
  return (
    <>
      <PaginationBtn>
        <button onClick={() => prevPage()}>PREV</button>
        <p>
          { page + 1 }  pages  {nbPages}
        </p>
        <button onClick={() => nextPage()}>NEXT</button>
      </PaginationBtn>
    </>
  );
};

const PaginationBtn = styled.div`
  width: 100%;
  height: 90px;
  /* background: #000; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  & p {
    display: inline-block;
    font-size: 13px;
    text-transform: capitalize;
    color: #0f0000;
    background-color: #cccccc;
    padding: 10px 20px;
  }
  & button {
    border: none;
    outline: none;
    padding: 10px 20px;
    font-size: 14px;
  }
`;

export default Pagination;