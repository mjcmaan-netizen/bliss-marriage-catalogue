const functions = [
  { no: "01", name: "Baat Pakki", slug: "baat-pakki" },
  { no: "02", name: "Kankotri Lekhan", slug: "kankotri-lekhan" },
  { no: "03", name: "Mehendi", slug: "mehendi" },
  { no: "04", name: "Haldi", slug: "haldi" },
  { no: "05", name: "Sangeet", slug: "sangeet" },
  { no: "06", name: "Ganesh Puja / Mandva", slug: "ganesh-puja-mandva" },
  { no: "07", name: "Mata Ki Chowki", slug: "mata-ki-chowki" },
  { no: "08", name: "Mameru", slug: "mameru" },
  { no: "09", name: "Wedding Ceremony", slug: "wedding-ceremony" },
  { no: "10", name: "Wedding Reception", slug: "wedding-reception" },
  { no: "11", name: "Bachelorette", slug: "bachelorette" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f3eb] text-[#2b211b]">
      
      {/* HERO */}
      <section className="min-h-[75vh] flex flex-col items-center justify-center px-6 text-center">
        <p className="text-sm tracking-[0.35em] uppercase text-[#9a7652] mb-6">
          Bliss Giftings
        </p>

        <h1 className="text-5xl md:text-7xl font-serif tracking-tight">
          Celebrations,
          <br />
          beautifully curated.
        </h1>

        <p className="max-w-xl mt-7 text-base md:text-lg leading-8 text-[#6d5b4d]">
          Thoughtfully curated gifting, presentation and celebration details
          for every beautiful wedding moment.
        </p>

        <a
          href="#functions"
          className="mt-10 border border-[#9a7652] px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#9a7652] hover:text-white transition"
        >
          Explore Marriage Catalogue
        </a>
      </section>

      {/* FUNCTIONS */}
      <section id="functions" className="px-6 md:px-12 lg:px-20 pb-24">
        <div className="max-w-7xl mx-auto">

          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[#9a7652]">
              The Wedding Collection
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-serif">
              11 beautiful moments
            </h2>

            <p className="mt-4 max-w-2xl text-[#6d5b4d] leading-7">
              Explore our curated collection across every celebration,
              ceremony and gifting moment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#d8cbbb] border border-[#d8cbbb]">
            {functions.map((item) => (
              <a
                key={item.no}
                href={`/wedding/${item.slug}`}
                className="group min-h-[260px] bg-[#f8f3eb] p-8 flex flex-col justify-between hover:bg-[#efe5d7] transition"
              >
                <span className="text-sm tracking-[0.2em] text-[#9a7652]">
                  {item.no}
                </span>

                <div>
                  <h3 className="text-2xl md:text-3xl font-serif">
                    {item.name}
                  </h3>

                  <div className="mt-6 text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition">
                    Explore →
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#d8cbbb] px-6 py-10 text-center">
        <p className="font-serif text-xl">Bliss Giftings</p>

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
