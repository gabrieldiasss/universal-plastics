import axios from 'axios'

export const sendContactMail = async(email: string, content: string) => {

    const data = {
        email,
        content
    }

    try {
        return await axios.post("/api/contact", data)
    } catch(error) {
        return error
    }

}