import { BottomMenuSection } from './styles'
import { AiOutlineHome, AiOutlineMail, AiFillHeart } from 'react-icons/ai'
import { RiGalleryLine } from 'react-icons/ri'
import { FaMusic } from 'react-icons/fa'
import { MdLiveTv } from 'react-icons/md'

import Link from 'next/link'

export function BottomMenu() {

    return (
        <BottomMenuSection>
            <Link href="/" passHref>
                <AiOutlineHome />
            </Link>

            <Link href="/messages" >
                <AiOutlineMail />
            </Link>

            <AiFillHeart />

            <Link href="/profile" passHref >
                <img src="/images/logo.png" alt="" />
            </Link>
            <RiGalleryLine />

            <FaMusic />

            <Link href="/video" passHref>
                <MdLiveTv />
            </Link>
        </BottomMenuSection>
    )
}