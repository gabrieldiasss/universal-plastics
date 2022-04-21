import { Card, Container, Content } from "./styles";

export function Suggestions() {

    return (
        <Container>
            <h1>Suggestions for you</h1>
            <Content>
                <Card>
                    <div className="banner" >
                        <img src="https://github.com/gabrieldiasss.png" alt="" />

                        <img src="https://github.com/gabrieldiasss.png" alt="" />
                    </div>

                    <div className="profile" >
                        <img src="https://github.com/diego3g.png" alt="" />
                    </div>
                </Card>

                <Card>
                    <div className="banner" >
                        <img src="https://github.com/gabrieldiasss.png" alt="" />

                        <img src="https://github.com/gabrieldiasss.png" alt="" />
                    </div>

                    <div className="profile" >
                        <img src="https://github.com/diego3g.png" alt="" />
                    </div>
                </Card>

                <Card>
                    <div className="banner" >
                        <img src="https://github.com/gabrieldiasss.png" alt="" />

                        <img src="https://github.com/gabrieldiasss.png" alt="" />
                    </div>

                    <div className="profile" >
                        <img src="https://github.com/diego3g.png" alt="" />
                    </div>
                </Card>
            </Content>
        </Container>
    )
}