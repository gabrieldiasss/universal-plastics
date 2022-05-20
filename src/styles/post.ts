import styled from 'styled-components'

export const Container = styled.main`

    flex: 1;

    .arrow {
        font-size: 2rem;
        color: var(--blue-300);
        top: 20px;
        left: 20px;
        position: absolute;
    }
`

export const Content = styled.section`
    display: flex;
    justify-content: center;

    margin-top: 5rem;
`

export const PostContainer = styled.div`

    img {
        width: 380px;
        height: 400px;
        object-fit: cover;
        border-radius: 5px;
    }

    footer {
        margin-top: 1.6rem;

        .engagement {
            display: flex;
            align-items: center;
            justify-content: space-between;

            margin-top: -10px;

            svg {
                font-size: 2rem;
            }

            img {
                width: 60px;
                height: 60px;
            }

            span {
                font-size: 1.4rem;
            }

            .icon {
                display: flex;
                align-items: center;

                gap: 4px;
            }
        }
    }

`