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
import { useRouter } from "next/navigation";
import DeviceModal from "@/components/DeviceModal";

type Device = {
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

type HomeClientProps = {
  headphones: Device[];
  speakers: Device[];
  dacAmps: Device[];
};

export default function HomeClient({
  headphones,
  speakers,
  dacAmps,
}: HomeClientProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const [selectedDeviceType, setSelectedDeviceType] = useState<"headphone" | "speaker" | "dacAmp" | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleCardClick = (device: Device, type: "headphone" | "speaker" | "dacAmp") => {
    setSelectedDevice(device);
    setSelectedDeviceType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedDevice(null);
      setSelectedDeviceType(undefined);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background relative">
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

      <main className="relative">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              playsInline
              loop
              ref={(el) => {
                if (el) el.playbackRate = 1.2;
              }}
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/5 to-background/50" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-white border border-white/20 backdrop-blur-sm">
                Audio Catalog
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-white drop-shadow-lg">
              Your Ultimate <br />
              <span className="text-white">Audio Gear Catalog</span>
            </h1>
            <p className="text-xl md:text-1xl font-normal text-white/60 max-w-2xl mx-auto mb-8 drop-shadow-md">
              탐색하고, 비교하고, 완벽한 사운드 시그니처를 찾아보세요.
            </p>
          </div>
        </section>

        <section className="py-8 max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6">Featured Audio Gear</h2>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Headphones className="w-4 h-4 text-primary" />
              <h3 className="text-lg font-semibold">Headphones</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {headphones.slice(0, 3).map((headphone) => (
                <div
                  key={headphone.id}
                  onClick={() => handleCardClick(headphone, "headphone")}
                  className="group border border-border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="aspect-square bg-white relative overflow-hidden">
                    <img
                      src={headphone.imageUrl}
                      alt={headphone.fullName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-muted-foreground mb-1">
                      {headphone.brand}
                    </div>
                    <h4 className="text-base font-semibold mb-1.5">
                      {headphone.model}
                    </h4>
                    <p className="text-muted-foreground text-xs mb-2 line-clamp-2">
                      {headphone.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary">
                        {headphone.price.toLocaleString()}원
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {headphone.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Speaker className="w-4 h-4 text-primary" />
              <h3 className="text-lg font-semibold">Speakers</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {speakers.slice(0, 3).map((speaker) => (
                <div
                  key={speaker.id}
                  onClick={() => handleCardClick(speaker, "speaker")}
                  className="group border border-border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="aspect-square bg-white relative overflow-hidden">
                    <img
                      src={speaker.imageUrl}
                      alt={speaker.fullName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-muted-foreground mb-1">
                      {speaker.brand}
                    </div>
                    <h4 className="text-base font-semibold mb-1.5">
                      {speaker.model}
                    </h4>
                    <p className="text-muted-foreground text-xs mb-2 line-clamp-2">
                      {speaker.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary">
                        {speaker.price.toLocaleString()}원
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {speaker.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <RadioReceiver className="w-4 h-4 text-primary" />
              <h3 className="text-lg font-semibold">DAC/AMP</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {dacAmps.slice(0, 3).map((dacAmp) => (
                <div
                  key={dacAmp.id}
                  onClick={() => handleCardClick(dacAmp, "dacAmp")}
                  className="group border border-border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="aspect-square bg-white relative overflow-hidden">
                    <img
                      src={dacAmp.imageUrl}
                      alt={dacAmp.fullName}
                      className="w-full h-full object-cover scale-95"
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
          </div>
        </section>
      </main>

      <footer className="border-t border-border mt-12">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 Audio Catalog. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="https://github.com/mmmid720/github-pages"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>

      <DeviceModal
        device={selectedDevice}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        deviceType={selectedDeviceType}
      />
    </div>
  );
}
