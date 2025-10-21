"use client";

import { Music, Headphones, Heart, Target, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Dot pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(var(--muted))_1px,transparent_0)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-center pt-16 px-4 pb-4">
          <Link
            href="/"
            className="flex items-center gap-2 border border-border/40 bg-background/40 backdrop-blur-md px-4 py-2 rounded-full hover:bg-accent transition-colors shadow-lg text-sm"
          >
            <span>← Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="relative pt-32 pb-16">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-foreground border border-border/40 backdrop-blur-sm mb-6">
              <Sparkles className="w-3 h-3 mr-1.5" />
              About Us
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Crafted for
              <br />
              <span className="text-primary">Audio Enthusiasts</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              음악을 사랑하는 이들을 위한 완벽한 오디오 기어 카탈로그.
              <br />
              당신의 사운드 여정을 함께합니다.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="max-w-5xl mx-auto px-6 mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group border border-border/40 rounded-2xl p-8 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                오디오 애호가들이 자신에게 완벽한 사운드 시그니처를 찾을 수
                있도록 돕는 것이 우리의 목표입니다.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group border border-border/40 rounded-2xl p-8 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Passion</h3>
              <p className="text-muted-foreground">
                음악과 오디오에 대한 진정한 열정으로, 최고의 기어만을 엄선하여
                소개합니다.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group border border-border/40 rounded-2xl p-8 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Music className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Promise</h3>
              <p className="text-muted-foreground">
                정확한 정보와 솔직한 리뷰로 당신의 완벽한 오디오 선택을
                돕겠습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="max-w-4xl mx-auto px-6 mb-20">
          <div className="border border-border/40 rounded-2xl p-12 bg-background/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <Headphones className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Our Story</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Audio Catalog는 오디오 기어에 대한 열정에서 시작되었습니다.
                수많은 헤드폰, 스피커, DAC/AMP를 경험하면서, 우리는 완벽한
                오디오 기어를 찾는 것이 얼마나 어려운지 깨달았습니다.
              </p>
              <p>
                그래서 우리는 이 여정을 더 쉽고 즐겁게 만들기 위한 플랫폼을
                만들기로 결정했습니다. 헤드폰부터 스피커, DAC/AMP까지 모든
                오디오 기어를 한 곳에서 탐색하고 비교할 수 있는 공간입니다.
              </p>
              <p>
                우리의 목표는 단순합니다. 모든 오디오 애호가들이 자신만의 완벽한
                사운드를 찾을 수 있도록 돕는 것입니다.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-4xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-border/40 rounded-xl bg-background/50 backdrop-blur-sm">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Audio Gear</div>
            </div>
            <div className="text-center p-6 border border-border/40 rounded-xl bg-background/50 backdrop-blur-sm">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Brands</div>
            </div>
            <div className="text-center p-6 border border-border/40 rounded-xl bg-background/50 backdrop-blur-sm">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Updates</div>
            </div>
            <div className="text-center p-6 border border-border/40 rounded-xl bg-background/50 backdrop-blur-sm">
              <div className="text-4xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Passion</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6">
          <div className="border border-border/40 rounded-2xl p-12 bg-primary/5 backdrop-blur-sm text-center">
            <h2 className="text-3xl font-bold mb-4">
              완벽한 사운드를 찾아보세요
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              지금 바로 우리의 큐레이션된 오디오 기어 컬렉션을 탐색하고,
              당신만의 사운드 시그니처를 발견하세요.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg"
            >
              Browse Collection
            </Link>
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
