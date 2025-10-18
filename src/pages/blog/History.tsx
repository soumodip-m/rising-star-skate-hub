import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const timeline = [
  { year: "1760s", title: "First Roller Skates", description: "John Joseph Merlin creates first recorded roller skate" },
  { year: "1863", title: "Quad Skates Invented", description: "James Leonard Plimpton patents the rocking skate" },
  { year: "1980s", title: "Inline Skating Revival", description: "Modern inline skates gain popularity" },
  { year: "1992", title: "Olympic Recognition", description: "Inline skating included in Olympics" }
];

const eras = [
  {
    title: "The Invention Era (1760-1880)",
    subtitle: "The birth of roller skating",
    content: "The story begins in 1760 when John Joseph Merlin, a Belgian inventor, created the first recorded roller skate. His design featured metal wheels aligned in a single row, similar to modern inline skates. However, these early skates were difficult to control and lacked a reliable braking mechanism. The breakthrough came in 1863 when James Leonard Plimpton patented the 'rocking skate,' which featured four wheels arranged in a rectangular pattern. This design provided much better stability and maneuverability, laying the foundation for modern quad skates."
  },
  {
    title: "The Golden Age (1880-1950)",
    subtitle: "Roller skating reaches mainstream popularity",
    content: "During this period, roller skating rinks began appearing in cities worldwide. The sport became a popular social activity and recreational pastime. Artistic roller skating emerged as performers incorporated dance and acrobatic elements. The development of better bearing systems and materials improved skate performance significantly."
  },
  {
    title: "Modern Era (1950-Present)",
    subtitle: "Evolution into competitive sport",
    content: "Today's advanced materials and precision engineering have created skates that allow athletes to reach unprecedented speeds and performance levels. Carbon fiber frames, specialized wheels, and advanced bearing systems have revolutionized the sport, making it faster and more exciting than ever."
  }
];

export default function History() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20 md:py-28">
          <div className="container mx-auto px-4">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Historical Journey
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              History of Roller Skating
            </h1>
            <p className="text-lg md:text-xl max-w-3xl opacity-90">
              From the first wooden wheels in 1760 to modern carbon fiber speed skates, discover the fascinating evolution of roller skating and how it became a global phenomenon.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {timeline.map((event, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-3">{event.year}</div>
                    <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Historical Eras */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {eras.map((era, index) => (
                <div key={index}>
                  <h2 className="text-3xl font-bold mb-2">{era.title}</h2>
                  <p className="text-xl text-primary mb-4">{era.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{era.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Milestones */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Key Milestones</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Global Expansion</h3>
                    <p className="text-muted-foreground">From Belgium to worldwide adoption, roller skating spread across continents, becoming a popular recreational activity and competitive sport.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Olympic Recognition</h3>
                    <p className="text-muted-foreground">Inline skating's inclusion in the 1992 Olympics marked a pivotal moment, elevating the sport's status and inspiring a new generation of athletes.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Modern Era</h3>
                    <p className="text-muted-foreground">Today's advanced materials and precision engineering have created skates that allow athletes to reach unprecedented speeds and performance levels.</p>
                  </CardContent>
                </Card>
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
