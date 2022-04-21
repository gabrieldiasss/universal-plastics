import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    margin: 0 1rem;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 2rem;

`

export const User = styled.div`


    p {
        max-width: 400px;

        color: #9FA3AB;

        margin-top: 0.6rem;
    }

    padding-bottom: 2rem;

    border-bottom: 1px solid #383737;
`

export const UserContent = styled.div`
    display: flex;
    gap: 2rem;

    @media(max-width: 500px) {
        display: block;
        text-align: center;
    }
    
    img {
        width: 7rem;
        height: 7rem;
        border-radius: 100%;
        cursor: pointer;
    }

    .infos-user {
        gap: 1rem;
    }

    .header {
        display: flex;
        justify-content: space-between;

        button {
            background-color: var(--blue-500);
            padding: 0 1rem;
            border-radius: 2px;

            &:hover {
                filter: brightness(0.95);
            }
        }

        strong {
            font-size: 1.6rem;
            font-family: Roboto;
            font-weight: 500;
            color: #fff;
        }
    }

    strong {
        font-size: 1.2rem;
        font-weight: 400;
        color: #CFDBF0;
        margin-top: 0.6rem;
        display: block;
    }
`

export const Numerics = styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 2rem;

    div {
        text-align: center;
        span {
            font-size: 1.6rem;
        }

        p {
            color: #7d7d7d;
        }
    }
   
`

export const Posts = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 800px;
    width: 90%;

    margin-top: 1rem;

    grid-gap: 2rem;
    
    img {
        width: 150px;
        border-radius: 5px;
    }
`