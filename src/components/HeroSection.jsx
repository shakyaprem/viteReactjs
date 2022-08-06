import React from 'react';
import { Wrapper } from '../styles/Styled.Components';
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from "../context/context";

const HeroSection = () => {
  const { name, image, background } = useGlobalContext();
  return (
    <Wrapper className="padding" style={{ background: background }}>
      <div className="container grid grid-two-column">
        <div className="hero-section-data">
          <p className="hero-top">this is me</p>
          <h1>{name}</h1>
          <p className="hero-para">
            i'm {name}. a full stack developer, youtuber and freelancer.
            a full stack developer, youtuber and freelancer.
          </p>
          <Button role="button" className="btn">
            <NavLink to="#read-me">read me</NavLink>
          </Button>
        </div>
        <div className="hero-section-image">
          <picture>
            <img className="img-responsive" src={image} alt="hero image" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;