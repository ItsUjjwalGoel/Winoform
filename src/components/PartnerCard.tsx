"use client";

import Image from "next/image";

type Partner = {
  name: string;
  logo: string;
  description: string;
};

export default function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="border rounded-lg p-5">
      <Image
        src={partner.logo}
        alt={partner.name}
        width={80}
        height={80}
        className="mb-4"
      />

      <h3 className="text-lg font-semibold">{partner.name}</h3>
      <p className="text-sm text-gray-600 mt-2">{partner.description}</p>
    </div>
  );
}