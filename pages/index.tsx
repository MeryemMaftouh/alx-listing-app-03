// pages/index.tsx
import { useMemo, useState } from "react";
import { HERO_BG, FILTER_LABELS, PROPERTYLISTINGSAMPLE } from "@/constants";
import type { PropertyProps } from "@/interfaces";
import Pill from "@/components/common/Pill";
import PropertyCard from "@/components/common/Card";

/* ---------- Filter predicates ---------- */
const includesCI = (arr: string[], needle: string) =>
  arr.map((x) => x.toLowerCase()).includes(needle.toLowerCase());

const FILTERS: Record<string, (p: PropertyProps) => boolean> = {
  // Consider "Top Villa" as high-rated and/or villa-ish
  "Top Villa": (p) =>
    p.rating >= 4.85 || p.category.some((c) => /luxury|villa/i.test(c)),

  "Self Checkin": (p) => p.category.some((c) => /self\s*checkin/i.test(c)),

  // Use presence of a discount as a proxy for “Free Reschedule”
  "Free Reschedule": (p) => !!p.discount && p.discount !== "",

  // Placeholders (no-op) unless you later wire real flags
  "Book Now, Pay Later": () => true,
  "Instant Book": () => true,

  Pool: (p) => p.category.some((c) => /pool/i.test(c)),
};

/* If a label isn't in FILTERS, fall back to category match */
const getPredicate = (label: string) =>
  FILTERS[label] ?? ((p: PropertyProps) => includesCI(p.category, label));

export default function HomePage() {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (label: string) =>
    setSelected((cur) =>
      cur.includes(label) ? cur.filter((x) => x !== label) : [...cur, label]
    );

  // Clean up accidental leading/trailing spaces in constants
  const FILTERS_CLEAN = useMemo(() => FILTER_LABELS.map((l) => l.trim()), []);

  // AND logic: property must satisfy ALL selected filters
  const filtered: PropertyProps[] = useMemo(() => {
    if (selected.length === 0) return PROPERTYLISTINGSAMPLE;
    return PROPERTYLISTINGSAMPLE.filter((p) =>
      selected.every((label) => getPredicate(label)(p))
    );
  }, [selected]);

  // Which filter badges apply to a property (shown on each card)
  const getBadgesFor = (p: PropertyProps) =>
    FILTERS_CLEAN.filter((label) => getPredicate(label)(p)).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[28px]
                        h-[36vh] md:h-[42vh] lg:h-[48vh] max-h-[520px]">
          <img
            src={HERO_BG}
            alt="Find your favorite place"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
            <h1 className="max-w-4xl text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Find your favorite place here!
            </h1>
            <p className="mt-3 max-w-2xl text-sm md:text-base lg:text-lg text-white/90">
              The best prices for over 2 million properties worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="mx-auto mt-8 w-full max-w-7xl px-4">
        <div className="flex flex-wrap items-center gap-2">
          <Pill
            label="All"
            active={selected.length === 0}
            onClick={() => setSelected([])}
          />
          {FILTERS_CLEAN.map((label) => (
            <Pill
              key={label}
              label={label}
              active={selected.includes(label)}
              onClick={() => toggle(label)}
            />
          ))}
        </div>
      </section>

      {/* Listings */}
      <section className="mx-auto mt-6 w-full max-w-7xl px-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Places to stay</h2>
          <div className="text-sm text-gray-600">{filtered.length} results</div>
        </div>

        <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item) => (
            <PropertyCard key={item.name} item={item} badges={getBadgesFor(item)} />
          ))}
        </div>
      </section>
    </>
  );
}
