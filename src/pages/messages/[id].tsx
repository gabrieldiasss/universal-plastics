import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { api } from "../../../services/api";
import { Container, Form } from "../../styles/messageId";

interface UserMessage {
    name: string;
    email: string;
}

export default function MessageId() {

    const router = useRouter()
    const { id } = router.query

    const [ user, setUser ] = useState<UserMessage>({} as UserMessage)

    const [message, setMessage] = useState("")

    function handleForm(e: FormEvent) {
        e.preventDefault()

        console.log({ email: user.email, message })
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
                
                <input value={user.email} placeholder="Email" type="email" />
                <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Mensagem" type="text" />

                <button type="submit">Enviar</button>
            </Form>

        </Container>
    )
}