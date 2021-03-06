import styled from "styled-components";

export const Container = styled.main`

    text-align: center;

    margin: 7rem 2rem;

    .matchImg {

        margin-top: 1rem;

        img {
            width: 7rem;
            height: 7rem;
            border-radius: 50%;
            object-fit: cover;
        }
    }

    h1, h2, p {
        color: var(--blue-300);
    }

    h1 {
        font-size: 3rem;
    }

    h2 {
        margin-top: 2rem;
    }

    p {
        margin-top: 1rem;
    }

`

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 2rem;
    

    .select {
        height: 3rem;
        background-color: var(--blue-300);
    }

    button {
        background: none;

        & + button {
            margin-top: 1rem;
        }
    }

`