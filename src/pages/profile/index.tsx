import Header from '../../components/Header'
import { Container, Content, User, UserContent, Numerics, Posts } from './styles'

export default function Profile() {

    return (
        <Container>
            <Header />
            <Content>
                <User>
                    <UserContent>
                        <img src="https://github.com/gabrieldiasss.png" alt="" />

                        <div className='infos-user' >
                            <div className='header' >
                                <div>
                                    <strong>gbrldiass</strong>
                                </div>

                                <button type="button" >Seguir</button>
                            </div>

                            <strong>Gabriel Dias</strong>

                            <p>Oi meu nome é Gabriel Dias, eu tenho 17 anos.
                                Faço uns programas e comecei a programar em maio de 2020.</p>

                            <Numerics>
                                <div>
                                    <span>170</span>
                                    <p>posts</p>
                                </div>

                                <div>
                                    <span>170</span>
                                    <p>Followers</p>
                                </div>

                                <div>
                                    <span>170</span>
                                    <p>Following</p>
                                </div>
                            </Numerics>
                        </div>
                    </UserContent>

                </User>

                <Posts>
                    <img src="/images/foto-4.jpg" alt="" />
                    <img src="/images/foto-4.jpg" alt="" />

                    <img src="/images/foto-4.jpg" alt="" />
                </Posts>
            </Content>
        </Container>
    )
}