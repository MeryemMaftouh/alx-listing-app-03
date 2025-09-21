// components/layout/Header.tsx
import Link from "next/link";
import { Search } from "lucide-react";
import { ACCOM_TYPES } from "@/constants/accommodationTypes";

export default function Header() {
  const active = "Villa"; // underline this one like the mockup

  return (
    <header className="bg-white">
      {/* Row 1 — Logo • Segmented Search • Auth (no border here) */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          alx
        </Link>

        {/* Segmented search: pure white, subtle ring + shadow to be clearly visible */}
        <div className="hidden flex-1 justify-center md:flex">
          <div className="flex w-full max-w-3xl items-center rounded-full bg-white ring-1 ring-gray-300 px-4 py-2 shadow-md">
            {/* Location */}
            <div className="flex-1 px-3">
              <div className="text-[11px] uppercase tracking-wide text-gray-600">Location</div>
              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                placeholder="Search for destination"
                aria-label="Location"
              />
            </div>

            <div className="mx-2 h-8 w-px bg-gray-200" />

            {/* Check in */}
            <div className="flex-1 px-3">
              <div className="text-[11px] uppercase tracking-wide text-gray-600">Check in</div>
              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                placeholder="Add date"
                aria-label="Check in"
              />
            </div>

            <div className="mx-2 h-8 w-px bg-gray-200" />

            {/* Check out */}
            <div className="flex-1 px-3">
              <div className="text-[11px] uppercase tracking-wide text-gray-600">Check out</div>
              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                placeholder="Add date"
                aria-label="Check out"
              />
            </div>

            <div className="mx-2 h-8 w-px bg-gray-200" />

            {/* People */}
            <div className="flex-1 px-3">
              <div className="text-[11px] uppercase tracking-wide text-gray-600">People</div>
              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                placeholder="Add guest"
                aria-label="People"
              />
            </div>

            {/* Round yellow search button */}
            <button
              aria-label="Search"
              className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-white ring-1 ring-amber-300/60 hover:bg-amber-500"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Auth */}
        <div className="flex items-center gap-3">
          <button className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">
            Sign in
          </button>
          <button className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50">
            Sign up
          </button>
        </div>
      </div>

      {/* Thin separator line between rows (always visible) */}
      <div className="h-px w-full bg-gray-200" />

      {/* Row 2 — Types (very soft gray icons/labels, underline active) */}
      <nav className="mx-auto w-full max-w-7xl overflow-x-auto px-4 py-3">
        <ul className="flex min-w-max list-none items-start gap-6">
          {ACCOM_TYPES.map(({ label, Icon }) => {
            const isActive = label === active;
            return (
              <li key={label} className="flex flex-col items-center">
                <Icon className={`h-6 w-6 ${isActive ? "text-gray-600" : "text-gray-400"}`} />
                <span className={`mt-1 text-xs ${isActive ? "text-gray-600" : "text-gray-500"}`}>
                  {label}
                </span>
                {isActive && <span className="mt-1 h-[2px] w-8 rounded bg-emerald-600" />}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
