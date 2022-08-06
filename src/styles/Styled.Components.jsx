import styled from "styled-components";

export const NavbarNav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4.4rem;

    li {
      list-style: none;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.4rem;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.bg};
          transition: color 0.3s linear;
          z-index: 1;
          opacity: 1;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
  }
`;
export const Div = styled.section`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Wrapper = styled.section`
  margin-top: 3.6rem;
  padding: 9rem 0 5rem;
  background: ${({ theme }) => theme.colors.wrapper};
  z-index: 99;
  opacity: .9;
  @media only screen and (max-width: 1024px) {
    padding: 5rem 0 ;
  }

  & .hero-section-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;

    & .hero-top {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.helper};
    }

    & .btn {
      max-width: 16rem;
    }
    & h1 {
      text-transform: uppercase;
      font-size: 5.1rem;
    }
    & .hero-para {
      max-width: 60rem;
      padding-top: 1rem;
      padding-bottom: 3.4rem;
      text-transform: capitalize;
      font-size: 1.4rem;
    }
  }

  & .hero-section-image {
    display: flex;
    justify-content: center;
    align-items: center;

    & picture {
      text-align: center;

      & .img-responsive {
        max-width: 80%;
      }
    }
  }
`;
export const FooterPad = styled.section`
  padding-top: 12rem;
`;
export const FooterClass = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: flex-start;
  padding: 0 auto;
  background: ${({ theme }) => theme.colors.footerBg};
  
  & .footer-sort{
    max-width: 80%;
    padding: 3.5rem;
    display: inline-flex;
    justify-content: space-around;
    align-self: center;
    gap: 10rem;
    border-radius: 0.2rem;
    transform: translateY(-50%);
    background: ${({ theme }) => theme.colors.bg};
    @media screen and (max-width: 698px) {
      .footer-sort {
        width: 100%;
        margin: 0;
        gap: 2rem;

        & .sort-text, .sort-btn{
          width: auto;
        }
      }
    }
    @media screen and (max-width: 600px) {
      .footer-sort {
        width: 100%;
        margin: 0;
        gap: 2rem;
        & .sort-text, .sort-btn{
          width: auto;
        }
      }
    }
    @media screen and (max-width: 475px) {
      .footer-sort {
        width: 100%;
        margin: 0;
        gap: 2rem;
        & .sort-text, .sort-btn{
          width: auto;
        }
      }
    }
    @media screen and (max-width: 375px) {
      .footer-sort {
        width: 100%;
        margin: 0;
        gap: 2rem;
        & .sort-text, .sort-btn{
          width: auto;
        }
      }
    }
    @media screen and (max-width: 320px) {
      .footer-sort {
        width: 100%;
        margin: 0;
        gap: 2rem;
        & .sort-text, .sort-btn{
          width: auto;
        }
      }
    }

    & .sort-text {
      width: 40%;
      margin: 0;
      padding: 0;
      text-align: start;
      & .sort-para{
        text-transform: capitalize;
        font-size: 12px;
      }
    }
    & .sort-btn {
      width: 30%;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      & .sort-btn-get-started {
        width: 100%;
        font-size: 12px;
        text-transform: capitalize;
        padding: 10px 12px;
        letter-spacing: .9px;
        text-align: center;
        border-radius: 4px;

      }
    }
  }
`;

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
  .col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.light};
  }
  .footer-heading{
    font-size: 1.3rem;
    text-transform: capitalize;
    padding: 0;
    text-align: start;
    line-height: 2rem;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.colors.xLight};
  }
  .footer-form{
    width: 100%;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    & input{
      padding: 0.9rem 1.4rem;
      border: none;
      outline: none;
      border-radius: 4px;
      &:last-child {
        width: 50%;
        font-size: 12px;
        padding: 10px 15px;
        background-color: rgb(98 ,84, 243);
        color: rgb(255, 255, 255);
        border: none;
        text-transform: uppercase;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease 0s;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        
        &:hover, &:active {
          box-shadow: 0 2rem 2rem 0 rgba(132, 144, 255, 30%);
          box-shadow: ${({ theme }) => theme.colors.shadowSupport};
          transform: scale(0.96);
        }
      }
    }
  }
  .footer-icons{
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
    & .icons {
      font-size: 2.5rem;
      color: rgb(231, 233, 243);
      cursor: pointer;
      border: none;
      transition: all 0.3s ease 0s;
      -webkit-transition: all 0.3s ease 0s;
      -moz-transition: all 0.3s ease 0s;
      -o-transition: all 0.3s ease 0s;

        &:hover, &:active {
          box-shadow: 0 2rem 2rem 0 rgba(132, 144, 255, 30%);
          box-shadow: ${({ theme }) => theme.colors.shadowSupport};
          transform: scale(0.96);
        }
    }
  }
  .footer-text {
    color: ${({ theme }) => theme.colors.xLight};
    font-size: 13px;
    text-transform: capitalize;
  }
  .footer-logo {
    max-height: 4.7rem;
    max-width: 80%;
    z-index: 1;
    opacity: 0.9;
  }

  .col-4 {
    width: 22.5%;
    margin: 1rem;
    padding: 1rem;
    font-size: 14px;
  }
  @media screen and (max-width: 1024px) {
    .col-4, .col-3, .col-2, .col{
      width: 22.5%;
    }
  }
  @media screen and (max-width: 960px) {
    .col-4{
      width: 29.9%;
    }
    .col:last-child{
      width: 50%;
    }
  }
  @media screen and (max-width: 768px) {
    .col-3 {
      width: 38.9%;
    }
    .col:last-child{
      width: 70%;
    }
    .footer-logo {
      width: 50%;
    }
  }
  @media screen and (max-width: 698px) {
    .col-2 {
      width: 44.9%;
    }
    .col:last-child{
      width: 100%;
    }
    .footer-logo {
      width: 50%;
    }
  }
  @media screen and (max-width: 600px) {
    .col, .col-2, .col-3, .col-4 {
      width: 100%;
      margin: 1rem 0;
    }
    .col:last-child{
      width: 100%;
    }
  }
`;

export const Card = styled.div`
  width: 29.99%;
  min-height: 590px;
  white-space: wrap;
  display: grid;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.light};
  padding: 0.5em;
  padding-bottom: 20px!important;
  text-transform: capitalize;
  border-radius: 4px;


  & img{
    width: 100%;
    min-height: 209px;
  }
  & .title {
    padding: 1rem 0;
  }
  & .card-text {
    font-size: 1.3rem;
  }
  & .btn-read-more{
    /* width: 150px; */
    margin: 2em auto .5em;
    padding: 0.5em auto;
    border-radius: 4px;
  }
  @media screen and (max-width: 1024px) {
    min-height: 480px!important;
  }
  @media screen and (max-width: 960px) {
    width: 47.2%;
    height: 520px!important;

  }
  @media screen and (max-width: 768px) {
    width: 47%;
  }
  @media screen and (max-width: 698px) {
    width: 46.8%;
  }
  @media screen and (max-width: 650px) {
    width: 44.8%;
  }
  @media screen and (max-width: 630px) {
    width: 46%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border: none;
    border-bottom: 1px solid #ccc;
  }

`;

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem 0;
  padding-bottom: 5rem;
  margin-top: 9rem;
`;

export const Form = styled.form`
  width: 460px;
  padding: 5rem;
  margin-top: 5rem;
  gap: 1.5rem;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(5, 5, 5, 0.1);
  border-radius: 5px;



  & input, textarea {
    width: 100%;
    border: none;
    resize: none;
    outline-style: none;
    padding: 1rem 2rem;
    border-radius: 5px;
    background: #fff;

    &:last-child {
      width: 100px;
      padding: 1.3rem 2rem;
      margin-top: 1rem;
      font-size: 1.5rem;
      text-transform: uppercase;
      background: ${({ theme }) => theme.colors.btn};
      color: ${({ theme }) => theme.colors.white};

      &:hover {
        color: ${({ theme }) => theme.colors.btn};
        background: ${({ theme }) => theme.colors.white};
        transform: scale(0.9);
      }
    }
  }
`;

export const ErrorPage = styled.div`
  padding: 9rem;
  width: 100vw;
  height: 100vh;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .error-img{
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 0 auto;

    & img{
      width: 100%;
      z-index: 1;
      opacity: 9;
    }
    & h2 {
      text-align: center;
      color: #4C6FBF;
      text-transform: uppercase;
      font-size: 5vh;
      z-index: 1;
      opacity: .9;
    }
    & .error-btn {
      border-radius: 4px;
    }
  }
`;

