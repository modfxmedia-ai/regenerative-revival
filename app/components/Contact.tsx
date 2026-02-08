"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MapPin, Phone, Mail, Zap } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [inquiryType, setInquiryType] = useState("patient");

  return (
    <section id="contact" className="relative py-28 bg-cream overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Get Started</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            Get in Touch with <span className="gradient-text">Regenerative Revival</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Whether you&apos;re a patient seeking treatment or a business looking to partner, we&apos;re here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 sm:p-10 soft-shadow-lg border border-gray-100">
              <div className="flex gap-2 mb-8 p-1 rounded-full bg-gray-100 w-fit">
                <button onClick={() => setInquiryType("patient")} className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${inquiryType === "patient" ? "bg-primary text-white shadow-sm" : "text-gray-500 hover:text-gray-900"}`}>
                  I&apos;m a Patient
                </button>
                <button onClick={() => setInquiryType("business")} className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${inquiryType === "business" ? "bg-gold text-white shadow-sm" : "text-gray-500 hover:text-gray-900"}`}>
                  I&apos;m a Business
                </button>
              </div>

              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">First Name</label>
                    <input id="firstName" type="text" className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">Last Name</label>
                    <input id="lastName" type="text" className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                  <input id="email" type="email" className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">Phone</label>
                  <input id="phone" type="tel" className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="(555) 123-4567" />
                </div>
                {inquiryType === "business" && (
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">Practice / Company Name</label>
                    <input id="company" type="text" className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="Your practice name" />
                  </div>
                )}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    {inquiryType === "patient" ? "Tell us about your condition" : "Tell us about your business needs"}
                  </label>
                  <textarea id="message" rows={4} className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none" placeholder={inquiryType === "patient" ? "Describe your symptoms..." : "Tell us about your practice..."} />
                </div>
                <button type="submit" className={`flex h-14 items-center justify-center gap-2 rounded-full text-base font-semibold text-white transition-all hover:shadow-xl ${inquiryType === "patient" ? "bg-primary hover:bg-primary-dark" : "bg-gold hover:bg-gold-light"}`}>
                  <Send className="h-5 w-5" />
                  {inquiryType === "patient" ? "Request Consultation" : "Submit Partnership Inquiry"}
                </button>
                <p className="text-xs text-gray-400 text-center leading-relaxed">
                  By submitting this form you consent to be contacted by SMS and email from Regenerative Revival. Message &amp; data rates may apply. Reply STOP to opt out.
                </p>
              </form>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-8 soft-shadow border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 shrink-0"><Phone className="h-5 w-5 text-primary" /></div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="tel:+15551234567" className="text-gray-900 font-medium hover:text-primary transition-colors">(555) 123-4567</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 shrink-0"><Mail className="h-5 w-5 text-primary" /></div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:info@regenerativerevival.com" className="text-gray-900 font-medium hover:text-primary transition-colors">info@regenerativerevival.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 shrink-0"><MapPin className="h-5 w-5 text-primary" /></div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-900 font-medium">Nationwide Service</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center soft-shadow border border-gray-100">
              <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4"><Zap className="h-7 w-7 text-primary" /></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-sm text-gray-600">We typically respond within 24 hours. For urgent inquiries, call us directly.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 soft-shadow border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Trusted By</h3>
              <div className="grid grid-cols-2 gap-3">
                {["AATB Accredited", "FDA Compliant", "HIPAA Secure", "Board Certified"].map((badge) => (
                  <div key={badge} className="flex items-center justify-center rounded-xl bg-gray-50 border border-gray-100 py-3 px-2">
                    <span className="text-xs font-medium text-gray-600 text-center">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
