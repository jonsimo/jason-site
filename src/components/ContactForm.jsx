import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1200);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <CheckCircle className="w-12 h-12 text-primary mb-5" />
        <h3 className="font-heading text-2xl text-foreground mb-2">Message Sent</h3>
        <p className="font-body text-sm text-muted-foreground">
          Thank you for reaching out. I'll get back to you soon.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
            Name
          </label>
          <Input
            required
            placeholder="Your name"
            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground font-body h-12"
          />
        </div>
        <div>
          <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
            Email
          </label>
          <Input
            required
            type="email"
            placeholder="your@email.com"
            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground font-body h-12"
          />
        </div>
      </div>
      <div>
        <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
          Project Type
        </label>
        <Input
          placeholder="e.g. Brand Campaign, Music Video, Editorial"
          className="bg-secondary border-border text-foreground placeholder:text-muted-foreground font-body h-12"
        />
      </div>
      <div>
        <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
          Message
        </label>
        <Textarea
          required
          rows={5}
          placeholder="Tell me about your project..."
          className="bg-secondary border-border text-foreground placeholder:text-muted-foreground font-body resize-none"
        />
      </div>
      <Button
        type="submit"
        disabled={sending}
        className="h-12 px-8 font-body text-sm tracking-widest uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        {sending ? (
          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
        ) : (
          <>
            <Send size={14} className="mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}