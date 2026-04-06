export default function Footer() {
  return (
    <div className="border-t border-gray-200 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-6 text-xs text-gray-500 flex justify-between">
        <p>© {new Date().getFullYear()} Winnovation</p>
      </div>
    </div>
  );
}