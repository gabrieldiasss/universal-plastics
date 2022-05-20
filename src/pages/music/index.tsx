
import { Container, Playlist, NewMusic } from "../../styles/music";

import { BottomMenu } from "../../components/BottomMenu";

export default function Music() {
    return (
        <Container>
            <header>
                <h1>Music Explorer</h1>

                <img src="/images/anitta-dualipe.jpeg" alt="" />
            </header>

            <Playlist>
                <header >
                    <h2>Play List</h2>
                    <span>More</span>
                </header>

                <section>
                    <div>
                        <img src="/images/anitta-tocame.jpg" alt="" />
                    </div>

                    <div>
                        <img src="/images/justin-capa2.jpg" alt="" />
                    </div>

                    <div>
                        <img src="/images/travis.jpg" alt="" />
                    </div>

                    <div>
                        <img src="/images/eminem-capa.jpg" alt="" />
                    </div>

                    <div>
                        <img src="/images/anitta-tocame.jpg" alt="" />
                    </div>

                    <div>
                        <img src="/images/justin-capa2.jpg" alt="" />
                    </div>
                </section>
            </Playlist>

            <Playlist>
                <header >
                    <h2>New Music</h2>
                    <span>More</span>
                </header>

                <section>
                    <div>
                        <img src="/images/justin-capa2.jpg" alt="" />
                    </div>

                    <div>
                        <img src="/images/anitta-tocame.jpg" alt="" />
                    </div>

                    <div>
                        <img src="/images/eminem-capa.jpg" alt="" />
                    </div>

                    <div>
                        <img src="/images/don-toliver.jpg" alt="" />
                    </div>

                    
                    <div>
                        <img src="/images/travis.jpg" alt="" />
                    </div>

                    
                    <div>
                        <img src="/images/justin-capa2.jpg" alt="" />
                    </div>


                
                </section>
            </Playlist>

            <BottomMenu />
        </Container >
    )
}