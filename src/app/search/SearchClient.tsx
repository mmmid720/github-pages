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
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import DeviceModal from "@/components/DeviceModal";

type BaseDevice = {
  id: string;
  brand: string;
  model: string;
  fullName: string;
  description: string;
  price: number;
  imageUrl: string;
  type: string;
  category: string;
  purchaseUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
};

type AudioItem = BaseDevice & {
  itemType: "headphone" | "speaker" | "dacAmp";
};

type SearchClientProps = {
  headphones: BaseDevice[];
  speakers: BaseDevice[];
  dacAmps: BaseDevice[];
};

export default function SearchClient({
  headphones,
  speakers,
  dacAmps,
}: SearchClientProps) {
  const searchParams = useSearchParams();
  const [isSearchOpen, setIsSearchOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDevice, setSelectedDevice] = useState<AudioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  const allItems: AudioItem[] = useMemo(() => {
    return [
      ...headphones.map((item) => ({ ...item, itemType: "headphone" as const })),
      ...speakers.map((item) => ({ ...item, itemType: "speaker" as const })),
      ...dacAmps.map((item) => ({ ...item, itemType: "dacAmp" as const })),
    ];
  }, [headphones, speakers, dacAmps]);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    return allItems.filter(
      (item) =>
        item.brand.toLowerCase().includes(query) ||
        item.model.toLowerCase().includes(query) ||
        item.fullName.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query)
    );
  }, [searchQuery, allItems]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is handled by the useMemo above
  };

  const handleCardClick = (item: AudioItem) => {
    setSelectedDevice(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedDevice(null), 300);
  };

  const getItemTypeLabel = (itemType: string) => {
    switch (itemType) {
      case "headphone":
        return "헤드폰";
      case "speaker":
        return "스피커";
      case "dacAmp":
        return "DAC/AMP";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(var(--muted))_1px,transparent_0)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-center pt-16 px-4 pb-4">
          <div
            className={`flex items-center gap-1.5 border border-border/40 bg-background/40 backdrop-blur-md px-1.5 py-1 shadow-lg relative z-10 transition-all duration-300 ease-out ${
              isSearchOpen ? "w-[500px] max-w-[90vw]" : "w-auto"
            }`}
            style={{ borderRadius: "2rem" }}
          >
            
            <Link
              href="/"
              className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-accent transition-colors"
              aria-label="Home"
            >
              <Home className="w-3.5 h-3.5" />
            </Link>

            
            <div
              className={`w-px h-5 bg-border/40 transition-all duration-300 ${
                isSearchOpen ? "opacity-0 w-0" : "opacity-100 w-px"
              }`}
            />

            
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

            
            <div
              className={`w-px h-5 bg-border/40 hidden sm:block transition-all duration-300 ${
                isSearchOpen ? "opacity-0 w-0" : "opacity-100 w-px"
              }`}
            />

            
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

            
            <div
              className={`w-px h-5 bg-border/40 hidden sm:block transition-all duration-300 ${
                isSearchOpen ? "opacity-100 w-px" : "opacity-0 w-0"
              }`}
            />

            
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
        
        <main className="max-w-7xl mx-auto px-6 py-12 pt-32">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">검색</h2>
            {searchQuery ? (
              <p className="text-muted-foreground">
                &quot;{searchQuery}&quot; 검색 결과:{" "}
                <span className="font-semibold text-foreground">
                  {searchResults.length}
                </span>
                개 제품
              </p>
            ) : (
              <p className="text-muted-foreground">
                검색어를 입력하거나 카테고리를 선택해주세요.
              </p>
            )}
          </div>

          {searchQuery && searchResults.length > 0 ? (
            /* Search Results Grid */
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {searchResults.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleCardClick(item)}
                  className="group border border-border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="aspect-square bg-white relative overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.fullName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-muted-foreground">
                        {item.brand}
                      </span>
                      <span className="text-xs text-primary font-medium">
                        {getItemTypeLabel(item.itemType)}
                      </span>
                    </div>
                    <h4 className="text-base font-semibold mb-1.5">
                      {item.model}
                    </h4>
                    <p className="text-muted-foreground text-xs mb-2 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary">
                        {item.price.toLocaleString()}원
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {item.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : searchQuery && searchResults.length === 0 ? (
            /* No Results */
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                &quot;{searchQuery}&quot;에 대한 검색 결과가 없습니다.
              </p>
            </div>
          ) : (
            /* Categories */
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
          )}
        </main>
      </div>

      
      <DeviceModal
        device={selectedDevice}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        deviceType={selectedDevice?.itemType}
      />
    </div>
  );
}
