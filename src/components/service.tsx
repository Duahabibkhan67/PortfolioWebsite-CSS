'use client';
import Image from "next/image";
import '../style/service.css'; // Import the custom CSS file

export default function Service() {
  return (
    <main id="services-main">
      <h1 id="services-title">
        <p id="services-title-first"><b>S</b></p>
        <b id="services-title-second">ervices</b>
      </h1>

      <section id="services-grid">
        <div id="service-card" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <Image id=" service-logo-web" height={100} width={100} src="/web logo.png" alt="weblogo" />
          <h1 id="service-title">Web Development</h1>
          <p id="service-description">
            Expert web development service to bring your ideas to life. From conceptualization to deployment,
            I craft robust, scalable, and secure web applications that meet your business needs. With proficiency
            in modern technologies and frameworks, I deliver high-quality solutions that drive results.
          </p>
        </div>

        <div id="service-card" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
     
          <Image id=" service-logo-design" height={100} width={100} src="/designlogo.png" alt="designlogo" />
          <h1 id="service-title">Web Design</h1>
          <p id="service-description">
            Creative web designing solutions to captivate your audience. I design visually stunning, user-friendly,
            and engaging websites that reflect your brand identity. With a focus on aesthetics and functionality,
            I create websites that leave a lasting impression and drive business growth.
          </p>
        </div>

        <div id="service-card" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <Image id=" service-logo-responsive" height={100} width={100} src="/responsivelogo.png" alt="responsivelogo" />
          <h1 id="service-title">Responsive Web Design</h1>
          <p id="service-description">
            Responsive web design services to ensure seamless user experience across devices. I craft mobile-friendly,
            tablet-friendly, and desktop-friendly websites that adapt to any screen size, ensuring optimal viewing
            and interaction. With responsive design, your website will be accessible and engaging for all users.
          </p>
        </div>
      </section>
    </main>
  );
}
