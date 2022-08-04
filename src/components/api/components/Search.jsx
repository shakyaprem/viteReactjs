import React from 'react';
import styled from 'styled-components';
import { useApiGlobalContext } from '../../../context/appApiContext';
import { FaSistrix } from "react-icons/fa";


const Search = () => {
  const { query, searchPost} = useApiGlobalContext();
  return (
    <SearchQuery>
      <h1>Technical Shakya Tech Website</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text"
          placeholder="Search"
          value={query} onChange={(e) => searchPost(e.target.value)}/>
          <FaSistrix className="search-icon"/>
      </form>
    </SearchQuery>
  );
};

const SearchQuery = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  & h1 {
    text-transform: capitalize;
    font-size: 36px;
    text-align: center;
  }
  & form {
    padding: 8px 20px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-top: 50px;
    background-color: #fffcfc;
    display: flex;
    justify-content: center;
    align-items: center;
    & input {
      border: none;
      outline: none;
      background-color: #fffcfc;
      padding: 5px 10px;

    }
    & .search-icon{
      font-size: 15px;
    }
  }

`;

export default Search;