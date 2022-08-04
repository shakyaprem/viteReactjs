import React from 'react';
import { useGlobalContext } from '../context/context';
import { Button } from '../styles/Button';
import { Wrapper, Container, Card } from '../styles/Styled.Components';
import LoadingSpinner from '../components/LoadingSpinner';

const Services = () => {
  const { loading, services } = useGlobalContext();
  if (loading) {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  }
  
  return (
    <Wrapper className="pa-bottom">
      <h2 className="common-heading">
        our Services
      </h2>
      <Container className="flex-wrap">
        {
          services.map((curElem) => {
            const { id, name, title, description, image } = curElem;
            return <Card key={id} >
              <figure>
                <img className="service-img" src={image} alt={name} />
              </figure>
              <h3 className="title">
                {title}
              </h3>
              <p className="card-text">
                {description}
              </p>
              <Button className="btn-read-more">read more</Button>
            </Card>
          })
        }
      </Container>
    </Wrapper>
  );
};



export default Services;