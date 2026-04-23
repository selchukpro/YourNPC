import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Rocket, Users, Code2, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * YourNPC Landing Page
 * Design: Cyberpunk-Inspired Digital Frontier
 * - Neon color palette (Electric Blue #00d9ff, Neon Pink #ff006e, Cyber Green #00ff41)
 * - Futuristic typography (Orbitron for headings, Space Mono for accents, Roboto for body)
 * - Glow effects, scan lines, and dynamic animations
 * - Asymmetric layout with layered depth
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663462433148/aT55dsJHrE2mJdUFHuNt2V/tech-pattern-7iwXccTvaaztxquSDmGV5t.webp')`,
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/30">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg neon-border flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-bold glow-cyan" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              YourNPC
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="hover:text-primary transition-colors">
              Özellikler
            </a>
            <a href="#create" className="hover:text-primary transition-colors">
              Oluştur
            </a>
            <a href="#deploy" className="hover:text-primary transition-colors">
              Dağıt
            </a>
            <Button className="btn-neon text-sm">Başla</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663462433148/aT55dsJHrE2mJdUFHuNt2V/hero-banner-7iwXccTvaaztxquSDmGV5t.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-6 inline-block">
            <div className="neon-border px-4 py-2 rounded-lg">
              <span className="text-primary text-sm font-bold" style={{ fontFamily: "'Space Mono', monospace" }}>
                AI-POWERED NPC CREATION
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 glow-cyan" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Create, Evolve, <span className="text-secondary">Deploy</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Yapay zeka destekli NPC'ler oluşturun, geliştirin ve online dünyalara yayınlayın. Sınırsız yaratıcılık, sonsuz olasılıklar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="btn-neon text-lg px-8 py-6 flex items-center gap-2">
              Hemen Başla
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="text-lg px-8 py-6 border-secondary text-secondary hover:bg-secondary/10"
            >
              Demo İzle
            </Button>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto">
            <div className="neon-border p-4 rounded-lg">
              <div className="text-3xl font-bold text-primary">25K+</div>
              <div className="text-sm text-muted-foreground">NPC Oluşturuldu</div>
            </div>
            <div className="neon-border-pink p-4 rounded-lg">
              <div className="text-3xl font-bold text-secondary">10K+</div>
              <div className="text-sm text-muted-foreground">Aktif Oyuncu</div>
            </div>
            <div className="neon-border p-4 rounded-lg">
              <div className="text-3xl font-bold" style={{ color: "#00ff41" }}>
                99.9%
              </div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 md:py-32 border-t border-primary/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-cyan" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Güçlü Özellikler
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Profesyonel NPC oluşturma ve yönetimi için ihtiyacınız olan her şey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <div className="neon-border p-6 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group">
              <div className="w-12 h-12 neon-border rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Mono', monospace" }}>
                AI Oluşturucu
              </h3>
              <p className="text-muted-foreground">
                Gelişmiş yapay zeka algoritmaları ile benzersiz NPC karakterleri otomatik olarak oluşturun.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="neon-border-pink p-6 rounded-lg hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300 group">
              <div className="w-12 h-12 neon-border-pink rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Mono', monospace" }}>
                Akıllı Davranış
              </h3>
              <p className="text-muted-foreground">
                NPC'leriniz öğrensin, uyum sağlasın ve oyuncu etkileşimlerine dinamik olarak yanıt versin.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="neon-border p-6 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group">
              <div className="w-12 h-12 neon-border rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Mono', monospace" }}>
                Anlık Dağıtım
              </h3>
              <p className="text-muted-foreground">
                NPC'lerinizi bir tıkla binlerce oyun dünyasına anında yayınlayın ve dağıtın.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="neon-border-pink p-6 rounded-lg hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300 group">
              <div className="w-12 h-12 neon-border-pink rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Mono', monospace" }}>
                Özelleştirme
              </h3>
              <p className="text-muted-foreground">
                Güçlü API ve görsel editör ile NPC'lerinizi tamamen özelleştirin ve kontrol edin.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="neon-border p-6 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group">
              <div className="w-12 h-12 neon-border rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Mono', monospace" }}>
                Topluluk
              </h3>
              <p className="text-muted-foreground">
                Diğer yaratıcılarla bağlanın, NPC'lerinizi paylaşın ve birlikte öğrenin.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="neon-border-pink p-6 rounded-lg hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300 group">
              <div className="w-12 h-12 neon-border-pink rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Mono', monospace" }}>
                Yüksek Performans
              </h3>
              <p className="text-muted-foreground">
                Düşük gecikme süresi, yüksek ölçeklenebilirlik ve güvenilir altyapı.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creation Process Section */}
      <section id="create" className="relative py-20 md:py-32 border-t border-primary/20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-pink" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                NPC Oluşturma Süreci
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Üç basit adımda kendi AI NPC'nizi oluşturun ve özelleştirin.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 neon-border rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Tasarla</h3>
                    <p className="text-muted-foreground">
                      Karakterin görünüşünü, kişiliğini ve davranışlarını tanımlayın.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 neon-border-pink rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Eğit</h3>
                    <p className="text-muted-foreground">
                      AI modelini oyuncu etkileşimleri ve senaryolarla eğitin.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 neon-border rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Yayınla</h3>
                    <p className="text-muted-foreground">
                      NPC'nizi online dünyalara dağıtın ve canlı oyunlarda kullanın.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="btn-neon mt-8 flex items-center gap-2">
                Şimdi Başla
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663462433148/aT55dsJHrE2mJdUFHuNt2V/npc-creation-card-5GqhfJpL2Gu2c44mECNnxr.webp"
                alt="NPC Creation"
                className="rounded-lg neon-border w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Evolution Section */}
      <section className="relative py-20 md:py-32 border-t border-primary/20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663462433148/aT55dsJHrE2mJdUFHuNt2V/evolution-concept-K9sg8EwFLuFeikyPTVvcJz.webp"
                alt="NPC Evolution"
                className="rounded-lg neon-border-pink w-full"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-cyan" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                Sürekli Evrim
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                NPC'leriniz zamanla gelişir, öğrenir ve daha akıllı hale gelir. Oyuncu etkileşimlerinden yararlanarak benzersiz kişilikler geliştirirler.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full neon-border flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Adaptif Davranış</h4>
                    <p className="text-muted-foreground">Oyuncu stiline göre tepkiler değişir</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full neon-border-pink flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Bellek Sistemi</h4>
                    <p className="text-muted-foreground">Geçmiş etkileşimleri hatırlar ve kullanır</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full neon-border flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Duygusal Zeka</h4>
                    <p className="text-muted-foreground">Oyuncu duygularını tanır ve tepki verir</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Section */}
      <section id="deploy" className="relative py-20 md:py-32 border-t border-primary/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-cyan" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Küresel Dağıtım
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              NPC'lerinizi dünya çapında binlerce oyun sunucusuna anında yayınlayın
            </p>
          </div>

          <div className="relative">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663462433148/aT55dsJHrE2mJdUFHuNt2V/deployment-world-KdW9A24JgGhRn78JgxiTEJ.webp"
              alt="Global Deployment"
              className="rounded-lg neon-border w-full"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="neon-border p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <p className="text-muted-foreground">Desteklenen Bölge</p>
            </div>
            <div className="neon-border-pink p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-secondary mb-2">&lt;50ms</div>
              <p className="text-muted-foreground">Ortalama Gecikme</p>
            </div>
            <div className="neon-border p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">1M+</div>
              <p className="text-muted-foreground">Eşzamanlı NPC</p>
            </div>
            <div className="neon-border-pink p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-secondary mb-2">99.99%</div>
              <p className="text-muted-foreground">SLA Garantisi</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 border-t border-primary/20">
        <div className="container">
          <div className="neon-border rounded-lg p-12 md:p-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-cyan" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Hayal Etmeye Başlayın
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Bugün YourNPC'ye katılın ve kendi AI NPC'lerinizi oluşturmaya başlayın. Sınırsız yaratıcılık, sonsuz olasılıklar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-neon text-lg px-8 py-6">Ücretsiz Başla</Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10">
                Belgeleri Oku
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-12 bg-background/50 backdrop-blur-sm">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg neon-border flex items-center justify-center">
                  <Brain className="w-4 h-4 text-primary" />
                </div>
                <span className="font-bold glow-cyan" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  YourNPC
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                AI destekli NPC oluşturma platformu
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Ürün</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Özellikler</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Fiyatlandırma</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Şirket</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Hakkında</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">İletişim</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Yasal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Gizlilik</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Şartlar</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Çerezler</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2026 YourNPC. Tüm hakları saklıdır.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="hover:text-primary transition-colors">Discord</a>
              <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
