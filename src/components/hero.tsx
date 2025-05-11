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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-rose-50 opacity-70" />

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <MotionH1
              className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 tracking-tight font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Discover{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600">
                Omorose
              </span>{" "}
              Fragrances
            </MotionH1>

            <MotionP
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Indulge in our curated collection of exclusive perfumes. Elevate
              your presence with scents crafted by the world's finest perfumers.
            </MotionP>

            <MotionDiv
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/dashboard"
                className="inline-flex items-center px-8 py-4 text-white bg-amber-700 rounded-lg hover:bg-amber-800 transition-colors text-lg font-medium"
              >
                Shop Collection
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="#featured"
                className="inline-flex items-center px-8 py-4 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-lg font-medium"
              >
                Featured Scents
              </Link>
            </MotionDiv>

            <MotionDiv
              className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-amber-600" />
                <span>Authentic Luxury Brands</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-amber-600" />
                <span>Free Shipping on Orders $75+</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-amber-600" />
                <span>Exclusive Collections</span>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
}
