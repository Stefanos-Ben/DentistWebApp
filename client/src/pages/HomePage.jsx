import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ClinicSection from '../components/ClinicSection';
import ServicesSection from '../components/Services';

function HomePage() {
    return (
      <main>
        <Navbar />
        <Hero />
        <ClinicSection />
        <ServicesSection />
      </main>
    );
  }

export default HomePage;