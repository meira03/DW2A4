import { MailAdapter, sendMailData } from "../MailAdapter";
import nodemailer from "nodemailer";

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "7b351ad1a40dae",
      pass: "1b95b7a716d99a"
    }
  });


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