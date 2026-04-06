import PartnerCard from "./PartnerCard";
import { Partner } from "@/types";

type Props = {
  partners: Partner[];
};

export default function ResultSection({ partners }: Props) {
  if (!partners.length) {
    return (
      <div className="text-center mt-10 text-gray-500">
        No partners found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 mt-20">
      <h2 className="text-xl font-semibold mb-6">
        Recommended Partners
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((p) => (
          <PartnerCard key={p.slug} partner={p} />
        ))}
      </div>
    </div>
  );
}