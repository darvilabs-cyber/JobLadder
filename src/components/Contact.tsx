import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+44',
    phone: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+44',
        phone: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      detail: '+44 7412 675477',
      link: 'tel:+447412675477',
    },
    {
      icon: MapPin,
      title: 'Location',
      detail: '2nd Floor Block P, ISLAND BUSINESS CENTER Room 225A & 225B, London SE18 6PF',
      link: 'https://www.google.com/maps/search/?api=1&query=2nd+Floor+Block+P+ISLAND+BUSINESS+CENTER+Room+225A+225B+London+SE18+6PF',
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'ganesh@jobladder.com',
      link: 'mailto:support@jobladder.com',
    },
  ];

  return (
    <div className="py-32 lg:py-40 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <h2 className="mb-4" style={{ fontSize: 'clamp(40px, 5vw, 55px)', fontWeight: '700', lineHeight: '1.1', letterSpacing: '-0.03em', color: '#1B2D4B' }}>
            Let's start a conversation
          </h2>
          <p className="text-gray-600" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Ready to transform your team or career? Book a free consultation and discover how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
           
            
            <div className="bg-white rounded-2xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                 
                  
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2" style={{ fontWeight: '500', fontSize: '14px' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#0066CC] focus:outline-none focus:bg-white transition-all"
                      placeholder="Enter your email"
                      style={{ fontSize: '15px' }}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2" style={{ fontWeight: '500', fontSize: '14px' }}>
                      Contact Details
                    </label>
                    <div className="flex gap-2">
                      <select
                        id="countryCode"
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#0066CC] focus:outline-none focus:bg-white transition-all"
                        style={{ fontSize: '15px' }}
                      >
                        <option value="+44">+44</option>
                        <option value="+1">+1</option>
                        <option value="+91">+91</option>
                        <option value="+971">+971</option>
                      </select>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#0066CC] focus:outline-none focus:bg-white transition-all"
                        placeholder="Enter your contact number"
                        style={{ fontSize: '15px' }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2" style={{ fontWeight: '500', fontSize: '14px' }}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#0066CC] focus:outline-none focus:bg-white transition-all resize-none"
                      placeholder="Enter your message"
                      style={{ fontSize: '15px' }}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#0066CC] text-white px-6 py-4 rounded-xl transition-all hover:bg-[#0052a3] flex items-center justify-center gap-2"
                    style={{ fontWeight: '600', fontSize: '16px' }}
                  >
                    <span>Send a Message</span>
                    <Send size={18} />
                  </button>
                </form>
              ) : (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-[#0066CC]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-[#0066CC]" size={40} />
                  </div>
                  <h3 className="text-black mb-4" style={{ fontSize: '28px', fontWeight: '700' }}>
                    Message Sent!
                  </h3>
                  <p className="text-gray-600" style={{ fontSize: '17px' }}>
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* Contact Info Panel */}
          <div>
            <div className="rounded-3xl p-8 text-white min-h-full" style={{ backgroundColor: '#1F68B2' }}>
              <h3 className="text-white mb-8" style={{ fontSize: '24px', fontWeight: '700', letterSpacing: '-0.02em' }}>
                Hi! We are always here to help you.
              </h3>
              
              <div className="space-y-4 mb-8">
                {contactMethods.map((method, idx) => (
                  <a
                    key={idx}
                    href={method.link}
                    className="block bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/15 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-all">
                        <method.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="text-white mb-1" style={{ fontWeight: '600', fontSize: '16px' }}>
                          {method.title}
                        </h4>
                        <p className="text-white/80" style={{ fontSize: '14px' }}>
                          {method.detail}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Business Hours */}
              <div>
                <h4 className="text-white mb-4" style={{ fontWeight: '700', fontSize: '18px' }}>
                  Business Hours
                </h4>
                <div className="space-y-3">
                  {[
                    { day: 'Mon - Fri', time: '8:00 AM - 5:00 PM' },
                    { day: 'Saturday', time: 'Closed' },
                    { day: 'Sunday', time: 'Closed' },
                  ].map((schedule, idx) => (
                    <div key={idx} className="flex justify-between items-center" style={{ fontSize: '15px' }}>
                      <span className="text-white/80">{schedule.day}</span>
                      <span className="text-white" style={{ fontWeight: '600' }}>{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
