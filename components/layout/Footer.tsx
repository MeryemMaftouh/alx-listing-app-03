// components/layout/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#1f1f1f]">
      {/* top green strip */}
      <div className="h-5 bg-emerald-600" />

      {/* main content */}
      <div className="w-full px-6 md:px-8 lg:px-10 py-14">
        <div className="grid grid-cols-1 items-start gap-y-12 gap-x-24 md:grid-cols-10">
          {/* Brand (wider) */}
          <div className="md:col-span-4">
            <h3 className="text-2xl font-extrabold text-gray-100 leading-none mb-6">alx</h3>
            <p className="mt-0 max-w-[56ch] text-[15px] leading-7 text-gray-400">
              ALX is a platform where travelers can discover and book unique, comfortable,
              and affordable lodging options worldwide. From cozy city apartments and tranquil
              countryside retreats to exotic beachside villas, ALX connects you with the perfect
              place to stay for any trip.
            </p>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-gray-200 leading-none mt-1 mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-gray-100">Apartments in Dubai</Link></li>
              <li><Link href="#" className="hover:text-gray-100">Hotels in New York</Link></li>
              <li><Link href="#" className="hover:text-gray-100">Villa in Spain</Link></li>
              <li><Link href="#" className="hover:text-gray-100">Mansion in Indonesia</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2"> 
            <h4 className="text-lg font-semibold text-gray-200 leading-none mt-1 mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-gray-100">About us</Link></li>
              <li><Link href="#" className="hover:text-gray-100">Blog</Link></li>
              <li><Link href="#" className="hover:text-gray-100">Career</Link></li>
              <li><Link href="#" className="hover:text-gray-100">Customers</Link></li>
              <li><Link href="#" className="hover:text-gray-100">Brand</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div  className="md:col-span-2">
            <h4 className="text-lg font-semibold text-gray-200 leading-none mt-1 mb-6">Help</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-gray-100">Support</Link></li>
              <li><Link href="#" className="hover:text-gray-100">Cancel booking</Link></li>
              <li><Link href="#" className="hover:text-gray-100">Refunds Process</Link></li>
            </ul>
          </div>

          {/* optional spacer to balance on lg */}
          <div className="hidden lg:block lg:col-span-1" />
        </div>
      </div>

      {/* divider + legal row */}
      <div className="w-full px-6 md:px-8 lg:px-10">
        <div className="border-t border-white/10 py-5 text-sm text-gray-400 md:flex md:items-center md:justify-between">
          <p className="md:max-w-[62%]">
            Some hotel requires you to cancel more than 24 hours before check-in. Details{" "}
            <Link href="#" className="text-emerald-400 underline-offset-2 hover:underline">here</Link>
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2 md:mt-0">
            <li><Link href="#" className="hover:text-gray-100">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-gray-100">Policy service</Link></li>
            <li><Link href="#" className="hover:text-gray-100">Cookies Policy</Link></li>
            <li><Link href="#" className="hover:text-gray-100">Partners</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
