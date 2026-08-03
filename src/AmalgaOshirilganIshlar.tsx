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
      title: "“Yashnobod” Innovatsion Texnoparki Axborot Platformasi",
      bullets: [
        "Asosiy maqsad: Texnopark faoliyatini raqamlashtirish, rezidentlar ma'lumotlarini yagona elektron bazaga jamlash va shaffoflikni ta'minlash.",
        "Status: Innovatsion rivojlanish agentligi huzuridagi 'Yashnobod' innovatsion texnoparkining boshqaruv va integratsiya portali.",
        "Imkoniyat: Startap loyihalar, ilmiy-tadqiqotlar va innovatsion bizneslarni rag'batlantirish hamda imtiyozlardan foydalanish jarayonini avtomatlashtirish."
      ],
      note: "Ushbu platforma 'Yashnobod' innovatsion texnoparki faoliyatini to'liq raqamlashtirish maqsadida yaratilgan. Platforma texnopark rezidentlarining yagona reyestrini shakllantiradi hamda davlat organlari va vazirliklar bilan integratsiyalashgan holda ishlash imkonini beradi."
    },
    {
      title: "Platformaning Asosiy Imkoniyatlari",
      bullets: [
        "Rezidentlar reyestri: Rezidentlarning holati (active / inactive), yo'nalishi, mahsulotlari hamda ularga berilgan sertifikatlar va soliq imtiyozlari bazasi.",
        "KPI monitoringi (Samaradorlik ko'rsatkichlari): Yangi yaratilgan ish o'rinlari soni, ishlab chiqarish va xizmat ko'rsatish hajmlari hamda eksport monitoringi (reja va amaldagi natija).",
        "Ma'lumotlar tahlili: Rezidentlar faoliyatini Excel/jadval ko'rinishida ko'rish va tahlil qilish imkoniyati."
      ],
      note: "Platformada har bir rezidentning profili yaratilgan bo'lib, ularning soliq imtiyozlari olishga asos bo'lgan sertifikatlari, faoliyat muddati va kutilayotgan KPI ko'rsatkichlarini onlayn rejimda kuzatish mumkin."
    },
    {
      title: "Zamonaviy Identifikatsiya va Xavfsizlik",
      bullets: [
        "OneID (Yagona identifikatsiya tizimi): Portalga milliy OneID tizimi orqali xavfsiz va tezkor kirish integratsiyasi.",
        "E-Imzo (Elektron raqamli imzo): Tizimda foydalanuvchilarning shaxsini tasdiqlash va hujjatlarni tasdiqlash uchun E-Imzo modali o'rnatilgan.",
        "Telegram OTP Autentifikatsiya: Foydalanuvchilar va ma'murlar uchun Telegram orqali bir martalik kod (OTP) yordamida kirish.",
        "Audit jurnali (AuditLog): Tizimdagi har bir o'zgarish, ma'muriy harakatlar va API so'rovlari audit loglarida xavfsiz saqlanadi."
      ],
      note: "Tizim xavfsizligini ta'minlash va foydalanuvchilarni autentifikatsiya qilish uchun milliy tizimlar – OneID va E-Imzodan foydalanilgan. Shuningdek, ma'murlar xavfsizligi uchun Telegram orqali ikki bosqichli OTP tizimi joriy qilingan."
    },
    {
      title: "Idoralararo Integratsiyalashuv (IIP) va Tashqi API",
      bullets: [
        "Idoralararo Integratsiyalashuv Platformasi (IIP): Boshqa vazirlik va idoralar (masalan, Iqtisodiyot va moliya vazirligining 'Subsidiya' axborot tizimi) bilan integratsiya.",
        "REST API v0: Rezidentlar holatini avtomatlashtirilgan tarzda olish uchun xavfsiz API kanali.",
        "Himoya va Nazorat: Basic Auth & API Key, IP Whitelisting va Rate Limiting cheklovlari."
      ],
      note: "Bizning platforma boshqa davlat idoralari bilan hamkorlikda ishlash uchun ham mo'ljallangan. Masalan, Iqtisodiyot va moliya vazirligining 'Subsidiya' tizimi ushbu API orqali texnopark rezidentlarining statusini avtomatik tekshirib, ularga subsidiyalarni qog'ozbozliksiz ajratish imkoniga ega bo'ladi."
    },
    {
      title: "Tizimning Texnologik Steki (Texnik Arxitektura)",
      bullets: [
        "Front-end: Next.js (React) — foydalanuvchilar va rezidentlar uchun tezkor, optimallashgan va dinamik interfeys.",
        "Back-end & Database: Prisma ORM va SQLite ma'lumotlar bazasi (ishonchli, yengil va tezkor integratsiya uchun).",
        "API Standarti: OpenAPI (Swagger) spesifikasiyasiga asoslangan hujjatlashtirish va integratsiya.",
        "Avtomatlashtirilgan deploy: Shell-skriptlar yordamida uzluksiz integratsiya (CI/CD) va PM2 orqali barqaror ish faoliyati."
      ],
      note: "Platformamiz Next.js, Prisma va SQLite kabi eng zamonaviy texnologiyalar yordamida ishlab chiqilgan. Bu portalning nafaqat tez ishlashini, balki kelajakda kengaytirilishini va boshqa davlat dasturlariga oson integratsiya qilinishini ta'minlaydi."
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
            <div className="premium-value-row">
              <h3>463.3 <span>mlrd</span></h3>
            </div>
            <div className="mini-progress-wrapper">
              <div className="mini-progress-labels">
                <span>Ichki bozor (354.2 mlrd)</span>
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
