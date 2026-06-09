import { useState, type FormEvent } from "react";
import {
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  CheckCircle2,
  Send,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

const CONTACT_EMAIL = "techbridgesd@gmail.com";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // No backend is wired up, so we open the visitor's email client with the
    // message pre-filled. To collect submissions automatically instead, connect
    // a free service like Formspree (see the README) and POST `form` to it.
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    const subject = encodeURIComponent(
      form.subject || "Message from the TechBridge SD website",
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const inputClass =
    "w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none";

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build the bridge together"
        subtitle="Run a senior center, want to volunteer, or have a question? Send us a message — we read every one."
      />

      <section className="container-wide py-16 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        {/* Contact info */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Reach us directly</h2>
          <ul className="space-y-5">
            <li className="flex gap-4">
              <span className="grid place-items-center h-12 w-12 shrink-0 rounded-lg bg-accent/10 text-accent">
                <Mail size={22} />
              </span>
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-muted-foreground hover:text-accent break-all"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="grid place-items-center h-12 w-12 shrink-0 rounded-lg bg-accent/10 text-accent">
                <MapPin size={22} />
              </span>
              <div>
                <p className="font-semibold">Where we work</p>
                <p className="text-muted-foreground">
                  Senior centers across San Diego, California
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <p className="font-semibold mb-3">Follow along</p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="TechBridge SD on Facebook"
                className="p-3 rounded-lg bg-secondary text-primary hover:bg-accent hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="TechBridge SD on Instagram"
                className="p-3 rounded-lg bg-secondary text-primary hover:bg-accent hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="TechBridge SD on LinkedIn"
                className="p-3 rounded-lg bg-secondary text-primary hover:bg-accent hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-border bg-card p-7 md:p-9 shadow-sm">
          {sent ? (
            <div className="text-center py-10">
              <CheckCircle2 className="mx-auto text-accent mb-4" size={56} />
              <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
              <p className="text-muted-foreground max-w-sm mx-auto">
                Your email app should have opened with your message ready to
                send. If it didn&apos;t, email us directly at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-accent underline"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => setSent(false)}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-2xl font-bold">Send us a message</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block font-medium mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={update("name")}
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-medium mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block font-medium mb-1.5">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={update("subject")}
                  className={inputClass}
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  className={inputClass}
                  placeholder="Tell us a little about yourself or your senior center…"
                />
              </div>
              <Button type="submit" variant="accent" size="lg" className="w-full font-semibold">
                Send message <Send size={18} />
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                This form opens your email app. To collect messages
                automatically, connect a service like Formspree (see README).
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
