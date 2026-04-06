"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Partner } from "@/types";

export default function PartnerCard({ partner }: { partner: Partner }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/partner/${partner.slug}`)}
      className="border p-5 rounded-lg cursor-pointer hover:border-black transition"
    >
      <Image
        src={partner.logo}
        alt={partner.name}
        width={48}
        height={48}
        className="mb-4 object-contain"
      />

      <h3 className="font-semibold">{partner.name}</h3>
      <p className="text-sm text-gray-600">{partner.description}</p>
    </div>
  );
}