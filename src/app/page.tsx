"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormSection from "@/components/FormSection";
import ResultSection from "@/components/ResultSection";
import { partners } from "@/data/partners";

type Option = {
  id: string;
  title: string;
  description: string;
};

export default function Home() {
  const [selected, setSelected] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const options: Option[] = [
    {
      id: "strategy",
      title: "1. Strategy & Governance",
      description: "Leadership, compliance, and long-term direction.",
    },
    {
      id: "risk",
      title: "2. AI Risk Intelligence",
      description: "AI-based threat detection and monitoring.",
    },
    {
      id: "zeroTrust",
      title: "3. Zero Trust Architecture",
      description: "Identity-first security approach.",
    },
    {
      id: "defense",
      title: "4. Defense in Depth",
      description: "Layered security across systems.",
    },
    {
      id: "cloud",
      title: "5. Cloud Security",
      description: "Secure cloud infrastructure.",
    },
    {
      id: "data",
      title: "6. Data Protection",
      description: "Encryption and privacy controls.",
    },
    {
      id: "automation",
      title: "7. AI & Automation",
      description: "SOAR, AI agents, automation.",
    },
    {
      id: "incident",
      title: "8. Incident Response",
      description: "SOC and threat response.",
    },
    {
      id: "iot",
      title: "9. IoT Security",
      description: "Device and edge protection.",
    },
    {
      id: "people",
      title: "10. Workforce Enablement",
      description: "Training and productivity tools.",
    },
    {
      id: "compliance",
      title: "11. Compliance",
      description: "ISO, NIST, regulations.",
    },
    {
      id: "monitoring",
      title: "12. Monitoring & Observability",
      description: "Real-time visibility and insights.",
    },
  ];

  const filteredPartners =
    selected.length > 0
      ? partners.filter((partner) =>
          partner.category.some((cat) => selected.includes(cat))
        )
      : [];

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

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <h1 className="text-4xl font-semibold tracking-tight max-w-3xl">
          Identify your business and technology priorities
        </h1>

        <p className="text-gray-600 mt-5 max-w-2xl">
          Select areas where your organization needs improvement. We map your
          needs to the right strategies, technologies, and partners.
        </p>
      </div>

      {/* FORM */}
      <FormSection
        options={options}
        selected={selected}
        setSelected={setSelected}
        onSubmit={handleSubmit}
      />

      {/* RESULT */}
      {showResult && <ResultSection partners={filteredPartners} />}

      <Footer />
    </div>
  );
}