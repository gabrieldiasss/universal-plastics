import styled from 'styled-components'

export const Container = styled.div`

    flex: 1;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3rem;
        width: 90%;
        margin: 0 auto;
    }

    svg {
        font-size: 2rem;
    }

`

export const Main = styled.main`

    margin-top: 4rem;
    
    .ages{
        width: 90%;
        margin: 0 auto;
    }

    .genders {

        margin-top: 5rem;

        text-align: center;

        img {
            width: 200px;
        }
    }

    .genders-percentage {

        display: flex;
        justify-content: center;

        gap: 2rem;
    }

    .active-times {

        margin-top: 2rem;

        text-align: center;

        .header-active-times {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1rem;
        }

        img {
            width: 300px;
            margin-top: -50px;
        }

    }

`

export const AgePercentage = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    & + div {
        margin-top: 1rem;
    }

    span {
        color: #fff;
        filter: brightness(0.70);
    }

    .progress, .progress-1, .progress-2, .progress-3, .progress-4, .progress-5, .progress-6{
        background-color: var(--blue-300);
        width: 200px;
        height: 25px;
        border-radius: 0.4rem;
        position: relative;
    }

    .progress::after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.98);
        position: absolute;
        left: 15%;
    }

    .progress-2::after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.98);
        position: absolute;
        left: 80%;
    }

    .progress-3::after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.98);
        position: absolute;
        left: 70%;
    }

    .progress-4::after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.98);
        position: absolute;
        left: 60%;
    }
`