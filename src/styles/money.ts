import styled from "styled-components";

export const Container = styled.main`

    flex: 1;
    background-color: #010217;

    height: 100vh;

    header {
        text-align: center;

        background-color: #050B23;
        
        padding: 4rem 2rem 2rem;

        span {
            font-weight: 600;
            font-size: 1.4rem;
        }

        .balance {
            font-size: 3rem;
        }

        div {
            display: flex;
            gap: 1rem;

            margin-top: 1rem;

            justify-content: center;

            button {

                display: flex;
                align-items: center;
                height: 3rem;
                padding: 0 1rem;
                background-color: #031B63;

                svg {
                    margin-right: 0.6rem;
                    font-size: 1.6rem;
                    color: #1EBF93;
                }
                
            }
        }
    }
`

export const ListPayments = styled.section`
    width: 90%;
    margin: 2rem auto;
`

export const UniquePayment = styled.div`

    display: flex;
    align-items: center;

    img {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        object-fit: cover;
    }

    & + div {
        margin-top: 1rem;
    }

    .dataPayments {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 1;

        margin-left: 1rem;

        .payment {
            font-size: 1.4rem;
        }
    }

    .infos {
        display: flex;
        flex-direction: column;

        b {
            font-size: 1.6rem;
            filter: brightness(0.90);
        }

        span {
            filter: brightness(0.70);
        }
    }
`

