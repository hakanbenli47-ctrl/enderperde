import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-zinc-50 text-zinc-900 font-sans min-h-screen selection:bg-red-500 selection:text-white pb-20 md:pb-0">
      
      {/* 1. ÜST BİLGİ ŞERİDİ (KAMPANYA VURGUSU) */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-xs md:text-sm font-bold tracking-wide animate-pulse">
        🔥 İNCEK ENDER PERDE'DE BAHAR KAMPANYASI! BU FIRSAT KAÇMAZ 🔥
      </div>

      {/* 2. HERO SECTION (Eski arka planınızla uyumlu) */}
      <section className="relative bg-zinc-50 border-b border-zinc-200 overflow-hidden">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-10 md:gap-16 p-6 md:p-12 lg:py-20">
    
    {/* SOL TARAF: TEMİZ METİN ALANI */}
    <div className="space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
        <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black shadow-md uppercase tracking-wider">
          TAÇ YETKİLİ BAYİ
        </span>
        <span className="bg-zinc-200 text-zinc-700 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider">
          1970'ten Bugüne
        </span>
      </div>
      
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-zinc-900 tracking-tighter leading-[0.9]">
        ENDER <br/>
        <span className="text-red-600">PERDE</span>
      </h1>
      
      <p className="text-lg md:text-xl text-zinc-600 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
        Ankara’nın köklü kuruluşu olarak; İncek ve Dikmen şubelerimizde evinizi sanat eserine dönüştürüyoruz. 
        <span className="text-zinc-900 font-bold block mt-2 underline decoration-red-500/30">Ücretsiz keşif, hassas ölçü ve kusursuz montaj.</span>
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
        <a 
          href="https://wa.me/905424245216" 
          className="bg-green-500 hover:bg-green-600 text-white text-center px-10 py-5 rounded-2xl font-black text-lg md:text-xl transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
        >
          <span>💬</span> WhatsApp'tan Yaz
        </a>
        <a 
          href="tel:05424245216" 
          className="bg-blue-600 hover:bg-blue-700 text-white text-center px-10 py-5 rounded-2xl font-black text-lg md:text-xl transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
        >
          <span>📞</span> Hemen Ara
        </a>
      </div>
    </div>

    {/* SAĞ TARAF: GÖRSEL ALANI (RESİMLER ARTIK YAZIYI BOĞMAZ) */}
    <div className="order-1 lg:order-2 relative">
      <div className="relative h-[450px] md:h-[500px] lg:h-[400px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-zinc-200">
        <Image 
          src="/2.jpg" 
          alt="Ender Perde Mağaza"
          fill
          className="object-contain scale-120"
          priority
        />
      </div>
      
      {/* Dekoratif İkinci Görsel (Mağaza İçi - Sadece Mobilden Büyük Ekranlarda Görünür) */}
    
      
      {/* Tasarımı zenginleştiren arka plan süsü */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
    </div>  
  </div>
</section>
<section className="py-10 bg-white border-b border-zinc-200 overflow-hidden">
  <div className="relative">
    
    <div className="flex gap-6 animate-[marquee_25s_linear_infinite] w-max px-6">
      
      {[
        "/vip1.jpg",
        "/vip2.jpg",
        "/vip3.jpg",
        "/vip4.jpg",
        "/vip5.jpg",
        "/vip6.jpg",
      ].map((img, i) => (
        
        <div
          key={i}
          className="relative w-[220px] md:w-[260px] h-[140px] md:h-[160px] rounded-2xl overflow-hidden shadow-lg group"
        >
          
          <Image
            src={img}
            alt="Perde Tasarım"
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />

          {/* VIP overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>

        </div>
      ))}

      {/* LOOP için kopya */}
      {[
        "/vip1.jpg",
        "/vip2.jpg",
        "/vip3.jpg",
        "/vip4.jpg",
        "/vip5.jpg",
        "/vip6.jpg",
      ].map((img, i) => (
        
        <div
          key={"dup-" + i}
          className="relative w-[220px] md:w-[260px] h-[140px] md:h-[160px] rounded-2xl overflow-hidden shadow-lg group"
        >
          <Image
            src={img}
            alt="Perde Tasarım"
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
        </div>
      ))}

    </div>

  </div>
</section>
      {/* 3. FİYAT TABLOSU (KAMPANYA) */}
      <section id="kampanya" className="py-16 md:py-20 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-3 text-zinc-900">Bahar Kampanyası Fiyatları</h2>
          <p className="text-sm md:text-lg text-red-800 font-bold bg-red-100 inline-block px-4 py-2 rounded-lg">
            TÜL + GÜNEŞLİK + 2 ADET FON DAHİL
          </p>
          <p className="text-xs md:text-sm text-zinc-500 mt-3">* Kampanyamız stoklarla sınırlıdır.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { daire: "1 + 1 DAİRE", fiyat: "9.999 TL", border: "border-zinc-200", bg: "bg-white" },
            { daire: "2 + 1 DAİRE", fiyat: "11.999 TL", border: "border-red-500 border-2 md:border-4 md:scale-105 shadow-xl shadow-red-500/10", badge: "EN ÇOK TERCİH EDİLEN", bg: "bg-white" },
            { daire: "3 + 1 DAİRE", fiyat: "14.999 TL", border: "border-zinc-200", bg: "bg-white" },
          ].map((item, idx) => (
            <div key={idx} className={`${item.bg} p-8 rounded-3xl text-center border ${item.border} relative flex flex-col justify-center`}>
              {item.badge && (
                <span className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] md:text-xs font-black px-4 py-1.5 rounded-full w-max shadow-md">
                  {item.badge}
                </span>
              )}
              <h3 className="text-xl md:text-2xl font-bold text-zinc-500 mb-2 md:mb-4">{item.daire}</h3>
              <div className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">{item.fiyat}</div>
              <a 
                href={`https://wa.me/905424245216?text=Merhaba, ${item.daire} ${item.fiyat} kampanyanızla ilgileniyorum.`}
                className="bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-3 px-6 rounded-xl transition-colors w-full text-sm md:text-base"
              >
                Sipariş Ver
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PERDE ÇEŞİTLERİMİZ (Eski Kodunuzdaki Görseller) */}
      <section id="urunler" className="py-16 bg-zinc-100 px-4 max-w-6xl mx-auto rounded-3xl mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-2">Perde Çeşitlerimiz</h2>
          <p className="text-zinc-500 text-sm md:text-base">Her mekana uygun modern ve şık çözümler</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 px-2 md:px-0">
          {[
            { name: "Tül Perde", img: "/tul.jpg", desc: "Hafif • Şık • Modern" },
            { name: "Fon Perde", img: "/fon.jpg", desc: "Gösterişli • Kalın" },
            { name: "Zebra Perde", img: "/zebra.jpg", desc: "Pratik • Işık kontrolü" },
            { name: "Stor Perde", img: "/stor.jpg", desc: "Minimal • Kullanışlı" },
            { name: "Jaluzi Perde", img: "/jaluzi.jpg", desc: "Ofis • Dayanıklı" },
            { name: "Blackout Perde", img: "/blackout.jpg", desc: "Tam karartma" },
          ].map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
              <div className="relative h-32 md:h-48">
                <Image src={item.img} alt={item.name} fill className="object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-3 md:p-4">
                <h3 className="text-white text-sm md:text-lg font-bold">{item.name}</h3>
                <p className="text-zinc-300 text-[10px] md:text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ODALARA GÖRE ÇÖZÜMLER (Eski Kodunuz) */}
      <section className="py-16 px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-2">Yaşam Alanına Göre Çözümler</h2>
          <p className="text-zinc-500 text-sm md:text-base">Doğru perde seçimi, hem estetik hem konfor sağlar</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
          {[
            { name: "Salon", img: "/salon2.jpg" },
            { name: "Yatak Odası", img: "/yatak.jpg" },
            { name: "Mutfak", img: "/mutfak.jpg" },
            { name: "Ofis", img: "/ofis.jpg" },
          ].map((item, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden h-36 md:h-48 shadow-sm">
              <Image src={item.img} alt={item.name} fill className="object-cover hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="text-sm md:text-base font-bold drop-shadow">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. MÜŞTERİ YORUMLARI (Eski Kodunuz) */}
      <section className="py-16 px-4 bg-zinc-100 mt-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-2">Müşteri Deneyimleri</h2>
          <p className="text-zinc-500 text-sm md:text-base">Ankara genelinde hizmet verdiğimiz müşterilerimiz</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {[
            { name: "Ayşe K.", city: "Çankaya", text: "Salon için yaptırdığımız tül ve fon perdeler tam istediğimiz gibi oldu. Ölçü almaya gelip her detayı anlattılar." },
            { name: "Mehmet T.", city: "Keçiören", text: "Zebra perde yaptırdık, hem ürün kalitesi hem montaj süreci çok iyiydi. Zamanında teslim ettiler." },
            { name: "Zeynep A.", city: "Yenimahalle", text: "Evin havası resmen değişti. Kumaş kalitesi çok iyi ve işçilik gerçekten profesyonel." },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-bold text-sm">{item.name}</p>
                  <p className="text-xs text-zinc-500">{item.city} / Ankara</p>
                </div>
                <div className="text-yellow-500 text-sm">★★★★★</div>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. KONUM, ŞUBELER VE HARİTA (Yeni Bilgilerle Geliştirildi) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-zinc-900">İletişim & Konum</h2>
            <p className="text-zinc-600 text-sm md:text-base">Size en yakın şubemizi arayarak ücretsiz keşif talebinde bulunabilirsiniz.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* ŞUBELER BİLGİ KARTLARI */}
            <div className="space-y-6">
              {/* Dikmen Şube */}
              <div className="bg-zinc-50 p-6 md:p-8 rounded-3xl border border-zinc-200">
                <h3 className="text-xl md:text-2xl font-black text-red-600 mb-4 border-b border-zinc-200 pb-3">DİKMEN ŞUBE</h3>
                <div className="space-y-3 text-sm md:text-base text-zinc-700 mb-6">
                  <p className="flex items-center gap-2"><strong>📞 Sabit Hat:</strong> <a href="tel:03124805202" className="text-blue-600 font-medium">0312 480 52 02</a></p>
                  <p className="flex items-center gap-2"><strong>📱 Cep/WP:</strong> <a href="tel:05424245216" className="text-blue-600 font-medium">0542 424 52 16</a></p>
                </div>
                <div className="flex gap-2">
                  <a href="tel:05424245216" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2.5 rounded-lg text-sm font-bold transition">Ara</a>
                  <a href="https://wa.me/905424245216" className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center py-2.5 rounded-lg text-sm font-bold transition">WhatsApp</a>
                </div>
              </div>

              {/* İncek Şube */}
              <div className="bg-zinc-50 p-6 md:p-8 rounded-3xl border border-zinc-200">
                <h3 className="text-xl md:text-2xl font-black text-red-600 mb-4 border-b border-zinc-200 pb-3">İNCEK ŞUBE</h3>
                <div className="space-y-3 text-sm md:text-base text-zinc-700 mb-6">
                  <p className="flex items-center gap-2"><strong>📞 Sabit Hat:</strong> <a href="tel:03124601819" className="text-blue-600 font-medium">0312 460 18 19</a></p>
                  <p className="flex items-center gap-2"><strong>📱 Cep/WP:</strong> <a href="tel:05370601800" className="text-blue-600 font-medium">0537 060 18 00</a></p>
                </div>
                <div className="flex gap-2">
                  <a href="tel:05370601800" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2.5 rounded-lg text-sm font-bold transition">Ara</a>
                  <a href="https://wa.me/905370601800" className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center py-2.5 rounded-lg text-sm font-bold transition">WhatsApp</a>
                </div>
              </div>
              
              {/* Merkez Adres Bilgisi (Eski kodunuzdan) */}
              <div className="bg-white p-4 rounded-xl border border-zinc-200 text-sm text-zinc-600">
                <strong>📍 Merkez Adres:</strong> TEK Yapı Sitesi Zafer Cad. No:6/E Gölbaşı / Ankara
              </div>
            </div>

            {/* HARİTA */}
           <div className="rounded-3xl overflow-hidden shadow-lg h-[400px] lg:h-full min-h-[400px] border border-zinc-200 bg-zinc-100 relative">
  <iframe
    src="https://maps.google.com/maps?q=TEK%20Yap%C4%B1%20Sitesi%20Zafer%20Cad%20No%206E%20G%C3%B6lba%C5%9F%C4%B1%20Ankara&z=16&output=embed"
    className="absolute inset-0 w-full h-full border-0"
    loading="lazy"
    title="TEK Yapı Sitesi Konum"
  ></iframe>
</div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-900 text-zinc-400 py-10 text-center text-xs md:text-sm px-4">
        <p className="font-bold text-white mb-2">Ender Perde Mefruşat & Ev Tekstili - 1970'ten Bugüne.</p>
        <p>Taç Yetkili Bayi - İncek & Dikmen, Ankara</p>
      </footer>

      {/* ========================================= */}
      {/* MOBİL İÇİN SABİT ALT ÇUBUK (ARA VE WHATSAPP) */}
      {/* ========================================= */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-zinc-200 p-3 flex md:hidden z-50 gap-3 shadow-[0_-5px_15px_rgba(0,0,0,0.1)]">
        <a 
          href="tel:05424245216" 
          className="flex-1 bg-blue-600 text-white flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm shadow-md active:bg-blue-700 transition"
        >
          <span className="text-lg">📞</span> Hemen Ara
        </a>
        <a 
          href="https://wa.me/905424245216" 
          className="flex-1 bg-green-500 text-white flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm shadow-md active:bg-green-600 transition"
        >
          <span className="text-lg">💬</span> WhatsApp
        </a>
      </div>

      {/* MASAÜSTÜ İÇİN SABİT WHATSAPP BUTONU */}
      <a 
        href="https://wa.me/905424245216" 
        className="hidden md:flex fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 items-center justify-center z-50 group"
        title="WhatsApp Destek"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>

    </div>
  );
}