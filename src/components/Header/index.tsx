import { AmountInfoUser, Content, HeaderContainer } from './styles'
import { RiAddBoxFill, RiSearchLine } from 'react-icons/ri'
import { MdVerified } from 'react-icons/md'
import Link from 'next/link'
import { Follower } from '../Follower'
import { AiFillStar } from 'react-icons/ai'

export default function Header() {

    return (
        <HeaderContainer>
            <Content>

                <img className='logo' src="/images/logo.png" alt="" />

                <div className='input' >
                    <RiSearchLine />
                    <input placeholder='Search' type="text" />
                </div>

                <div className='infos' >
                    <div className='button' >
                        <button type="button"> < RiAddBoxFill /> Add Post</button>
                    </div>

                        <div className='bio' >
                            <b>Paulo 🎤</b>
                            <span>Artista</span>
                            <p>🌈</p>
                            <span>My Best Version</span>
                        </div>

                        <div className="user-elements" >
                            <strong>p.leao <MdVerified /></strong>
                            <Link href="/profile" passHref><img className='user' src="/images/paulo2.jpg" alt="" /></Link>
                        </div>

                        <AmountInfoUser>
                            <div>
                                <b>30 M</b>
                                <span>seguidores</span>
                            </div>

                            {/* <div>
                                <b>568</b>
                                <span>Publicações</span>
                            </div> */}

                            <div>
                                <b>2.543</b>
                                <span>Seguindo</span>
                            </div>

                            {/* <div>
                                <AiFillStar />
                            </div> */}
                        </AmountInfoUser>
                    </div>
            </Content>

            <Follower />
        </HeaderContainer>
    )
}