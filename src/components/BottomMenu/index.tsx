import { BottomMenuSection } from './styles'
import { AiOutlineHome, AiOutlineMail, AiFillHeart } from 'react-icons/ai'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { FaMusic } from 'react-icons/fa'
import { MdLiveTv } from 'react-icons/md'

import Link from 'next/link'

export function BottomMenu() {

    return (
        <BottomMenuSection>
            <Link href="/" passHref>
                <AiOutlineHome />
            </Link>

            <Link href="/messages" passHref>
                <AiOutlineMail />
            </Link>

            <Link href="/match" passHref>
                <AiFillHeart />
            </Link>

            <Link href="/profile" passHref >
                <img src="/images/hud_loading.gif" alt="" />
            </Link>

            <Link href="/money" passHref>
                <RiMoneyDollarCircleLine />
            </Link>

            <Link href="/music" passHref >
                <FaMusic />
            </Link>

            <Link href="/video" passHref>
                <MdLiveTv />
            </Link>
        </BottomMenuSection>
    )
}