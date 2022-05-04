import styled from 'styled-components'

export const Container = styled.div`
    flex: 1;
`

export const Content = styled.div`
    
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 1rem 0;

        width: 90%;
        margin: 0 auto;

        span {
            font-size: 1.4rem;
        }

        svg {
            font-size: 1.6rem;
        }


        div {
            display: flex;
            align-items: center;

            gap: 1rem;
        }

    }

`

export const AllMessagesUser = styled.main`
    width: 90%;
    margin: 1rem auto;
`

export const MessageUser = styled.div`
    display: flex;

    & + div {
        margin-top: 1rem;
    }

    img {
        width: 4rem;
        height: 4rem;
        border-radius: 100%;
    }
`

export const ContentMessageUser = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;

    margin-left: 1rem;

    .infos {
        display: flex;
        flex-direction: column;

        strong {
            font-size: 1.2rem;
        }

        span {
            color: var(--gray-700);
        }
    }

    svg {
        font-size: 1.6rem;
        color: var(--gray-700);
    }
`