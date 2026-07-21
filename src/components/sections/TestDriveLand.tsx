"use client";

import Image from "next/image";

const CARDS = [
  { bg: "/images/testdrive/test11.png", vehicle: "/images/testdrive/v1.png" },
  { bg: "/images/testdrive/test22.png", vehicle: "/images/testdrive/v22.png" },
  { bg: "/images/testdrive/test33.png", vehicle: "/images/testdrive/v3.png" },
];

const WPP_URL =
  "https://wa.me/59897734751?text=" +
  encodeURIComponent("Hola, me gustaría hacer un test drive");

export default function TestDriveLand() {
  return (
    <section className="bg-[#f4f5f7] py-24 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-slate-400" />
            <p
              className="text-slate-500 text-[11px] font-semibold tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Test Drive
            </p>
            <span className="w-8 h-px bg-slate-400" />
          </div>

          <h2
            className="text-5xl lg:text-6xl text-slate-900 leading-none tracking-tight mb-5 uppercase"
            style={{ fontFamily: "var(--font-oswald)", fontWeight: 600 }}
          >
            Viví la experiencia{" "}
            <span className="text-gradient">al volante</span>
          </h2>

          <p
            className="text-slate-400 text-base lg:text-lg leading-relaxed font-light"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Conocé nuestros vehículos de test drive y descubrí cómo se sienten
            realmente en la calle. Probá su confort, tecnología y desempeño
            antes de elegir.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden"
            >
              {/* Background image — top 60% visible */}
              <div className="relative w-full aspect-20/9">
                <Image
                  src={card.bg}
                  alt={`Test drive ${i + 1}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>

              {/* Vehicle image — centered, scales on hover */}
              <div className="relative flex justify-center items-center h-48 -mt-10 px-4 pb-4">
                <div className="relative w-full h-full transition-transform duration-300 ease-out group-hover:scale-110">
                  <Image
                    src={card.vehicle}
                    alt={`Vehículo ${i + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 90vw, 30vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Single CTA ── */}
        <div className="flex justify-center">
          <a
            href={WPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zM17 14.382c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
            </svg>
            <span className="text-base font-medium tracking-widest uppercase">
              Agendar test drive
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
