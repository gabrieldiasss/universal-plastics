import styled from "styled-components";

export const Container = styled.main`

    flex: 1;

    height: 100vh;

    margin: 1rem;
    
    header {

        h1 {
            margin-left: 1rem;
            margin-bottom: 1rem;
        }

        img {
            width: 100%;
            height: 300px;
            border-radius: 50px;
            object-fit: cover;
            display: flex;
            justify-content: center;
        }
    }

`

export const Playlist = styled.div`

    margin-top: 3rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            margin-right: 1rem;
        }
    }

    section {

        margin-top: 1rem;

        max-width: 375px;
        display: flex;
        overflow: scroll;

        gap: 1rem;

        img {
            width: 100px;
            height: 100px;
            border-radius: 5px;

            
        }

        & + img {
                margin-right: 1rem;
            }

    }

`

export const NewMusic = styled.div`

`