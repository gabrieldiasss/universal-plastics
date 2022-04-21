import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: 2rem auto;

`

export const Content = styled.div`
    margin: 1rem 0 5rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

    @media(max-width: 500px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-template-columns: 1fr;
    }

    @media(min-width: 1300px) {
        grid-template-columns: repeat(3, 1fr);
    }
`

export const Post = styled.div`

    cursor: pointer;

    width: 300px;

    padding: 1rem;

    background-color: var(--black-700);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.10);
    border-radius: 5px;

    img {
        width: 100%;
        border-radius: 10px;
    }

    footer {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
            width: 40px;
            height: 40px;
            border-radius: 100%;
        }

        .engagement {
            display: flex;
            align-items: center;
            gap: 16px;

            svg {
                font-size: 1.4rem;
            }

            span {
                font-size: 1.2rem;
            }

            .icon {
                display: flex;
                align-items: center;

                gap: 4px;
            }


        }
    }
`