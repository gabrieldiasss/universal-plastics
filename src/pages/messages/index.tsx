import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlineUnorderedList } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { Container, Content, MessageUser, ContentMessageUser, AllMessagesUser } from "../../styles/messages";
import { MdEmail, MdVerified } from 'react-icons/md'

import { MessagesData } from '../../data/messages'
import { BottomMenu } from "../../components/BottomMenu";

export default function Messages() {

    return (
        <Container>
            <Content>
                <header>
                    <div className="pt1" >
                        <Link href="/" passHref>
                            <AiOutlineArrowLeft />
                        </Link>

                        <span>up.tbt</span>
                    </div>

                    <div className="pt2" >
                        <AiOutlineUnorderedList />

                        <BiEdit />
                    </div>
                </header>

                <AllMessagesUser>
                    {MessagesData.map(direct => (
                        <MessageUser key={direct.id} >
                            <img src={direct.avatar_url} alt="" />

                            <ContentMessageUser>
                                <div className="infos" >
                                    <strong>{direct.name} <MdVerified /></strong>

                                    <span>Sent</span>
                                </div>

                                <div className="icon" >
                                    <MdEmail />
                                </div>
                            </ContentMessageUser>
                        </MessageUser>
                    ))}

                </AllMessagesUser>

            </Content>

            <BottomMenu />
        </Container>

        
    )
}