import { Container, Content, Post } from "./styles";
import { RiHeartLine, RiChat1Line } from 'react-icons/ri'

export function Feed() {

    return (
        <Container>
            <h1>Feed</h1>
            <Content>
                <Post>
                    <img src="/images/foto-1.jpg" alt="" />

                    <footer>
                        <div>
                            <img src="/images/foto-4.jpg" alt="" />
                        </div>

                        <div className="engagement" >
                            <div className="icon" >
                                <RiHeartLine />
                                <span>54k</span>
                            </div>
                           
                            <div className="icon" >
                                <RiChat1Line />
                                <span>298</span>
                            </div>
                           
                        </div>
                        
                    </footer>
                </Post>

                <Post>
                    <img src="/images/foto-2.jpg" alt="" />

                    <footer>
                        <div>
                            <img src="/images/foto-4.jpg" alt="" />
                        </div>

                        <div className="engagement" >
                            <div className="icon" >
                                <RiHeartLine />
                                <span>54k</span>
                            </div>
                           
                            <div className="icon" >
                                <RiChat1Line />
                                <span>298</span>
                            </div>
                           
                        </div>
                        
                    </footer>
                </Post>

                <Post>
                    <img src="/images/foto-3.jpg" alt="" />

                    <footer>
                        <div>
                            <img src="/images/foto-4.jpg" alt="" />
                        </div>

                        <div className="engagement" >
                            <div className="icon" >
                                <RiHeartLine />
                                <span>54k</span>
                            </div>
                           
                            <div className="icon" >
                                <RiChat1Line />
                                <span>298</span>
                            </div>
                           
                        </div>
                        
                    </footer>
                </Post>
            </Content>
        </Container>
    )
}