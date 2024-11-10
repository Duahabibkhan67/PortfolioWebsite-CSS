'use client';
import Link from "next/link";
import Hero from "@/components/hero";
import About from "@/components/about";
import Project from "@/components/project";
import Skill from "@/components/skill";
import Service from "@/components/service"; 
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Home(){
  useEffect(()=>{
    AOS.init({
     easing:"ease-out-back",
     duration:1200,
     delay:200,
     mirror:true,
     anchorPlacement:"bottom-bottom",
     offset:160,
    })
    AOS.refresh();
   } ,[]);
  return(
    <div id="main">
    < Hero />
      < About />
      < Project />
      < Skill/>
      < Service />
    </div>
  )
 

}