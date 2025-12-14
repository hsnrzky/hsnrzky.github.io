import { Button } from "@/components/ui/button";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom";
import { GoIcon, MicroservicesIcon, ScalabilityIcon } from "@/components/icons/FeatureIcons"; // Placeholder for icons

const Index = () => {
  return (
    <div className="min-h-[calc(100vh-16rem)] flex flex-col items-center justify-center text-center py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-electric-blue mb-4 animate-fade-in-up">
          Hasan Rizki
        </h1>
        <p className="text-2xl md:text-3xl text-light-grey mb-6 animate-fade-in-up animation-delay-100">
          Backend Golang Developer
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-200">
          Crafting robust and scalable backend systems with a focus on Go, Microservices, and high-performance architecture.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in-up animation-delay-300">
          <Button asChild className="bg-electric-blue hover:bg-teal-accent text-white px-8 py-6 text-lg rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            <Link to="/projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white px-8 py-6 text-lg rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            <a href="/Hasan_Rizki_CV.pdf" download="Hasan_Rizki_CV.pdf">Download CV</a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 animate-fade-in animation-delay-400">
          <div className="flex flex-col items-center p-4 bg-charcoal rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <GoIcon className="w-12 h-12 text-electric-blue mb-3" />
            <h3 className="text-xl font-semibold text-light-grey mb-2">Go Development</h3>
            <p className="text-sm text-muted-foreground">Building efficient and reliable backend services with Golang.</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-charcoal rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <MicroservicesIcon className="w-12 h-12 text-electric-blue mb-3" />
            <h3 className="text-xl font-semibold text-light-grey mb-2">Microservices</h3>
            <p className="text-sm text-muted-foreground">Designing and implementing distributed systems for agility and resilience.</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-charcoal rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <ScalabilityIcon className="w-12 h-12 text-electric-blue mb-3" />
            <h3 className="text-xl font-semibold text-light-grey mb-2">System Scalability</h3>
            <p className="text-sm text-muted-foreground">Architecting solutions that can grow and perform under heavy loads.</p>
          </div>
        </div>
      </div>
      {/* The MadeWithDyad component is now part of the Footer */}
    </div>
  );
};

export default Index;