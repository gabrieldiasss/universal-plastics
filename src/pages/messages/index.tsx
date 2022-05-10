import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlineUnorderedList } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { Container, Content, MessageUser, ContentMessageUser, AllMessagesUser } from "../../styles/messages";
import { MdEmail, MdVerified } from 'react-icons/md'

import { BottomMenu } from "../../components/BottomMenu";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

interface UsersMessages {
    id: number;
    avatar_url: string;
    name: string;
    email: string;
}

export default function Messages() {

    const [usersMessages, setUsersMessages] = useState<UsersMessages[]>([])

    useEffect(()=> {
        api.get("messages")
        .then(response => {
            setUsersMessages(response.data)
        })
        .catch(err => {
            console.log(err)
        })

    }, [])

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
                    {usersMessages.map(direct => (
                        <Link href={`/messages/${direct.id}`} key={direct.id} passHref >
                            <MessageUser>
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
                        </Link>

                    ))}

                </AllMessagesUser>

            </Content>

            <BottomMenu />
        </Container>


    )
}