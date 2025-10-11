import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  achievement?: string;
}

export default function TestimonialCard({ quote, name, role, achievement }: TestimonialCardProps) {
  return (
    <Card className="p-6 hover-lift">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-foreground mb-4 italic">"{quote}"</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
        {achievement && (
          <div className="text-right">
            <div className="text-xs text-muted-foreground">Achievement</div>
            <div className="text-sm font-semibold text-primary">{achievement}</div>
          </div>
        )}
      </div>
    </Card>
  );
}
