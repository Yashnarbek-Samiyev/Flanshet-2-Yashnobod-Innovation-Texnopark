import { useEffect } from 'react';
import { 
  createIcons, 
  AlertTriangle, 
  Lightbulb, 
  Target, 
  Rocket, 
  GraduationCap, 
  TrendingUp, 
  Globe, 
  BookOpen, 
  ShoppingCart, 
  Search,
  CheckCircle2
} from 'lucide';

function App() {
  useEffect(() => {
    createIcons({
      icons: {
        AlertTriangle,
        Lightbulb,
        Target,
        Rocket,
        GraduationCap,
        TrendingUp,
        Globe,
        BookOpen,
        ShoppingCart,
        Search,
        CheckCircle2
      }
    });
  }, []);

  const problems = [
    {
      id: 1,
      muammo: "“Yashnobod” innovatsiya texnoparkining moddiy-texnik bazasi zamonaviy talablar darajasida emas.",
      taklif: "Moddiy texnik bazasini yangilash bilan bogʻliq xarajatlarni VM-489-son qaroriga muvofiq Ilm-fanni moliyalashtirish va innovatsiyalarni qoʻllab-quvvatlash jamgʻarmasi mablagʻlari hisobidan amalga oshirish.",
      natija: "Texnoparkning moddiy-texnik bazasi zamonaviy uskunalar bilan ta'minlanadi, innovatsion infratuzilma mustahkamlanadi, rezidentlarga ko'rsatilayotgan xizmatlar sifati oshadi hamda yuqori texnologiyali loyihalarni amalga oshirish kengayadi."
    },
    {
      id: 2,
      muammo: "Toshkent viloyatida faoliyat yuritayotgan innovatsion tadbirkorlik subyektlari eksterritoriallik mexanizmi doirasiga kiritilmagan, foyda soligʻi boʻyicha ragʻbatlar yo'q.",
      taklif: "Rezidentlarni Toshkent viloyati hududida ham eksterritoriallik tamoyili asosida joylashtirish imkoniyatini yaratish hamda foyda soligʻi boʻyicha imtiyoz joriy etish.",
      natija: "Toshkent viloyatida innovatsion tadbirkorlar koʻpayadi, yuqori texnologiyali ishlab chiqarish rivojlanadi, rezidentlar geografiyasi kengayadi, investitsiyalar jalb etiladi va yangi ish oʻrinlari yaratiladi."
    },
    {
      id: 3,
      muammo: "Yashnobod innovatsiya texnoparkining mavjud ishlab chiqarish va ofis maydonlari loyihalar ko'lamini kengaytirish uchun yetarli emas.",
      taklif: "Toshkent viloyati hududidan kamida 10 gektar yer maydoni ajratish hamda zamonaviy ishlab chiqarish, laboratoriya, ofis infratuzilmasiga ega yangi texnopark majmuasini barpo etish.",
      natija: "Texnoparkning ishlab chiqarish salohiyati sezilarli darajada kengayadi. Yirik yuqori texnologiyali loyihalarni amalga oshirish imkoniyati yaratiladi."
    }
  ];

  const plans = [
    { icon: 'rocket', text: "Yoshlarni innovatsion tadbirkorlik faoliyatiga jalb etish hamda ularning startap loyihalarini rivojlantirish uchun inkubatsiya va akseleratsiya dasturlarini yo'lga qo'yish." },
    { icon: 'graduation-cap', text: "Talabalarning amaliy ko'nikmalarini oshirish maqsadida texnopark rezidentlari bazasida amaliyot o'tash imkoniyatlarini kengaytirish." },
    { icon: 'trending-up', text: "Texnopark rezidentlari sonini oshirish va yuqori texnologiyali loyihalarni jalb etish." },
    { icon: 'globe', text: "Texnopark rezidentlarining mahsulotlarini mahalliylashtirish va import o'rnini bosuvchi loyihalarni qo'llab-quvvatlash." },
    { icon: 'book-open', text: "Rezidentlar mahsulotlari katalogini yaratish va raqamli platforma orqali targ'ib qilish." },
    { icon: 'shopping-cart', text: "Texnopark rezidentlarining mahsulotlarini elektron savdo platformalariga chiqarishga ko'maklashish." },
    { icon: 'search', text: "Texnopark huzurida loyiha ekspertizasi va texnologik audit tizimini joriy etish." }
  ];

  return (
    <main className="dashboard-container">
      {/* Header Section */}
      <header className="dashboard-header">
        <div className="header-band-logos">
          <div className="logo-group">
            <img 
              src="https://yashnarbek-samiyev.github.io/yashnobodtexnopark-2026/agency_logo.png" 
              alt="Агентлиги" 
              className="header-logo" 
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <div className="logo-caption">
              <span className="logo-caption-top">ИННОВАЦИОН</span>
              <span className="logo-caption-main">РИВОЖЛАНИШ</span>
              <span className="logo-caption-top">АГЕНТЛИГИ</span>
            </div>
          </div>

          <div className="header-logo-divider"></div>

          <div className="logo-group">
            <img 
              src="https://yashnarbek-samiyev.github.io/yashnobodtexnopark-2026/logo.png" 
              alt="Яшнобод" 
              className="header-logo" 
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <div className="logo-caption">
              <span className="logo-caption-main">“ЯШНОБОД”</span>
              <span className="logo-caption-top">ИННОВАЦИЯ ТЕХНОПАРКИ</span>
            </div>
          </div>
        </div>
        <div className="header-band-title">
          <h2 id="dashboard-title">FLANSHET-2: MUAMMOLAR VA STRATEGIK REJALAR</h2>
        </div>
      </header>

      {/* Main Content Area */}
      <section className="main-content">
        <div className="content-wrapper">
          
          {/* Muammolar va Takliflar (Premium Report Style) */}
          <div className="section-block">
            <h3 className="section-title">Muammolar va Takliflar</h3>
            <div className="report-container">
              {problems.map((item, index) => (
                <div key={item.id} className="report-block">
                  <div className="report-number">
                    <span>{index + 1}</span>
                  </div>
                  <div className="report-content">
                    <div className="report-section problem-section">
                      <div className="report-section-header">
                        <i data-lucide="alert-triangle"></i>
                        <h4>Muammo</h4>
                      </div>
                      <p>{item.muammo}</p>
                    </div>
                    
                    <div className="report-section proposal-section">
                      <div className="report-section-header">
                        <i data-lucide="lightbulb"></i>
                        <h4>Taklif</h4>
                      </div>
                      <p>{item.taklif}</p>
                    </div>
                    
                    <div className="report-section result-section">
                      <div className="report-section-header">
                        <i data-lucide="target"></i>
                        <h4>Kutilayotgan Natija</h4>
                      </div>
                      <p>{item.natija}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kelgusi Rejalar (Premium Timeline Style) */}
          <div className="section-block">
            <h3 className="section-title">Istiqboldagi Rejalar</h3>
            <div className="timeline-container">
              {plans.map((plan, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-icon">
                    <i data-lucide={plan.icon}></i>
                  </div>
                  <div className="timeline-content">
                    <p>{plan.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      
      {/* Footer */}
      <footer className="dashboard-footer">
        <p>&copy; {new Date().getFullYear()} Yashnobod Innovatsiya Texnoparki. Barcha huquqlar himoyalangan.</p>
      </footer>
    </main>
  );
}

export default App;
