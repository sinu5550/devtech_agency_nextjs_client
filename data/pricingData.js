export const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    description:
      "Ideal for small projects, personal portfolios, or landing pages.",
    monthlyPrice: 150,
    yearlyPrice: 120, // Per month calculation with 20% discount
    popular: false,
    badge: "For Individuals",
    features: [
      "Custom Self-Designed UI/UX",
      "Up to 5 Dynamic Pages",
      "Responsive & Mobile-First Design",
      "Basic SEO Optimization",
      "Contact Form Integration",
      "1 Month Free Technical Support",
    ],
    buttonText: "Get Started",
  },
  {
    id: "pro",
    name: "Professional",
    description:
      "Full-stack solution designed for growing businesses and startups.",
    monthlyPrice: 350,
    yearlyPrice: 280,
    popular: true, // Highlighted card
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Full-Stack Web App (Next.js & PostgreSQL)",
      "Authentication & Role-Based Access (RBAC)",
      "Admin Dashboard & Dynamic CMS",
      "Secure Payment Gateway Integration",
      "Advanced Security (JWT & Zod Validation)",
      "3 Months Free Technical Support",
    ],
    buttonText: "Build Your App",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description:
      "Custom industry-grade software engineered for large-scale operations.",
    monthlyPrice: 750,
    yearlyPrice: 600,
    popular: false,
    badge: "For Large Businesses",
    features: [
      "Everything in Professional",
      "Custom Microservices Architecture",
      "DevOps & AWS Cloud Deployment",
      "Docker Containerization",
      "High-Performance Database Tuning",
      "24/7 Dedicated Technical Support",
      "Priority Maintenance & SLA",
    ],
    buttonText: "Contact Sales",
  },
];

export const faqList = [
  {
    question: "What is your custom design process?",
    answer:
      "We create tailor-made UI/UX designs from scratch using Figma based on your specific requirements. Once you approve the interactive prototype, we move forward with coding using Next.js and Tailwind CSS.",
  },
  {
    question: "How long does it take to deliver a project?",
    answer:
      "Delivery timelines depend on the scope: Starter plans typically take 7-10 business days, Professional plans take 2-4 weeks, and Enterprise solutions are estimated based on complex system requirements.",
  },
  {
    question: "Do you offer post-launch maintenance and support?",
    answer:
      "Yes, every package includes a specified period of free technical support. After the initial period, you can seamlessly transition to our monthly ongoing maintenance plans.",
  },
  {
    question: "Can we request custom tech stacks or features?",
    answer:
      "Absolutely! Our engineering team specializes in MERN, Next.js, Django, PostgreSQL, MongoDB, and Prisma. We tailor the technology stack to match your performance and scalability goals.",
  },
];
