import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
       --black-900: #0C0B10;
       --black-800: #212429;
       --black-700: #2A2D32;
       --blue-500: #4055F6;
       --blue-300: #42C2ED;
       --gray-50: #FAFAFA;
       --gray-100: #E5E5E5;
       --gray-200: #cacaca;
       --gray-500: #AAA5A5;
       --gray-600: #9F9F9F;
       --gray-700: #717273;
       
       --white: #fff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    // font-size 16px (Desktop)

    html {
        @media (max-width: 1440px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
        @media(max-width: 400px) {
            font-size: 81.125%;
        }
        @media(max-width: 350px) {
            font-size: 75%;
        }
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: #000;
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;

        font-family: Roboto;

        color: var(--white);
    }

     h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
        font-family: Poppins;
    }

    button{
        font-family: Poppins;
        font-weight: 600;

        border: 0;
        outline: 0;

        cursor: pointer;

        color: #fff;
    }

    input {
        font-family: Roboto;
        border: 0;
        outline: 0;
    }

    li {
        text-decoration: none;
        list-style: none;

        color: var(--white);
        font-family: Poppins;
        font-weight: 600;
    }

    .verifiedSvg {
        color: var(--blue-300);
    }
`