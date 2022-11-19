import { MailAdapter, SendMailData } from "../mail-adapter";
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
    async sendMail({ subject, body}: SendMailData) {

        await transport.sendMail({
            from: 'Reclames <reclamando@muito.com>',
            to: "Meira's corp <gabegm03@outlook.com",
            subject,
            html: body
        });

    };
}