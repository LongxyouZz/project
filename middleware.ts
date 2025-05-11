import React from "react";
import { updateSession } from "./src/supabase/middleware";
import { type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // Call the updateSession function to manage session-related logic
  return await updateSession(request);
}

export const config = {
  matcher: [
    // Exclude:
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    // - image formats (svg, png, jpg, jpeg, gif, webp)
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
