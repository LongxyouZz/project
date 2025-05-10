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
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Featured perfumes data
  const featuredPerfumes = [
    {
      id: 1,
      name: "Midnight Orchid",
      brand: "Élégance",
      price: 129.99,
      discountedPrice: 99.99,
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&q=80",
      description: "A captivating blend of rare orchids and vanilla",
    },
    {
      id: 2,
      name: "Azure Dreams",
      brand: "Lumière",
      price: 159.99,
      discountedPrice: 129.99,
      image:
        "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=500&q=80",
      description: "Fresh citrus notes with a hint of Mediterranean breeze",
    },
    {
      id: 3,
      name: "Golden Amber",
      brand: "Opulence",
      price: 189.99,
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&q=80",
      description: "Rich amber and exotic spices for a warm, luxurious scent",
    },
    {
      id: 4,
      name: "Rose Noir",
      brand: "Élégance",
      price: 149.99,
      discountedPrice: 119.99,
      image:
        "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500&q=80",
      description: "Mysterious dark roses with hints of blackberry and musk",
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
                  <Image
                    src={perfume.image}
                    alt={perfume.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
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

      {/* Luxury Experience Section */}
      <section className="py-24 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              The Luxury Experience
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in providing an exceptional experience from discovery
              to delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Curated Selection",
                description:
                  "Each fragrance is carefully selected by our expert perfumers",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Authenticity Guaranteed",
                description:
                  "100% authentic products sourced directly from brands",
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Premium Experience",
                description:
                  "Luxury packaging and personalized service with every order",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-amber-700 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
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
                name: "Sophia R.",
                role: "Fragrance Enthusiast",
                quote:
                  "The selection is impeccable. I found scents here that I couldn't find anywhere else.",
              },
              {
                name: "James T.",
                role: "Loyal Customer",
                quote:
                  "The attention to detail in packaging and delivery makes every purchase feel special.",
              },
              {
                name: "Elena M.",
                role: "Perfume Collector",
                quote:
                  "Their exclusive collections and limited editions are truly one of a kind.",
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
