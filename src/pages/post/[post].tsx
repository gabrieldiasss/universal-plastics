import Link from "next/link";
import { useRouter } from "next/router";
import { BsArrowLeftCircle } from "react-icons/bs";
import { RiChat1Line } from "react-icons/ri";
import { SiOverleaf } from "react-icons/si";
import { Container, PostContainer, Content } from "../../styles/post";

import { PhotosData } from '../../data/photos'

export default function Post() {

    const router = useRouter()

    const { post } = router.query

    return (
        <Container>
            <Link href="/" passHref >
                <BsArrowLeftCircle className='arrow' />
            </Link>

            <Content>
                <PostContainer>
                    <img src={`/images/foto-${post}.jpg`} alt="" />

                    <footer>
                        <div className="engagement" >
                            <div className="icon" >
                                <SiOverleaf />
                                <span>{post}K</span>
                            </div>

                            <Link href="/" passHref>
                                <img src="/images/logo.png" alt="" />
                            </Link>


                            <div className="icon" >
                                <RiChat1Line />
                                <span>{post}00</span>
                            </div>
                        </div>
                    </footer>
                </PostContainer>
            </Content>
        </Container>
    )
}