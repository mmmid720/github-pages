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

const basePath = process.env.NODE_ENV === "production" ? "/audio-catalog" : "";

export default function HomePage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background relative">
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
              <a
                href="#about"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full hover:bg-accent transition-colors text-xs"
              >
                <Info className="w-3.5 h-3.5" />
                <span>About</span>
              </a>
              <a
                href="#headphones"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full hover:bg-accent transition-colors text-xs"
              >
                <Headphones className="w-3.5 h-3.5" />
                <span>Headphones</span>
              </a>
              <a
                href="#speakers"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full hover:bg-accent transition-colors text-xs"
              >
                <Speaker className="w-3.5 h-3.5" />
                <span>Speakers</span>
              </a>
              <a
                href="#dac-amp"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full hover:bg-accent transition-colors text-xs"
              >
                <RadioReceiver className="w-3.5 h-3.5" />
                <span>DAC/AMP</span>
              </a>
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
              <div className="flex items-center gap-1.5 flex-1 transition-all duration-300">
                <Search className="w-3.5 h-3.5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search audio gear..."
                  autoFocus
                  className="flex-1 bg-transparent border-none outline-none text-sm px-2 py-1 w-full placeholder:text-muted-foreground"
                />
              </div>
            )}

            {/* Divider before close button */}
            <div
              className={`w-px h-5 bg-border/40 hidden sm:block transition-all duration-300 ${
                isSearchOpen ? "opacity-100 w-px" : "opacity-0 w-0"
              }`}
            />

            {/* Close Button - Always rendered but absolutely positioned when hidden */}
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
        {/* Background Video Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Video Background */}
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
              <source
                src={`${basePath}/videos/hero-video.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/5 to-background/50" />
          </div>
          {/* Hero Text Content */}
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

        {/* Projects Section - Featured Audio Gear */}
        <section className="py-8 max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6">Featured Audio Gear</h2>

          {/* Headphones */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Headphones className="w-4 h-4 text-primary" />
              <h3 className="text-lg font-semibold">Headphones</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {/* Headphone 1 */}
              <div className="group border border-border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-2">
                <div className="aspect-square bg-white relative overflow-hidden">
                  <img
                    src="https://shop-phinf.pstatic.net/20241023_293/1729673646093O3JpK_JPEG/43555354999852226_1705268401.jpg?type=m510"
                    alt="Sennheiser HD 660S2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-muted-foreground mb-1">
                    Sennheiser
                  </div>
                  <h4 className="text-base font-semibold mb-1.5">
                    Sennheiser HD 660S2
                  </h4>
                  <p className="text-muted-foreground text-xs mb-2 line-clamp-2">
                    오픈형 하이엔드
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      749,000원
                    </span>
                    <span className="text-xs text-muted-foreground">유선</span>
                  </div>
                </div>
              </div>

              {/* Headphone 2 */}
              <div className="group border border-border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-2">
                <div className="aspect-square bg-white relative overflow-hidden">
                  <img
                    src={`${basePath}/images/sony_mdr-mv1.png`}
                    alt="Sony MDR-MV1"
                    className="w-full h-full object-cover scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-muted-foreground mb-1">Sony</div>
                  <h4 className="text-base font-semibold mb-1.5">
                    Sony MDR-MV1
                  </h4>
                  <p className="text-muted-foreground text-xs mb-2 line-clamp-2">
                    오픈형 스튜디오 모니터링
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      498,000원
                    </span>
                    <span className="text-xs text-muted-foreground">유선</span>
                  </div>
                </div>
              </div>

              {/* Headphone 3 */}
              <div className="group border border-border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-2">
                <div className="aspect-square bg-white relative overflow-hidden flex items-center justify-center">
                  <img
                    src="https://shop-phinf.pstatic.net/20240909_42/1725856210766Aagq6_JPEG/5008662949499416_1019478271.jpg?type=m510"
                    alt="Sony MDR-MV1"
                    className="w-4/5 h-4/5 object-contain"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-muted-foreground mb-1">B&W</div>
                  <h4 className="text-base font-semibold mb-1.5">
                    B&W Px7 s2e
                  </h4>
                  <p className="text-muted-foreground text-xs mb-2 line-clamp-2">
                    블루투스
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      464,900원
                    </span>
                    <span className="text-xs text-muted-foreground">무선</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Speakers */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Speaker className="w-4 h-4 text-primary" />
              <h3 className="text-lg font-semibold">Speakers</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {/* Speaker 1 */}
              <div className="group border border-border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-2">
                <div className="aspect-square bg-white relative overflow-hidden">
                  <img
                    src="https://shop-phinf.pstatic.net/20241209_129/1733722442593Db9Tx_JPEG/62312069627560939_1062862582.jpg?type=m510"
                    alt="MR4 EDIFIER"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-muted-foreground mb-1">
                    EDIFIER
                  </div>
                  <h4 className="text-base font-semibold mb-1.5">
                    MR4 EDIFIER
                  </h4>
                  <p className="text-muted-foreground text-xs mb-2 line-clamp-2">
                    스튜디오 모니터
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      99,000원
                    </span>
                    <span className="text-xs text-muted-foreground">유선</span>
                  </div>
                </div>
              </div>

              {/* Speaker 2 */}
              <div className="group border border-border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-2">
                <div className="aspect-square bg-white relative overflow-hidden">
                  <img
                    src={`${basePath}/images/marshall_woburn-iii.png`}
                    alt="Marshall Woburn III"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-muted-foreground mb-1">
                    Marshall
                  </div>
                  <h4 className="text-base font-semibold mb-1.5">
                    Marshall Woburn III
                  </h4>
                  <p className="text-muted-foreground text-xs mb-2 line-clamp-2">
                    블루투스
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      468,000원
                    </span>
                    <span className="text-xs text-muted-foreground">무선</span>
                  </div>
                </div>
              </div>

              {/* Speaker 3 */}
              <div className="group border border-border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-2">
                <div className="aspect-square bg-white relative overflow-hidden">
                  <img
                    src="https://shop-phinf.pstatic.net/20241208_112/1733631633489Hd9f9_JPEG/46876125314281580_2088554680.jpg?type=m510"
                    alt="AURA STUDIO 4"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-muted-foreground mb-1">
                    HarmanKardon
                  </div>
                  <h4 className="text-base font-semibold mb-1.5">
                    AURA STUDIO 4
                  </h4>
                  <p className="text-muted-foreground text-xs mb-2 line-clamp-2">
                    인테리어
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      279,000원
                    </span>
                    <span className="text-xs text-muted-foreground">
                      유선/무선
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DAC/AMP */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <RadioReceiver className="w-4 h-4 text-primary" />
              <h3 className="text-lg font-semibold">DAC/AMP</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {/* DAC/AMP 1 */}
              <div className="group border border-border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-2">
                <div className="aspect-square bg-white relative overflow-hidden">
                  <img
                    src="https://shop-phinf.pstatic.net/20240705_131/17201366992394k5qc_PNG/31030379506214768_2020642195.png?type=m510"
                    alt="Qudelix-T71 USB DAC"
                    className="w-full h-full object-cover scale-95"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-muted-foreground mb-1">
                    Qudelix
                  </div>
                  <h4 className="text-base font-semibold mb-1.5">
                    Qudelix-T71 USB DAC
                  </h4>
                  <p className="text-muted-foreground text-xs mb-2 line-clamp-2">
                    20-Band EQ 디스플레이 마이크지원
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      279,200원
                    </span>
                    <span className="text-xs text-muted-foreground">유선</span>
                  </div>
                </div>
              </div>

              {/* DAC/AMP 2 */}
              <div className="group border border-border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-2">
                <div className="aspect-square bg-white relative overflow-hidden">
                  <img
                    src="https://shop-phinf.pstatic.net/20240113_73/1705101848200kBVSm_JPEG/106237736913589939_828609095.jpeg?type=m510"
                    alt="Qudelix-5K"
                    className="w-full h-full object-cover scale-85"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-muted-foreground mb-1">
                    Qudelix
                  </div>
                  <h4 className="text-base font-semibold mb-1.5">Qudelix-5K</h4>
                  <p className="text-muted-foreground text-xs mb-2 line-clamp-2">
                    블루투스
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      108,000원
                    </span>
                    <span className="text-xs text-muted-foreground">무선</span>
                  </div>
                </div>
              </div>

              {/* DAC/AMP 3 */}
              <div className="group border border-border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-2">
                <div className="aspect-square bg-white relative overflow-hidden">
                  <img
                    src="https://shop-phinf.pstatic.net/20231103_63/1699015879433ur523_JPEG/30858504985575252_1518927265.jpeg?type=m510"
                    alt="Topping DX3 PRO+ DAC"
                    className="w-full h-full object-cover scale-85"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-muted-foreground mb-1">
                    Topping
                  </div>
                  <h4 className="text-base font-semibold mb-1.5">
                    Topping DX3 PRO+ DAC
                  </h4>
                  <p className="text-muted-foreground text-xs mb-2 line-clamp-2">
                    블루투스 볼륨 노브
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      198,000원
                    </span>
                    <span className="text-xs text-muted-foreground">
                      유선/무선
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
    </div>
  );
}
