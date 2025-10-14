import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Founder() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Founder's Message</h1>
            <p className="text-xl">Vision and Mission of Rising Stars Academy</p>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <img
                  src="/images/coach-team.jpg"
                  alt="Founder of RSA"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Meet Our Founder</h2>
                <p className="text-muted-foreground mb-4">
                  Rising Stars Academy was founded with a vision to create champions not just in sports, 
                  but in life. Our journey began with a simple belief - that every child has the potential 
                  to shine, they just need the right guidance and opportunities.
                </p>
                <p className="text-muted-foreground mb-4">
                  With over 15 years of experience in sports coaching and youth development, our founder 
                  has dedicated their life to nurturing young talent. The academy started with just 10 
                  students and has now grown to serve hundreds of aspiring athletes across multiple sports.
                </p>
                <p className="text-muted-foreground">
                  Our mission is to provide world-class training facilities and expert coaching that 
                  helps young athletes reach their full potential while developing important life skills 
                  like discipline, teamwork, and perseverance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
