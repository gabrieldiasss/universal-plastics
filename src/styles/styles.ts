import styled from "styled-components";

export const Container = styled.div`
    flex: 1;

    .arrow {
        font-size: 2rem;
        color: var(--blue-300);
        top: 20px;
        left: 20px;
        position: absolute;
    }

    .icon-analytics {
        width: 100px;
        right: 20px;
        top: 20px;
        position: absolute;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 2rem;
`

export const User = styled.div`

    b {
        display: block;
        margin-top: 1rem;

        max-width: 500px;

        color: #9FA3AB;

        margin-top: 0.6rem;

        @media(max-width: 500px) {
            max-width: 300px;
            margin: 1rem auto;
            font-size: 1.4rem;
        }
    }

    padding-bottom: 4rem;

    border-bottom: 1px solid #383737;

    @media(max-width: 500px) {
        width: 90%;
    }
`

export const UserContent = styled.div`
    display: flex;
    gap: 2rem;

    @media(max-width: 500px) {
        display: block;
        text-align: center;
    }
    
    img {
        width: 7rem;
        height: 7rem;
        border-radius: 100%;
        cursor: pointer;
    }

    .infos-user {
        gap: 1rem;
    }

    .header {
        display: flex;
        justify-content: space-between;

        button {
            background-color: var(--blue-500);
            padding: 0 1rem;
            border-radius: 2px;

            &:hover {
                filter: brightness(0.95);
            }
        }

        strong {
            font-size: 1.6rem;
            font-family: Roboto;
            font-weight: 500;
            color: #fff;

           
        }

        @media(max-width: 500px) {
            display: flex;
            align-items: flex-end;
            justify-content: center;
            gap: 1rem;
        }
    }

    strong {
        font-size: 1.2rem;
        font-weight: 400;
        color: #CFDBF0;
        margin-top: 0.6rem;
        display: block;

        @media(max-width: 500px) {
                font-size: 1.6rem;
            }
    }
`

export const Numerics = styled.div`
    display: flex;
    align-items: center;

    max-width: 300px;
    margin: 1rem auto;

    justify-content: space-around;

    margin-top: 2rem;

    div {
        text-align: center;
        
        b {
            font-size: 1.6rem;
        }

        p {
            color: var(--blue-300);
        }
    }
   
`

export const Posts = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 600px;
    width: 90%;

    margin-top: 1rem;

    grid-gap: 2rem;

    @media(max-width: 500px) {
        grid-template-columns: 1fr;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    img {
        width: 380px;
        height: 400px;
        border-radius: 5px;
        object-fit: cover;

       /*  @media(max-width: 500px) {
            width: 150px;
        } */
    }

    .videa-area {
        padding-top: 2rem;
        height: 7rem;
        max-width: 650px;
        width: 90%;
        margin: 0 auto;
    }
`

export const SocialNetworks = styled.div`
    max-width: 300px;
    margin: 1rem auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
        font-size: 2rem;
    }

`

