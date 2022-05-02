import Link from "next/link";
import { BsArrowLeftCircle, BsFacebook } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdVerified } from "react-icons/md";
import ReactPlayer from "react-player";
import { BottomMenu } from "../../components/BottomMenu";
import { Container, Content, Numerics, Posts, SocialNetworks, User, UserContent } from "../../styles/styles";

export default function Video() {
    return (
        <Container>
            <Link href="/" passHref >
                <BsArrowLeftCircle className='arrow' />
            </Link>

            <Content>
                <User>
                    <UserContent>
                        <img src="/images/foto-1.jpg" alt="" />

                        <div className='infos-user' >

                            <strong>Paulo Ricardo <MdVerified className='verifiedSvg' /></strong>

                            <b>
                                BRAZILIAN<br />
                                31 YEARS <br />
                                CEO UP
                            </b>

                            <Numerics>
                                <div>
                                    <b>64</b>
                                    <p>Posts</p>
                                </div>

                                <div>
                                    <b>30 M</b>
                                    <p>Followers</p>
                                </div>

                                <div>
                                    <b>2450</b>
                                    <p>Following</p>
                                </div>
                            </Numerics>

                            <SocialNetworks>
                                <Link href="https://www.instagram.com/up.tbt/" passHref >
                                    <GrInstagram />
                                </Link>

                                <Link href="https://www.tiktok.com/@leao777777" passHref>
                                    <FaTiktok />
                                </Link>

                                <Link href="https://www.facebook.com/people/Paulo-Ricardo-De-Leão/100063659953718/" passHref >
                                    <BsFacebook />
                                </Link>


                            </SocialNetworks>
                        </div>

                    </UserContent>
                </User>

                <Posts>
                    <div className='video-area' >
                        <ReactPlayer width="100%" height="100%" url="https://youtu.be/vtuL4DhdFko" />
                    </div>

                    <div className='video-area' >
                        <ReactPlayer width="100%" height="100%" url="https://youtu.be/pjjwzWvWnaw" />
                    </div>

                    <div className='video-area' >
                        <ReactPlayer width="100%" height="100%" url="https://youtu.be/zjr8QTqvSGA" />
                    </div>
                </Posts>

                <BottomMenu />
            </Content>
        </Container>
    )
}