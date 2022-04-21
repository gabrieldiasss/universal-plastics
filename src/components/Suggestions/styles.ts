import styled from "styled-components";

export const Container = styled.div`
    
    max-width: 1400px;
    margin: 0 auto;
    width: 90%;

    h1 {
        margin-top: 2rem;
    }
`

export const Content = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;

    padding-bottom: 1rem;

    overflow-x: auto;

    &::-webkit-scrollbar {
        height: 6px;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
    background: var(--black-700);
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
    background: var(--black-900);
    }
`

export const Card = styled.div`
    padding: 1.2rem 1rem;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.10);
    background-color: var(--black-700);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    .banner {

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;

        img {
            width: 130px;
            border-radius: 5px;
        }

    }

    .profile {
        img {
            width: 60px;
            height: 60px;
            border-radius: 100%;
            margin-top: -30px;
        }
    }

`