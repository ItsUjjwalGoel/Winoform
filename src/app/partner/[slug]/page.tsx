import { partners } from "@/data/partners";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Partner } from "@/types";

export default function PartnerPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: Partner | undefined = partners.find(
    (p) => p.slug.toLowerCase() === params.slug.toLowerCase()
  );

  if (!data) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-semibold">Partner not found</h2>
        <Link href="/" className="mt-4 inline-block text-gray-500">
          ← Back
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-900">

      {/* BACK */}
      <div className="max-w-5xl mx-auto px-6 pt-8">
        <Link href="/" className="text-sm text-gray-500 hover:text-black">
          ← Back
        </Link>
      </div>

      {/* HEADER */}
      <div className="max-w-5xl mx-auto px-6 py-12 border-b">
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={data.logo}
            alt={data.name}
            width={56}
            height={56}
          />
          <h1 className="text-3xl font-semibold tracking-tight">
            {data.name}
          </h1>
        </div>

        <p className="text-gray-600 max-w-2xl leading-relaxed">
          {data.description}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mt-5">
          {data.category.map((c, i) => (
            <span
              key={i}
              className="text-xs border px-3 py-1 rounded-md text-gray-600"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-14">

        {/* WHAT THEY DO */}
        <section>
          <h2 className="text-lg font-semibold mb-6">
            What they do
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {data.work.map((w, i) => (
              <div
                key={i}
                className="border rounded-lg p-5 text-sm text-gray-700 leading-relaxed"
              >
                {w}
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section>
          <h2 className="text-lg font-semibold mb-6">
            Why choose {data.name}
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {data.why.map((w, i) => (
              <div
                key={i}
                className="border rounded-lg p-5 text-sm text-gray-800"
              >
                {w}
              </div>
            ))}
          </div>
        </section>

        {/* ADVANTAGE */}
        <section className="bg-gray-50 border rounded-xl p-8">
          <h2 className="text-lg font-semibold mb-4">
            Key advantage
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-3xl">
            {data.advantage}
          </p>
        </section>

        {/* OPTIONAL: USE CASES */}
        {data.useCases && (
          <section>
            <h2 className="text-lg font-semibold mb-6">
              Where it fits best
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {data.useCases.map((u, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-5 text-sm text-gray-700"
                >
                  {u}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="border-t pt-10 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            Need help implementing this solution?
          </p>

          <button className="bg-black text-white px-6 py-2.5 text-sm rounded-md hover:bg-gray-800">
            Contact
          </button>
        </section>

      </div>

      <Footer />
    </div>
  );
}