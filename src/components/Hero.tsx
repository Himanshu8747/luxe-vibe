import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen p-16 flex items-center">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-up">
          <span className="inline-block text-sm uppercase tracking-wider text-accent">New Collection</span>
          <h1 className="text-4xl md:text-6xl font-playfair font-medium leading-tight">
            Discover Timeless Elegance
          </h1>
          <p className="text-muted-foreground text-lg max-w-md">
            Explore our curated collection of luxury fashion and lifestyle pieces, designed for those who appreciate refined aesthetics.
          </p>
          <Button size="lg" className="rounded-full">
            Shop Collection
          </Button>
        </div>
        <div className="relative aspect-[6/5] bg-muted rounded-lg overflow-hidden animate-fade-in">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070"
            alt="Luxury Fashion"
            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
};