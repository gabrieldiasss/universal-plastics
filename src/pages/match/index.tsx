import { BottomMenu } from '../../components/BottomMenu'
import { Container, Buttons } from '../../styles/match'

export default function Match() {

    return (
        <>


            <Container>
                <h1>Match</h1>

                <div className='matchImg' >
                    <img src="https://github.com/gabrieldiasss.png" alt="" />
                    <img src="https://github.com/gabrieldiasss.png" alt="" />
                </div>

                <h2>Você e carla se curtiram</h2>

                <p>Carla também gosta de café, carla também gosta de cachorros carla não gosta de festas</p>

                <Buttons>
                    <button className="select" type="button">Enviar mensagem</button>
                    <button type="button">continuar deslizando</button>
                </Buttons>
            </Container>

            <BottomMenu />
        </>
    )
}