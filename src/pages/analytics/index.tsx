import { Container, Main, AgePercentage } from '../../styles/analytics'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { AiOutlineInfoCircle } from 'react-icons/ai'

export default function Analytics() {

    return (
        <Container>
            <header>
                <MdKeyboardArrowLeft />

                <strong>Audience</strong>

                <AiOutlineInfoCircle />
            </header>

            <Main>
                <section className='ages' >

                    <AgePercentage >
                        <span>18-24</span>

                        <div className='progress'></div>

                        <span>19%</span>
                    </AgePercentage>

                    <AgePercentage >
                        <span>25-34</span>

                        <div className='progress-2'></div>

                        <span>75%</span>
                    </AgePercentage>

                    <AgePercentage >
                        <span>35-44</span>

                        <div className='progress-3'></div>

                        <span>70%</span>
                    </AgePercentage>

                    <AgePercentage >
                        <span>45-54</span>

                        <div className='progress-4'></div>

                        <span>60%</span>
                    </AgePercentage>

                    <AgePercentage >
                        <span>55-64</span>

                        <div className='progress-5'></div>

                        <span>89%</span>
                    </AgePercentage>

                    <AgePercentage >
                        <span>65-75</span>

                        <div className='progress-6'></div>

                        <span>90%</span>
                    </AgePercentage>

                </section>

                <section className='genders' >

                    <strong>Genders</strong>

                    <div>
                        <img src="/images/world.gif" alt="" />

                        <div className='genders-percentage' >
                            <div>
                                53%
                            </div>

                            <div>
                                46%
                            </div>
                        </div>
                    </div>


                </section>

               {/*  <section className='active-times' >

                    <strong>Active Times</strong>

                    <div className='header-active-times' >
                        <MdKeyboardArrowLeft />

                        <span>Sundays</span>

                        <MdKeyboardArrowRight />
                    </div>

                    <img src="/images/analytics.gif" alt="" />

                </section> */}
            </Main>
        </Container>
    )
}