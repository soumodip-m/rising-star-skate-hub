import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import doodleBg from "@/assets/contact-doodle-bg.png";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Gujarat's No. 1 Skating Academy - Book Roller Skating Trial | RSA Ahmedabad</title>
        <meta name="description" content="Contact Gujarat's no. 1 skating academy - Rising Stars Academy in Ahmedabad. Book roller skating trial class, inquire about speed skating training, inline & quad skating classes. Visit DPS Skating Rink Bopal or call +91 98242 34663. Weekend & after-school batches available." />
        <meta name="keywords" content="contact roller skating academy, book roller skating trial, speed skating coaching Ahmedabad, inline skating classes contact, roller skating academy admissions, skating classes fees Gujarat, Indrajeet Sir contact, best skating academy contact, roller skating rink Ahmedabad, weekend skating classes, after-school skating batches, summer skating camp ahmedabad, roller skating coaching Ahmedabad, અમદાવાદ સ્કેટિંગ ક્લાસેસ, स्केटिंग क्लासेज अहमदाबाद, DPS skating rink Bopal, roller skating trial Ahmedabad" />
        <link rel="canonical" href="https://rsa.india.co.in/contact" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook / Instagram / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rising Stars Academy" />
        <meta property="og:title" content="Contact Gujarat's No. 1 Skating Academy - Book Roller Skating Trial" />
        <meta property="og:description" content="Book roller skating trial class at Ahmedabad's best skating academy. Located at DPS Skating Rink, Bopal. Call +91 98242 34663" />
        <meta property="og:url" content="https://rsa.india.co.in/contact" />
        <meta property="og:image" content="https://rsa.india.co.in/og-image.png" />
        <meta property="og:image:secure_url" content="https://rsa.india.co.in/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Contact Rising Stars Academy Ahmedabad" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:locale:alternate" content="hi_IN" />
        <meta property="og:locale:alternate" content="gu_IN" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@risingstarsacademy" />
        <meta name="twitter:title" content="Contact Gujarat's No. 1 Skating Academy - Book Roller Skating Trial" />
        <meta name="twitter:description" content="Book roller skating trial class at Ahmedabad's best skating academy. Call +91 98242 34663" />
        <meta name="twitter:image" content="https://rsa.india.co.in/og-image.png" />
        <meta name="twitter:image:alt" content="Contact Rising Stars Academy Ahmedabad" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "url": "https://rsa.india.co.in/contact",
            "mainEntity": {
              "@type": "SportsActivityLocation",
              "name": "Rising Stars Academy",
              "telephone": "+91 98242 34663",
              "email": "rsa4sports@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "DPS Skating Rink, Bopal",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "postalCode": "380058",
                "addressCountry": "IN"
              }
            }
          })}
        </script>
      </Helmet>
      <Navbar />

      {/* Contact Info Section with Doodle Background */}
      <section 
        className="py-32 relative overflow-hidden"
        style={{
          backgroundImage: `url(${doodleBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Subtle overlay for better readability */}
        <div className="absolute inset-0 bg-background/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="bg-background/80 backdrop-blur-md p-12 rounded-2xl border border-primary/20 shadow-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center opacity-90">Get in Touch</h1>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Location</h3>
                    <p className="text-muted-foreground">
                      DPS Skating Rink, Bopal
                      <br />
                      Ahmedabad, Gujarat 380058
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <p className="text-muted-foreground">+91 98242 34663</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground">rsa4sports@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Working Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 8:00 AM - 10:00 PM
                      <br />
                      Sunday: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Visit Us</h2>
          <div className="max-w-5xl mx-auto bg-card rounded-lg border overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.511634288925!2d72.45613897596665!3d23.041544179152756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b0014a98971%3A0xa0362b0e0241daff!2sDPS%20Skating%20Rink!5e0!3m2!1sen!2sin!4v1729281234567!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{
                border: 0,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="DPS Skating Rink Location"
            />
            <div className="p-4 bg-card text-center"></div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
