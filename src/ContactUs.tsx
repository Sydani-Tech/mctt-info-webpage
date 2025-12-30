import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
    subject: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can add actual form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gradient-start/10 to-gradient-end/10 py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <MessageSquare className="h-16 w-16 text-gradient-start" />
            </div>
            <h1 className="lg:text-5xl text-4xl font-bold text-gray-800 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch with our team to learn more about CoverageTrackr and how we can help transform your field operations.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Whether you're interested in learning more about our platform, need technical support, or want to discuss a partnership, we're here to help.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                      <p className="text-gray-600">sydani.technologies@gmail.com</p>
                      <p className="text-sm text-gray-500 mt-1">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                      <p className="text-gray-600">Available upon request</p>
                      <p className="text-sm text-gray-500 mt-1">Schedule a call through our contact form</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Visit Us</h3>
                      <p className="text-gray-600">Nigeria & Global Remote</p>
                      <p className="text-sm text-gray-500 mt-1">Serving organizations worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9AM - 6PM WAT</p>
                      <p className="text-sm text-gray-500 mt-1">Emergency support available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-gradient-to-r from-gradient-start/10 to-gradient-end/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose CoverageTrackr?</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-start rounded-full mr-3"></div>
                    <span className="text-gray-700">Trusted by governments and NGOs worldwide</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-start rounded-full mr-3"></div>
                    <span className="text-gray-700">Real-time data collection and visualization</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-start rounded-full mr-3"></div>
                    <span className="text-gray-700">Offline-capable mobile applications</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-start rounded-full mr-3"></div>
                    <span className="text-gray-700">Expert support and training</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1 border-gray-300 focus:border-gradient-start focus:ring-gradient-start"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-1 border-gray-300 focus:border-gradient-start focus:ring-gradient-start"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 border-gray-300 focus:border-gradient-start focus:ring-gradient-start"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 border-gray-300 focus:border-gradient-start focus:ring-gradient-start"
                    placeholder="+234 123 456 7890"
                  />
                </div>

                <div>
                  <Label htmlFor="organization" className="text-gray-700 font-medium">Organization *</Label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    required
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="mt-1 border-gray-300 focus:border-gradient-start focus:ring-gradient-start"
                    placeholder="Your Organization Name"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-gray-700 font-medium">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-1 border-gray-300 focus:border-gradient-start focus:ring-gradient-start"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 border-gray-300 focus:border-gradient-start focus:ring-gradient-start resize-none"
                    placeholder="Please tell us more about your needs and how we can help..."
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="h-4 w-4 text-gradient-start focus:ring-gradient-start border-gray-300 rounded"
                  />
                  <Label htmlFor="consent" className="text-sm text-gray-600">
                    I agree to the processing of my personal data according to the{" "}
                    <a href="/privacy-policy" className="text-gradient-start hover:underline">
                      Privacy Policy
                    </a>
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gradient-start to-gradient-end hover:from-gradient-start/90 hover:to-gradient-end/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> For demo requests and product trials, please use our dedicated{" "}
                  <strong>"Request Demo"</strong> button available on our homepage.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Quick answers to common questions</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How quickly can we get started?</h3>
                <p className="text-gray-600">
                  Most organizations can be onboarded within 1-2 weeks, depending on the complexity of your requirements and data integration needs.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Do you provide training?</h3>
                <p className="text-gray-600">
                  Yes, we provide comprehensive training for administrators, supervisors, and field workers. Training can be conducted remotely or on-site.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What support do you offer?</h3>
                <p className="text-gray-600">
                  We provide 24/7 technical support, regular platform updates, and dedicated account management for enterprise clients.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Can the platform work offline?</h3>
                <p className="text-gray-600">
                  Yes, our mobile application supports offline data collection. Data syncs automatically when connectivity is restored.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}