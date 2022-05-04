import Link from "next/link";
import { BsArrowLeftCircle } from "react-icons/bs";
import { RiChat1Line } from "react-icons/ri";
import { SiOverleaf } from "react-icons/si";
import { Container, PostContainer, Content } from "../../styles/post";

export default function Post() {

    return (
        <Container>
            <Link href="/" passHref >
                <BsArrowLeftCircle className='arrow' />
            </Link>
            
            <Content>
                <PostContainer>
                    <img src="/images/foto-1.jpg" alt="" />

                    <footer>
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
                </PostContainer>
            </Content>
        </Container>
    )
}