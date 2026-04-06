export default function PartnerCard({
  name,
  description,
  points,
  logo,
}: any) {
  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <img src={logo} className="w-16 h-16 object-contain" />
        <h3 className="text-base font-medium">{name}</h3>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        {description}
      </p>

      <ul className="text-sm space-y-2">
        {points.map((p: string, i: number) => (
          <li key={i}>• {p}</li>
        ))}
      </ul>
    </div>
  );
}