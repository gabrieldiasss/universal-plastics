import { Container, Content, Post } from "./styles";
import { RiHeartLine, RiChat1Line } from 'react-icons/ri'
import { SiOverleaf } from 'react-icons/si'

export function Feed() {

    return (
        <Container>
            <h1>Feed</h1>
            <Content>
                <Post>
                    <img src="/images/foto-1.jpg" alt="" />

                    <footer>
                       {/*  <div>
                            <img src="/images/foto-4.jpg" alt="" />
                        </div> */}

                        <div className="engagement" >
                            <div className="icon" >
                                <SiOverleaf />
                                <span>10k</span>
                            </div>
                           
                            <div className="icon" >
                                <RiChat1Line />
                                <span>228</span>
                            </div>
                           
                        </div>
                        
                    </footer>
                </Post>

                <Post>
                    <img src="/images/foto-2.jpg" alt="" />

                    <footer>
                      {/*   <div>
                            <img src="/images/foto-4.jpg" alt="" />
                        </div> */}

                        <div className="engagement" >
                            <div className="icon" >
                                <SiOverleaf />
                                <span>59k</span>
                            </div>
                           
                            <div className="icon" >
                                <RiChat1Line />
                                <span>268</span>
                            </div>
                           
                        </div>
                        
                    </footer>
                </Post>

                <Post>
                    <img src="/images/foto-3.jpg" alt="" />

                    <footer>
                       {/*  <div>
                            <img src="/images/foto-4.jpg" alt="" />
                        </div> */}

                        <div className="engagement" >
                            <div className="icon" >
                                <SiOverleaf />
                                <span>70k</span>
                            </div>
                           
                            <div className="icon" >
                                <RiChat1Line />
                                <span>450</span>
                            </div>
                           
                        </div>
                        
                    </footer>
                </Post>

                <Post>
                    <img src="/images/foto-7.jpg" alt="" />

                    <footer>
                       {/*  <div>
                            <img src="/images/foto-4.jpg" alt="" />
                        </div> */}

                        <div className="engagement" >
                            <div className="icon" >
                                <SiOverleaf />
                                <span>24k</span>
                            </div>
                           
                            <div className="icon" >
                                <RiChat1Line />
                                <span>453</span>
                            </div>
                           
                        </div>
                        
                    </footer>
                </Post>

                <Post>
                    <img src="/images/foto-8.jpg" alt="" />

                    <footer>
                      {/*   <div>
                            <img src="/images/foto-4.jpg" alt="" />
                        </div> */}

                        <div className="engagement" >
                            <div className="icon" >
                                <SiOverleaf />
                                <span>30k</span>
                            </div>
                           
                            <div className="icon" >
                                <RiChat1Line />
                                <span>298</span>
                            </div>
                           
                        </div>
                        
                    </footer>
                </Post>

                <Post>
                    <img src="/images/foto-9.jpg" alt="" />

                    <footer>
                       {/*  <div>
                            <img src="/images/foto-4.jpg" alt="" />
                        </div> */}

                        <div className="engagement" >
                            <div className="icon" >
                                <SiOverleaf />
                                <span>38k</span>
                            </div>
                           
                            <div className="icon" >
                                <RiChat1Line />
                                <span>238</span>
                            </div>
                           
                        </div>
                        
                    </footer>
                </Post>

                <Post>
                    <img src="/images/foto-10.jpg" alt="" />

                    <footer>
                       {/*  <div>
                            <img src="/images/foto-4.jpg" alt="" />
                        </div> */}

                        <div className="engagement" >
                            <div className="icon" >
                                <SiOverleaf />
                                <span>81k</span>
                            </div>
                           
                            <div className="icon" >
                                <RiChat1Line />
                                <span>638</span>
                            </div>
                           
                        </div>
                        
                    </footer>
                </Post>

                <Post>
                    <img src="/images/foto-11.jpg" alt="" />

                    <footer>
                      {/*   <div>
                            <img src="/images/foto-4.jpg" alt="" />
                        </div> */}

                        <div className="engagement" >
                            <div className="icon" >
                                <SiOverleaf />
                                <span>14k</span>
                            </div>
                           
                            <div className="icon" >
                                <RiChat1Line />
                                <span>238</span>
                            </div>
                           
                        </div>
                        
                    </footer>
                </Post>

                <Post>
                    <img src="/images/foto-12.jpg" alt="" />

                    <footer>
                       {/*  <div>
                            <img src="/images/foto-4.jpg" alt="" />
                        </div> */}

                        <div className="engagement" >
                            <div className="icon" >
                                <SiOverleaf />
                                <span>64k</span>
                            </div>
                           
                            <div className="icon" >
                                <RiChat1Line />
                                <span>598</span>
                            </div>
                           
                        </div>
                        
                    </footer>
                </Post>

            </Content>
        </Container>
    )
}