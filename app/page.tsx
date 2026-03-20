import HeroSection from "./components/HeroSection";
import SmoothScroll from "./components/SmoothScroll";
import ParticleBackground from "./components/ParticleBackground";
import CustomCursor from "./components/CustomCursor";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import LoadingScreen from "./components/LoadingScreen";
import NavBar from "./components/NavBar";

export default function Home() {
    return (
        <>
            <LoadingScreen />
            <SmoothScroll />
            <ParticleBackground />
            <CustomCursor />
            <NavBar />

            {/* Hero */}
            <HeroSection />

            {/* Projects */}
            <ProjectsSection />

            {/* About — Writing + Fragments + Personal */}
            <AboutSection />

            {/* <hr className="section-divider" /> */}

            {/* Experience + Education + Tools + Awards */}
            <ExperienceSection />

            {/* Contact + Footer */}
            <ContactSection />
        </>
    );
}
