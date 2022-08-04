import styled from "styled-components";

export const SpinnerContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    height: 350px;

    & .loading-spinner {
    width: 50px;
    height: 50px;
    border: 5px solid gray;
    border-top: 5px solid blue;
    border-radius: 50%;
    animation: spinner .5s linear infinite;
    }

    @keyframes spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;