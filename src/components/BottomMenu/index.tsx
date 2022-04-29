import { BottomMenuSection } from './styles'
import { AiOutlineHome, AiOutlineMail, AiFillHeart} from 'react-icons/ai'
import { RiGalleryLine} from 'react-icons/ri'
import { FaMusic} from 'react-icons/fa'
import { MdLiveTv } from 'react-icons/md'

import Link from 'next/link'

export function BottomMenu() {

    return (
        <BottomMenuSection>
            <Link href="/" passHref>
                <AiOutlineHome />
            </Link>
        
            <AiOutlineMail />
        
            <AiFillHeart  />

            <img src="/images/logo.png" alt="" />

            <RiGalleryLine />

            <FaMusic />
            
            <MdLiveTv />
           
        </BottomMenuSection>
    )
}