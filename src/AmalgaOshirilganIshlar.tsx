import { useState } from 'react';
import { 
  Building2, 
  Users, 
  TrendingUp, 
  PackageSearch, 
  Globe2, 
  Monitor,
  DollarSign,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import './AmalgaOshirilganIshlar.css';

export const AmalgaOshirilganIshlar = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const platformSlides = [
    {
      title: "1. Telegram OTP va OneID autentifikatsiyasi",
      bullets: [
        "Telegram Bot orqali kirish: Foydalanuvchilar va ma'murlar tizimga xavfsiz kirish uchun @yaitcombot Telegram boti orqali yuboriladigan 6 xonali bir martalik vaqtinchalik paroldan (OTP) foydalanishadi (kod 3 daqiqa davomida amal qiladi).",
        "OneID (id.egov.uz) Integratsiyasi: Tizimga kirishda OneID yagona identifikatsiya tizimi simulyatori orqali xodimlar va ma'murlar profillarini avtomatik ro'yxatdan o'tkazish va identifikatsiyalash to'liq ishlaydi."
      ],
      note: "Tizimga kirishda xavfsizlikni oshirish uchun @yaitcombot telegram boti orqali ikki bosqichli OTP parollar hamda milliy OneID integratsiyasi to'liq joriy etilgan."
    },
    {
      title: "2. Excel va SQLite ikki tomonlama integratsiyasi (Admin paneli)",
      bullets: [
        "Excel interaktiv jadvali: Admin panelida ma'lumot.xlsx faylidagi barcha ma'lumotlar real vaqt rejimida o'qib olinadi va veb-interfeysda interaktiv jadval ko'rinishida taqdim etiladi.",
        "On-the-fly (Katak ichida) tahrirlash: Ma'murlar jadvaldagi istalgan ma'lumotni ustiga ikki marta bosish (double-click) orqali to'g'ridan-to'g'ri tahrirlay oladilar.",
        "Ma'lumotlar sinxronizatsiyasi: Tahrirlangan yoki yangi kiritilgan ma'lumotlar bazada saqlanishi bilan bir vaqtda Python skripti yordamida asosiy ma'lumot.xlsx Excel fayliga ham avtomatik yoziladi.",
        "Yangi rezident qo'shish va o'chirish: Yangi rezidentlarni maxsus oyna orqali bazaga qo'shish va eskirganlarini o'chirish funksiyasi to'liq joriy etilgan."
      ],
      note: "Admin panel orqali ma'lumotlar o'zgartirilganda, tizim SQLite bazasi bilan birga ma'lumot.xlsx Excel faylini ham Python yordamida real vaqtda yangilab boradi."
    },
    {
      title: "3. Rezidentlar reyestri va KPI ko'rsatkichlari monitoringi",
      bullets: [
        "Avtomatik status tekshiruvi: Rezidentlik muddati tugagan tashkilotlar holati (statusi) tizim tomonidan avtomatik ravishda active'dan inactive (nofaol) holatga o'tkaziladi.",
        "KPI va natijalar tahlili: Har bir rezident bo'yicha yaratilgan ish o'rinlari, ishlab chiqarish hajmi va eksport ko'rsatkichlarining rejasi hamda amaldagi natijalari foiz hisobida hisoblab boriladi.",
        "Tezkor qidiruv va filtrlash: Jamoatchilik sahifasida rezidentlarni nomi, INN (STIR) raqami yoki faoliyat sohasi bo'yicha soniyalar ichida saralash imkoniyati ma'lum."
      ],
      note: "Rezidentlar reyestri orqali har bir rezidentning holati, muddati va KPI ko'rsatkichlari (ish o'rinlari, eksport va mahsulot hajmi) onlayn rejimda nazorat qilinadi."
    },
    {
      title: "4. Davlat organlari uchun xavfsiz REST API (v0)",
      bullets: [
        "Tashqi integratsiya endpointi: /api/v0/residents-external API kanali orqali hamkor davlat idoralari (masalan, Iqtisodiyot va moliya vazirligining 'Subsidiya' tizimi) rezidentlik sertifikati mavjudligini avtomatik tekshira oladi.",
        "Ko'p bosqichli API xavfsizligi: Basic Auth (login va parol) hamda maxsus API Key protokollari orqali himoyalangan.",
        "IP Whitelisting & Rate Limiting: API faqat ruxsat berilgan serverlar IP manzillaridan so'rov qabul qiladi hamda daqiqasiga maksimal 60 ta so'rov cheklovi o'rnatilgan."
      ],
      note: "Ushbu API yordamida moliya vazirligi kabi tashqi idoralar rezidentlar statusini real vaqtda tekshirib, ularga subsidiyalarni tezroq va qog'ozbozliksiz ajratish imkoniga ega."
    },
    {
      title: "5. Harakatlar auditi (AuditLog)",
      bullets: [
        "Tizim xavfsizligi monitoringi: Ma'murlarning tizimga kirishi, rezidentlarni qo'shishi, o'chirishi yoki Excel jadvalini o'zgartirishi kabi barcha muhim amallar tizim xotirasida (AuditLog ma'lumotlar bazasida) vaqti va bajaruvchi shaxs ma'lumotlari bilan birga yozib boriladi."
      ],
      note: "Audit loglari kim, qachon va qanday o'zgarish qilganini to'liq yozib boradi. Bu esa tizim xavfsizligi va shaffoflikni eng yuqori darajada ta'minlaydi."
    }
  ];

  return (
    <div className="amalga-oshirilgan-container animate-fade-in">
      <div className="view-header">
        <h2>2026-yil II-Chorak: Amalga Oshirilgan Ishlar</h2>
        <div className="header-line"></div>
      </div>

      {/* Top Main Cards */}
      <div className="premium-stats-grid">
        
        {/* Residents Card */}
        <div className="premium-card residents-card">
          <div className="card-icon-wrapper blue-icon">
            <Building2 size={24} />
          </div>
          <div className="premium-card-content">
            <p className="premium-label">Jami Rezidentlar</p>
            <div className="premium-value-row">
              <h3>47 <span>ta</span></h3>
              <div className="badge success-badge">
                <TrendingUp size={14} /> +23.7%
              </div>
            </div>
            <p className="premium-desc">2025-yil yakuniga nisbatan o'sish</p>
          </div>
        </div>

        {/* Jobs Card */}
        <div className="premium-card jobs-card">
          <div className="card-icon-wrapper purple-icon">
            <Users size={24} />
          </div>
          <div className="premium-card-content">
            <p className="premium-label">Yaratilgan Ish O'rinlari</p>
            <div className="premium-value-row">
              <h3>456 <span>ta</span></h3>
              <div className="badge purple-badge">
                54.3% ulush
              </div>
            </div>
            <p className="premium-desc">Joriy yilda yaratilgan (2025: 840 ta)</p>
          </div>
        </div>

        {/* Production Card */}
        <div className="premium-card production-card">
          <div className="card-icon-wrapper gold-icon">
            <PackageSearch size={24} />
          </div>
          <div className="premium-card-content">
            <p className="premium-label">Sanoat Mahsulotlari</p>
            
            <div className="trade-detailed-stats">
              {/* Total Production */}
              <div className="trade-detail-item total-prod-bg">
                <div className="trade-detail-header">
                  <div className="trade-detail-icon-wrap text-gold">
                    <span className="currency-symbol-uzs">so'm</span>
                  </div>
                  <span className="trade-detail-title">Jami Ishlab Chiqarish</span>
                </div>
                <div className="trade-detail-value text-gold">463.3 <span>mlrd</span></div>
                <p className="trade-detail-desc">Hisobot davrida jami sanoat mahsulotlari ishlab chiqarildi.</p>
              </div>

              {/* Domestic Market */}
              <div className="trade-detail-item domestic-bg">
                <div className="trade-detail-header">
                  <div className="trade-detail-icon-wrap text-blue">
                    <span className="currency-symbol-uzs">so'm</span>
                  </div>
                  <span className="trade-detail-title">Ichki Bozor</span>
                </div>
                <div className="trade-detail-value text-blue">354.2 <span>mlrd</span></div>
                <p className="trade-detail-desc">Mahsulotlar ichki bozorga realizatsiya qilindi (76.4%).</p>
              </div>
            </div>

            <div className="mini-progress-wrapper" style={{ marginTop: '12px' }}>
              <div className="mini-progress-labels">
                <span>Ichki Bozor Ulushi</span>
                <span>76.4%</span>
              </div>
              <div className="mini-progress-bar">
                <div className="mini-progress-fill" style={{ width: '76.4%' }}></div>
              </div>
            </div>

          </div>
        </div>

        {/* Export/Import Card */}
        <div className="premium-card global-card">
          <div className="card-icon-wrapper green-icon">
            <Globe2 size={24} />
          </div>
          <div className="premium-card-content">
            <p className="premium-label">Tashqi Savdo Aylanmasi</p>
            <div className="trade-detailed-stats">
              {/* Export Detail */}
              <div className="trade-detail-item export-bg">
                <div className="trade-detail-header">
                  <div className="trade-detail-icon-wrap text-success">
                    <DollarSign size={16} />
                  </div>
                  <span className="trade-detail-title">Eksport</span>
                </div>
                <div className="trade-detail-value text-success">$9.2 <span>mln</span></div>
                <p className="trade-detail-desc">Sanoat mahsulotlari qo'shni davlatlarga eksport qilindi.</p>
              </div>

              {/* Import Detail */}
              <div className="trade-detail-item import-bg">
                <div className="trade-detail-header">
                  <div className="trade-detail-icon-wrap text-warning">
                    <span className="currency-symbol-uzs">so'm</span>
                  </div>
                  <span className="trade-detail-title">Import</span>
                </div>
                <div className="trade-detail-value text-warning">146.2 <span>mlrd</span></div>
                <p className="trade-detail-desc">Butlovchi qismlar, xom ashyo va materiallar import qilindi.</p>
              </div>
            </div>
            <div className="export-countries">
              <span className="export-countries-title">Eksport Davlatlari:</span>
              <div className="countries-grid">
                <div className="country-badge">
                  <img src="https://flagcdn.com/w40/kz.png" width="20" alt="Qozog'iston" className="flag-icon" />
                  <span>Qozog'iston</span>
                </div>
                <div className="country-badge">
                  <img src="https://flagcdn.com/w40/kg.png" width="20" alt="Qirg'iziston" className="flag-icon" />
                  <span>Qirg'iziston</span>
                </div>
                <div className="country-badge">
                  <img src="https://flagcdn.com/w40/tj.png" width="20" alt="Tojikiston" className="flag-icon" />
                  <span>Tojikiston</span>
                </div>
                <div className="country-badge">
                  <img src="https://flagcdn.com/w40/ru.png" width="20" alt="Rossiya" className="flag-icon" />
                  <span>Rossiya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Digital Platform Card */}
        <div className="premium-card platform-card">
          <div className="card-icon-wrapper blue-icon">
            <Monitor size={24} />
          </div>
          <div className="premium-card-content">
            <div className="platform-header-row">
              <p className="premium-label">Raqamli Platforma</p>
              <a href="https://innovationtechnopark.com/" target="_blank" rel="noopener noreferrer" className="platform-link-badge">
                innovationtechnopark.com
              </a>
            </div>

            {/* Interactive Slideshow */}
            <div className="platform-slideshow">
              <div className="slideshow-header">
                <h4>{platformSlides[activeSlide].title}</h4>
                <div className="slideshow-controls">
                  <button 
                    onClick={() => setActiveSlide((prev) => (prev === 0 ? platformSlides.length - 1 : prev - 1))}
                    className="slide-btn"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="slide-counter">{activeSlide + 1} / {platformSlides.length}</span>
                  <button 
                    onClick={() => setActiveSlide((prev) => (prev === platformSlides.length - 1 ? 0 : prev + 1))}
                    className="slide-btn"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <ul className="slide-bullets">
                {platformSlides[activeSlide].bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>

              <div className="slide-speech-note">
                <span className="speech-badge">Nutq uchun (Izoh):</span>
                <p>"{platformSlides[activeSlide].note}"</p>
              </div>
            </div>

          </div>
        </div>

      </div>


    </div>
  );
};
