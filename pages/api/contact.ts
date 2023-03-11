import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'POST') {
    return res.status(404).send({ status: 'Error', error: 'Invalid request' });
  }

  const { name, subject, email, message } = req.body;

  if (
    !name.trim().length ||
    !subject.trim().length ||
    !email.trim().length ||
    !message.trim().length
  ) {
    return res.status(403).send({ status: 'Error', error: 'Bad request' });
  }

  const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME!,
      pass: process.env.EMAIL_PASSWORD!,
    },
  });
  try {
    const mailOption = {
      from: process.env.EMAIL_USERNAME!,
      to: process.env.EMAIL_USERNAME!,
      subject,
      text: `
        ${email}
        ${name} wrote:
        ${message}
      `,
      html: `
        <p>${email.replaceAll(/(?:\r\n|\r|\n)/g, '<br>')}</p>
        <p>${name.replaceAll(/(?:\r\n|\r|\n)/g, '<br>')}</p>
        <p>${subject.replaceAll(/(?:\r\n|\r|\n)/g, '<br>')}</p>
        <p>${message.replaceAll(/(?:\r\n|\r|\n)/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOption);
    return res.status(200).send({ message: 'Message successfully sent' });
  } catch (err) {
    return res.status(500).send({ error: `${err}` });
  }
}
