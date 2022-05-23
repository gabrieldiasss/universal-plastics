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
                         $ 2 000 000 000 
                    </div>

                    <div className='natur' >NATUR</div>

                    <div>
                        <button><IoMdAdd /> Anadir saldo</button>
                        <button><BsArrowUpRight /> Enviar dinero</button>
                    </div>
                </header>

                <ListPayments>
                    <UniquePayment>
                        <img src="/images/foto-8.jpg" alt="" />

                        <div className='dataPayments'>
                            <div className='infos'>
                                <b>Paulo</b>
                                <span>play</span>
                            </div>

                            <div className='payment' >
                                + $ 1 000 000 000
                            </div>
                        </div>
                    </UniquePayment>

                    <UniquePayment>
                        <img src="/images/alvaro.jpg" alt="" />

                        <div className='dataPayments'>
                            <div className='infos'>
                                <b>Alvaro</b>
                                <span>play</span>
                            </div>

                            <div className='payment' >
                                + $ 1 000 000 000
                            </div>
                        </div>

                        
                    </UniquePayment>

                    
                </ListPayments>

                <img src="/images/forex.gif" alt="" />
            </Container>

            <BottomMenu />
        </>

    )
}