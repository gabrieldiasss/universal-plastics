import nodemailer from 'nodemailer'
import { NextApiRequest, NextApiResponse } from "next";
import sendgridTransport from 'nodemailer-sendgrid-transport'

const transporter = nodemailer.createTransport(
    sendgridTransport({
        auth: {
            api_key: process.env.SENDGRID_API_KEY
        }
    })
)

// eslint-disable-next-line import/no-anonymous-default-export
export default async(req: NextApiRequest, res: NextApiResponse) => {

    try {

        const emailAdress = process.env.MAILADRESS 

        const { email, content } = req.body

        const message = {
            from: emailAdress,
            to: emailAdress,
            subject: `Nova mensagem de contato - ${email}`,
            html: `<p><b>Email:</b>${email}<br /><b>Mensagem:</b> ${content}</p>`,
            replyTo: emailAdress
        }

        transporter.sendMail(message, (err, info) => {
            if(err) {
                console.log(err)
            } else {
                console.log('Message sent', info)
            }
        })

        return res.send('')
    } catch(err) {
        return res.json({
            error: true,
            message: err.message
        })
    }
}