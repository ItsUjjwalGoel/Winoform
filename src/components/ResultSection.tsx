import PartnerCard from "./PartnerCard";

export default function ResultSection({ partners }: any) {
  if (!partners.length) {
    return (
      <div className="max-w-6xl mx-auto px-6 mt-20 text-center text-gray-600">
        No matching partners found.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 mt-24">
      <h2 className="text-2xl font-semibold mb-6">
        Recommended partners
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((p: any, i: number) => (
          <PartnerCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}