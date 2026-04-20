  import Image from "next/image";

  export default function Home() {
    return (
      <div className="bg-zinc-50 text-zinc-800">

        {/* HERO */}
    <section className="relative w-full overflow-hidden">

  {/* ARKA PLAN */}
  <div className="absolute inset-0">
    <Image
      src="/salon.jpg"
      alt="Salon Perde"
      fill
      priority
      className="object-cover brightness-105 contrast-110 saturate-110 scale-105 animate-zoomSlow"
    />
  </div>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>

  {/* SOFT LIGHT */}
  <div className="absolute top-0 left-0 w-60 h-60 bg-white/10 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-60 h-60 bg-green-400/10 blur-3xl rounded-full"></div>

  {/* CONTENT */}
  <div className="relative z-10 py-16 md:py-20 px-4 text-center text-white max-w-2xl mx-auto">

  <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.4)] px-5 py-6 md:px-8 md:py-8">

    {/* LABEL */}
    <div className="inline-block mb-3 px-4 py-1 text-xs md:text-sm rounded-full bg-white/20 backdrop-blur-md border border-white/30">
      ✨ Ankara’nın Güvenilir Markası — Ender Perde
    </div>

    {/* ACİLİYET */}
    <div className="mb-3 flex justify-center">
      <div className="px-4 py-1.5 rounded-full bg-red-500 text-white text-xs md:text-sm font-semibold animate-pulse">
        🔥 Bugün ölçü alanlara %10 indirim
      </div>
    </div>

    {/* BAŞLIK */}
 <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-3 text-white drop-shadow-[0_5px_25px_rgba(0,0,0,0.8)]">

  {/* MARKA - BÜYÜK */}
  <span className="block text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-1">
    Ender Perde
  </span>

  {/* SLOGAN - BİRAZ DAHA KÜÇÜK AMA GÜÇLÜ */}
  <span className="block text-zinc-200 text-xl sm:text-2xl md:text-3xl font-semibold">
    Evinize Şıklık Katın
  </span>

</h1>

    {/* SOSYAL KANIT */}
    <div className="text-xs md:text-sm text-zinc-300 mb-2">
      500+ mutlu müşteri • Ankara geneli hizmet
    </div>

    {/* AÇIKLAMA */}
    <p className="text-sm md:text-base text-zinc-200 mb-4">
      Ölçüye özel üretim, profesyonel montaj ve hızlı teslimat.
    </p>

    {/* BUTONLAR */}
    <div className="flex flex-col sm:flex-row gap-2 justify-center">

      <a
        href="https://wa.me/905424245216"
        className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition"
      >
        WhatsApp’tan Yaz
      </a>

      <a
        href="#urunler"
        className="w-full sm:w-auto border border-white/30 hover:bg-white/10 px-5 py-2.5 rounded-full text-sm transition"
      >
        Ürünleri İncele
      </a>

    </div>

    {/* CANLI DURUM */}
    <div className="mt-3 text-xs text-green-400">
      🟢 Aktif • Ortalama 5 dk
    </div>

    {/* ALT GÜVEN */}
    <div className="mt-4 text-xs text-zinc-300">
      ✔ Ücretsiz keşif • ✔ Özel ölçü • ✔ Profesyonel montaj
    </div>

    {/* KAYAN YAZI */}
    <div className="mt-6 overflow-hidden">
      <div className="flex w-max animate-[marquee_25s_linear_infinite] text-xs md:text-sm text-zinc-300 gap-6">
        <span>✔ Aynı gün ölçü</span>
        <span>✔ Hızlı teslimat</span>
        <span>✔ Uygun fiyat</span>
        <span>✔ Modern tasarım</span>
        <span>✔ Ankara içi hizmet</span>
        <span>✔ Garantili işçilik</span>

        {/* tekrar */}
        <span>✔ Aynı gün ölçü</span>
        <span>✔ Hızlı teslimat</span>
      </div>
    </div>
</div>
  </div>

</section>
        {/* PERDE ÇEŞİTLERİ */}
    <section id="urunler" className="py-20 px-4 max-w-6xl mx-auto">

  {/* BAŞLIK */}
  <div className="text-center mb-12">
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
      Perde Çeşitlerimiz
    </h2>

    <p className="text-zinc-500 text-sm md:text-base mt-3 leading-relaxed tracking-wide max-w-md mx-auto">
      Her mekana uygun modern ve şık çözümler
    </p>

    {/* EKSTRA GÜVEN */}
    <div className="mt-3 text-xs text-zinc-400">
      ✔ 500+ uygulama • ✔ Garantili işçilik • ✔ Ücretsiz keşif
    </div>
  </div>

  {/* GRID */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

    {[
      { name: "Tül Perde", img: "/tul.jpg", desc: "Hafif • Şık • Modern" },
      { name: "Fon Perde", img: "/fon.jpg", desc: "Gösterişli • Kalın • Premium" },
      { name: "Zebra Perde", img: "/zebra.jpg", desc: "Pratik • Işık kontrolü" },
      { name: "Stor Perde", img: "/stor.jpg", desc: "Minimal • Kullanışlı" },
      { name: "Jaluzi Perde", img: "/jaluzi.jpg", desc: "Ofis • Dayanıklı" },
      { name: "Blackout Perde", img: "/blackout.jpg", desc: "Tam karartma • Konfor" },
    ].map((item, i) => (

      <div
        key={i}
        className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer"
      >

        {/* GÖRSEL */}
        <div className="relative h-32 md:h-48">
          <Image
            src={item.img}
            alt={item.name}
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/50 transition"></div>

        {/* TEXT */}
        <div className="absolute bottom-4 left-4 right-4 text-white">

          <h3 className="text-sm md:text-base font-semibold tracking-wide drop-shadow">
            {item.name}
          </h3>

          {/* HOVER'DA AÇILAN */}
          <div className="mt-1 opacity-0 group-hover:opacity-100 transition duration-300">
            <p className="text-xs text-zinc-200">
              {item.desc}
            </p>

            {/* MINI CTA */}
            <a
              href="https://wa.me/905424245216"
              className="inline-block mt-2 text-xs bg-white/90 text-zinc-800 px-3 py-1 rounded-full font-medium hover:bg-white transition"
            >
              Fiyat Sor →
            </a>
          </div>

        </div>

        {/* ÜST ROZET */}
        <div className="absolute top-3 left-3 bg-white/90 text-zinc-800 text-[10px] px-2 py-1 rounded-full shadow">
          Popüler
        </div>

      </div>

    ))}

  </div>

  {/* ALT CTA */}
  <div className="text-center mt-10">
    <a
      href="https://wa.me/905424245216"
      className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-sm font-medium shadow-lg hover:shadow-green-300"
    >
      Tüm Ürünler İçin Teklif Al
    </a>
  </div>

</section>

        {/* GALERİ */}
        <section className="bg-white py-16 px-4">

    {/* BAŞLIK */}
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
        Yaşam Alanına Göre Perde Çözümleri
      </h2>

      <p className="text-zinc-500 text-sm md:text-base mt-3 max-w-md mx-auto leading-relaxed">
        Her alan için doğru perde seçimi, hem estetik hem konfor sağlar
      </p>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">

      {[
        { name: "Salon", img: "/salon2.jpg" },
        { name: "Yatak Odası", img: "/yatak.jpg" },
        { name: "Mutfak", img: "/mutfak.jpg" },
        { name: "Ofis", img: "/ofis.jpg" },
      ].map((item, i) => (

        <div
          key={i}
          className="group relative rounded-xl overflow-hidden cursor-pointer"
        >

          {/* GÖRSEL */}
          <div className="relative h-36 md:h-48">
            <Image
              src={item.img}
              alt={item.name}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

          {/* TEXT */}
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <h3 className="text-sm md:text-base font-semibold tracking-wide drop-shadow">
              {item.name}
            </h3>
          </div>

        </div>

      ))}

    </div>

  </section>

        {/* YORUMLAR */}
        <section className="py-16 px-4 bg-zinc-50">

    {/* BAŞLIK */}
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
        Müşteri Deneyimleri
      </h2>

      <p className="text-zinc-500 text-sm md:text-base mt-3">
        Ankara genelinde hizmet verdiğimiz müşterilerimizin yorumları
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">

      {[
        {
          name: "Ayşe K.",
          city: "Çankaya",
          text: "Salon için yaptırdığımız tül ve fon perdeler tam istediğimiz gibi oldu. Ölçü almaya gelip her detayı anlattılar, çok memnun kaldık.",
        },
        {
          name: "Mehmet T.",
          city: "Keçiören",
          text: "Zebra perde yaptırdık, hem ürün kalitesi hem montaj süreci çok iyiydi. Zamanında teslim ettiler.",
        },
        {
          name: "Zeynep A.",
          city: "Yenimahalle",
          text: "Evin havası resmen değişti. Kumaş kalitesi çok iyi ve işçilik gerçekten profesyonel.",
        },
        {
          name: "Ali D.",
          city: "Etimesgut",
          text: "Ölçü almaya geldiklerinde çok detaylı ilgilendiler. Fiyat/performans olarak gayet iyi bir hizmet aldık.",
        },
        {
          name: "Elif S.",
          city: "Mamak",
          text: "Stor perde yaptırdık. Hem hızlı hem temiz çalıştılar, montajdan sonra hiçbir sorun yaşamadık.",
        },
        {
          name: "Hasan Y.",
          city: "Sincan",
          text: "Başta tereddüt ettim ama sonuç gerçekten çok iyi oldu. Gönül rahatlığıyla tavsiye ederim.",
        },
      ].map((item, i) => (

        <div
          key={i}
          className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-left"
        >

          {/* ÜST */}
          <div className="flex items-center justify-between mb-3">

            <div>
              <p className="font-semibold text-sm">
                {item.name}
              </p>
              <p className="text-xs text-zinc-500">
                {item.city} / Ankara
              </p>
            </div>

            <div className="text-yellow-500 text-sm">
              ★★★★★
            </div>

          </div>

          {/* YORUM */}
          <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
            {item.text}
          </p>

        </div>

      ))}

    </div>

  </section>

        {/* HARİTA */}
   <section className="bg-zinc-100 py-20 px-4">

  {/* BAŞLIK */}
  <div className="text-center mb-12">
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-r from-zinc-800 to-zinc-500 bg-clip-text text-transparent">
      Konum & İletişim
    </h2>

    <p className="text-zinc-600 text-sm md:text-base mt-3">
      Mağazamızı ziyaret edin veya hemen iletişime geçin
    </p>
  </div>

  {/* GRID */}
  <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto items-center">

    {/* HARİTA */}
    <div className="rounded-2xl overflow-hidden shadow-md">
      <iframe
        src="https://maps.google.com/maps?q=39.8248411,32.7179489&z=17&output=embed"
        className="w-full h-64 md:h-[400px] border-0"
        loading="lazy"
      ></iframe>
    </div>

    {/* KART */}
    <div className="bg-white/80 backdrop-blur rounded-2xl p-6 md:p-8 shadow-md border border-zinc-200 text-left">

      <h3 className="text-lg md:text-xl font-semibold mb-4 text-zinc-800">
       Ender Perde
      </h3>

      {/* ADRES */}
      <div className="mb-4">
        <p className="text-xs text-zinc-500 mb-1">Adres</p>
        <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
          TEK Yapı Sitesi Zafer Cad. No:6/E
          <br />
          Gölbaşı / Ankara
        </p>
      </div>

      {/* TELEFON */}
      <div className="mb-6">
        <p className="text-xs text-zinc-500 mb-1">Telefon</p>
        <p className="text-sm md:text-base font-medium text-zinc-800">
          0501 103 85 83
        </p>
      </div>

      {/* BUTONLAR */}
      <div className="flex flex-col sm:flex-row gap-3">

        <a
          href="https://wa.me/905011038583?text=Merhaba%20sipari%C5%9F%20vermek%20istiyorum"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-medium transition shadow"
        >
          WhatsApp’tan Yaz
        </a>

        <a
          href="https://www.google.com/maps/dir/?api=1&destination=39.8248411,32.7179489"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center border border-zinc-200 px-5 py-3 rounded-xl hover:bg-zinc-200 transition"
        >
          Yol Tarifi Al
        </a>

      </div>

    </div>

  </div>

</section>
        {/* SABİT ALT BUTON (MOBİL SATIŞ MOTORU) */}
      {/* MOBİL ALT BAR */}
  <div className="fixed bottom-0 left-0 w-full md:hidden z-50">

    <div className="mx-3 mb-3 bg-white/95 backdrop-blur rounded-2xl shadow-lg border border-zinc-200 px-4 py-3 flex items-center justify-between">

      {/* SOL */}
      <div className="flex flex-col text-left">
        <span className="text-xs text-zinc-500">
          Ender Perde
        </span>
        <span className="text-sm font-semibold text-zinc-800">
          Ücretsiz Keşif & Teklif
        </span>
      </div>

      {/* BUTON */}
      <a
        href="https://wa.me/905424245216?text=Merhaba%20perde%20hakkında%20bilgi%20almak%20istiyorum"
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow transition"
      >
        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
        WhatsApp
      </a>

    </div>

  </div>


  {/* MASAÜSTÜ FLOAT */}
  <a
    href="https://wa.me/905424245216?text=Merhaba%20perde%20hakkında%20bilgi%20almak%20istiyorum"
    className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-3 bg-white border border-zinc-200 px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transition group"
  >

    {/* YEŞİL ICON */}
    <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white shadow">

      <span className="absolute w-3 h-3 bg-green-400 rounded-full animate-ping"></span>
      <span className="relative text-sm font-bold">W</span>

    </div>

    {/* TEXT */}
    <div className="text-left">
      <p className="text-xs text-zinc-500 leading-none">
        WhatsApp Destek
      </p>
      <p className="text-sm font-semibold text-zinc-800 leading-none">
        Hemen Yazın
      </p>
    </div>

  </a>

      </div>
    );
  }