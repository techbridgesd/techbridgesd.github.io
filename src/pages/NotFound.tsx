import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] grid place-items-center text-center px-6 pt-24">
      <div>
        <p className="text-7xl font-bold text-accent">404</p>
        <h1 className="text-2xl md:text-3xl font-bold mt-4">Page not found</h1>
        <p className="text-muted-foreground mt-3 max-w-md mx-auto">
          Sorry, we couldn&apos;t find that page. Let&apos;s get you back on the
          bridge.
        </p>
        <Link to="/">
          <Button variant="accent" size="lg" className="mt-6">
            Back to home
          </Button>
        </Link>
      </div>
    </section>
  );
}
