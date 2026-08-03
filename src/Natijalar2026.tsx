import { useState, useEffect } from 'react';
import './Yashnobod2026.css';
import { 
  Building2, Layers, ChevronDown, Users, TrendingUp,
  Briefcase, Wallet, Globe, MapPin, X, Cpu, Bot, 
  Utensils, Home, Leaf, Flame, Milestone, Zap, 
  Wheat, Stethoscope, Car, Thermometer, Printer, 
  FlaskConical, Hammer, Box
} from 'lucide-react';

// Data from 2026
const dashboardData2026 = {
    totalResidents: 44,
    contactedCount: 500,
    appliedCount: 8,
    newResidents: 6,
    jobsCreated: 1331,
    totalProduction: 239.7,
    domesticSales: 192.3,
    exportSales: 47.4,
    countries: [
        { name: 'Қозоғистон', code: 'kz' },
        { name: 'Қирғизистон', code: 'kg' },
        { name: 'Тожикистон', code: 'tj' },
        { name: 'Россия', code: 'ru' }
    ],
    news: [
        "I. АСОСИЙ ФАОЛИЯТ: Тошкент шаҳар ҳокимлиги ва Савдо-саноат палатасига инновацион фаолият билан шуғулланувчи тадбиркорлик субъектлари рўйхатини шакллантириш учун мурожаат қилинди.",
        "2026-йилда резидентликка даъвогар 8 та тадбиркорлик субъектидан аризалар қабул қилиниб, техник экспертизадан ўтказилди; шундан 6 та субъектга Технопарк резидентлик мақоми тақдим этилди.",
        "Технопарк резидентлари сони 44 тани ташкил этмоқда. Йил бошидан 159,7 млрд. сўмлик маҳсулот ишлаб чиқарилиб, 112,3 млрд. сўми ички бозорга сотилди ва 4,6 млн. АҚШ долларлик маҳсулот қўшни давлатларга экспорт қилинди.",
        "Жами 102 та янги иш ўрни яратилди. Технопарк ҳудудида 20 та тадбиркор ўзининг инновацион лойиҳалари билан самарали ишлаб келмоқда.",
        "«ARHAT INKS» МЧЖ 101,3 млрд. сўмлик инновацион маҳсулот ишлаб чиқарди ва 6,8 млн. АҚШ доллари миқдоридаги маҳсулотни экспорт қилди.",
        "«ALWOOD» МЧЖ лойиҳаси доирасида 10,2 млрд. сўмлик инновацион маҳсулот ишлаб чиқарди.",
        "«UzAuto Cepla» МЧЖ ҚК 63,3 млрд. сўмлик полимер материаллар ишлаб чиқарди."
    ],
    sectors: [
        { name: 'Электроника', icon: 'cpu', desc: 'Электроника ва приборсозлик соҳасида юқори технологик маҳсулотлар, маиший техника ва инновацион қурилмалар ишлаб чиқариш лойиҳалари.' },
        { name: 'Робототехника', icon: 'bot', desc: 'Саноат ва маиший роботлар, автоматлаштирилган тизимлар ва сунъий интеллектга асосланган қурилмаларни лойиҳалаштириш.' },
        { name: 'Озиқ-овқат', icon: 'utensils', desc: 'Озиқ-овқат саноатида биотехнологиялар, янги турдаги озуқа қўшимчалари ва экологик тоза табиий маҳсулотларни ишлаб чиқариш.' },
        { name: 'Қурилиш', icon: 'building-2', desc: 'Инновацион қурилиш материаллари, энергия тежамкор конструкциялар ва замонавий муҳандислик ечимлари асосида қурилиш маҳсулотлари ишлаб чиқариш.' },
        { name: 'Уй-жой', icon: 'home', desc: 'Инновацион уй-жой коммуникация тизимлари ("Ақлли уй" технологиялари) ва энергия самарадорлиги юқори бўлган маиший жиҳозлар яратиш.' },
        { name: 'Экология', icon: 'leaf', desc: 'Атроф-муҳитни асраш, чиқиндиларни қайта ишлаш ва экологик тоза ("яшил") технологияларни жорий этиш лойиҳалари.' },
        { name: 'Нефть ва газ', icon: 'flame', desc: 'Нефть ва газ саноати учун замонавий ускуналар, ресурстежамкор технологиялар ва қайта ишлаш мосламалари ишлаб чиқариш.' },
        { name: 'Йўл қурилиши', icon: 'milestone', desc: 'Йўлсозликда ишлатиладиган инновацион қопламалар, йўл белгилари ва мустаҳкам материалларни тадқиқ этиш ва ишлаб чиқариш.' },
        { name: 'Энергетика', icon: 'zap', desc: 'Муқобил энергия манбалари (қуёш, шамол), энергия балансини бошқариш тизимлари ва аккумулятор батареялари лойиҳалари.' },
        { name: 'Қишлоқ хўжалиги', icon: 'wheat', desc: 'Агротехнологиялар, "Ақлли иссиқхона" тизимлари, сув тежовчи суғориш ускуналари ва инновацион ўғитлар яратиш.' },
        { name: 'Медицина', icon: 'stethoscope', desc: 'Биомедицина, тиббий асбоб-ускуналар, фармацевтика маҳсулотлари ва протезлаштириш технологиялари яратиш.' },
        { name: 'Автомобилсозлик', icon: 'car', desc: 'Автомобилсозлик учун бутловчи қисмлар, диагностика ускуналари ва электромобиллар инфратузилмаси (зарядлаш станциялари) лойиҳалари.' },
        { name: 'Иссиқлик ҳимояси', icon: 'thermometer', desc: 'Иссиқлик ва совуқликни сақловчи изоляция материаллари, термо-панеллар ва саноат печлари қопламаларини ишлаб чиқариш.' },
        { name: 'Полиграфия', icon: 'printer', desc: 'Замонавий босмахона хизматлари, 3D принтерлар ёрдамида моделлаштириш ва инновацион қадоқлаш технологиялари жорий этиш.' },
        { name: 'Кимё', icon: 'flask-conical', desc: 'Янги авлод кимёвий воситалари, полимерлар, саноат бўёқлари ва аралашмалар ишлаб чиқаришни маҳаллийлаштириш лойиҳалари.' }
    ]
};

const residentsData = [
    { name: "“ARHAT INKS” МЧЖ", icon: "flask-conical", desc: "«Яшнобод» инновация технопарки резиденти “ARHAT INKS” МЧЖ “Босма бўёқлар ишлаб чиқариш” инновацион лойиҳаси bilan faoliyat yuritmoqda. Лойиҳанинг умумий қиймати 3,1 минг АҚШ долларини ташкил этади." },
    { name: "“ALWOOD” МЧЖ", icon: "hammer", desc: "“ALWOOD” МЧЖ “Қурилиш учун метал қолип тизимлари ва ёрдамчи конструкциялар ишлаб чиқаришни маҳаллийлаштириш ва ташкил этиш” инновацион лойиҳаси билан 10,2 млрд. сўмлик инновацион маҳсулот ишлаб чиқариб, ички бозорга 7,9 млрд. сўм ва ташқи бозорга 189,8 минг АҚШ доллар миқдоридаги маҳсулотни Тожикистонга сотди." },
    { name: "“UzAuto Cepla” МЧЖ ҚК", icon: "box", desc: "«UzAuto Cepla» МЧЖ ҚКнинг “Полимер бирикмали материаллар ишлаб чиқариш” лойиҳасининг умумий қиймати 12,8 млн. АҚШ доллари ташкил этади. 2026 йилда 63,3 млрд. сўмлик инновацион маҳсулот ишлаб чиқарилиб ички бозорга сотди." },
    { name: "“ISTAL” МЧЖ", icon: "zap", desc: "«ISTAL» МЧЖ “Иссиқлик энергетикасининг инновацион ечимлари” лойиҳасининг умумий қиймати 10,0 млн. АҚШ доллари ташкил этади. 2026 йилда 93 та ишчи кучи яратиб, 1,6 млрд. сўмлик инновацион маҳсулот ишлаб чиқади ва ички бозорга сотди." },
    { name: "“Top Smart Line” МЧЖ ХК", icon: "flask-conical", desc: "«Top Smart Line» МЧЖ ХК “Полиуретан тизимлари ва пластификаторларни ишлаб чиқариш” лойиҳасининг умумий қиймати 73,5 млн. АҚШ доллари ташкил этади. 2026 йилда 15,1 млрд. сўмлик инновацион маҳсулот ишлаб чиқарилиб ички бозорга сотди." }
];

const getIcon = (name: string) => {
    switch (name) {
        case 'cpu': return <Cpu size={16} />;
        case 'bot': return <Bot size={16} />;
        case 'utensils': return <Utensils size={16} />;
        case 'building-2': return <Building2 size={16} />;
        case 'home': return <Home size={16} />;
        case 'leaf': return <Leaf size={16} />;
        case 'flame': return <Flame size={16} />;
        case 'milestone': return <Milestone size={16} />;
        case 'zap': return <Zap size={16} />;
        case 'wheat': return <Wheat size={16} />;
        case 'stethoscope': return <Stethoscope size={16} />;
        case 'car': return <Car size={16} />;
        case 'thermometer': return <Thermometer size={16} />;
        case 'printer': return <Printer size={16} />;
        case 'flask-conical': return <FlaskConical size={16} />;
        case 'hammer': return <Hammer size={16} />;
        case 'box': return <Box size={16} />;
        default: return <Building2 size={16} />;
    }
};

const AnimatedNumber = ({ value, duration = 1000 }: { value: number, duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * value));
            
            if (progress < 1) {
                animationFrame = requestAnimationFrame(step);
            } else {
                setCount(value);
            }
        };
        animationFrame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationFrame);
    }, [value, duration]);

    return <>{count}</>;
};

export const Natijalar2026 = () => {
    const [modalData, setModalData] = useState<{title: string, desc: string, icon: string} | null>(null);
    const [isResidentsOpen, setIsResidentsOpen] = useState(false);

    return (
        <div className="yashnobod-2026-theme active-view animate-fade-in" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: 0 }}>
            <div className="main-content-section" style={{ padding: '20px', flex: 1 }}>
                
                <div className="stats-grid">
                    {/* Residents Card */}
                    <div className="card glass-card residents-card" id="card-residents">
                        <div className="card-header">
                            <Users size={20} />
                            <span>Резидентлар фаолияти</span>
                        </div>
                        <div className="sectors-header">
                            <span className="sectors-count">15</span>
                            <span className="sectors-label">та фаолият соҳалари сони</span>
                        </div>
                        <div className="sectors-list" id="sectors-list">
                            {dashboardData2026.sectors.slice(0, 5).map((s, i) => (
                                <div key={i} className="sector-tag" onClick={() => setModalData({title: s.name, desc: s.desc, icon: s.icon})}>
                                    {getIcon(s.icon)}
                                    <span>{s.name}</span>
                                </div>
                            ))}
                            <div className="sector-tag" style={{ background: 'transparent', color: '#64748B' }}>+10 та яна...</div>
                        </div>
                        <div className="card-body">
                            <div className="main-stat">
                                <p>Жами резидентлар</p>
                                <h2>
                                    <AnimatedNumber value={dashboardData2026.totalResidents} />
                                    <span className="stat-suffix">та</span> 
                                    <span className="growth-badge" style={{ fontSize: '1.2rem' }}>
                                        <TrendingUp size={16} style={{marginRight: 6}} />+6
                                    </span>
                                </h2>
                            </div>
                        </div>
                        <div className="sub-stats">
                            <div className="sub-stat-item">
                                <span className="label">Музокара ўтказилган тадбиркорлар</span>
                                <span className="value"><AnimatedNumber value={dashboardData2026.contactedCount} /><span className="stat-suffix-sm">та</span></span>
                            </div>
                            <div className="sub-stat-item">
                                <span className="label">Қабул қилинган аризалар</span>
                                <span className="value"><AnimatedNumber value={dashboardData2026.appliedCount} /><span className="stat-suffix-sm">та</span></span>
                            </div>
                            <div className="sub-stat-item highlight">
                                <span className="label">Резидентлик мақоми берилган</span>
                                <span className="value"><AnimatedNumber value={dashboardData2026.newResidents} /><span className="stat-suffix-sm">та</span></span>
                            </div>
                            <div className="info-footer">
                                <p className="small-text">Барча лойиҳалар экстерриториаллик асосида фаолият юритмоқда</p>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN 2 */}
                    <div className="grid-column-wrapper">
                        {/* Services Card */}
                        <div className="card glass-card services-card" style={{ flex: 1 }}>
                            <div className="card-header" style={{ position: 'relative' }}>
                                <Layers size={20} />
                                <span>Асосий резидентлар лойиҳалари</span>
                                <div style={{marginLeft: 'auto'}}>
                                    <div className={`services-dropdown ${isResidentsOpen ? 'open' : ''}`}>
                                        <button className="services-dropdown-btn" onClick={() => setIsResidentsOpen(!isResidentsOpen)}>
                                            <span className="dropdown-text">Рўйхатни кўриш</span>
                                            <ChevronDown size={16} className="chevron" />
                                        </button>
                                        <div className="services-dropdown-content">
                                            {residentsData.map((r, index) => (
                                                <div key={index} className="service-item" onClick={() => {
                                                    setModalData({title: r.name, desc: r.desc, icon: r.icon});
                                                    setIsResidentsOpen(false);
                                                }}>
                                                    <span className="service-index">{index + 1}.</span> 
                                                    <div className="service-name">{r.name}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="services-main-list">
                                {residentsData.map((s, index) => (
                                    <div key={index} className="main-service-row new-row-highlight" onClick={() => setModalData({title: s.name, desc: s.desc, icon: s.icon})}>
                                        <div className="ms-left">
                                            <span className="ms-index">{index + 1}.</span>
                                            <span className="ms-icon">{getIcon(s.icon)}</span>
                                            <span className="ms-name">{s.name}</span>
                                        </div>
                                        <div className="ms-right">
                                            <span className="new-badge">Янги</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Jobs Card */}
                        <div className="card glass-card jobs-card">
                            <div className="card-header">
                                <Briefcase size={20} />
                                <span>Инсон капитали</span>
                            </div>
                            <div className="card-body jobs-content-flex">
                                <div className="main-stat">
                                    <div className="number-with-icon">
                                        <div className="stat-icon-wrapper">
                                            <Users size={28} className="stat-icon-color" />
                                        </div>
                                        <h2>
                                            <AnimatedNumber value={dashboardData2026.jobsCreated} />
                                            <span className="stat-suffix">та</span>
                                        </h2>
                                    </div>
                                    <p>Яратилган иш ўринлари</p>
                                </div>
                                <div className="jobs-illustration-box" style={{ transform: 'scale(0.8)', transformOrigin: 'bottom right' }}>
                                    <svg className="colored-illustration" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="60" cy="65" r="50" fill="#EEF2F7"/>
                                        <circle cx="60" cy="65" r="38" fill="#E0E7FF"/>
                                        <path d="M 75,100 C 75,70 100,70 100,100" fill="#3B82F6"/>
                                        <circle cx="87.5" cy="55" r="12" fill="#93C5FD"/>
                                        <path d="M 20,100 C 20,70 45,70 45,100" fill="#64748B"/>
                                        <circle cx="32.5" cy="55" r="12" fill="#94A3B8"/>
                                        <path d="M 40,105 C 40,65 80,65 80,105" fill="#0A2560"/>
                                        <circle cx="60" cy="50" r="15" fill="#2563EB"/>
                                        <path d="M 85,45 L 85,25 L 90,25 L 80,10 L 70,25 L 75,25 L 75,45 Z" fill="#C9A84C"/>
                                        <circle cx="30" cy="25" r="3.5" fill="#C9A84C"/>
                                        <circle cx="95" cy="45" r="4.5" fill="#0A2560"/>
                                        <circle cx="45" cy="15" r="2.5" fill="#C9A84C"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN 3 */}
                    <div className="grid-column-wrapper">
                        {/* Economic Production Card */}
                        <div className="card glass-card production-card">
                            <div className="card-header">
                                <Wallet size={20} />
                                <span>Иқтисодий кўрсаткич (млрд сўм)</span>
                            </div>
                            <div className="main-stat" style={{ marginTop: '5px' }}>
                                <h2 style={{ fontSize: 'clamp(2rem, 4.5vh, 4rem)' }}>239,7</h2>
                                <p style={{ marginTop: '5px', marginBottom: '2vh' }}>Умумий ишлаб чиқариш ҳажми</p>
                            </div>
                            <div className="production-breakdown">
                                <div className="breakdown-item">
                                    <div className="row-flex" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5px'}}>
                                        <span>Ички бозор:</span> <strong>{dashboardData2026.domesticSales}</strong>
                                    </div>
                                    <div className="breakdown-bar" style={{background: '#E2E8F0', height: '10px', borderRadius: '5px'}}>
                                        <div className="bar-fill domestic" style={{ width: '80.2%', background: '#2563EB', height: '100%', borderRadius: '5px' }}></div>
                                    </div>
                                </div>
                                <div className="breakdown-item" style={{ marginTop: '15px' }}>
                                    <div className="row-flex" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5px'}}>
                                        <span>Экспорт:</span> <strong>{dashboardData2026.exportSales}</strong>
                                    </div>
                                    <div className="breakdown-bar" style={{background: '#E2E8F0', height: '10px', borderRadius: '5px'}}>
                                        <div className="bar-fill export" style={{ width: '19.8%', background: '#C9A84C', height: '100%', borderRadius: '5px' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Export Geography */}
                        <div className="card glass-card export-card" style={{ flex: 1 }}>
                            <div className="card-header">
                                <Globe size={20} />
                                <span>Экспорт давлатлари</span>
                            </div>
                            <div className="countries-list" style={{display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px'}}>
                                {dashboardData2026.countries.map(c => (
                                    <div key={c.code} className="country-row" style={{display: 'flex', alignItems: 'center', gap: '12px', background: '#F8FAFC', padding: '12px', borderRadius: '8px', borderLeft: '3px solid transparent'}}>
                                        <MapPin size={18} style={{ color: '#2563EB' }} />
                                        <span style={{fontWeight: 600, color: '#1E293B'}}>{c.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* News Ticker */}
            <div className="news-ticker-container" style={{ display: 'flex' }}>
                <div className="ticker-badge">Янгиликлар:</div>
                <div className="ticker-wrap">
                    <div className="ticker-move">
                        {dashboardData2026.news.map((n, i) => (
                            <span key={i} className="ticker-item">{n}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {modalData && (
                <div className="modal-overlay" onClick={() => setModalData(null)}>
                    <div className="modal-content glass-card" onClick={e => e.stopPropagation()}>
                        <div className="modal-header-custom">
                            <div className="modal-title-group">
                                {getIcon(modalData.icon)}
                                <h3>{modalData.title}</h3>
                            </div>
                            <button className="modal-close" onClick={() => setModalData(null)}>
                                <X size={20} />
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>{modalData.desc}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
