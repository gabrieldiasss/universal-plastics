import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1400px;
    
    margin: 0 auto;
    width: 90%;

    h1 {
        margin-bottom: 1rem;
    }
`

export const StorysContainer = styled.div`
    padding: 1rem 1rem;
    background-color: var(--black-700);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.10);
    border-radius: 5px;
`;

export const UserStories = styled.div`
    display: flex;
    gap: 20px;
`

export const UserElements = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;

    > div {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient( var(--blue-500), var(--blue-300));

        > img {
            border: 2px solid var(--white);
            width: 56px;
            height: 56px;
            border-radius: 100%;
        }
    }

    > span {
        font-size: 13px;
        text-align: center;
        color: var(--gray-600);
    }
`