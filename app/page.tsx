import ClientSuccessStories from "@/src/components/ClientSuccessStories";
import App from "@/src/components/ExpertiseAnimation";
import ExpertiseStatement from "@/src/components/ExpertiseStatement";
import Footer from "@/src/components/Footer";
import { Hero } from "@/src/components/Hero";
import Industries from "@/src/components/Industries";
import Integrations from "@/src/components/Integrations";
import OurProcess from "@/src/components/OurProcess";
import Services from "@/src/components/Services";
import TrustedExcellence from "@/src/components/TrustedExcellence";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import Counter from "@/src/services/CounterService";
import Link from "next/link";
import ParallaxEffect from "./../src/components/Parallax";

const solutions = [
  {
    title: "Dynamics 365 CRM",
    description: "Complete implementation",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
        />
        <circle cx="9" cy="7" r="4" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
        />
      </svg>
    ),
    iconBg: "bg-cyan-500",
  },
  {
    title: "Azure Cloud",
    description: "Secure infrastructure",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        />
      </svg>
    ),
    iconBg: "bg-emerald-500",
  },
  {
    title: "AI Automation",
    description: "Smart workflows",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
        />
      </svg>
    ),
    iconBg: "bg-orange-500",
  },
];

const stats = [
  {
    value: "15+",
    label: "Projects Delivered",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "24/7",
    label: "Support Available",
  },
];

const benefits = [
  {
    number: "01",
    title: "Business First",
    description:
      "We understand your business requirements before designing the right technology solution.",
  },
  {
    number: "02",
    title: "Microsoft Expertise",
    description:
      "Deep expertise across Dynamics 365, Azure, Power Platform and modern enterprise technologies.",
  },
  {
    number: "03",
    title: "Scalable Solutions",
    description:
      "Solutions designed to grow with your business while maintaining security, performance and reliability.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      <Hero/>

      {/* Industries */}
      <section>
           <Industries/>
      </section>

      {/* Trusted Excellence */}
      <section>
        <TrustedExcellence/>
      </section>

      {/* Expertise Statement */}
      <section>
          <ExpertiseStatement/>
      </section>

      {/* Services */}
      <section className="">
        <Services/>
      </section>
    
      {/* Why Choose Us */}
      <section>
        <WhyChooseUs/>
      </section>

      {/* Our Process */}
      <section>
        <OurProcess/>
      </section>

      {/* Integrations  Technologies */}
      <section>
        <Integrations/>
      </section>

      {/* Client Success Stories */}
      <section>
        <ClientSuccessStories/>
      </section>

      <section>
        <Footer/>
      </section>
    </main>
  );
}