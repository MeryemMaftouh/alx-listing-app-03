// components/common/Card.tsx
import { BedDouble, ShowerHead, Users, Star } from "lucide-react";
import type { PropertyProps } from "@/interfaces";

type CardProps = {
  item: PropertyProps;
  badges?: string[]; // <-- filters to display on the card
};

export default function Card({ item, badges = [] }: CardProps) {
  const loc = `${item.address.state}, ${item.address.city}, ${item.address.country}`;
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(item.price);

  return (
    <div className="group flex h-full flex-col rounded-[26px] bg-white p-4 ring-1 ring-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
      {/* image */}
      <div className="relative overflow-hidden rounded-[20px]">
        <div className="aspect-[4/3] w-full">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
          {[0,1,2,3,4,5].map(i=>(
            <span key={i} className={`h-1.5 w-1.5 rounded-full ${i===2?'bg-white':'bg-white/60'}`} />
          ))}
        </div>
      </div>

      {/* FILTER TAGS (not categories) */}
      <div className="mt-3 flex flex-wrap gap-2">
        {badges.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="inline-flex h-8 items-center justify-center rounded-full
                       bg-[#F5F6F7] px-3.5 text-[13px] font-medium leading-none
                       text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* title + rating */}
      <div className="mt-3 flex items-center justify-between">
        <h3 className="text-[18px] font-medium text-gray-900">{item.name}</h3>
        <span className="inline-flex items-center gap-1 text-[13px] text-gray-700">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          {item.rating.toFixed(2)}
        </span>
      </div>

      {/* location */}
      <p className="text-[13px] text-gray-600">{loc}</p>

      {/* bottom row */}
      <div className="mt-auto flex items-center justify-between pt-4">
        <div className="inline-flex items-center gap-3 rounded-full bg-white px-3 py-1.5
                        text-[12px] text-gray-900 ring-1 ring-gray-200 shadow-sm">
          <span className="inline-flex items-center gap-1">
            <BedDouble className="h-4 w-4" /> {item.offers.bed}
          </span>
          <span className="inline-flex items-center gap-1">
            <ShowerHead className="h-4 w-4" /> {item.offers.shower}
          </span>
          <span className="inline-flex items-center gap-1">
            <Users className="h-4 w-4" /> {item.offers.occupants}
          </span>
        </div>

        <div className="text-[16px] font-semibold text-gray-900">
          {price}
          <span className="align-top text-xs font-normal text-gray-500">/n</span>
        </div>
      </div>
    </div>
  );
}
