import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { api } from "../../../services/api";
import { Container, Form } from "../../styles/messageId";
import { sendContactMail } from '../../../services/sendEmail'

interface UserMessage {
    name: string;
    email: string;
}

export default function MessageId() {

    const router = useRouter()
    const { id } = router.query

    const [ user, setUser ] = useState<UserMessage>({} as UserMessage)

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    async function handleForm(e: FormEvent) {
        e.preventDefault()

        console.log(email, message)

        await sendContactMail(email, message)
    }

    useEffect(() => {
        api.get(`messages/${id}`)
        .then(response => {
            setUser(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <Container>

            <Link href="/messages" passHref >
                <BsArrowLeftCircle className='arrow' />
            </Link>

            <Form onSubmit={handleForm} >
                <h1>Enviar email para {user.name}</h1>
                
                <input value={email} placeholder="Informe seu email" type="email" onChange={(e) => setEmail(e.target.value)} />

                <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Mensagem" type="text" />

                <button type="submit">Enviar</button>
            </Form>

        </Container>
    )
}