'use client';
import Image from "next/image";
import '../style/skill.css'; // Import the custom CSS file

export default function Skill() {
  return (
    <div id="skills-container">
      <h1 id="skills-title"><b>Skills:</b></h1>
      <p id="skills-subtitle"><u>Here are my Skills:</u></p>

      <section id="skills-grid">
        <div id="skill-item">
          <Image id="skill-image" height={150} width={150} src="/html logo.png" alt="html" />
        </div>
        <div id="skill-item">
          <Image id="skill-image" height={150} width={150} src="/css logo.png" alt="css" />
        </div>
        <div id="skill-item">
          <Image id="skill-image" height={200} width={200} src="/javalogo.png" alt="java" />
        </div>
        <div id="skill-item">
          <Image id="skill-image" height={250} width={250} src="/nextjs logo.png" alt="next" />
        </div>
        <div id="skill-item">
          <Image id="skill-image" height={150} width={150} src="/nodejs logo.png" alt="node" />
        </div>
        <div id="skill-item">
          <Image id="skill-image" height={200} width={200} src="/react logo.png" alt="react" />
        </div>
      </section>
    </div>
  );
}
