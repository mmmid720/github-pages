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
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";

type DacAmpType = {
  id: string;
  brand: string;
  model: string;
  fullName: string;
  description: string;
  price: number;
  imageUrl: string;
  type: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
};

type SortOption = "newest" | "price-asc" | "price-desc";
type FilterOption = "all" | "wired" | "wireless";

export default function DacAmpClient({
  dacAmps,
}: {
  dacAmps: DacAmpType[];
}) {
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [filterBy, setFilterBy] = useState<FilterOption>("all");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const filteredAndSortedDacAmps = useMemo(() => {
    let result = [...dacAmps];

    // Apply filter
    if (filterBy === "wired") {
      result = result.filter((d) => d.type === "유선");
    } else if (filterBy === "wireless") {
      result = result.filter(
        (d) => d.type === "무선" || d.type === "유선/무선"
      );
    }

    // Apply sort
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else {
      // newest - already sorted by createdAt desc from server
    }

    return result;
  }, [dacAmps, sortBy, filterBy]);

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
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-accent transition-colors text-xs"
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
            <h2 className="text-3xl font-bold mb-2">DAC/AMP 카탈로그</h2>
            <p className="text-muted-foreground">
              다양한 DAC/AMP들을 둘러보고 비교해보세요.
            </p>
          </div>

          {/* Stats and Filters */}
          <div className="mb-8 space-y-4">
            <div className="p-4 border border-border rounded-lg bg-background/50">
              <div className="text-sm text-muted-foreground">
                총{" "}
                <span className="font-semibold text-foreground">
                  {filteredAndSortedDacAmps.length}
                </span>
                개의 DAC/AMP
              </div>
            </div>

            {/* Filter and Sort Controls */}
            <div className="flex flex-wrap gap-3">
              {/* Sort Controls */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">정렬:</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => setSortBy("newest")}
                    className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                      sortBy === "newest"
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:bg-accent"
                    }`}
                  >
                    최신순
                  </button>
                  <button
                    onClick={() => setSortBy("price-asc")}
                    className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                      sortBy === "price-asc"
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:bg-accent"
                    }`}
                  >
                    가격 낮은순
                  </button>
                  <button
                    onClick={() => setSortBy("price-desc")}
                    className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                      sortBy === "price-desc"
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:bg-accent"
                    }`}
                  >
                    가격 높은순
                  </button>
                </div>
              </div>

              {/* Filter Controls */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">필터:</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => setFilterBy("all")}
                    className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                      filterBy === "all"
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:bg-accent"
                    }`}
                  >
                    전체
                  </button>
                  <button
                    onClick={() => setFilterBy("wired")}
                    className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                      filterBy === "wired"
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:bg-accent"
                    }`}
                  >
                    유선만
                  </button>
                  <button
                    onClick={() => setFilterBy("wireless")}
                    className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                      filterBy === "wireless"
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:bg-accent"
                    }`}
                  >
                    무선만
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* DAC/AMP Grid */}
          {filteredAndSortedDacAmps.length === 0 ? (
            <div className="text-center py-12">
              <RadioReceiver className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                조건에 맞는 DAC/AMP가 없습니다.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredAndSortedDacAmps.map((dacAmp) => (
                <div
                  key={dacAmp.id}
                  className="group border border-border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="aspect-square bg-white relative overflow-hidden">
                    <img
                      src={dacAmp.imageUrl}
                      alt={dacAmp.fullName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-muted-foreground mb-1">
                      {dacAmp.brand}
                    </div>
                    <h4 className="text-base font-semibold mb-1.5">
                      {dacAmp.model}
                    </h4>
                    <p className="text-muted-foreground text-xs mb-2 line-clamp-2">
                      {dacAmp.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary">
                        {dacAmp.price.toLocaleString()}원
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {dacAmp.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
