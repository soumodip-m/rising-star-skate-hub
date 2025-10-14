import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function WellWishers() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Well-Wishers</h1>
            <p className="text-xl">Partners and supporters who make our mission possible</p>
          </div>
        </section>

        {/* Well-Wishers Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-muted-foreground mb-12">
                We are grateful to our well-wishers, sponsors, and partners who have supported 
                Rising Stars Academy in our mission to nurture young athletic talent.
              </p>
              <div className="bg-card p-8 rounded-lg border">
                <h3 className="text-2xl font-bold mb-6 text-center">Special Thanks To</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li>• Local Sports Authority for infrastructure support</li>
                  <li>• Community sponsors who fund scholarships for underprivileged athletes</li>
                  <li>• Parent volunteers who help organize events and competitions</li>
                  <li>• Former students who return to mentor current athletes</li>
                  <li>• Sports equipment manufacturers for providing quality gear</li>
                </ul>
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
