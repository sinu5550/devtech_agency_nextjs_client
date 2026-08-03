import ServicesHero from "./sections/ServicesHero";
import ServicesList from "./sections/ServicesList";
// import ProcessWorkflow from "@/components/ProcessWorkflow";
// import ServicesCTA from "@/components/ServicesCTA";

export const metadata = {
  title: "Our Services | DevTech",
  description:
    "Meet the DevTech team. We architect digital experiences with clean code and high-end design.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-20 px-4 md:px-8 font-sans transition-colors duration-300 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <ServicesHero />
        <ServicesList />
        {/* <ProcessWorkflow /> */}
        {/* <ServicesCTA />  */}
      </div>
    </main>
  );
}
