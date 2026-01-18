"use client";

export default function SocialProof() {
  const companies = [
    { name: "Aetheris", style: "font-bold tracking-tighter" },
    { name: "VERTEX", style: "font-light tracking-[0.3em] uppercase" },
    { name: "nimbus.", style: "font-black italic" },
    { name: "Pulse", style: "font-medium" },
    { name: "ACME AI", style: "font-semibold tracking-tight" },
    { name: "Lumina", style: "font-serif italic" },
    { name: "SYNX", style: "font-bold tracking-widest uppercase" },
    { name: "Orizon", style: "font-light" },
  ];

  const duplicatedCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-xs font-medium text-zinc-500 uppercase tracking-[0.2em] mb-16">
          Powering the next generation of startups
        </p>

        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          }}
        >
          <div className="flex animate-scroll whitespace-nowrap">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-12 lg:px-20 group transition-all duration-500"
              >
                <span
                  className={`
                    text-2xl md:text-3xl 
                    text-zinc-600 
                    group-hover:text-white 
                    transition-all duration-500 
                    cursor-default
                    ${company.style}
                  `}
                >
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .animate-scroll {
          display: flex;
          width: fit-content;
          animation: scroll 40s linear infinite;
        }

        /* Ralentir au survol pour la lisibilité */
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
