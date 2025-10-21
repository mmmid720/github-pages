"use client";

import {
  Home,
  Info,
  Headphones,
  Speaker,
  RadioReceiver,
  Search,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SearchClient() {
  const [isSearchOpen, setIsSearchOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // For static site, search functionality would need to be implemented client-side
    // This is a placeholder for future implementation
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Dot pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(var(--muted))_1px,transparent_0)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-center pt-16 px-4 pb-4">
          <div
            className={`flex items-center gap-1.5 border border-border/40 bg-background/40 backdrop-blur-md px-1.5 py-1 shadow-lg relative z-10 transition-all duration-300 ease-out ${
              isSearchOpen ? "w-[500px] max-w-[90vw]" : "w-auto"
            }`}
            style={{ borderRadius: "2rem" }}
          >
            {/* Home Button */}
            <Link
              href="/"
              className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-accent transition-colors"
              aria-label="Home"
            >
              <Home className="w-3.5 h-3.5" />
            </Link>

            {/* Divider */}
            <div
              className={`w-px h-5 bg-border/40 transition-all duration-300 ${
                isSearchOpen ? "opacity-0 w-0" : "opacity-100 w-px"
              }`}
            />

            {/* Navigation - Hidden on mobile */}
            <div
              className={`hidden sm:flex items-center gap-0 transition-all duration-300 ${
                isSearchOpen ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
              }`}
            >
              <Link
                href="/about"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full hover:bg-accent transition-colors text-xs"
              >
                <Info className="w-3.5 h-3.5" />
                <span>About</span>
              </Link>
              <Link
                href="/headphones"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full hover:bg-accent transition-colors text-xs"
              >
                <Headphones className="w-3.5 h-3.5" />
                <span>Headphones</span>
              </Link>
              <Link
                href="/speakers"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full hover:bg-accent transition-colors text-xs"
              >
                <Speaker className="w-3.5 h-3.5" />
                <span>Speakers</span>
              </Link>
              <Link
                href="/dac-amp"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full hover:bg-accent transition-colors text-xs"
              >
                <RadioReceiver className="w-3.5 h-3.5" />
                <span>DAC/AMP</span>
              </Link>
            </div>

            {/* Divider */}
            <div
              className={`w-px h-5 bg-border/40 hidden sm:block transition-all duration-300 ${
                isSearchOpen ? "opacity-0 w-0" : "opacity-100 w-px"
              }`}
            />

            {/* Search Button / Search Bar */}
            {!isSearchOpen ? (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-accent transition-colors"
                aria-label="Open search"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            ) : (
              <form
                onSubmit={handleSearch}
                className="flex items-center gap-1.5 flex-1 transition-all duration-300"
              >
                <Search className="w-3.5 h-3.5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search audio gear..."
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-sm px-2 py-1 w-full placeholder:text-muted-foreground"
                />
              </form>
            )}

            {/* Divider before close button */}
            <div
              className={`w-px h-5 bg-border/40 hidden sm:block transition-all duration-300 ${
                isSearchOpen ? "opacity-100 w-px" : "opacity-0 w-0"
              }`}
            />

            {/* Close Button */}
            <button
              onClick={() => setIsSearchOpen(false)}
              className={`flex items-center justify-center w-8 h-8 rounded-full hover:bg-accent transition-all duration-300 ${
                isSearchOpen
                  ? "opacity-100 pointer-events-auto relative"
                  : "opacity-0 pointer-events-none absolute"
              }`}
              aria-label="Close search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      <div className="relative z-10">
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-12 pt-32">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">검색</h2>
            <p className="text-muted-foreground">
              검색 기능은 현재 개발 중입니다. 각 카테고리 페이지를 방문해주세요.
            </p>
          </div>

          {/* Categories */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/headphones"
              className="group border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <Headphones className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">헤드폰</h3>
              <p className="text-muted-foreground text-sm">
                다양한 헤드폰 제품을 둘러보세요
              </p>
            </Link>

            <Link
              href="/speakers"
              className="group border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <Speaker className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">스피커</h3>
              <p className="text-muted-foreground text-sm">
                다양한 스피커 제품을 둘러보세요
              </p>
            </Link>

            <Link
              href="/dac-amp"
              className="group border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <RadioReceiver className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">DAC/AMP</h3>
              <p className="text-muted-foreground text-sm">
                다양한 DAC/AMP 제품을 둘러보세요
              </p>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
