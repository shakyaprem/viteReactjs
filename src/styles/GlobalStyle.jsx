import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}
html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 1.5rem;
}
::-webkit-scrollbar-track{
  background-color: rgb(29, 29, 39);
}
::-webkit-scrollbar-thumb {
  background: rgb(204, 204, 204);
  border: 5px solid transparent;
  border-radius: 9px;
  background-clip: content-box;
}

h1{
  color:${({ theme }) => theme.colors.heading};
  font-size: 6rem;
  font-weight: 900;
}

h2 {
  color: ${({ theme }) => theme.colors.heading};
  font-size: 4.4rem;
  font-weight: 300;
  white-space: normal;
  text-align: center;
}

h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p {
  color: ${({ theme }) => theme.colors.text};
  opacity: .7;
  font-size: 1.65rem;
  line-height: 1.5;
  margin-top: 1rem;
  font-weight: 400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}
img {
  width: 100%;
}
.service-img {
  min-height: 212px;
}
.link {
  color: ${({ theme }) => theme.colors.xLight}!important;
  cursor: pointer;

  &:link,
  &:visited {
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  transition: color 0.3s linear;
  }

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.helper};
  }
}
.pa-bottom {
  padding: 5rem;
}
.text {
  width: 100%;
  padding: 2rem;
  font-size: 13px;
  text-align: center;
  text-transform: capitalize;
  background-color: ${({ theme }) => theme.colors.footerBg};
  color: ${({ theme }) => theme.colors.white};
}
.line {
    width: 100%;
    padding: 1px;
    border: none;
    background: ${({ theme }) => theme.colors.light};
  }
.ts {
    font-family: "Playfair Display", serif;
    padding: 0 0.5rem;
    padding-right: 1.8rem;
    color: #fff;
    border-radius: 4px;
    font-size: 3rem;
    margin: 1rem;
    letter-spacing: -6px;
    text-align: center;
    color: ${({ theme }) => theme.colors.ts};
    background: ${({ theme }) => theme.colors.xLight};
  }
.common-heading{
  width: 100%;
  padding-bottom: 2.9rem;
  margin-bottom: 2.9rem;
  text-transform: capitalize;
  text-align: center;
}
.navbar-list {
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-toggle {
  display: none;
}
.nav-toggle .line {
  width: 2.5rem;
  height: 0.2rem;
  margin: 0.4rem;
  background: rgb(204, 204, 204);
  transition: 0.4s ease-in;
}

@media screen and (max-width: 768px) {
  .nav-toggle {
    display: block;
    cursor: pointer;
  }
  .container{
    z-index: -1;
  }
  .navbar-list {
    position: absolute;
    top: 6rem;
    right: 0;
    height: 100vh;
    width: 100vw;
    background: ${({ theme }) => theme.colors.light};;
    flex-direction: column;
    transform: translateX(100%);
    z-index: 9999;
    opacity: 1;
    transition: 0.6s ease-in;
  }
}
/* Active Class */
.nav-active {
  transform: translateX(0%);
}

/* Toggle Icon Animation */

.toggle .line1 {
  transform: rotate(-45deg) translate(-4px, 5px);
}
.toggle .line2 {
  opacity: 0;
}
.toggle .line3 {
  transform: rotate(45deg) translate(-4px, -5px);
}


${"" /* container grid grid-two-column */}

.container {
  max-width: 120rem;
  margin: 0 auto;
}
.grid {
  display: grid;
  gap: 9rem;

@media only screen and (min-width: 998px) and (max-width: 1024px) {
  gap: 4rem;
}
  
}
.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}
.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}
.grid-four-column {
  grid-template-columns: 1fr .5fr 1.2fr .8fr;
}

.flex-wrap{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
}
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
  .container {
    max-width: 110rem;
  }

}

@media only screen and (min-width: 998px) and (max-width: 1024px) {
  .container {
    max-width: 100rem;
  }

}
@media only screen and (min-width: 820px) and (max-width: 912px) {
  .container{
    max-width: 87rem;
  }

}
@media only screen and (min-width: 767px) and (max-width: 820px) {
  .container{
    max-width: 80rem;
  }

}

@media only screen and (min-width: 568px) and (max-width: 768px) {

  .container{
    max-width: 75rem;
  }
}

@media only screen and (max-width: 568px) {
  .container {
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .hero-section-data, .hero-section-image{
    margin: 0;
    padding: 0;
    width: 100%;
    align-items: center;
    text-align: center;

    & .img-responsive {
      width: 99%;
    }
  }
  
}

`;
