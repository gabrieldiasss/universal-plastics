import { ButtonFollow, Buttons, Container, InfoUsersFollowersProfile } from "./styles";
import { MdOutlinePersonAdd } from 'react-icons/md'
import { useState } from "react";
import Link from "next/link";

export function Follower() {

    const [follow, setFollowing] = useState(false)

    console.log(follow)

    return (
        <Container>
            <InfoUsersFollowersProfile>

                <img src="/images/foto-4.jpg" alt="" />
                <img src="/images/foto-8.jpg" alt="" />
                <img src="/images/foto-9.jpg" alt="" />

                <p>Seguido(a) por <strong>up e outras 30 M pessoas</strong></p>
            </InfoUsersFollowersProfile>

            <Buttons>
                <ButtonFollow
                    type="button"
                    onClick={() => setFollowing(!follow) }
                    isActive={follow}
                >
                    { follow ? 'Deixar de seguir' : 'seguir' }
                </ButtonFollow>

                <Link href="/messages" passHref>
                    <button className="message" type="button">Mensagem</button>
                </Link>
                
                <button className="person" type="button"><MdOutlinePersonAdd /></button>
            </Buttons>

        </Container>
    )
}