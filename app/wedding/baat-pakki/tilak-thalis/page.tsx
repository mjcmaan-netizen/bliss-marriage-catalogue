const products = [
  {
    name: "Pink Floral Tilak Thali",
    price: "₹1,999 onwards",
  },
  {
    name: "Golden Floral Tilak Thali",
    price: "₹1,999 onwards",
  },
  {
    name: "Pearl White Handheld Tilak Thali",
    price: "₹1,999 onwards",
  },
  {
    name: "Pastel Floral Tilak Thali",
    price: "₹1,999 onwards",
  },
  {
    name: "Classic Pearl Floral Tilak Thali",
    price: "₹1,999 onwards",
  },
  {
    name: "Royal Blue Floral Tilak Thali",
    price: "₹1,999 onwards",
  },
  {
    name: "Blush Pink Duo Tilak Thali Set",
    price: "₹1,999 onwards",
  },
  {
    name: "Pink Ganesha Floral Tilak Thali",
    price: "₹1,999 onwards",
  },
];

export default function TilakThalisPage() {
  return (
    <main className="min-h-screen bg-[#f8f3eb] text-[#2b211b]">

      {/* Header */}
      <section className="px-6 py-16 md:py-24 text-center border-b border-[#d8cbbb]">
        <p className="text-xs tracking-[0.35em] uppercase text-[#9a7652]">
          Baat Pakki
        </p>

        <h1 className="mt-5 text-5xl md:text-7xl font-serif">
          Tilak Thalis
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-[#6d5b4d] leading-8">
          Beautifully curated tilak thalis designed to make your engagement
          gifting presentation feel truly special.
        </p>
      </section>

      {/* Products */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {products.map((product, index) => (
              <article
                key={product.name}
                className="group"
              >

                {/* Image Placeholder */}
                <div className="aspect-[4/5] bg-[#eee5d9] border border-[#d8cbbb] flex items-center justify-center">
                  <div className="text-center px-6">
                    <span className="text-xs tracking-[0.25em] uppercase text-[#9a7652]">
                      Product Image
                    </span>

                    <p className="mt-3 text-sm text-[#8a7869]">
                      Image {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                </div>

                {/* Product Details */}
                <div className="pt-5">
                  <p className="text-xs tracking-[0.2em] uppercase text-[#9a7652]">
                    Tilak Thali
                  </p>

                  <h2 className="mt-2 text-xl md:text-2xl font-serif">
                    {product.name}
                  </h2>

                  <p className="mt-3 text-sm text-[#6d5b4d]">
                    Elegant presentation, thoughtfully curated for your
                    celebration.
                  </p>

                  <p className="mt-4 text-sm">
                    <span className="text-[#6d5b4d]">Starting from </span>
                    <span className="font-medium">
                      {product.price}
                    </span>
                  </p>

                  <a
                    href="https://wa.me/919998920644"
                    className="inline-block mt-5 border border-[#9a7652] px-6 py-3 text-xs tracking-[0.18em] uppercase hover:bg-[#9a7652] hover:text-white transition"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* Shipping */}
      <section className="px-6 py-10 border-t border-[#d8cbbb] text-center">
        <p className="text-sm text-[#6d5b4d]">
          Shipping charges extra. Calculated based on destination, package
          size, weight and delivery requirements.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#d8cbbb] px-6 py-10 text-center">
        <p className="font-serif text-xl">
          Bliss Giftings
        </p>

        <p className="mt-2 text-sm text-[#6d5b4d]">
          Premium gifting & celebration details
        </p>
      </footer>

    </main>
  );
}
