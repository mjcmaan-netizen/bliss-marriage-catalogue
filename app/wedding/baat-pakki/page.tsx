const categories = [
  {
    name: "Tilak Thalis",
    slug: "tilak-thalis",
    description: "Elegant tilak thalis curated for the engagement ceremony.",
  },
  {
    name: "Ring Platters",
    slug: "ring-platters",
    description: "Beautifully presented ring platters for the special moment.",
  },
  {
    name: "Srifal",
    slug: "srifal",
    description: "Traditional srifal presentations with a premium finish.",
  },
  {
    name: "Godh Dhana",
    slug: "godh-dhana",
    description: "Thoughtfully presented Godh Dhana designs for the celebration.",
  },
  {
    name: "Money Shagun",
    slug: "money-shagun",
    description: "Premium shagun presentations for gifting with elegance.",
  },
  {
    name: "Return Favors",
    slug: "return-favors",
    description: "Curated return favors for your guests.",
  },
];

export default function BaatPakkiPage() {
  return (
    <main className="min-h-screen bg-[#f8f3eb] text-[#2b211b]">

      {/* Header */}
      <section className="px-6 py-16 md:py-24 text-center border-b border-[#d8cbbb]">
        <p className="text-xs tracking-[0.35em] uppercase text-[#9a7652]">
          Bliss Giftings
        </p>

        <h1 className="mt-5 text-5xl md:text-7xl font-serif">
          Baat Pakki
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-[#6d5b4d] leading-8">
          Elegant gifting and presentation details for the beautiful beginning
          of a wedding journey.
        </p>
      </section>

      {/* Categories */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">

          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[#9a7652]">
              Explore
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-serif">
              Baat Pakki Collection
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#d8cbbb] border border-[#d8cbbb]">

            {categories.map((category, index) => (
              <a
                key={category.slug}
                href={`/wedding/baat-pakki/${category.slug}`}
                className="group min-h-[280px] bg-[#f8f3eb] p-8 flex flex-col justify-between hover:bg-[#efe5d7] transition"
              >

                <span className="text-sm tracking-[0.2em] text-[#9a7652]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-2xl md:text-3xl font-serif">
                    {category.name}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#6d5b4d]">
                    {category.description}
                  </p>

                  <div className="mt-6 text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition">
                    Explore →
                  </div>
                </div>

              </a>
            ))}

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#d8cbbb] px-6 py-10 text-center">
        <p className="font-serif text-xl">
          Bliss Giftings
        </p>

        <p className="mt-2 text-sm text-[#6d5b4d]">
          Premium gifting & celebration details
        </p>

        <a
          href="https://wa.me/919998920644"
          className="inline-block mt-5 text-sm tracking-[0.15em] uppercase text-[#9a7652]"
        >
          Enquire on WhatsApp
        </a>
      </footer>

    </main>
  );
}
