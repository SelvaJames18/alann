import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0a0a0f", fontFamily: "Poppins, sans-serif" }}>
      <ScrollToTop />
      <Navigation />
      <main className="flex-1 pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
