import emailjs from 'emailjs-com'

export interface EmailData {
  name: string
  email: string
  message: string
}

// EmailJS configuration
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    // Check if EmailJS is properly configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.warn('EmailJS not configured. Using demo mode.')
      
      // Simulate email sending for demo
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('📧 Demo email sent to kawshanmanusha7@gmail.com:', {
        from: emailData.name,
        email: emailData.email,
        message: emailData.message,
        timestamp: new Date().toISOString()
      })
      return true
    }

    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY)

    // Prepare email template parameters
    const templateParams = {
      from_name: emailData.name,
      from_email: emailData.email,
      message: emailData.message,
      reply_to: emailData.email,
      to_email: 'kawshanmanusha7@gmail.com',
      to_name: 'Manusha Ranaweera'
    }

    console.log('📧 Sending email via EmailJS...', templateParams)

    // Send email via EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )

    console.log('✅ Email sent successfully:', response)
    return response.status === 200
    
  } catch (error) {
    console.error('❌ Failed to send email:', error)
    return false
  }
}

export const initEmailJS = () => {
  if (EMAILJS_PUBLIC_KEY) {
    emailjs.init(EMAILJS_PUBLIC_KEY)
    console.log('📧 EmailJS initialized successfully')
  } else {
    console.log('📧 EmailJS running in demo mode')
  }
}
