import { Container, StorysContainer, UserElements, UserStories } from "./styles";

export function Storys() {

    return (
        <Container>

            <h1>Storys</h1>      

            <StorysContainer>

                <UserStories>

                    <UserElements>

                        <div>
                            <img src="https://github.com/diego3g.png" />
                        </div>

                        <span>@gabriel</span>
                    </UserElements>

                    <UserElements>
                        <div>
                            <img src="https://github.com/diego3g.png" />
                        </div>

                        <span>@diego</span>
                    </UserElements>
                </UserStories>
            </StorysContainer>
        </Container>

    )
}