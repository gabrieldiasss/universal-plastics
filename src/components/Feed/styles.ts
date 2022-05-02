import styled from "styled-components";

export const Container = styled.div`

    h1 {
        margin-top: 1rem;
    }

    width: 90%;
    max-width: 1200px;
    margin: 2rem auto;
`

export const Content = styled.div`
    margin: 1rem 0 2rem 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    text-align: center;
`

export const Post = styled.div`

    cursor: pointer;

    margin-bottom: 1rem;

    /* background-color: var(--black-700);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.10);
    border-radius: 5px; */

    img {
        width: 110px;
        height: 110px;
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

            margin-top: -10px;

            svg {
                font-size: 1.4rem;

                color: var(--blue-300);
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