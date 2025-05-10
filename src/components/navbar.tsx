import Link from "next/link";
import { createClient } from "../../supabase/server";
import { Button } from "./ui/button";
import { User, UserCircle, Search, ShoppingBag } from "lucide-react";
import UserProfile from "./user-profile";

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  return (
    <nav className="w-full border-b border-gray-200 bg-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          prefetch
          className="text-2xl font-bold font-serif text-amber-800"
        >
          Luxe Scents
        </Link>

        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="#featured" className="text-gray-700 hover:text-amber-700">
            Featured
          </Link>
          <Link href="#" className="text-gray-700 hover:text-amber-700">
            Collections
          </Link>
          <Link href="#" className="text-gray-700 hover:text-amber-700">
            Brands
          </Link>
          <Link href="#" className="text-gray-700 hover:text-amber-700">
            Gift Sets
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <button className="text-gray-700 hover:text-amber-700">
            <Search className="w-5 h-5" />
          </button>

          <button className="text-gray-700 hover:text-amber-700 relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          {user ? (
            <>
              <Link
                href="/dashboard"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <Button
                  variant="outline"
                  className="border-amber-700 text-amber-700 hover:bg-amber-50"
                >
                  Dashboard
                </Button>
              </Link>
              <UserProfile />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-amber-700"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2 text-sm font-medium text-white bg-amber-700 rounded-md hover:bg-amber-800"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
