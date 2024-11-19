import nodemailer from  'nodemailer'
import dotenv  from 'dotenv'
dotenv.config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

export const sendPasswordResetEmail = async (email, resetUrl) => {
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Password Reset',
        html:
        `
        <h1>Password Reset</h1>
        <p>Click the link to reset your password</p>
        <a href="${resetUrl}">Reset Password</a>
        `
    })
}

    