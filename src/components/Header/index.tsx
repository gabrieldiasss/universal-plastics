import { Content, HeaderContainer } from './styles'
import { RiAddBoxFill, RiSearchLine } from 'react-icons/ri'
import Link from 'next/link'

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
                    <div>
                        <button type="button"> < RiAddBoxFill/> Add Post</button>
                    </div>

                    <Link href="/profile" passHref ><img className='user' src="https://github.com/gabrieldiasss.png" alt="" /></Link>
                </div>
            </Content>
        </HeaderContainer>
    )
}