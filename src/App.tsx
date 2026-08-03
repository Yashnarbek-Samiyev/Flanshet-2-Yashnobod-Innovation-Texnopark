import { useState, useEffect } from 'react';
import { Natijalar2026 } from './Natijalar2026';
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
  LayoutDashboard,
  Target as TargetIcon,
  ChevronLeft,
  ChevronRight,
  BarChart,
  Briefcase,
  Users,
  DollarSign,
  Building
} from 'lucide';

function App() {
  const [activeTab, setActiveTab] = useState<number>(5);

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
        LayoutDashboard,
        TargetIcon
      }
    });
  }, []);

  const problems = [
    {
      id: 1,
      title: "Moddiy-texnik Baza",
      muammo: "“Yashnobod” innovatsiya texnoparkining moddiy-texnik bazasi zamonaviy talablar darajasida emas.",
      taklif: "Moddiy texnik bazasini yangilash bilan bogʻliq xarajatlarni VM-489-son qaroriga muvofiq Ilm-fanni moliyalashtirish va innovatsiyalarni qoʻllab-quvvatlash jamgʻarmasi mablagʻlari hisobidan amalga oshirish.",
      natija: "Texnoparkning moddiy-texnik bazasi zamonaviy uskunalar bilan ta'minlanadi, innovatsion infratuzilma mustahkamlanadi, rezidentlarga ko'rsatilayotgan xizmatlar sifati oshadi hamda yuqori texnologiyali loyihalarni amalga oshirish kengayadi."
    },
    {
      id: 2,
      title: "Eksterritoriallik va Soliq",
      muammo: "Toshkent viloyatida faoliyat yuritayotgan innovatsion tadbirkorlik subyektlari eksterritoriallik mexanizmi doirasiga kiritilmagan, foyda soligʻi boʻyicha ragʻbatlar yo'q.",
      taklif: "Rezidentlarni Toshkent viloyati hududida ham eksterritoriallik tamoyili asosida joylashtirish imkoniyatini yaratish hamda foyda soligʻi boʻyicha imtiyoz joriy etish.",
      natija: "Toshkent viloyatida innovatsion tadbirkorlar koʻpayadi, yuqori texnologiyali ishlab chiqarish rivojlanadi, rezidentlar geografiyasi kengayadi, investitsiyalar jalb etiladi va yangi ish oʻrinlari yaratiladi."
    },
    {
      id: 3,
      title: "Yangi Yer Maydoni",
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

  // Re-run icons when tab changes
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
        LayoutDashboard,
        TargetIcon,
        ChevronLeft,
        ChevronRight,
        BarChart,
        Briefcase,
        Users,
        DollarSign,
        Building

      }
    });
  }, [activeTab]);

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
      </header>

      {/* Split Dashboard Body */}
      <div className="dashboard-body">
        
        
        {/* Sidebar Menu - Hide when on 2026 Results tab (activeTab === 5) */}
        {activeTab !== 5 && (
          <aside className="sidebar">
            <h3 className="sidebar-title">Boshqaruv Paneli</h3>
          <nav className="sidebar-menu">


            {problems.map((prob) => (
              <button 
                key={prob.id}
                className={`menu-btn ${activeTab === prob.id ? 'active' : ''}`}
                onClick={() => setActiveTab(prob.id)}
              >
                <div className="menu-icon"><i data-lucide="layout-dashboard"></i></div>
                <div className="menu-text">
                  <span className="menu-label">{prob.id}-Muammo</span>
                  <span className="menu-desc">{prob.title}</span>
                </div>
              </button>
            ))}
            
            <button 
              className={`menu-btn plan-btn ${activeTab === 4 ? 'active' : ''}`}
              onClick={() => setActiveTab(4)}
            >
              <i data-lucide="target" className="menu-icon"></i>
              <div className="menu-text">
                <span className="menu-label">Strategiya</span>
                <span className="menu-desc">Kelgusi Rejalar</span>
              </div>
            </button>
          </nav>
          
          <div className="sidebar-footer">
            <p>&copy; {new Date().getFullYear()} Yashnobod Innovatsiya Texnoparki.</p>
          </div>
        </aside>
        )}

        {/* Main Content View (No Scroll) */}
        <section className="content-panel" style={activeTab === 5 ? { padding: 0 } : {}}>
          
          {/* Render Active Problem */}
          {activeTab >= 1 && activeTab <= 3 && (
            <div className="active-view report-view animate-fade-in">
              <div className="view-header">
                <h2>Muammo va Taklif #{activeTab}: {problems[activeTab - 1].title}</h2>
                <div className="header-line"></div>
              </div>

              <div className="report-content-full">
                <div className="report-section problem-section">
                  <div className="report-section-header">
                    <i data-lucide="alert-triangle"></i>
                    <h4>Joriy Muammo</h4>
                  </div>
                  <p>{problems[activeTab - 1].muammo}</p>
                </div>
                
                <div className="report-section proposal-section">
                  <div className="report-section-header">
                    <i data-lucide="lightbulb"></i>
                    <h4>Yechim & Taklif</h4>
                  </div>
                  <p>{problems[activeTab - 1].taklif}</p>
                </div>
                
                <div className="report-section result-section">
                  <div className="report-section-header">
                    <i data-lucide="target"></i>
                    <h4>Kutilayotgan Natija</h4>
                  </div>
                  <p>{problems[activeTab - 1].natija}</p>
                </div>
              </div>
            </div>
          )}

          {/* Render Plans */}
          {activeTab === 4 && (
            <div className="active-view plans-view animate-fade-in">
              <div className="view-header">
                <h2>Kelgusi Istiqboldagi Rejalar</h2>
                <div className="header-line"></div>
              </div>
              
              <div className="plans-grid-compact">
                {plans.map((plan, index) => (
                  <div key={index} className="plan-compact-card animate-fade-in">
                    <div className="plan-compact-icon">
                      <i data-lucide={plan.icon}></i>
                    </div>
                    <div className="plan-compact-text">
                      <p>{plan.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Render 2026 Results */}
          {activeTab === 5 && (
            <Natijalar2026 onBack={() => setActiveTab(1)} />
          )}

        </section>
      </div>
    </main>
  );
}

export default App;
