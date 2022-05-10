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

export const Form = styled.form`

    width: 80%;

    padding: 2rem 2rem;
    margin: 5rem auto;

    display: flex;
    justify-content: center;

    border-radius: 5px;

    display: flex;
    flex-direction: column;

    background-color: var(--black-800);

    input {
        margin-top: 1rem;

        background-color:var(--black-700);

        height: 3rem;
        padding: 0 2rem;
        border-radius: 5px;

        color: var(--gray-200);
    }

    button {
        border-radius: 5px;
        margin-top: 1rem;
        background-color: var(--blue-300);
        height: 3rem;

        
    }

`