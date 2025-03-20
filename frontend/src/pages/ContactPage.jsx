import React from 'react';
import contact  from './styles/Contact.module.scss';

const ContactPage = () => {
  return (
    <div className={contact.contact_page}>
      <div className={contact.breadcrumbs}>
        <a href="/">Home</a> / <span>Contact</span>
      </div>

      <div className={contact.contact_container}>
        <div className={contact.contact_info}>
          <div className={contact.contact_card}>
            <div className={contact.icon_circle}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3>Call To Us</h3>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +18001112222</p>
            <div className={contact.divider}></div>
          </div>

          <div className={contact.contact_card}>
            <div className={contact.icon_circle}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3>Write To US</h3>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Email: customer@exclusive.com</p>
            <p>Email: support@exclusive.com</p>
          </div>
        </div>

        <div className={contact.contact_form}>
          <form>
            <div className={contact.form_row}>
              <input type="text" placeholder="Your Name *" required />
              <input type="email" placeholder="Your Email *" required />
              <input type="tel" placeholder="Your Phone *" required />
            </div>
            <textarea placeholder="Your Message" rows="6"></textarea>
            <div className={contact.form_submit}>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;