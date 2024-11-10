import Link from "next/link";
import Image from "next/image";
import '../style/header.css';

export default function Header(){
 return(
  <div>
      <header id="header">
        <div id="logo">
          <h1 >
            <b>DUA_HABIB</b>
          </h1>
        </div>

        <nav>
          <div id="nav-links">
            <Link href="/">
         
                <button id="nav-button">
                  <b>Home</b>
                </button>
             
            </Link>
            <Link href="/about">
              
                <button id="nav-button">
                  <b>About</b>
                </button>
              
            </Link>
            <Link href="/contact">
           
                <button id="contact-button">
                  <b>Contact me</b>
                </button>
           
            </Link>
          </div>
        </nav>
      </header>
    </div>
 )
}