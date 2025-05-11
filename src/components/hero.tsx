"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import framer-motion with no SSR to avoid React Server Components issues
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false },
);
const MotionH1 = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.h1),
  { ssr: false },
);
const MotionP = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.p),
  { ssr: false },
);

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Decorative blurred shape */}
      <div className="pointer-events-none absolute -top-32 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-rose-200 via-amber-100 to-white opacity-60 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-amber-200 via-white to-rose-100 opacity-40 rounded-full blur-2xl" />

      <div className="relative pt-28 pb-36 sm:pt-40 sm:pb-44">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <MotionH1
              className="text-5xl sm:text-7xl font-serif font-extrabold mb-7 tracking-tight text-gray-900"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              Elevate Your Senses
              <br />
              <span className="inline-block bg-gradient-to-r from-amber-600 via-rose-600 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
                Discover Luxury Fragrances
              </span>
            </MotionH1>
            <MotionP
              className="text-lg sm:text-2xl text-gray-700 mb-14 max-w-2xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
            >
              Experience our curated selection of exclusive scents crafted by world-renowned perfumers. Find the aroma that makes every moment unforgettable.
            </MotionP>

            <MotionDiv
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <Link
                href="/dashboard"
                className="inline-flex items-center px-9 py-4 text-lg font-semibold bg-gradient-to-r from-amber-700 via-rose-600 to-amber-500 text-white rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all"
              >
                Shop Collection
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="#featured"
                className="inline-flex items-center px-9 py-4 text-lg font-semibold bg-white/80 border border-amber-200 text-amber-700 rounded-xl shadow hover:bg-amber-50 hover:text-rose-600 transition-all"
              >
                Featured Scents
              </Link>
            </MotionDiv>

            <MotionDiv
              className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-7 text-base text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur rounded-full px-4 py-2 shadow border border-amber-100">
                <Check className="w-5 h-5 text-amber-600" />
                <span className="font-medium">Authentic Luxury Brands</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur rounded-full px-4 py-2 shadow border border-amber-100">
                <Check className="w-5 h-5 text-amber-600" />
                <span className="font-medium">Free Shipping on Orders $75+</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur rounded-full px-4 py-2 shadow border border-amber-100">
                <Check className="w-5 h-5 text-amber-600" />
                <span className="font-medium">Exclusive Collections</span>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
}