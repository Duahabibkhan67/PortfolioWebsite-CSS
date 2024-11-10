'use client';
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import  '../style/hero.css'; // Import custom CSS

export default function Hero() {
  return (
    <section id="heroSection">
      <div id="imageContainer">
        <Image
          id="profileImage"
          height={400}
          width={400}
          src="/profile pic.png"
          alt="profile"
        />
      </div>
      <div id="textContainer">
        <h1 id="heading"><b>Hello,I am  Dua Habib.</b></h1>
       
      
        <p id="paragraph">
          I am a Web developer and First Year Student, exploring the intersection of business and technology
          through cloud-applied generative AI engineering. My journey is about mastering the latest
          AI tools to enhance web development and drive business innovation.
        </p>
        <div id="socialLinks">
          <div>
            <Link href="https://www.linkedin.com/in/dua-habib-497557301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <Image
                id="linkedInImage"
                height={50}
                width={50}
                src="/linkedin.png"
                alt="LinkedIn"
              />
            </Link>
          </div>
          <div>
            <Link href="https://github.com/Duahabibkhan67">
              <Image
                id="githubImage"
                height={50}
                width={50}
                src="/github logo.png"
                alt="GitHub"
              />
            </Link>
          </div>
          <div>
            <Link href="https://www.fiverr.com/duadeveloper2?public_mode=true">
              <Image
                id="fiverrImage"
                height={50}
                width={50}
                src="/fiverr logo.png"
                alt="Fiverr"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
