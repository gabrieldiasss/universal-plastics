
import { BottomMenu } from '../../components/BottomMenu'
import Header from '../../components/Header'
import { Container, Content, User, UserContent, Numerics, Posts } from '../../styles/styles'

export default function Profile() {

    return (
        <Container>
            <Content>
                <User>
                    <UserContent>
                        <img src="/images/foto-1.jpg" alt="" />

                        <div className='infos-user' >
                            <div className='header' >
                                <div>
                                    <strong>p.leao</strong>
                                </div>

                                <button type="button">Seguir</button>
                            </div>

                            <strong>Paulo Ricardo</strong>

                            <p>Paulo Ricardo, empresario, casado, investidor, 31 anos.</p>

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
                    <img src="/images/foto-7.jpg" alt="" />

                    <img src="/images/foto-9.jpg" alt="" />
                </Posts>

                <BottomMenu />
            </Content>
        </Container>
    )
}