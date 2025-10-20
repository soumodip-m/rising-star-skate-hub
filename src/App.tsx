import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// About pages
import Coaches from "./pages/about/Coaches";
import Milestones from "./pages/about/Milestones";
import Facilities from "./pages/about/Facilities";
import WellWishers from "./pages/about/WellWishers";

// Sports pages
import RollerSkating from "./pages/RollerSkating";
import Cricket from "./pages/sports/Cricket";
import Football from "./pages/sports/Football";
import Basketball from "./pages/sports/Basketball";
import Tennis from "./pages/sports/Tennis";
import Badminton from "./pages/sports/Badminton";
import Athletics from "./pages/sports/Athletics";
import AllSports from "./pages/sports/AllSports";

// Admissions pages
import Admissions from "./pages/admissions/Admissions";
import Fees from "./pages/admissions/Fees";
import Register from "./pages/admissions/Register";
import Trial from "./pages/admissions/Trial";
import FAQ from "./pages/admissions/FAQ";

// Events pages
import UpcomingEvents from "./pages/events/Upcoming";
import PastEvents from "./pages/events/Past";
import EventsSchedule from "./pages/events/Schedule";

// Other pages
import Achievements from "./pages/Achievements";
import Photos from "./pages/gallery/Photos";
import Videos from "./pages/gallery/Videos";
import FunAtRSA from "./pages/gallery/FunAtRSA";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";

// Blog pages
import BlogHistory from "./pages/blog/History";
import BlogTypes from "./pages/blog/Types";
import BlogCompetitions from "./pages/blog/Competitions";
import BlogTraining from "./pages/blog/Training";
import BlogEquipment from "./pages/blog/Equipment";
import BlogCommunity from "./pages/blog/Community";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* About Routes */}
          <Route path="/about/coaches" element={<Coaches />} />
          <Route path="/about/milestones" element={<Milestones />} />
          <Route path="/about/facilities" element={<Facilities />} />
          <Route path="/about/well-wishers" element={<WellWishers />} />
          
          {/* Sports Routes */}
          <Route path="/sports" element={<AllSports />} />
          <Route path="/sports/roller-skating" element={<RollerSkating />} />
          <Route path="/sports/cricket" element={<Cricket />} />
          <Route path="/sports/football" element={<Football />} />
          <Route path="/sports/basketball" element={<Basketball />} />
          <Route path="/sports/tennis" element={<Tennis />} />
          <Route path="/sports/badminton" element={<Badminton />} />
          <Route path="/sports/athletics" element={<Athletics />} />
          
          {/* Admissions Routes */}
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/admissions/fees" element={<Fees />} />
          <Route path="/admissions/register" element={<Register />} />
          <Route path="/admissions/trial" element={<Trial />} />
          <Route path="/admissions/faq" element={<FAQ />} />

          {/* Events Routes */}
          <Route path="/events/upcoming" element={<UpcomingEvents />} />
          <Route path="/events/past" element={<PastEvents />} />
          <Route path="/events/schedule" element={<EventsSchedule />} />

          {/* Other Routes */}
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/gallery/photos" element={<Photos />} />
          <Route path="/gallery/videos" element={<Videos />} />
          <Route path="/gallery/fun-at-rsa" element={<FunAtRSA />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />

          {/* Blog Routes */}
          <Route path="/blog/history" element={<BlogHistory />} />
          <Route path="/blog/types" element={<BlogTypes />} />
          <Route path="/blog/competitions" element={<BlogCompetitions />} />
          <Route path="/blog/training" element={<BlogTraining />} />
          <Route path="/blog/equipment" element={<BlogEquipment />} />
          <Route path="/blog/community" element={<BlogCommunity />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
