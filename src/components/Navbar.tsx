import Image from "next/image";
import winnocation from '../../public/WinnoVation.png'
export default function Navbar() {
  return (
    <div className="border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <Image src={winnocation} alt="" className="h-16 "></Image>
      </div>
    </div>
  );
}