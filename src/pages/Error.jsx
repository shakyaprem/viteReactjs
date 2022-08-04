import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';
import { ErrorPage } from '../styles/Styled.Components';

const Error = () => {
  return (
    <ErrorPage>
        <picture className='error-img'>
            <h2>page not found</h2>
            <img src="./images/error-404.png" alt="Error 404"/>
            <NavLink to='/'>
                <Button className="error-btn">
                    go back
                </Button>
            </NavLink>
        </picture>
    </ErrorPage>
  )
}

export default Error;