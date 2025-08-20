import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })
    
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pappula.asv@gmail.com',
      href: 'mailto:pappula.asv@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '9259685111',
      href: 'tel:9259685111'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">Get In Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What&apos;s this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Your message..."
                    rows={6}
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Here are the best ways to reach me.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {item.label}
                        </p>
                        {item.href !== '#' ? (
                          <a
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Let&apos;s Connect</CardTitle>
                <CardDescription>
                  I&apos;m always interested in hearing about new opportunities and projects.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Whether you&apos;re looking to hire a developer, collaborate on a project, 
                  or just want to say hello, I&apos;d love to hear from you. I typically 
                  respond within 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactPage