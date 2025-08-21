import emailjs from 'emailjs-com'

// EmailJS configuration
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

export interface EmailData {
  name: string
  email: string
  message: string
}

export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    // Check if EmailJS is configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.warn('EmailJS not configured. Please set up your environment variables.')
      // For development purposes, simulate success
      console.log('Email would be sent:', emailData)
      return true
    }

    const templateParams = {
      from_name: emailData.name,
      from_email: emailData.email,
      to_email: 'kawshanmanusha7@gmail.com',
      message: emailData.message,
      reply_to: emailData.email,
    }

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )

    console.log('Email sent successfully:', response)
    return response.status === 200
  } catch (error) {
    console.error('Failed to send email:', error)
    return false
  }
}

// Initialize EmailJS
export const initEmailJS = () => {
  if (EMAILJS_PUBLIC_KEY) {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  } else {
    console.warn('EmailJS public key not found. Email functionality will be simulated.')
  }
}
