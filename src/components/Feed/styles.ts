import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: 2rem auto;
`

export const Content = styled.div`
    margin: 1rem 0 4rem 0;
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
        width: 120px;
        height: 120px;
        border-radius: 10px;
        object-fit: cover;
    }

    footer {
        margin-top: 1rem;
        display: flex;
        align-items: center;

        .engagement {
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: 16px;
            flex: 1;

            margin-top: -10px;

            svg {
                font-size: 1.4rem;

              /*   color: var(--blue-300); */
            }

            span {
                font-size: 1rem;
            }

            .icon {
                display: flex;
                align-items: center;

                gap: 4px;
            }
        }
    }
`