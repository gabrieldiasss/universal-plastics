import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlinePause } from 'react-icons/ai'
import { ContentPlayer, PlayerContainer } from "./styles";
import { useState } from "react";

export function Player() {

    const [click, setClick] = useState(false)

    function handlePlay() {
        setClick(!click)
    }

    return (
        <PlayerContainer>
            <img src="/images/envolver.jpg" alt="" />

            <ContentPlayer>
                <div className="infos" >
                    <strong>Envolver</strong>

                    <span>Anitta</span>
                </div>

                <div className="icon">
                    {click ? (
                        <BsFillPlayFill onClick={handlePlay} />
                    ): (
                        <AiOutlinePause onClick={handlePlay} />
                    )}
                
                </div>
            </ContentPlayer>
        </PlayerContainer>
    )
}