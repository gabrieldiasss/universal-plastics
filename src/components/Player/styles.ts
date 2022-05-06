import styled from 'styled-components'

export const PlayerContainer = styled.footer`

    position: absolute;
    bottom: 64px;

    display: flex;
    align-items: center;
    background-color: var(--blue-900);
    padding: 1rem;

    width: 100%;

    img {
        width: 4rem;
        height: 4rem;
    }
`

export const ContentPlayer = styled.div`

    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    
    .infos {
        display: flex;
        flex-direction: column;

        strong {
            font-size: 1.5rem;
        }

        span {
            font-size: 1.3rem;
            color: rgba(255, 255, 255, 0.90);
        }
    }

    svg {
        font-size: 2rem;
    }

`