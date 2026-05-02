"use client"
import { useState, useEffect } from "react"
import Image from "next/image";

export default function Home() {
  // TÜM RESİMLER
const tulImages = ["/perde1.jpg", "/perde2.jpg", "/perde3.jpg", "/perde4.jpg"]
const fonImages = ["/perde5.jpg", "/perde6.jpg", "/perde7.jpg"]
const zebraImages = ["/perde8.jpg", "/perde9.jpg", "/perde10.jpg","/perde11.jpg"]
const storImages = ["/perde12.jpg", "/perde13.jpg", "/perde14.jpg"]
const jaluziImages = ["/perde16.jpg", "/perde17.jpg"]
const blackoutImages = ["/perde18.jpg", "/perde19.jpg", "/perde20.jpg"]

// INDEXLER
const [tulIndex, setTulIndex] = useState(0)
const [fonIndex, setFonIndex] = useState(0)
const [zebraIndex, setZebraIndex] = useState(0)
const [storIndex, setStorIndex] = useState(0)
const [jaluziIndex, setJaluziIndex] = useState(0)
const [blackoutIndex, setBlackoutIndex] = useState(0)
// GENEL FONKSİYON
const ileri = (
  index: number,
  setIndex: React.Dispatch<React.SetStateAction<number>>,
  length: number
) => {
  setIndex((prev: number) => (prev + 1) % length)
}

const geri = (
  index: number,
  setIndex: React.Dispatch<React.SetStateAction<number>>,
  length: number
) => {
  setIndex((prev: number) => (prev - 1 + length) % length)
}
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

  {/* GOOGLE İÇİN */}
  <span className="sr-only">
    İncek Perdeci Ankara Perde Hizmeti
  </span>

  {/* KULLANICI İÇİN */}
  <span aria-hidden="true">
    <span className="text-lg md:text-2xl block tracking-wide text-zinc-500">
      İNCEK
    </span>
    ENDER <br/>
    <span className="text-red-600">PERDE</span>
  </span>

</h1>
      
      <p className="text-lg md:text-xl text-zinc-600 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
       Yuvanizda Mutluluk ENDER PERDE ile başlar
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
  <section className="relative w-full min-h-[300px] md:min-h-[500px] lg:min-h-[400px] overflow-hidden bg-zinc-50">

  {/* GÖRSEL ARKADA */}
  <div className="absolute inset-0 z-0 flex justify-end">

    <Image
      src="/3.jpg"
      alt="Ender Perde"
      fill
      className="
        object-cover
        object-right
        w-[80%] md:w-[60%] lg:w-[50%]
      "
      priority
    />

    {/* SOL OKUNURLUK GRADIENT */}
    <div className="
      absolute inset-0 
      bg-gradient-to-r 
      from-white/0 
via-white/0
      to-transparent
    " />

  </div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">

    {/* SOL YAZI */}
    <div className="text-center lg:text-left space-y-6">

      <h1 className="text-4xl md:text-6xl font-black leading-tight">
         <span className="text-red-600"></span>
      </h1>

      <p className="text-zinc-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
      
      </p>

    </div>

  </div>

</section>  
  </div>
</section>
<section className="py-10 bg-white border-b border-zinc-200 overflow-hidden">
  <div className="relative">
    
    <div className="flex gap-6 animate-[marquee_25s_linear_infinite] w-max px-6">
      
      {[
         "/perde1.jpg",
        "/perde8.jpg",
        "/perde4.jpg",
        "/perde7.jpg",
        "/perde11.jpg",
        "/perde10.jpg",
          "/perde12.jpg",
        "/perde2.jpg",
        "/perde9.jpg",
        "/perde3.jpg",
        "/perde5.jpg",
        "/perde20.jpg",
          "/perde6.jpg",
        "/perde19.jpg",
        "/perde13.jpg",
        "/perde14.jpg",
        "/perde15.jpg",
        "/perde16.jpg",
          "/perde17.jpg",
        "/perde18.jpg",

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
   <section
  id="urunler"
  className="py-14 md:py-16 bg-zinc-100 px-3 md:px-4 max-w-6xl mx-auto rounded-3xl mb-16"
>

  {/* BAŞLIK */}
  <div className="text-center mb-10 md:mb-12">
    <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-2">
      Perde Çeşitlerimiz
    </h2>
    <p className="text-zinc-500 text-sm md:text-base">
      Her mekana uygun modern ve şık çözümler
    </p>
  </div>

  {/* GRID */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">

{[
  {
    images: tulImages,
    index: tulIndex,
    set: setTulIndex,
    title: "Tül Perde",
    desc: "Hafif • Şık • Modern görünüm",
  },
  {
    images: fonImages,
    index: fonIndex,
    set: setFonIndex,
    title: "Fon Perde",
    desc: "Gösterişli • Kalın kumaş",
  },
  {
    images: zebraImages,
    index: zebraIndex,
    set: setZebraIndex,
    title: "Zebra Perde",
    desc: "Işık kontrolü • Modern kullanım",
  },
  {
    images: storImages,
    index: storIndex,
    set: setStorIndex,
    title: "Stor Perde",
    desc: "Minimal • Kullanışlı yapı",
  },
  {
    images: jaluziImages,
    index: jaluziIndex,
    set: setJaluziIndex,
    title: "Jaluzi Perde",
    desc: "Ofis • Dayanıklı sistem",
  },
  {
    images: blackoutImages,
    index: blackoutIndex,
    set: setBlackoutIndex,
    title: "Blackout Perde",
    desc: "Tam karartma • Konfor",
  },
].map((item, i) => (

  <div key={i} className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition duration-300">

    {/* RESİM */}
    <div className="relative h-36 sm:h-44 md:h-48">
      <Image
        src={item.images[item.index]}
        alt="Perde"
        fill
        className="object-cover group-hover:scale-110 transition duration-500"
      />
    </div>

    {/* SOL OK */}
    <button
      onClick={() => geri(item.index, item.set, item.images.length)}
      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-md text-white w-9 h-9 rounded-full flex items-center justify-center z-10 shadow-md"
    >
      ‹
    </button>

    {/* SAĞ OK */}
    <button
      onClick={() => ileri(item.index, item.set, item.images.length)}
      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-md text-white w-9 h-9 rounded-full flex items-center justify-center z-10 shadow-md"
    >
      ›
    </button>

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-3 md:p-4">

      <h3 className="text-white text-sm md:text-lg font-bold leading-tight">
        {item.title}
      </h3>

      <p className="text-zinc-300 text-[11px] md:text-xs mt-1">
        {item.desc}
      </p>

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
                  <p className="flex items-center gap-2"><strong>📱 Cep/WP:</strong> <a href="tel:05424245216" className="text-blue-600 font-medium">0 542 424 52 16</a></p>
                </div>
                <div className="flex gap-2">
                  <a href="tel:05424245216" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2.5 rounded-lg text-sm font-bold transition">Ara</a>
                  <a href="https://wa.me/905424245216" className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center py-2.5 rounded-lg text-sm font-bold transition">WhatsApp</a>
                </div>
              </div>
              
              {/* Merkez Adres Bilgisi (Eski kodunuzdan) */}
              <div className="bg-white p-4 rounded-xl border border-zinc-200 text-sm text-zinc-600">
                <strong>📍 Merkez Adres:</strong> TEK Yapı Sitesi Zafer Cad. No:6/E İncek / Gölbaşı / Ankara
              </div>
            </div>

            {/* HARİTA */}
         <div className="rounded-3xl overflow-hidden shadow-lg h-[400px] lg:h-full min-h-[400px] border border-zinc-200 bg-zinc-100 relative">

  {/* HARİTA */}
  <iframe
    src="https://www.google.com/maps?q=39.824858,32.714992&z=17&output=embed"
    className="absolute inset-0 w-full h-full border-0"
    loading="lazy"
    title="Ender Perde Konum"
  ></iframe>

  {/* YAZI OVERLAY */}
  <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-xl backdrop-blur-md">
    <p className="text-sm font-semibold">Ender Perde</p>
    <p className="text-xs text-zinc-300">İncek / Gölbaşı / Ankara</p>
  </div>

</div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-900 text-zinc-400 py-10 text-center text-xs md:text-sm px-4">
        <p className="font-bold text-white mb-2">İncek Ender Perde Mefruşat & Ev Tekstili - 1970'ten Bugüne.</p>
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