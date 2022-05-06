import styled from "styled-components";

export const Container = styled.main`

    flex: 1;

    header {
        img {
            width: 100%;
            height: 350px;
            object-fit: cover;
        }

        .icons {

            display: flex;
            align-items: center;
            width: 95%;
            margin: 1rem auto 0 auto;

            gap: 1rem;

            svg {
                font-size: 2rem;
                color: #fff;
            }
        }
    }

`

export const AllMusics = styled.section`
    width: 90%;
    margin: 2rem auto 0 auto;
`

export const UniqueMusic = styled.div`

    display: flex;
    align-items: center;

    img {
        width: 4rem;
        height: 4rem;
    }

`

export const ContentMusic = styled.div`

    margin-left: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    flex: 1;

    .infos {
        display: flex;
        flex-direction: column;

        strong {
            font-size: 1.6rem;
            font-weight: 500;
        }

        span {
            font-size: 1.4rem;
            margin-top: 0.6rem;
            color: var(--gray-700);
        }
    }

    .icon {
        svg {
            font-size: 2rem;
            color: var(--gray-700);
        }
    }

    
`