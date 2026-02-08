import { Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { useState } from "react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formData,
        }),
      });

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-center mb-4">Get in Touch</h1>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions? Ready to start your English learning journey? I'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6">Send Me a Message</h2>

              {/* Status messages */}
              {status === "success" && (
                <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
                  Thanks! Your message was sent. I’ll get back to you within 24 hours.
                </div>
              )}
              {status === "error" && (
                <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
                  Oops! Something went wrong. Please try again.
                </div>
              )}

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Netlify required hidden field */}
                <input type="hidden" name="form-name" value="contact" />

                {/* Honeypot field (spam protection) */}
                <input type="hidden" name="bot-field" />

                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">Select a subject</option>
                    <option value="trial">Book a Trial Class</option>
                    <option value="pricing">Questions About Pricing</option>
                    <option value="classes">Questions About Classes</option>
                    <option value="schedule">Schedule Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Tell me about your English learning goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>

              
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Feel free to reach out through the form or use any of the contact methods below. I typically respond within 24 hours.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1">Email</h3>
                    <p className="text-gray-600">gladys.english@example.com</p>
                    <p className="text-sm text-gray-500 mt-1">Response time: 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1">Skype</h3>
                    <p className="text-gray-600">gladys.tefl.teacher</p>
                    <p className="text-sm text-gray-500 mt-1">For quick questions & lessons</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1">Available Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8am - 8pm EST</p>
                    <p className="text-gray-600">Saturday: 10am - 4pm EST</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1">Location</h3>
                    <p className="text-gray-600">Online - Worldwide</p>
                    <p className="text-sm text-gray-500 mt-1">Teaching students in all time zones</p>
                  </div>
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="mb-4">Frequently Asked Questions</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>gladys.english@example.com</li>
                  <li>Skype: gladys.tefl.teacher</li>
                  <li>Mon-Fri: 8am - 8pm EST</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
