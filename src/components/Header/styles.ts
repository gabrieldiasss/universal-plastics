import styled from "styled-components";

export const HeaderContainer = styled.header`
    /* background-color: #c4c4c4; */
`

export const Content = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90%;
    max-width: 1400px;
    margin: 0 auto;

    height: 90px;

    .logo {
        display: flex;
        align-items: center;
        width: 40px;
        margin-top: -10px;

        @media(min-width: 500px) {
            display: none;
        }
    }

    .input {
        background-color: var(--gray-100);
        border-radius: 5px;
        padding: 0 2rem;

        height: 2.6rem;

        display: flex;
        align-items: center;

        @media(max-width: 500px) {
            max-width: 200px;
            padding: 0 1rem;
        }
        
        svg {
            color: var(--gray-500);
            margin-right: 1rem;
        }

        input {
            background: none;
            display: flex;
            align-items: center;
        }
    }

    .user {
        width: 4rem;
        height: 4rem;
        border-radius: 100%;
        cursor: pointer;

        @media(max-width: 500px) {
            width: 3rem;
            height: 3rem;
        }
    }

    .infos {
        gap: 2rem;
        display: flex;
        align-items: center;

        div {
            border-right: 1px solid #383737;
            padding-right: 2rem;

            @media(max-width: 500px) {
                display: none;
            }
        }

        button {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            height: 2.6rem;
            padding: 0 2rem;
            border-radius: 5px;
            background-color: var(--blue-500);
            color: var(--white);
            font-size: 1.2rem;

            &:hover {
                filter: brightness(0.95);
                transition: 0.4s;
            }
        }
      
    }

`