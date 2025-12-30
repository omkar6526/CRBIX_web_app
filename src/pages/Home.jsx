import { motion } from "framer-motion";

import { Star } from "lucide-react";

import CoursePlans from "../components/CoursePlans";
import HeroCarousel from "../components/HeroCarousel";
import LearningExperience from "../components/LearningExperience";
import CourseSection from "../components/CourseSection";
import TrustedBy from "../components/TrustedBy";
import CertificationSection from "../components/CertificationSection";
import JavaCareerCard from "../components/JavaCareerCard";
import BuildProject from "../components/BuildProject";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/studentSuccess";

/* GLOBAL ANIMATION VARIANTS */

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeText = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const scrollMorph = {
  hidden: { opacity: 0, y: 90, scale: 0.92, borderRadius: "60px" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    borderRadius: "16px",
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const floatingImage = {
  animate: {
    y: [0, -14, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

/*  COMPONENT  */
export default function HomeSections() {
  return (
    <div className="bg-[#eaf9ff] overflow-hidden font-body">
      <HeroCarousel />
      <LearningExperience />
      <CertificationSection />
      <div className="border-t border-gray-700 my-6"></div>
      <section id="courses">
        <CourseSection />
      </section>
      <div className="border-t border-gray-700 my-6"></div>
      <WhyChooseUs /> 
      <div className="border-t border-gray-700 my-6"></div>
      <CoursePlans />
      <div className="border-t border-gray-700 my-6"></div>
      <BuildProject />
      <div className="border-t border-gray-700 my-6"></div>
      <TrustedBy />
      <div className="border-t border-gray-700 my-6"></div>
     <Testimonials /> 
    </div>
  );
}