"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "DevTech transformed our entire web presence. The new platform loads 3× faster and our conversion rate jumped 40% in the first month. Exceptional engineering quality.",
    author: "Rashid Al-Mansuri",
    title: "CEO",
    company: "NexaRetail",
    initials: "RA",
  },
  {
    quote:
      "Working with DevTech felt like having a senior technical co-founder. They understood the product deeply and delivered an app that our users genuinely love.",
    author: "Priya Shankar",
    title: "Product Lead",
    company: "Finflow Labs",
    initials: "PS",
  },
  {
    quote:
      "The attention to detail, communication, and post-launch support have been outstanding. DevTech is our go-to partner for all future digital initiatives.",
    author: "James Okonkwo",
    title: "CTO",
    company: "BuildSmart Inc.",
    initials: "JO",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-background py-20 md:py-28 px-4 border-b border-border">
      <div className="max-w-6xl mx-auto">
        {/* Header - no badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 border-b border-border pb-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1]">
            Client Reviews &amp; Feedback
          </h2>
        </motion.div>

        {/* Cards - Sharp Boxy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-none p-7 flex flex-col justify-between hover:border-foreground/30 transition-colors duration-200"
            >
              {/* Quote */}
              <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-8 h-8 rounded-none border border-border bg-secondary font-mono text-xs font-bold flex items-center justify-center text-foreground shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.title} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating strip */}
        <div className="flex items-center justify-center gap-4 mt-10 text-xs text-muted-foreground font-mono">
          <span><strong className="text-foreground font-bold">4.9/5</strong> AVERAGE RATING</span>
          <span>·</span>
          <span><strong className="text-foreground font-bold">50+</strong> PROJECTS DELIVERED</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
