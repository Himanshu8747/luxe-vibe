import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewsletterSignup = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <span className="text-sm uppercase tracking-wider text-accent">Stay Connected</span>
        <h2 className="text-3xl md:text-4xl font-playfair mt-4 mb-6">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-muted-foreground mb-8">
          Be the first to know about new collections, special events, and exclusive offers.
        </p>
        <form className="flex gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="rounded-full bg-background"
          />
          <Button type="submit" className="rounded-full px-8">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};