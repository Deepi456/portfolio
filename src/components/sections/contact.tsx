"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { Magnetic } from "@/components/animations/magnetic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactFormSchema, type ContactFormValues } from "@/lib/contact-schema";
import { profile } from "@/data/profile";

const contactDetails = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined },
  { icon: Github, label: "GitHub", value: `@${profile.githubHandle}`, href: profile.github },
  { icon: Linkedin, label: "LinkedIn", value: `@${profile.linkedinHandle}`, href: profile.linkedin },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // No backend is wired up in this build — this opens the user's mail
    // client pre-filled with the message as a functional fallback.
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`)}`;
    window.location.href = mailto;
    await new Promise((r) => setTimeout(r, 500));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-max grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal direction="right">
          <span className="eyebrow">08 — Contact</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Let&apos;s build <span className="text-gradient">something</span>
          </h2>
          <p className="mt-4 max-w-md text-ink-muted">
            Open to data science and software engineering roles, internships, and
            interesting collaborations. Reach out directly below.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            {contactDetails.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={`group flex items-center gap-4 rounded-xl p-2 transition-colors ${
                  item.href ? "hover:bg-white/[0.04]" : "cursor-default"
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-accent-violet">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                    {item.label}
                  </p>
                  <p className="text-sm text-ink-primary group-hover:text-accent-violet">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <form onSubmit={handleSubmit(onSubmit)} className="glass-strong rounded-3xl p-8 sm:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" className="mt-2" {...register("name")} />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="What's this about?"
                className="mt-2"
                {...register("subject")}
              />
              {errors.subject && (
                <p className="mt-1.5 text-xs text-red-400">{errors.subject.message}</p>
              )}
            </div>

            <div className="mt-6">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me a bit about the opportunity or project..."
                className="mt-2"
                {...register("message")}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
              )}
            </div>

            <Magnetic className="mt-8 block">
              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                {submitted ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="h-4 w-4" /> Message ready to send
                  </motion.span>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </>
                )}
              </Button>
            </Magnetic>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
