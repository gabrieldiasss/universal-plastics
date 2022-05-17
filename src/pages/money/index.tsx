import { IoMdAdd } from 'react-icons/io'
import { BsArrowUpRight } from 'react-icons/bs'
import { Container, ListPayments, UniquePayment } from '../../styles/money'
import { BottomMenu } from '../../components/BottomMenu'

export default function Money() {

    return (
        <>
            <Container>
                <header>
                    <span>TU SALDO</span>

                    <div className='balance' >
                        $1000 UPC
                    </div>

                    <div>
                        <button><IoMdAdd /> Anadir saldo</button>
                        <button><BsArrowUpRight /> Enviar dinero</button>
                    </div>
                </header>

                <ListPayments>
                    <UniquePayment>
                        <img src="https://github.com/gabrieldiasss.png" alt="" />

                        <div className='dataPayments'>
                            <div className='infos'>
                                <b>Alvaro</b>
                                <span>play</span>
                            </div>

                            <div className='payment' >
                                - $ 4,90
                            </div>
                        </div>
                    </UniquePayment>

                    <UniquePayment>
                        <img src="https://github.com/gabrieldiasss.png" alt="" />

                        <div className='dataPayments'>
                            <div className='infos'>
                                <b>Alvaro</b>
                                <span>play</span>
                            </div>

                            <div className='payment' >
                                - $ 4,90
                            </div>
                        </div>
                    </UniquePayment>
                </ListPayments>
            </Container>

            <BottomMenu />
        </>

    )
}