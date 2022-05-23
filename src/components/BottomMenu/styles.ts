import styled from "styled-components";

export const BottomMenuSection = styled.div` 
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
    height: 4rem;
    padding: 8px min(46px, mx(10vw, 10px));
    width: 100%;
    display: flex;
    align-items: center;

    justify-content: space-around;

    padding: 2rem;

    svg {
        font-size: 2rem;
        color: #fff;
    }

    @media(min-width: 500px) {
        display: none;
    }

    img {
        width: 60px;
        margin-top: -20px;
    }
`
