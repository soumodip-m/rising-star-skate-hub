import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface SportCardProps {
  name: string;
  description: string;
  image: string;
  path: string;
  featured?: boolean;
  showBadge?: boolean;
}

export default function SportCard({ name, description, image, path, featured, showBadge = true }: SportCardProps) {
  return (
    <Link to={path} className="block group">
      <Card
        className={`overflow-hidden hover-lift transition-all duration-300 ${
          featured ? "border-2 border-primary shadow-glow" : ""
        }`}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {featured && showBadge && (
            <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
              FLAGSHIP
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
            {name}
          </h3>
        </div>
        <div className="p-5">
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
            Learn more
            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
