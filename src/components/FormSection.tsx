"use client";

import OptionCard from "./OptionCard";

// ✅ Define types
type Option = {
  id: string;
  title: string;
  description: string;
};

type FormSectionProps = {
  options: Option[];
  selected: string[];
  setSelected: (value: string[]) => void;
  onSubmit: () => void;
};

export default function FormSection({
  options,
  selected,
  setSelected,
  onSubmit,
}: FormSectionProps) {
  const handleSelect = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((i) => i !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 mt-14">
      <h2 className="text-xl font-semibold">Select relevant domains</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {options.map((opt) => (
          <OptionCard
            key={opt.id}
            {...opt}
            selected={selected.includes(opt.id)}
            onSelect={handleSelect}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={onSubmit}
          className="bg-black text-white px-6 py-2.5 rounded-md text-sm hover:bg-gray-800"
        >
          Get recommendations
        </button>
      </div>
    </div>
  );
}