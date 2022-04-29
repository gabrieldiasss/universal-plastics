import styled from "styled-components";

export const HeaderContainer = styled.header`
    /* background-color: #c4c4c4; */

    .footer-profile {
        width: 300px;
        margin: 7rem auto 1rem auto;
        display: flex;
        justify-content: center;
    }
`

export const Content = styled.div`

    display: flex;
    align-items: center;
    /* justify-content: space-between; */

    justify-content: center;

    height: 90px;

    .logo {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 55px;
        margin-top: -10px;

        display: none;

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
            display: none;
        }
        
        svg {
            color: var(--gray-300);
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

        border: 3px solid var(--blue-300);

        /* position: absolute;
        right: 20px; */

        @media(max-width: 500px) {
            width: 6rem;
            height: 6rem;
        }
    }

    .infos {
        gap: 2rem;
        display: flex;
        align-items: center;

        img {
            width: 110px;
            height: 110px;
        }

    
        .bio {

            display: flex;
            flex-direction: column;
            margin-top: 7rem;

            b {
                font-size: 1.2rem;
            }

            span {
                margin-top: 2px;
            }

            p {
                font-size: 1.4rem;
            }
           
        }
      
        .button {
            border-right: 1px solid #383737;
            padding-right: 2rem;

            @media(max-width: 500px) {
                display: none;
            }
        }

        .user-elements {
            display: flex;
            flex-direction: column;
            text-align: center;
            margin-top: 9rem;

            strong {
                margin-bottom: 12px;
                font-size: 1.4rem;

                display: flex;
                align-items: center;

                margin-left: 20px;

                svg {
                    margin-left: 0.6rem;

                    color: var(--blue-300);
                }
            }

        }

        .img-foll {
            margin-top: 7rem;
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