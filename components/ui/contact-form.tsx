"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Send, Loader2, CheckCircle } from "lucide-react"
import { Toast, useToast } from "@/components/ui/toast-notification"
import { sendEmail } from "@/lib/email"

interface ContactData {
  name: string
  email: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactData>({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast, showToast, hideToast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill in all fields', 'error')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Send email directly to kawshanmanusha7@gmail.com
      const success = await sendEmail(formData)
      
      if (success) {
        showToast('Email sent successfully! ✅ Your message has been sent to kawshanmanusha7@gmail.com. Manusha will get back to you soon!', 'success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        showToast('Failed to send email. Please try again.', 'error')
      }
    } catch (error) {
      console.error('Email error:', error)
      showToast('Failed to send email. Please try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Toast Notification */}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={hideToast} 
        />
      )}

      <Card className="glass hover-lift animate-fade-in-up animation-delay-400">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-blue-400 transition-all duration-300" 
                  required
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-md opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
              <div className="relative">
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-blue-400 transition-all duration-300" 
                  required
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-md opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </div>
            <div className="relative">
              <Textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message" 
                rows={5} 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-blue-400 transition-all duration-300" 
                required
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-md opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending Email...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  )
}
