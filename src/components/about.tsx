'use client';
import Image from "next/image";
import Typewriter from "typewriter-effect";
import '../style/abouet.css'; // Import the custom CSS

export default function About() {
  return (
    <section id="about-section">
      <div id="profile-container">
        <Image
          id="profile-image"
          height={300}
          width={300}
          src="/profile pic.png"
          alt="Profile picture"
        />
      </div>

      <div id="about-text-container">
        <h1 id="about-title">
          <b><u>About Me:</u></b>
        </h1>
        <h2 id="about-subtitle">
          Crafting 
          <Typewriter
            options={{
              strings: [' My Tech and Business Journey!'],
              autoStart: true,
              loop: false,
            }}
          />
        </h2>
        <p id="about-description">
          I am an experienced front-end developer, currently expanding my expertise by learning Next.js 
          for both backend and frontend development. My journey in tech was significantly shaped by 
          completing a TypeScript course at the Governor Initiative Artificial Intelligence Course
          (GIAIC).
        </p>
      </div>
    </section>
  );
}
