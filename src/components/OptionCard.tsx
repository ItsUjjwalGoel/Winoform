"use client";

// ✅ Define props type
type OptionCardProps = {
  id: string;
  title: string;
  description: string;
  selected: boolean;
  onSelect: (id: string) => void;
};

export default function OptionCard({
  id,
  title,
  description,
  selected,
  onSelect,
}: OptionCardProps) {
  return (
    <div
      onClick={() => onSelect(id)}
      className={`cursor-pointer rounded-lg p-5 border transition
      ${
        selected
          ? "border-black bg-gray-50"
          : "border-gray-200 hover:border-gray-400"
      }`}
    >
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
}