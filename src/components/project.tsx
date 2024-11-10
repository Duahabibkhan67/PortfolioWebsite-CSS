'use client';
import Link from "next/link";
import Image from "next/image";
import '../style/project.css'; // Import the custom CSS file

export default function Project() {
  return (
    <div id="project-container">

      <div id="project-header">
        <h1 id="project-title"><b><u>Projects:</u></b></h1>
        <p id="project-subtitle"><b>Here are some of my projects</b></p>
      </div>

      <section id="project-grid">
        <div data-aos="zoom-in-up" id="project-card">
          <Image id="project-image" height={500} width={500} src="/e-commerce.png" alt="project1" />
          <h1 id="project-card-title">E-Commerce Website</h1>
          <p id="project-card-description">In this website, I used Figma design and built the website using the Next.js framework.</p>
          <button id="project-view-button">
            <Link href="https://e-commerce-website-nextjs.vercel.app/"><b>View</b></Link>
          </button>
        </div>

        <div data-aos="zoom-in-up" id="project-card">
          <Image id="project-image" height={200} width={300} src="/project 02.png" alt="project2" />
          <h1 id="project-card-title">Editable Resume</h1>
          <p id="project-card-description">This website is built with core HTML, CSS, and JavaScript, along with some additional features.</p>
          <button id="project-view-button">
            <Link href="https://edititable-resume-dua.netlify.app"><b>View</b></Link>
          </button>
        </div>

        <div data-aos="zoom-in-up" id="project-card">
          <Image id="project-image" height={200} width={400} src="/food.png" alt="project3" />
          <h1 id="project-card-title">Food Website</h1>
          <p id="project-card-description">In this website, I used Next.js, React components, and additional features.</p>
          <button id="project-view-button">
            <Link href="https://tailwind-food-website-dua.vercel.app/"><b>View</b></Link>
          </button>
        </div>
      </section>

    </div>
  );
}
