import dpsLogo from "@/assets/dps-logo.png";
import grsaLogo from "@/assets/grsa-logo.jpg";
import rsfiLogo from "@/assets/rsfi-logo.png";
import srLogo from "@/assets/sr-logo.png";

const WellWishersSection = () => {
  const logos = [
    { src: dpsLogo, alt: "Delhi Public School Bopal" },
    { src: grsaLogo, alt: "Gujarat State Roller Skating Association" },
    { src: rsfiLogo, alt: "Roller Skating Federation of India" },
    { src: srLogo, alt: "Simmons Rama" },
  ];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Well Wishers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proud to be supported by leading organizations in sports and education
          </p>
        </div>

        <div className="relative">
          <div className="marquee-container">
            <div className="marquee-content">
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="marquee-item flex-shrink-0 mx-8 bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-24 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellWishersSection;
