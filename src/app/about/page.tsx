
import Image from "next/image";
import '@/style/about.css'; // Import the custom CSS file

export default function Aboutme() {
  return (
    <section id="aboutme-container">
      <div id="aboutme-image-container">
        <Image id="aboutme-image" height={500} width={500} src="/profile pic.png" alt="profile" />
      </div>

      <div id="aboutme-text-container">
        <h1 id="aboutme-title">
          <b>A</b><b id="aboutme-title-secondary">BOUT ME:</b>
        </h1>
        <p id="aboutme-description">
          My journey in tech was significantly shaped by completing a Typescript course at the Governer Initiative 
          Artificial Intelligence Course (GIAIC). It was here that I also embarked on learning Cloud Applied Generative 
          AI engineering with cutting-edge technologies. Additionally, I am pursuing graphic design, creating logos, posters, 
          flyers, thumbnails, etc. I specialize in frontend development, currently expanding my expertise by learning Next.js 
          for both backend and frontend development. I am an expert in making websites using HTML, Tailwind CSS, and JavaScript.
        </p>
      </div>
    </section>
  );
}
