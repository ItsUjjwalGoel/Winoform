"use client";

import PartnerCard from "./PartnerCard";

type Partner = {
  name: string;
  logo: string;
  description: string;
};

type ResultSectionProps = {
  partners: Partner[];
};

export default function ResultSection({ partners }: ResultSectionProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 mt-14">
      <h2 className="text-xl font-semibold">Recommended Partners</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {partners.map((partner) => (
          <PartnerCard key={partner.name} partner={partner} />
        ))}
      </div>
    </div>
  );
}