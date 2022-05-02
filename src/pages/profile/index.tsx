
import { MdVerified } from 'react-icons/md'
import { BottomMenu } from '../../components/BottomMenu'
import { Container, Content, User, UserContent, Numerics, Posts, SocialNetworks } from '../../styles/styles'
import { BsFacebook, BsArrowLeftCircle } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import Link from 'next/link'



export default function Profile() {

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
                    <img src="/images/foto-4.jpg" alt="" />
                    <img src="/images/foto-7.jpg" alt="" />

                    <img src="/images/foto-9.jpg" alt="" />
                </Posts>

                <BottomMenu />
            </Content>
        </Container>
    )
}