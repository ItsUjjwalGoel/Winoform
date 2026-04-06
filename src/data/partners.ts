export const partners = [
  {
    slug: "sophos",
    name: "Sophos",
    logo: "/sophos.png",
    category: ["risk", "defense", "cloud", "zeroTrust"],

    description:
      "Sophos is a global cybersecurity leader known for delivering advanced, AI-driven security solutions across endpoints, networks, cloud environments, and identity systems. The company focuses on preventing, detecting, and responding to threats in real time using a combination of machine learning, behavioral analytics, and expert-driven threat intelligence. With its centralized platform (Sophos Central), organizations can manage their entire security ecosystem from a single interface. Sophos also provides Managed Detection and Response (MDR) services, making enterprise-grade protection accessible even to smaller organizations.",

    work: [
      "Deploys next-generation endpoint protection using deep learning models to detect ransomware, malware, and zero-day threats before execution",
      "Provides advanced firewall and network security solutions with intrusion prevention and traffic inspection",
      "Secures cloud workloads and hybrid environments with cloud-native security tools",
      "Offers Managed Detection and Response (MDR) services with 24/7 threat monitoring by security experts",
      "Implements Zero Trust Network Access (ZTNA) ensuring continuous authentication and secure access control",
      "Delivers real-time threat intelligence powered by global research labs",
    ],

    why: [
      "Strong AI-driven threat detection capabilities reduce false positives and improve accuracy",
      "Unified platform simplifies management across endpoint, network, and cloud security",
      "Trusted globally by enterprises, SMEs, and government organizations",
      "Provides proactive threat hunting and rapid incident response",
      "Scalable solutions suitable for both small businesses and large enterprises",
    ],

    advantage:
      "Sophos differentiates itself through its synchronized security architecture where all security layers communicate with each other in real time. This allows automated threat isolation and faster response compared to traditional siloed systems.",

    bestFor: [
      "Organizations needing complete cybersecurity coverage",
      "Companies adopting Zero Trust architecture",
      "Businesses with hybrid cloud environments",
    ],

    useCases: [
      "Protecting enterprise networks from ransomware attacks",
      "Securing remote workforce access using Zero Trust",
      "Monitoring and responding to threats in real time",
    ],
  },

  {
    slug: "fortra",
    name: "Fortra",
    logo: "/fortra.png",
    category: ["data", "compliance", "risk"],

    description:
      "Fortra is a global cybersecurity and automation company focused on protecting sensitive data and ensuring regulatory compliance. It provides integrated solutions that combine data security, threat intelligence, and compliance automation into a single ecosystem. Fortra is widely used in industries such as finance, healthcare, and government where regulatory requirements are strict and data protection is critical.",

    work: [
      "Implements Data Loss Prevention (DLP) systems to prevent data leaks",
      "Automates compliance processes for GDPR, HIPAA, ISO, and other frameworks",
      "Provides vulnerability assessment and threat intelligence tools",
      "Secures file transfers and sensitive communications using encryption",
      "Monitors insider threats and suspicious activities",
    ],

    why: [
      "Strong expertise in compliance and regulatory environments",
      "Reduces manual compliance workload through automation",
      "Integrated security ecosystem instead of fragmented tools",
      "Helps organizations maintain audit readiness continuously",
    ],

    advantage:
      "Fortra excels in compliance-driven environments by embedding governance and regulatory controls directly into its security solutions, making it highly efficient for organizations handling sensitive data.",

    bestFor: [
      "Financial institutions",
      "Healthcare organizations",
      "Companies with strict regulatory requirements",
    ],

    useCases: [
      "Automating compliance audits",
      "Preventing sensitive data leaks",
      "Securing file transfers across organizations",
    ],
  },

  {
    slug: "motadata",
    name: "Motadata",
    logo: "/motadata.png",
    category: ["monitoring", "incident", "cloud"],

    description:
      "Motadata is an AI-powered observability and IT operations platform that enables organizations to monitor infrastructure, analyze logs, and automate IT service management. It provides real-time insights into systems and applications, helping IT teams detect anomalies, resolve incidents faster, and maintain high availability.",

    work: [
      "Monitors infrastructure, networks, and applications in real time",
      "Uses AI-based anomaly detection for predictive insights",
      "Provides ITSM tools for ticketing and incident management",
      "Automates repetitive IT operations",
      "Correlates logs and events for root cause analysis",
    ],

    why: [
      "Unified platform for monitoring and ITSM",
      "AI-driven insights improve decision making",
      "Reduces downtime and improves system reliability",
      "Enhances operational efficiency",
    ],

    advantage:
      "Motadata integrates observability with service management, allowing organizations to detect and resolve issues within the same platform, significantly reducing response time.",

    bestFor: [
      "IT operations teams",
      "Enterprises managing complex infrastructure",
      "Organizations needing real-time monitoring",
    ],

    useCases: [
      "Detecting system failures before impact",
      "Automating IT workflows",
      "Improving service availability",
    ],
  },

  {
    slug: "kratikal",
    name: "Kratikal",
    logo: "/kratikal.png",
    category: ["compliance", "risk"],

    description:
      "Kratikal is a CERT-In empanelled cybersecurity firm specializing in vulnerability assessment, penetration testing, and compliance audits. It helps organizations identify security weaknesses and align with industry standards.",

    work: [
      "Performs vulnerability assessment and penetration testing (VAPT)",
      "Conducts compliance audits for ISO, NIST, and other standards",
      "Identifies and fixes security vulnerabilities",
      "Provides cybersecurity consulting and awareness training",
    ],

    why: [
      "Government-recognized cybersecurity provider",
      "Strong expertise in compliance and audits",
      "Hands-on testing approach",
      "Provides actionable insights",
    ],

    advantage:
      "Kratikal provides deep technical security assessments combined with compliance expertise, making it ideal for organizations preparing for audits.",

    bestFor: [
      "Organizations preparing for certifications",
      "Enterprises needing security audits",
    ],

    useCases: [
      "Security testing of applications",
      "Compliance readiness",
    ],
  },

  {
    slug: "qntm-network",
    name: "QNTM Network",
    logo: "/qntm.png",
    category: ["strategy", "automation"],

    description:
      "QNTM Network is a technology-driven company focused on digital transformation, combining strategy, innovation, and execution to help businesses scale in the digital age.",

    work: [
      "Provides digital transformation consulting",
      "Builds scalable software systems",
      "Integrates modern technologies into business processes",
      "Supports innovation and product development",
    ],

    why: [
      "Strong focus on innovation",
      "Flexible and scalable solutions",
      "Cross-industry expertise",
    ],

    advantage:
      "QNTM bridges business strategy and technology execution effectively, enabling organizations to innovate faster.",

    bestFor: [
      "Startups and enterprises undergoing transformation",
    ],

    useCases: [
      "Building scalable platforms",
      "Modernizing legacy systems",
    ],
  },

  {
    slug: "heizen",
    name: "Heizen",
    logo: "/heizen.png",
    category: ["automation"],

    description:
      "Heizen is an AI-driven software engineering company focused on delivering high-quality applications using LLM-based development and agile teams.",

    work: [
      "Develops AI-powered applications",
      "Provides LLM engineering solutions",
      "Builds scalable backend systems",
      "Accelerates development cycles",
    ],

    why: [
      "AI-first development approach",
      "Fast delivery",
      "Highly skilled engineers",
    ],

    advantage:
      "Heizen reduces development time significantly using AI-powered workflows.",

    bestFor: [
      "AI startups",
      "Product companies",
    ],

    useCases: [
      "Building AI products",
      "Rapid MVP development",
    ],
  },

  {
    slug: "soti",
    name: "SOTI",
    logo: "/soti.png",
    category: ["people", "iot"],

    description:
      "SOTI provides enterprise mobility management solutions that help organizations manage and secure mobile devices and endpoints.",

    work: [
      "Manages mobile devices and endpoints",
      "Provides remote troubleshooting",
      "Deploys applications securely",
    ],

    why: [
      "Complete device control",
      "Improves efficiency",
      "Secure operations",
    ],

    advantage:
      "SOTI enables full control over enterprise mobility ecosystems.",

    bestFor: [
      "Logistics and field operations",
    ],

    useCases: [
      "Managing employee devices",
      "Remote troubleshooting",
    ],
  },

  {
    slug: "we360-ai",
    name: "We360.ai",
    logo: "/we360.png",
    category: ["people"],

    description:
      "We360.ai is a workforce analytics platform that helps organizations improve productivity using real-time insights.",

    work: [
      "Tracks employee productivity",
      "Provides analytics dashboards",
      "Optimizes resource allocation",
    ],

    why: [
      "Improves efficiency",
      "Provides insights",
      "Easy to use",
    ],

    advantage:
      "We360 enables data-driven workforce management.",

    bestFor: [
      "Remote teams",
      "Enterprises",
    ],

    useCases: [
      "Improving productivity",
      "Monitoring teams",
    ],
  },

  {
    slug: "userful",
    name: "Userful",
    logo: "/userful.png",
    category: ["monitoring"],

    description:
      "Userful is an enterprise visualization platform enabling organizations to manage and display data across large-scale environments.",

    work: [
      "Manages video walls",
      "Provides data visualization",
      "Centralized control systems",
    ],

    why: [
      "Scalable platform",
      "Real-time data",
      "Secure system",
    ],

    advantage:
      "Userful excels in large-scale visualization and control.",

    bestFor: [
      "Control rooms",
      "Enterprises",
    ],

    useCases: [
      "Monitoring dashboards",
      "Visualizing data",
    ],
  },
];