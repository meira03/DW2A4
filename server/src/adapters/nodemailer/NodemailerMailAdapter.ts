import { MailAdapter, sendMailData } from "../MailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "49303e7e128341",
        pass: "ab722e9acf3e77"
    }
})


export class NodemailerMailAdapter implements MailAdapter {


    async sendMail({subject, body}: sendMailData) {

        await transport.sendMail({
            from: "Curiosos <sou@curiosors.com>",
            to: 'Gabriel Meira <gabegm03@outlook.com>',
            subject,
            html: body,
        })
    }

}