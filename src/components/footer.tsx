

import '../style/footer.css'; // Import custom CSS module

export default function Footer() {
  return (
    <main id="footerMain">
      <section id="footerSection">
        <div id="footerItem">
          <h1 id="footerTitle">Dua Habib</h1>
          <p id="footerDescription">
            Website developer. Any type of websites. UI/UX designs services provided!
          </p>
        </div>
        <div id="footerItem">
          <b id="footerSubTitle">Get in Touch</b>
          <p id="footerContact"><b>email:</b> duah10670@gmail.com</p>
          <p id="footerContact"><b>Location:</b> Pakistan, Karachi</p>
        </div>
        <div id="footerItem">
          <b id="footerSubTitle">Service</b>
          <ul id="footerList">
            <li id="footerListItem">Website Design</li>
            <li id="footerListItem">UI/UX Design</li>
            <li id="footerListItem">Global Website</li>
            <li id="footerListItem">Multi-page Website</li>
            <li id="footerListItem">Development</li>
            <li id="footerListItem">SEO</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
