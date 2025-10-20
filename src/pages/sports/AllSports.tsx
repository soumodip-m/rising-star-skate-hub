import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SportCard from "@/components/SportCard";
import heroImage from "@/assets/hero-roller-skating.jpg";
import trainingImage from "@/assets/training-facility.jpg";
import otherSportsImage from "@/assets/other-sports.png";
export default function AllSports() {
  const sports = [{
    name: "Roller Skating",
    description: "Master speed, balance, and race craft with our flagship program",
    image: heroImage,
    path: "/sports/roller-skating",
    featured: true
  }, {
    name: "Cricket",
    description: "Learn batting, bowling, and fielding from expert coaches",
    image: trainingImage,
    path: "/sports/cricket"
  }, {
    name: "Football",
    description: "Develop technical skills and tactical understanding",
    image: "/images/facilities-gym.jpg",
    path: "/sports/football"
  }, {
    name: "Basketball",
    description: "Master shooting, dribbling, and team strategy",
    image: "/images/pool-cross-training.jpg",
    path: "/sports/basketball"
  }, {
    name: "Tennis",
    description: "Professional coaching for all tennis skill levels",
    image: "/images/training-facility.jpg",
    path: "/sports/tennis"
  }, {
    name: "Badminton",
    description: "Excel in India's favorite racquet sport",
    image: "/images/facilities-gym.jpg",
    path: "/sports/badminton"
  }, {
    name: "Athletics",
    description: "Track and field training for competitive athletes",
    image: "/images/events-medals.jpg",
    path: "/sports/athletics"
  }];
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sports & Coaching Programs</h1>
            <p className="text-xl">Discover our comprehensive range of sports training programs</p>
          </div>
        </section>

        {/* Sports Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {sports.map((sport) => (
                <SportCard key={sport.name} {...sport} />
              ))}
            </div>

            {/* Other Sports Section */}
            <div className="flex flex-col items-center justify-center py-12">
              <img 
                src={otherSportsImage} 
                alt="Other Sports" 
                className="w-full max-w-2xl h-auto mb-6"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Please Contact Us for Other Sports
              </h2>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        
      </main>
      <Footer />
      <WhatsAppButton />
    </div>;
}