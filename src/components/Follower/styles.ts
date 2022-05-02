import styled from 'styled-components'

export const Container = styled.section`
    margin: 4rem auto 0 auto;
    max-width: 300px;
    
`

export const InfoUsersFollowersProfile = styled.section`

    display: flex;
    align-items: center;
    

    p {
        margin-left: 8px;
    }

    img {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        margin-left: -10px;
    }

`

export const Buttons = styled.section`

    margin-top: 1rem;

    max-width: 300px;
    min-width: 300px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .message, .person {
        background: none;
        border: 1px solid #1B1B1B;
        border-radius: 5px;
    }

    .message {
        padding: 4px 1rem;
        border-radius: 5px;
    }

    .person {
        padding: 4px;
    }

    svg {
        font-size: 1.5rem;
    }

`

interface ButtonFollowProps {
    isActive: boolean;
}

export const ButtonFollow = styled.button<ButtonFollowProps>`
    background: ${(props) => props.isActive ? 'none' : 'var(--blue-300)' };
    border: ${(props) => props.isActive ? '1px solid #1B1B1B' : 'none'};
    padding: 4px 1rem;
    border-radius: 5px;
`