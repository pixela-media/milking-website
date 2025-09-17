import React from 'react'
import Navbar from '../components/layout/Navbar'
import ContactForm from '../components/common/ContactForm'
import Maps from '../components/company/Maps'
import Footer from '../components/layout/Footer'

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-gradient-to-b from-[#F7F2FA] to-[#f7f2fa]/1">
        <ContactForm />
      </section>
      <Maps />
      <Footer />
    </div>
  )
}

export default ContactUs
