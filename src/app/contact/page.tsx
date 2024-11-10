
import Image from "next/image";
import '@/style/contact.css'; // Import the custom CSS file

export default function Conact() {
  return (
    <main id="aboutme-container">

      <h1 id="aboutme-title"><b><u>CONTACT:</u></b></h1>

      <div id="aboutme-main-content">
        <section id="contact-form">
          <div id="form-group">
            <label id="form-label" htmlFor="name">Enter your Name:
              <input id="form-input" type="text" placeholder="Full Name" required />
            </label>
          </div>

          <div id="form-group">
            <label id="form-label" htmlFor="email">Enter your E-mail:
              <input id="form-input" type="email" placeholder="Your E-mail" required />
            </label>
          </div>

          <div id="form-group">
            <label id="form-label" htmlFor="message">Your Message:</label>
            <textarea id="form-textarea" name="Message" rows={5}></textarea>
          </div>

          <button id="form-button"><b>Send</b></button>
        </section>

        <section id="contact-image">
          <Image id="contact-image-style" height={500} width={500} src="/contactme.png" alt="contact" />
        </section>
      </div>
    </main>
  );
}
