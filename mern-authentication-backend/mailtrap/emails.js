import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"
import { mailtrapClient, sender } from "./mailtrap.config.js"

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }]
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"
        })
        console.log("Email sent successfully", response)
    } catch (error) {
        console.error('Error sending email:', error)
        throw new Error(`Error sending verification email:${error}`)
    }
}

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }]
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "cd63dc69-3199-4030-9610-114f20dfd276",
            template_variables: {
                "name": name,
                "company_info_name": "Auth Company"
            }
        })
        console.log("Welcome email sent successfully", response)
    } catch (error) {
        console.error('Error sending email:', error)
        throw new Error(`Error sending verification email:${error}`)
    }
}