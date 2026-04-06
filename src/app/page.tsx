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
  {
    id: "strategy",
    title: "1. Strategy & Governance",
    description:
      "Leadership, risk appetite, and regulatory alignment (GDPR, NIS2, AI Act).",
  },
  {
    id: "risk",
    title: "2. AI-Powered Risk & Threat Intelligence",
    description:
      "AI-driven risk analysis, threat hunting, and global monitoring.",
  },
  {
    id: "zeroTrust",
    title: "3. Zero Trust Architecture",
    description:
      "MFA, identity security, least privilege, and continuous verification.",
  },
  {
    id: "defense",
    title: "4. Defense in Depth",
    description:
      "EDR, XDR, SIEM, and layered protection systems.",
  },
  {
    id: "cloud",
    title: "5. Cloud & Network Security",
    description:
      "Secure cloud environments, VPN, and 5G/6G readiness.",
  },
  {
    id: "data",
    title: "6. Data Protection & Encryption",
    description:
      "Encryption, DLP, backups, and privacy by design.",
  },
  {
    id: "automation",
    title: "7. AI & Automation",
    description:
      "SOAR, AI agents, and automated response systems.",
  },
  {
    id: "incident",
    title: "8. Incident Response",
    description:
      "24/7 SOC, breach recovery, and forensic analysis.",
  },
  {
    id: "iot",
    title: "9. OT & IoT Security",
    description:
      "Industry 4.0, IoT, and ICS/SCADA protection.",
  },
  {
    id: "people",
    title: "10. Employee Training",
    description:
      "Awareness programs, phishing simulations, and certifications.",
  },
  {
    id: "compliance",
    title: "11. Compliance & Standards",
    description:
      "ISO 27001, NIST, and regulatory compliance.",
  },
  {
    id: "monitoring",
    title: "12. Monitoring & Improvement",
    description:
      "Audits, KPIs, and continuous security improvement.",
  },
];

  const partners = [
    {
      name: "Sophos",
      logo: "/sophos.png",
      category: ["security", "risk", "defense", "cloud"],
      description: "Advanced AI-powered cybersecurity platform.",
      points: [
        "Endpoint and network security",
        "Threat detection",
        "Cloud protection",
      ],
    },
    {
      name: "Fortra",
      logo: "/fortra.png",
      category: ["security", "data", "compliance", "risk"],
      description: "Cybersecurity and compliance solutions.",
      points: [
        "Data protection",
        "Compliance automation",
        "Threat intelligence",
      ],
    },
    {
      name: "Motadata",
      logo: "/motadata.png",
      category: ["monitoring", "incident", "cloud"],
      description: "Observability and ITSM platform.",
      points: [
        "Monitoring systems",
        "Incident response",
        "Automation workflows",
      ],
    },
    {
      name: "Kratikal",
      logo: "/kratikal.png",
      category: ["security", "compliance", "risk"],
      description: "CERT-In cybersecurity and VAPT services.",
      points: [
        "VAPT",
        "Compliance audits",
        "Security testing",
      ],
    },
    {
      name: "QNTM Network",
      logo: "/qntm.png",
      category: ["strategy", "automation"],
      description: "Digital transformation and strategy.",
      points: [
        "Technology consulting",
        "Innovation",
        "Scalable systems",
      ],
    },
    {
      name: "Heizen",
      logo: "/heizen.png",
      category: ["automation"],
      description: "AI-driven software development.",
      points: [
        "LLM engineers",
        "Fast delivery",
        "AI systems",
      ],
    },
    {
      name: "SOTI",
      logo: "/soti.png",
      category: ["people", "iot"],
      description: "Mobile and device management.",
      points: [
        "Device monitoring",
        "Remote troubleshooting",
        "Security control",
      ],
    },
    {
      name: "We360.ai",
      logo: "/we360.png",
      category: ["people"],
      description: "Workforce productivity platform.",
      points: [
        "Employee analytics",
        "Productivity insights",
        "Compliance tracking",
      ],
    },
    {
      name: "Userful",
      logo: "/userful.png",
      category: ["monitoring"],
      description: "Enterprise visualization platform.",
      points: [
        "Video walls",
        "Real-time dashboards",
        "Data visualization",
      ],
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