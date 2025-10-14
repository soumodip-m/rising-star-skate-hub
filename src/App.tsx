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
import Founder from "./pages/about/Founder";
import Coaches from "./pages/about/Coaches";
import Milestones from "./pages/about/Milestones";
import Facilities from "./pages/about/Facilities";
import WellWishers from "./pages/about/WellWishers";

// Sports pages
import RollerSkating from "./pages/RollerSkating";
import Cricket from "./pages/sports/Cricket";
import Football from "./pages/sports/Football";
import Basketball from "./pages/sports/Basketball";

// Admissions pages
import Admissions from "./pages/admissions/Admissions";
import Fees from "./pages/admissions/Fees";
import Register from "./pages/admissions/Register";
import Trial from "./pages/admissions/Trial";

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
          <Route path="/about/founder" element={<Founder />} />
          <Route path="/about/coaches" element={<Coaches />} />
          <Route path="/about/milestones" element={<Milestones />} />
          <Route path="/about/facilities" element={<Facilities />} />
          <Route path="/about/well-wishers" element={<WellWishers />} />
          
          {/* Sports Routes */}
          <Route path="/sports/roller-skating" element={<RollerSkating />} />
          <Route path="/sports/cricket" element={<Cricket />} />
          <Route path="/sports/football" element={<Football />} />
          <Route path="/sports/basketball" element={<Basketball />} />
          
          {/* Admissions Routes */}
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/admissions/fees" element={<Fees />} />
          <Route path="/admissions/register" element={<Register />} />
          <Route path="/admissions/trial" element={<Trial />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
