import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineCloudUpload } from "react-icons/hi";
import { AllMusics, Container, ContentMusic, UniqueMusic } from "../../styles/music";

import { FiMoreHorizontal } from 'react-icons/fi'
import { BottomMenu } from "../../components/BottomMenu";
import { Player } from "../../components/Player";

export default function Music() {
    return (
        <Container>
            <header>
                <img src="/images/top-50.jpg" alt="" />

                <div className="icons" >
                    <AiOutlineHeart />

                    <HiOutlineCloudUpload />

                    <FiMoreHorizontal />
                </div>
            </header>

            <AllMusics>
                <UniqueMusic>
                    <img src="/images/envolver.jpg" alt="" />

                    <ContentMusic>
                        <div className="infos" >
                            <strong>Envolver</strong>

                            <span>Anitta</span>
                        </div>

                        <div className="icon">
                            <FiMoreHorizontal />
                        </div>
                    </ContentMusic>
                </UniqueMusic>
            </AllMusics>

            <Player />

            <BottomMenu />
        </Container >
    )
}