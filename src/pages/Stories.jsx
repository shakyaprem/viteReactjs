import React from 'react';
import { useApiGlobalContext } from '../context/appApiContext';
import LoadingSpinner from '../components/LoadingSpinner';
import Search from '../components/api/components/Search';
import Pagination from '../components/api/components/Pagination';
import styled from 'styled-components';
const Stories = () => {
  const { loading, hits, removePost } = useApiGlobalContext();

  if (loading) {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  }
  return (
      <Storie>
        <h2>My Tech News post</h2>
        <Search />
        <Pagination />
        {hits.map((curPosted) => {
          const { title, author, url, objectID, num_comments } = curPosted;
          return <div className="card" key={objectID}>
            <h2>
              {title}
            </h2>
            <p>
              By 👨‍💼 <span>
                {author}
              </span> | <span>
                {num_comments} comments
              </span>
            </p>
            <div className="card-button">
              <a href={url} target="_blank">read more</a>
              <a onClick={() => removePost(objectID)}>
                remove
              </a>
            </div>
          </div>
        }
        )}
      </Storie>
  );
};

const Storie = styled.section`
  display: flex;
  margin-top: 6rem;
  flex-direction: column;
  padding: 10px;
  padding-top: 30px;
  justify-content: center;
  align-items: center;
  & h2 {
    text-transform: capitalize;
    font-size: 36px;
  }

  & .card {
    width: 90vw;
    min-height: 14em;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #ccc;
    margin: 30px 0 0 0;
    border-radius: 3px;
    
    & h2 {
      width: 100%;
      font-size: 14px;
      text-align: left;
      color: #333;
      line-height: 25px;
      letter-spacing: .5px;
      text-transform: capitalize;
    }
    & p {
      display: inline;
      font-size: 12px;

      & span{
        color: #c9c9c9;

        &:first-child{
          color: #333;
        }
      }
    }
    & .card-button {
      display: flex;
      justify-content: space-between;
      padding: 20px;

      & a {
        font-size: 12px;
        text-transform: capitalize;
        color: #35c;
        &:last-child {
          color: #cf1125;
        }
      }
    }
  }
`;

export default Stories;