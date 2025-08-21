"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Send, Loader2, Copy, CheckCircle } from "lucide-react"
import { Toast, useToast } from "@/components/ui/toast-notification"

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
  const [showEmailInfo, setShowEmailInfo] = useState(false)
  const { toast, showToast, hideToast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      showToast('Copied to clipboard!', 'success')
    } catch (err) {
      showToast('Failed to copy', 'error')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill in all fields', 'error')
      return
    }

    setIsSubmitting(true)
    
    // Simulate email sending delay
    setTimeout(() => {
      setIsSubmitting(false)
      setShowEmailInfo(true)
      showToast('Message prepared! Please send manually to kawshanmanusha7@gmail.com', 'success')
    }, 1500)
  }

  const emailContent = `Subject: Portfolio Contact from ${formData.name}

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
Sent from Manusha's Portfolio Website`

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
          {!showEmailInfo ? (
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
                    Preparing Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="space-y-6 text-center">
              <div className="flex justify-center">
                <CheckCircle className="w-16 h-16 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Message Ready!</h3>
              <p className="text-gray-300">
                Your message has been prepared. Please copy the content below and send it to:
              </p>
              
              <div className="bg-blue-600/20 p-4 rounded-lg border border-blue-500/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-blue-300">Email Address:</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard('kawshanmanusha7@gmail.com')}
                    className="text-xs"
                  >
                    <Copy className="w-3 h-3 mr-1" />
                    Copy Email
                  </Button>
                </div>
                <p className="text-white font-mono">kawshanmanusha7@gmail.com</p>
              </div>

              <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-300">Message Content:</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(emailContent)}
                    className="text-xs"
                  >
                    <Copy className="w-3 h-3 mr-1" />
                    Copy Message
                  </Button>
                </div>
                <pre className="text-sm text-gray-300 whitespace-pre-wrap text-left">
                  {emailContent}
                </pre>
              </div>

              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => {
                    setShowEmailInfo(false)
                    setFormData({ name: '', email: '', message: '' })
                  }}
                  variant="outline"
                  className="bg-transparent border-gray-500 text-gray-300 hover:bg-gray-600"
                >
                  Send Another Message
                </Button>
                <Button
                  onClick={() => window.open(`mailto:kawshanmanusha7@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(emailContent)}`)}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                >
                  Open Email Client
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  )
}
