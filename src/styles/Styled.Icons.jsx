import styled from "styled-components";

export const StyleIcon = styled.div`
  padding: 0;
  margin-top: 5rem;
  display: flex;
`;

export const Icon = styled.div`
  max-width: 30vw;
  padding: 2rem 0;
  border-right: 1px solid #ccc;
  & h3 {
    padding: 1rem;
    border-bottom: 1px solid #ccc;
    text-align: center;
  }
`;
export const IconsLink = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
  gap: 2rem;


  & li{
    & a {
      background: none;
    }
    & .link {
      font-size: 13px;
      text-transform: capitalize;
      &:link,
      &:visited {
        display: inline-block;
        color: ${({ theme }) => theme.colors.light}!important;
        transition: color 0.3s linear!important;
      }
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper}!important;
      }
      
    }
    & .line {
        font-size: 14px;
        text-transform: capitalize;
        text-decoration: 2px solid ${({ theme }) => theme.colors.helper} underline!important;
      }
  }
`;

export const IconsList = styled.div`
  max-width: 75vw;
  min-height: 100vh;
  padding: 2rem;
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 5%;
`;

export const List = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  z-index: 9;
  opacity: 1;

  & .display-icon{
    display: none;
  }

  & .active-icon{
    display: block;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.xsLight};
    padding: 2rem;
    margin-top: 1rem;
    z-index: 9999;
    opacity: 1;
    transition: 1s ease;
   /* grid-template-columns: repeat(6, .5fr); */
    
    & .ts {
      font-family: "Playfair Display", serif;
      padding: 0 0.5rem;
      padding-right: 1.9rem;
      color: #fff;
      border-radius: 4px;
      font-size: 3rem;
      margin: 1rem;
      letter-spacing: -6px;
      text-align: center;
      color: ${({ theme }) => theme.colors.ts};
      background: ${({ theme }) => theme.colors.xLight};
    }
  }
`;
