"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormSection from "@/components/FormSection";
import ResultSection from "@/components/ResultSection";

export default function Home() {
  const [selected, setSelected] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const options = [
    { id: "strategy", title: "Strategy & Governance", description: "Leadership-driven governance and planning." },
    { id: "risk", title: "Risk & Threat Intelligence", description: "Identify and monitor risks." },
    { id: "cloud", title: "Cloud & Infrastructure", description: "Secure and scalable cloud systems." },
    { id: "data", title: "Data Protection", description: "Ensure privacy and encryption." },
    { id: "automation", title: "AI & Software Development", description: "Build intelligent systems and apps." },
    { id: "monitoring", title: "Monitoring & Observability", description: "Real-time system visibility." },
    { id: "people", title: "Workforce Productivity", description: "Improve team efficiency." },
    { id: "security", title: "Cybersecurity & Defense", description: "Protect systems from threats." },
  ];

  const partners = [
    {
      name: "Sophos",
      logo: "/sophos.png",
      category: ["security", "risk"],
      description: "Advanced cybersecurity solutions.",
      points: ["Threat prevention", "AI security", "Unified platform"],
    },
    {
      name: "Fortra",
      logo: "/fortra.png",
      category: ["security", "data", "risk"],
      description: "Cybersecurity and compliance solutions.",
      points: ["Data protection", "Compliance automation", "Threat intelligence"],
    },
    {
      name: "Motadata",
      logo: "/motadata.png",
      category: ["monitoring", "cloud"],
      description: "Observability and ITSM platform.",
      points: ["Monitoring", "Automation", "IT workflows"],
    },
    {
      name: "Kratikal",
      logo: "/kratikal.png",
      category: ["security"],
      description: "Cybersecurity and compliance.",
      points: ["VAPT", "Compliance", "Security posture"],
    },
    {
      name: "QNTM Network",
      logo: "/qntm.png",
      category: ["strategy", "automation"],
      description: "Digital transformation solutions.",
      points: ["Scalable systems", "Innovation", "Tech integration"],
    },
    {
      name: "Heizen",
      logo: "/heizen.png",
      category: ["automation"],
      description: "AI-powered software development.",
      points: ["LLM engineers", "Fast delivery", "High quality"],
    },
    {
      name: "SOTI",
      logo: "/soti.png",
      category: ["people"],
      description: "Mobile device management.",
      points: ["Device control", "Remote fixes", "Analytics"],
    },
    {
      name: "We360.ai",
      logo: "/we360.png",
      category: ["people"],
      description: "Workforce analytics platform.",
      points: ["Productivity boost", "Resource optimization", "Compliance"],
    },
    {
      name: "Userful",
      logo: "/userful.png",
      category: ["monitoring"],
      description: "Enterprise visualization platform.",
      points: ["Video walls", "Data visualization", "Scalable AV"],
    },
  ];

  const filteredPartners = partners.filter((partner) =>
    partner.category.some((cat) => selected.includes(cat))
  );

  const handleSubmit = () => {
    if (selected.length === 0) {
      alert("Please select at least one option");
      return;
    }
    setShowResult(true);
  };

  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <h1 className="text-4xl font-semibold tracking-tight max-w-3xl">
          Identify your business and technology priorities
        </h1>

        <p className="text-gray-600 mt-5 max-w-2xl">
          Select areas where your organization needs improvement. We map your
          needs to the right strategies, technologies, and partners.
        </p>
      </div>

      <FormSection
        options={options}
        selected={selected}
        setSelected={setSelected}
        onSubmit={handleSubmit}
      />

      {showResult && <ResultSection partners={filteredPartners} />}

      <Footer />
    </div>
  );
}