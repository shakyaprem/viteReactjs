import React, { useEffect, useState } from 'react'
import { FaAngleDoubleUp } from "react-icons/fa";
import styled from 'styled-components';

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const goToTopBtn = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    const listenToScroll = () => {
        let heightToHide = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if(winScroll > heightToHide) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll', listenToScroll);
    }, []);

  return (
    <Wrapper>
        {isVisible && (
            <div className="top-btn" 
            onClick={goToTopBtn}>
            <FaAngleDoubleUp className="top-btn--icon"/>
        </div>
        )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    .top-btn {
        font-size: 2rem;
        width: 4.8rem;
        height: 4.8rem;
        color: #fff;
        background-color: ${({ theme }) => theme.colors.btn};
        box-shadow: ${({ theme }) => theme.colors.shadow};
        border-radius: 50%;
        position: fixed;
        bottom: 5rem;
        right: 5rem;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .top-btn--icon {
        animation: gototop 1.5s linear infinite alternate-reverse;
        cursor: pointer;
    }
    @keyframes gototop {
        0% {
            transform: translateY(-0.4rem);
        }
        100% {
            transform: translateY(0.8rem);
        }
    }
`;


export default GoToTop;