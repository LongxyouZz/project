import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  CheckCircle2,
  Shield,
  Users,
  Zap,
  Star,
  Sparkles,
  Heart,
} from "lucide-react";
import { createClient } from "../supabase/server";
import Link from "next/link";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Featured perfumes data with local image src
  const featuredPerfumes = [
    {
      id: 1,
      name: "Brooke",
      brand: "Classy Perfume",
      price: 15,
      discountedPrice: 10,
      src: "/assets/images/produtes/Brooke.jpg",
      description: "ពណ៍ ខ្មៅ ( Black 🖤 ) ក្លិនស្រាបែបសុភាពបុរស",
    },
    {
      id: 2,
      name: "Zee-y",
      brand: "Classy Perfume",
      price: 15,
      discountedPrice: 10,
      src: "/assets/images/produtes/zee.jpg",
      description: "ពណ៍ ខៀវ ( Blue 💙 ) ក្លិនបែប sexy កុលាបផ្អមតិចៗ",
    },
    {
      id: 3,
      name: "Bieber",
      brand: "Classy Perfume",
      price: 15,
      discountedPrice: 10,
      src: "/assets/images/produtes/Bieber.jpg",
      description: "Rich amber and exotic spices for a warm, luxurious scent",
    },
    {
      id: 4,
      name: "My honey",
      brand: "Classy Perfume",
      price: 15,
      discountedPrice: 10,
      src: "/assets/images/produtes/Myhoney.jpg",
      description: "ពណ៍ ផ្កាឈូក ( Pink 💖 ) ក្លិន Girly បែបសុភាពៗ",
    },
        {
      id: 5,
      name: "Grasse",
      brand: "Classy Perfume",
      price: 15,
      discountedPrice: 10,
      src: "/assets/images/produtes/Grasse.jpg",
      description: "ពណ៍ ស្វាយ ( Purple 💜 ) ក្លិនស្រាលស្រទន់ប្រហើឈ្ងុយដូច Fruity",
    },
        {
      id: 6,
      name: "She's Paris",
      brand: "Classy Perfume",
      price: 15,
      discountedPrice: 10,
      src: "/assets/images/produtes/She's-paris.jpg",
      description: "ពណ៍ សាច់ ( Beige 💛 ) ក្លិនផ្អែមបែប Sexy",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      <Navbar />
      <Hero />

      {/* Featured Perfumes Section */}
      <section id="featured" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Featured Fragrances
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our curated selection of exclusive perfumes from the
              world's most prestigious houses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPerfumes.map((perfume) => (
              <div
                key={perfume.id}
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={perfume.src}
                    alt={perfume.name}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      display: "block",
                    }}
                    className="object-cover group-hover:scale-105 transition-transform duration-500 w-full h-full"
                  />
                  {perfume.discountedPrice && (
                    <div className="absolute top-2 right-2 bg-rose-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {Math.round(
                        (1 - perfume.discountedPrice / perfume.price) * 100,
                      )}
                      % OFF
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="text-sm text-amber-700 font-medium mb-1">
                    {perfume.brand}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{perfume.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {perfume.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      {perfume.discountedPrice ? (
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold">
                            ${perfume.discountedPrice}
                          </span>
                          <span className="text-gray-500 text-sm line-through">
                            ${perfume.price}
                          </span>
                        </div>
                      ) : (
                        <span className="text-lg font-bold">
                          ${perfume.price}
                        </span>
                      )}
                    </div>
                    <button className="text-amber-700 hover:text-amber-800">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/dashboard"
              className="inline-flex items-center px-6 py-3 text-white bg-amber-700 rounded-lg hover:bg-amber-800 transition-colors"
            >
              View All Collections
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover why our customers love shopping with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Heng",
                role: "Fragrance Enthusiast",
                quote:
                  "The selection is impeccable. I found scents here that I couldn't find anywhere else.",
              },
              {
                name: "Tony",
                role: "Loyal Customer",
                quote:
                  "The attention to detail in packaging and delivery makes every purchase feel special.",
              },
              {
                name: "Waddh",
                role: "Perfume Collector",
                quote:
                  "Their exclusive collections and limited editions are truly one of a kind.",
              },
              {
                name: "Gen",
                role: "Fashion Blogger",
                quote:
                  "I love how they curate their collections. Each scent tells a story.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="p-6 bg-amber-50 rounded-xl">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-700 to-rose-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif">
            Discover Your Signature Scent
          </h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
            Join our exclusive community and be the first to know about new
            arrivals and special offers.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center px-6 py-3 text-amber-800 bg-white rounded-lg hover:bg-amber-50 transition-colors"
          >
            Explore Collection
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}