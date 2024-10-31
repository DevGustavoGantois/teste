'use client'
import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import { Header } from "@/Components/Header";
import { Hero } from "@/Components/Hero";
import { Services } from "@/Components/Services";
import { Topics } from "@/Components/Topics";
import { Featured } from "@/Components/Featured";
import { Testimonials } from "@/Components/Testimonials";
import { Contact } from "@/Components/Contact";
import { CTA_App } from "@/Components/CTA_App";
import { Footer } from "@/Components/Footer";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  },[]);

  return (
    <main className="max-w-[1440px] mx-auto">
      <Header />
      <Hero />
      <Featured />
      <Topics />
      <Services />
      <CTA_App />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
