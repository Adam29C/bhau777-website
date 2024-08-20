import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/component/HeroSection";
import HomeContactDetails from "@/component/homeContactDetails";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeContactDetails />
    </>
  );
}
