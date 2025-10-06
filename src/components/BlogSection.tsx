import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";

const BlogSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest news, tips, and insights from the world of roller skating
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Training Tips</span>
              </div>
              <CardTitle>Essential Roller Skating Techniques</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Learn the fundamental techniques that every roller skater should master, from beginners to advanced athletes.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://sterile-guard-ai.lovable.app/" target="_blank" rel="noopener noreferrer">
                  Read More <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Success Stories</span>
              </div>
              <CardTitle>Journey to National Championships</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Follow our students' inspiring journeys from their first steps on skates to national podiums.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://sterile-guard-ai.lovable.app/" target="_blank" rel="noopener noreferrer">
                  Read More <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button variant="sports" size="lg" asChild>
            <a href="https://sterile-guard-ai.lovable.app/" target="_blank" rel="noopener noreferrer">
              Visit Our Blog <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
