/**
 * Yashnobod Technopark Dashboard Logic - Duo-tone Version (Cyrillic)
 */

const dashboardData = {
    2025: {
        totalResidents: 38,
        contactedCount: 800,
        appliedCount: 40,
        newResidents: 21,
        jobsCreated: 1136,
        totalProduction: 894.8,
        domesticSales: 721.1,
        exportSales: 173.7,
        totalUSD: "86.8",
        domesticUSD: "70.0",
        exportUSD: "16.9",
        domesticPercent: 80.6,
        exportPercent: 19.4,
        countries: [
            { name: 'Қирғизистон', code: 'kg' },
            { name: 'Қозоғистон', code: 'kz' },
            { name: 'Тожикистон', code: 'tj' },
            { name: 'Россия', code: 'ru' }
        ],
        sectors: [
            { name: 'Электроника',         icon: 'cpu', desc: 'Электроника ва приборсозлик соҳасида юқори технологик маҳсулотлар, маиший техника ва инновацион қурилмалар ишлаб чиқариш лойиҳалари.' },
            { name: 'Робототехника',        icon: 'bot', desc: 'Саноат ва маиший роботлар, автоматлаштирилган тизимлар ва сунъий интеллектга асосланган қурилмаларни лойиҳалаштириш.' },
            { name: 'Озиқ-овқат',          icon: 'utensils', desc: 'Озиқ-овқат саноатида биотехнологиялар, янги турдаги озуқа қўшимчалари ва экологик тоза табиий маҳсулотларни ишлаб чиқариш.' },
            { name: 'Қурилиш',             icon: 'building-2', desc: 'Инновацион қурилиш материаллари, энергия тежамкор конструкциялар ва замонавий муҳандислик ечимлари асосида қурилиш маҳсулотлари ишлаб чиқариш.' },
            { name: 'Уй-жой',              icon: 'home', desc: 'Инновацион уй-жой коммуникация тизимлари ("Ақлли уй" технологиялари) ва энергия самарадорлиги юқори бўлган маиший жиҳозлар яратиш.' },
            { name: 'Экология',            icon: 'leaf', desc: 'Атроф-муҳитни асраш, чиқиндиларни қайта ишлаш ва экологик тоза ("яшил") технологияларни жорий этиш лойиҳалари.' },
            { name: 'Нефть ва газ',        icon: 'flame', desc: 'Нефть ва газ саноати учун замонавий ускуналар, ресурстежамкор технологиялар ва қайта ишлаш мосламалари ишлаб чиқариш.' },
            { name: 'Йўл қурилиши',        icon: 'milestone', desc: 'Йўлсозликда ишлатиладиган инновацион қопламалар, йўл белгилари ва мустаҳкам материалларни тадқиқ этиш ва ишлаб чиқариш.' },
            { name: 'Энергетика',          icon: 'zap', desc: 'Муқобил энергия манбалари (қуёш, шамол), энергия балансини бошқариш тизимлари ва аккумулятор батареялари лойиҳалари.' },
            { name: 'Қишлоқ хўжалиги',    icon: 'wheat', desc: 'Агротехнологиялар, "Ақлли иссиқхона" тизимлари, сув тежовчи суғориш ускуналари ва инновацион ўғитлар яратиш.' },
            { name: 'Медицина',            icon: 'stethoscope', desc: 'Биомедицина, тиббий асбоб-ускуналар, фармацевтика маҳсулотлари ва протезлаштириш технологиялари яратиш.' },
            { name: 'Автомобилсозлик',     icon: 'car', desc: 'Автомобилсозлик учун бутловчи қисмлар, диагностика ускуналари ва электромобиллар инфратузилмаси (зарядлаш станциялари) лойиҳалари.' },
            { name: 'Иссиқлик ҳимояси',   icon: 'thermometer', desc: 'Иссиқлик ва совуқликни сақловчи изоляция материаллари, термо-панеллар ва саноат печлари қопламаларини ишлаб чиқариш.' },
            { name: 'Полиграфия',          icon: 'printer', desc: 'Замонавий босмахона хизматлари, 3D принтерлар ёрдамида моделлаштириш ва инновацион қадоқлаш технологиялари жорий этиш.' },
            { name: 'Кимё',               icon: 'flask-conical', desc: 'Янги авлод кимёвий воситалари, полимерлар, саноат бўёқлари ва аралашмалар ишлаб чиқаришни маҳаллийлаштириш лойиҳалари.' }
        ],
        news: []
    },
    2026: {
        totalResidents: 44,
        contactedCount: 500,
        appliedCount: 8,
        newResidents: 6,
        jobsCreated: 1331,
        totalProduction: 239.7,
        domesticSales: 192.3,
        exportSales: 47.4,
        totalUSD: "19.0",
        domesticUSD: "15.2",
        exportUSD: "3.8",
        domesticPercent: 80.2,
        exportPercent: 19.8,
        countries: [
            { name: 'Қозоғистон', code: 'kz' },
            { name: 'Қирғизистон', code: 'kg' },
            { name: 'Тожикистон', code: 'tj' },
            { name: 'Россия', code: 'ru' }
        ],
        sectors: [
            { name: 'Электроника',         icon: 'cpu', desc: 'Электроника ва приборсозлик соҳасида юқори технологик маҳсулотлар, маиший техника ва инновацион қурилмалар ишлаб чиқариш лойиҳалари.' },
            { name: 'Робототехника',        icon: 'bot', desc: 'Саноат ва маиший роботлар, автоматлаштирилган тизимлар ва сунъий интеллектга асосланган қурилмаларни лойиҳалаштириш.' },
            { name: 'Озиқ-овқат',          icon: 'utensils', desc: 'Озиқ-овқат саноатида биотехнологиялар, янги турдаги озуқа қўшимчалари ва экологик тоза табиий маҳсулотларни ишлаб чиқариш.' },
            { name: 'Қурилиш',             icon: 'building-2', desc: 'Инновацион қурилиш материаллари, энергия тежамкор конструкциялар ва замонавий муҳандислик ечимлари асосида қурилиш маҳсулотлари ишлаб чиқариш.' },
            { name: 'Уй-жой',              icon: 'home', desc: 'Инновацион уй-жой коммуникация тизимлари ("Ақлли уй" технологиялари) ва энергия самарадорлиги юқори бўлган маиший жиҳозлар яратиш.' },
            { name: 'Экология',            icon: 'leaf', desc: 'Атроф-муҳитни асраш, чиқиндиларни қайта ишлаш ва экологик тоза ("яшил") технологияларни жорий этиш лойиҳалари.' },
            { name: 'Нефть ва газ',        icon: 'flame', desc: 'Нефть ва газ саноати учун замонавий ускуналар, ресурстежамкор технологиялар ва қайта ишлаш мосламалари ишлаб чиқариш.' },
            { name: 'Йўл қурилиши',        icon: 'milestone', desc: 'Йўлсозликда ишлатиладиган инновацион қопламалар, йўл белгилари ва мустаҳкам материалларни тадқиқ этиш ва ишлаб чиқариш.' },
            { name: 'Энергетика',          icon: 'zap', desc: 'Муқобил энергия манбалари (қуёш, шамол), энергия балансини бошқариш тизимлари ва аккумулятор батареялари лойиҳалари.' },
            { name: 'Қишлоқ хўжалиги',    icon: 'wheat', desc: 'Агротехнологиялар, "Ақлли иссиқхона" тизимлари, сув тежовчи суғориш ускуналари ва инновацион ўғитлар яратиш.' },
            { name: 'Медицина',            icon: 'stethoscope', desc: 'Биомедицина, тиббий асбоб-ускуналар, фармацевтика маҳсулотлари ва протезлаштириш технологиялари яратиш.' },
            { name: 'Автомобилсозлик',     icon: 'car', desc: 'Автомобилсозлик учун бутловчи қисмлар, диагностика ускуналари ва электромобиллар инфратузилмаси (зарядлаш станциялари) лойиҳалари.' },
            { name: 'Иссиқлик ҳимояси',   icon: 'thermometer', desc: 'Иссиқлик ва совуқликни сақловчи изоляция материаллари, термо-панеллар ва саноат печлари қопламаларини ишлаб чиқариш.' },
            { name: 'Полиграфия',          icon: 'printer', desc: 'Замонавий босмахона хизматлари, 3D принтерлар ёрдамида моделлаштириш ва инновацион қадоқлаш технологиялари жорий этиш.' },
            { name: 'Кимё',               icon: 'flask-conical', desc: 'Янги авлод кимёвий воситалари, полимерлар, саноат бўёқлари ва аралашмалар ишлаб чиқаришни маҳаллийлаштириш лойиҳалари.' }
        ],
        news: [
            "I. АСОСИЙ ФАОЛИЯТ: Тошкент шаҳар ҳокимлиги ва Савдо-саноат палатасига инновацион фаолият билан шуғулланувчи тадбиркорлик субъектлари рўйхатини шакллантириш учун мурожаат қилинди.",
            "2026-йилда резидентликка даъвогар 8 та тадбиркорлик субъектиdan аризалар қабул қилиниб, техник экспертизадан ўтказилди; шундан 6 та субъектга Технопарк резидентлик мақоми тақдим этилди.",
            "Технопарк резидентлари сони 44 тани ташкил этмоқда. Йил бошидан 159,7 млрд. сўмлик маҳсулот ишлаб чиқарилиб, 112,3 млрд. сўми ички бозорга сотилди ва 4,6 млн. АҚШ долларлик маҳсулот қўшни давлатларга экспорт қилинди.",
            "Жами 102 та янги иш ўрни яратилди. Технопарк ҳудудида 20 та тадбиркор ўзининг инновацион лойиҳалари билан самарали ишлаб келмоқда.",
            "«ARHAT INKS» МЧЖ «Босма бўёқлар ишлаб чиқариш» лойиҳаси доирасида 101,3 млрд. сўмлик инновацион маҳсулот ишлаб чиқарди ва 6,8 млн. АҚШ доллари миқдоридаги маҳсулотни экспорт қилди. 2025–26 йилларда 3,9 млрд. сўмлик инвестиция киритилди.",
            "«ARHAT INKS» МЧЖ 2026-йил 1-чорак учун Технопарк ҳисоб рақамига 32,7 млн. сўм ажратма ўтказди.",
            "«ALWOOD» МЧЖ «Металл қолип тизимлари ва ёрдамчи конструкциялар ишлаб чиқаришни маҳаллийлаштириш» лойиҳаси доирасида 10,2 млрд. сўмлик инновацион маҳсулот ишлаб чиқарди.",
            "«ALWOOD» МЧЖ Хитой давлатидан 30 977 АҚШ долларида асбоб-ускуналар олиб келди; 318,4 млн. сўм маблағ божхона тўловларидан озод этилди. Тежалган маблағ корхона капиталини кўпайтиришга киритилди.",
            "«UzAuto Cepla» МЧЖ ҚК 63,3 млрд. сўмлик полимер материаллар ишлаб чиқарди ва 565,3 млн. сўмлик божхона имтиёзларидан фойдаланди.",
            "«ISTAL» МЧЖ томонидан иссиқлик энергетикаси йўналишида 93 та янги иш ўрни яратилди ва 1,6 млрд. сўмлик маҳсулот ишлаб чиқарилди.",
            "«Top Smart Line» МЧЖ ХК полиуретан тизимлари лойиҳаси доирасида 15,1 млрд. сўмлик маҳсулот ишлаб чиқарди ва 472,7 млн. сўмлик солиқ имтиёзларига эга бўлди.",
            "II. ҚЎШИМЧА ФАОЛИЯТ: Технопарк директори бошчилигида «Манфаатлар тўқнашувини бошқариш ва уни ҳал қилиш чоралари» мавзусида йиғилиш бўлиб ўтди.",
            "Технопарк резидентлари иштирокида онлайн конференция ўтказилди. Вазирлар Маҳкамасининг 2025-йил 784-сон қарори доирасида субсидиялар, имтиёзлар ва преференциялардан самарали фойдаланиш бўйича тушунтиришлар берилди.",
            "Адлия вазирлигида интеллектуал мулк объектларини баҳолаш тизимини йўлга қўйишга бағишланган давра суҳбати бўлиб ўтди (ПҚ–390-сон қарор ижроси доирасида).",
            "2026-йил 6-март куни Чуст тумани ҳокимлиги ҳамда Ёшлар ишлари бўлими ўртасида меморандум имзоланди.",
            "III. ТАСАББУСЛАР: Яшнобод инновация технопарки ходимлари иштирокида У.А.Арифов номидаги Ион-плазма ва лазер технологиялари институти ҳамда «Big Bag Production» МЧЖ ҳамкорлигида инновацион лойиҳа амалга оширилди.",
            "InnoWeek-2025 доирасида Яшнобод инновация технопарки, Сколково фонди ҳамда МДҲ Компетенциялар маркази ўртасида меморандум имзоланди."
        ]
    }
};

/**
 * Animate numbers
 */
function animateValue(id, start, end, duration, isFloat = false, suffix = '') {
    const obj = document.getElementById(id);
    if (!obj) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        let val = progress * (end - start) + start;
        
        if (isFloat) {
            obj.innerHTML = val.toFixed(1).replace('.', ',') + suffix;
        } else {
            obj.innerHTML = Math.floor(val).toLocaleString() + suffix;
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

/**
 * Switch Year
 */
function switchYear(year) {
    document.querySelectorAll('.year-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText === year.toString()) btn.classList.add('active');
    });

    const data = dashboardData[year];
    if (!data) return;

    animateValue('total-residents', 0, data.totalResidents, 800);
    animateValue('applied-count', 0, data.appliedCount, 800);
    animateValue('new-residents', 0, data.newResidents, 800);
    animateValue('jobs-created', 0, data.jobsCreated, 1000);
    
    // Update services dropdown based on year
    const servicesContainer = document.getElementById('services-dropdown-content');
    const mainListContainer = document.getElementById('services-main-list');
    
    // Yil tanlanganda qo'shiladigan logika
    const activeServices = year === 2025 ? servicesData.slice(0, 6) : servicesData;
    
    if (servicesContainer) servicesContainer.innerHTML = '';
    if (mainListContainer) mainListContainer.innerHTML = '';
    
    activeServices.forEach((s, index) => {
        const isNew = year === 2026 && index >= 6;
        const newBadge = isNew ? `<span class="new-badge">Янги</span>` : '';
        
        // 1. Dropdown Header uchun
        if (servicesContainer) {
            const el = document.createElement('div');
            el.className = 'service-item';
            if (isNew) el.classList.add('new-service-highlight');
            
            el.innerHTML = `<span class="service-index">${index + 1}.</span> <div class="service-name">${s.name} ${newBadge}</div>`;
            el.onclick = () => openModal(s.name, s.icon, s.desc);
            servicesContainer.appendChild(el);
        }
        
        // 2. Main split-card (chap taraf) uchun
        if (mainListContainer) {
            const mEl = document.createElement('div');
            mEl.className = 'main-service-row';
            if (isNew) mEl.classList.add('new-row-highlight');
            
            mEl.innerHTML = `
                <div class="ms-left">
                    <span class="ms-index">${index + 1}.</span>
                    <i data-lucide="${s.icon}" class="ms-icon"></i>
                    <span class="ms-name">${s.name}</span>
                </div>
                <div class="ms-right">
                    ${newBadge}
                </div>
            `;
            mEl.onclick = () => openModal(s.name, s.icon, s.desc);
            mainListContainer.appendChild(mEl);
        }
    });

    // +2 Badgelarni boshqarish
    const servicesBadge = document.getElementById('services-badge');
    const servicesBadgeMain = document.getElementById('services-badge-main');
    
    const displayStyle = (year === 2026) ? 'inline-flex' : 'none';
    if (servicesBadge) servicesBadge.style.display = displayStyle;
    if (servicesBadgeMain) servicesBadgeMain.style.display = displayStyle;

    // Growth Badge boshqarish (Jobs & Residents)
    const jobsGrowthBadge = document.getElementById('jobs-growth-badge');
    const residentsGrowthBadge = document.getElementById('residents-growth-badge');
    
    const showGrowth = (year === 2026) ? 'inline-flex' : 'none';
    if (jobsGrowthBadge) jobsGrowthBadge.style.display = showGrowth;
    if (residentsGrowthBadge) residentsGrowthBadge.style.display = showGrowth;

    // Hozirgi script elementlariga iconkalarni qo'llash
    lucide.createIcons();
    
    const getUsdStr = (valInBln) => {
        const mlnUsd = (valInBln * 1000) / currentExchangeRate;
        return mlnUsd.toFixed(1).replace('.', ',');
    };

    let totalUsdSuffix = `<span style="display:block; color:#1DA462; font-size:0.35em; margin-top:2px; font-weight:700;">(${getUsdStr(data.totalProduction)} млн $)</span>`;
    animateValue('total-production', 0, data.totalProduction, 1000, true, `<span class="stat-suffix" style="color:#C9A84C; font-size:0.4em;">млрд сўм</span>${totalUsdSuffix}`);

    // Gaplashilgan tadbirkorlar — faqat 2025
    const contactedRow = document.getElementById('contacted-row');
    if (data.contactedCount) {
        animateValue('contacted-count', 0, data.contactedCount, 800);
        contactedRow.style.display = 'flex';
    } else {
        contactedRow.style.display = 'none';
    }

    // Update Title Tagline based on year
    const dashTitle = document.getElementById('dashboard-title');
    if (year === 2026) {
        dashTitle.innerText = 'ЯШНОБОД ИННОВАЦИЯ ТЕХНОПАРКИ ТОМОНИДАН 2026-ЙИЛ 1-ЧОРАК ФАОЛИЯТ НАТИЖАЛАРИ';
    } else {
        dashTitle.innerText = 'ТАҚДИМ ЭТИЛГАН ҚЎЛЛАБ-ҚУВВАТЛАШ ЧОРАЛАРИНИНГ САМАРАДОРЛИГИ ВА ЭРИШИЛГАН НАТИЖАЛАР (2025 ЙИЛЛАР КЕСИМИДА)';
    }

    // Update sales text
    const domesticEl = document.getElementById('domestic-sales');
    const exportEl = document.getElementById('export-sales');
    
    domesticEl.innerHTML = `
        ${data.domesticSales.toString().replace('.', ',')} <span style="color:#64748B; font-size:0.85em; font-weight:600;">млрд сўм</span>
        <span style="display:block; color:#1DA462; font-size:0.85em; font-weight:700;">(${getUsdStr(data.domesticSales)} млн $)</span>
    `;
    
    exportEl.innerHTML = `
        ${data.exportSales.toString().replace('.', ',')} <span style="color:#64748B; font-size:0.85em; font-weight:600;">млрд сўм</span>
        <span style="display:block; color:#1DA462; font-size:0.85em; font-weight:700;">(${getUsdStr(data.exportSales)} млн $)</span>
    `;

    // Update bars
    document.querySelector('.bar-fill.domestic').style.width = data.domesticPercent + '%';
    document.querySelector('.bar-fill.export').style.width = data.exportPercent + '%';
    
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) progressFill.style.width = '100%';

    // Update countries list
    const countriesContainer = document.querySelector('.countries-list');
    countriesContainer.innerHTML = '';
    data.countries.forEach(c => {
        const pill = document.createElement('div');
        pill.className = 'country-pill';
        pill.innerHTML = `
            <img src="https://flagcdn.com/w40/${c.code}.png" 
                 srcset="https://flagcdn.com/w80/${c.code}.png 2x" 
                 width="24" 
                 alt="${c.name}" 
                 class="country-flag-img">
            ${c.name}
        `;
        countriesContainer.appendChild(pill);
    });

    // Handle News Ticker
    const newsContainer = document.getElementById('news-container');
    const newsContent = document.getElementById('news-ticker-content');
    
    if (data.news && data.news.length > 0) {
        newsContainer.style.display = 'flex';
        newsContent.innerHTML = '';
        data.news.forEach(text => {
            const span = document.createElement('span');
            span.className = 'ticker-item';
            span.innerText = text;
            newsContent.appendChild(span);
        });
    } else {
        newsContainer.style.display = 'none';
        newsContent.innerHTML = '';
    }

    // Render sectors
    const sectorsList = document.getElementById('sectors-list');
    if (sectorsList) {
        sectorsList.innerHTML = '';
        if (data.sectors && data.sectors.length > 0) {
            data.sectors.forEach(s => {
                const tag = document.createElement('div');
                tag.className = 'sector-tag';
                tag.innerHTML = `<i data-lucide="${s.icon}"></i><span>${s.name}</span>`;
                tag.onclick = () => openModal(s.name, s.icon, s.desc);
                sectorsList.appendChild(tag);
            });
        }
        lucide.createIcons();
    }
}

/**
 * Modal Logic for Sectors
 */
function openModal(name, icon, desc) {
    const modal = document.getElementById('sector-modal');
    document.getElementById('modal-desc').innerText = desc;
    
    const titleGroup = document.getElementById('modal-title-group');
    titleGroup.innerHTML = `<i data-lucide="${icon}"></i><h3 id="modal-title">${name}</h3>`;
    
    lucide.createIcons();
    modal.classList.add('active');
}

function closeModal(event) {
    if (event) {
        // Prevent closing if clicking inside the modal content
        if (event.target.closest('.modal-content') && !event.target.closest('.modal-close')) {
            return;
        }
    }
    document.getElementById('sector-modal').classList.remove('active');
}

let currentExchangeRate = 12600; // Default

const servicesData = [
    {
        name: "Инновацион лойиҳа учун бизнес-режа тайёрлаш",
        icon: "briefcase",
        desc: "Лойиҳанинг мақсадга мувофиқлигини асослаб бериш, молиявий, маркетинговий ва техник қисмларини ўз ичига олган бизнес-режа(ТЭО) лойиҳаларини халқаро стандартлар асосида ишлаб чиқиш."
    },
    {
        name: "Интеллектуал мулкни давлат рўйхатидан ўтказиш бўйича хизматлар (саноат намунаси, товар белгиси учун)",
        icon: "award",
        desc: "Яратилган ихтиролар, фойдали моделлар, саноат намуналари(прототип) ҳамда товар белгиларини ва муаллифлик ҳуқуқларини ҳимоялаш мақсадида Адлия вазирлигидан ва тегишли давлат органларидан рўйхатдан ўтказишда кўмаклашиш."
    },
    {
        name: "Ресурслар (Инвестиция жалб қилиш)",
        icon: "piggy-bank",
        desc: "Лойиҳани амалга ошириш учун маҳаллий ва хорижий инвесторларни жалб қилиш, грантлар, тижорат банкларининг кредит маблағлари ҳамда венчур фондларидан фойдаланишда амалий ёрдам кўрсатиш."
    },
    {
        name: "Маслаҳат хизматлари, тижорат менежменти учун фаолият ва корхоналарни бошқариш хизматлари",
        icon: "bar-chart-3",
        desc: "Тадбиркорлик субъектлари фаолиятини тўғри ташкил этиш, корхонани бошқариш тизимларини оптималлаштириш, солиқ ва бухгалтерия ҳисоби бўйича юридик ва молиявий маслаҳатлар бериш."
    },
    {
        name: "Маркетинг хизматлари",
        icon: "target",
        desc: "Бозор конъюктурасини ўрганиш, маҳсулотнинг рақобатбардошлигини таҳлил қилиш, сотиш бозорларини топиш ва лойиҳани илгари суриш (PR) бўйича стратегик маркетинг хизматларини кўрсатиш."
    },
    {
        name: "Реклама хизматлари (шу жумладан халқаро кўргазмаларда)",
        icon: "presentation",
        desc: "Маҳсулотларни кенг оммага танитиш мақсадида маҳаллий ва халқаро кўргазмаларда қатнашишни ташкил қилиш, кўргазма ва реклама материалларини юқори сифатда тайёрлаш хизматлари."
    },
    {
        name: "Тадбиркорлик фаолиятини ҳуқуқий ҳимоя қилиш хизмати",
        icon: "shield-alert",
        desc: "Корхоналар ўртасидаги шартномавий муносабатларни тартибга солиш, суд ва бошқа давлат органларида тадбиркорнинг манфаатларини ҳимоя қилиш ҳамда ҳуқуқий ҳужжатлар билан ишлашга кўмаклашиш."
    },
    {
        name: "Полиграфия хизмати",
        icon: "printer",
        desc: "Юқори сифатли реклама буклетлари, флаерлар, баннерлар, визитка, қадоқлаш материаллари(упаковка) ва бошқа турдаги босма маҳсулотларни замонавий ускуналарда тайёрлаб бериш хизматлари."
    }
];

// === Yangi qo'shilgan: Asosiy Rezidentlar Loyihalari ===
const residentsData = [
    {
        name: "“ARHAT INKS” МЧЖ",
        icon: "flask-conical",
        desc: "«Яшнобод» инновация технопарки резиденти “ARHAT INKS” МЧЖ “Босма бўёқлар ишлаб чиқариш” инновацион лойиҳаси билан фаолият юритиб келмоқда. Лойиҳанинг умумий қиймати 3,1 минг АҚШ долларини ташкил этади. “ARHAT INKS” МЧЖнинг инвестиция лойиҳасига кўра ишлаб чиқариш зоналарини таъмирлаш-реконструкция ишлари тугатилиб, жами 2025-26 йилларда 3,9 млрд. сўмга асбоб-ускуналар, қурилиш монтаж ишлари учун инвестиция киритиб, 101,3 млрд. сўмлик инновацион маҳсулот ишлаб чиқарилди ва 6,8 млн. АҚШ доллар миқдоридаги маҳсулотлар қўшни мамлакатларга экспорт қилинди. Шартнома асосида 2026 йил 1-чорак учун технопарк ҳисоб рақамига 32,7 млн. сўм ажратма ўтказди."
    },
    {
        name: "“ALWOOD” МЧЖ",
        icon: "hammer",
        desc: "“ALWOOD” МЧЖ “Қурилиш учун метал қолип тизимлари ва ёрдамчи конструкциялар ишлаб чиқаришни маҳаллийлаштириш ва ташкил этиш” инновацион лойиҳаси билан 10,2 млрд. сўмлик инновацион маҳсулот ишлаб чиқариб, ички бозорга 7,9 млрд. сўм ва ташқи бозорга 189,8 минг АҚШ доллар миқдоридаги маҳсулотни Тожикистонга сотди. Шартнома асосида 2026 йил 1-чорак учун технопарк ҳисоб рақамига 10,1 млн. сўм ажратма ўтказди. Бундан ташқари 2026 йил 1-чорак ҳолатига ўз ишлаб чиқариш эҳтиёжи учун 30 977 АҚШ долларида асбоб-ускуналар Хитой давлатидан олиб келиниб, 318,4 млн. сўм маблағ божхона тўловларидан озод этилди. Тежалган маблағ корхона капиталини кўпайтиришга киритилди."
    },
    {
        name: "“UzAuto Cepla” МЧЖ ҚК",
        icon: "box",
        desc: "«UzAuto Cepla» МЧЖ ҚКнинг “Полимер бирикмали материаллар ишлаб чиқариш” лойиҳасининг умумий қиймати 12,8 млн. АҚШ доллари ташкил этади. 2026 йилда 63,3 млрд. сўмлик инновацион маҳсулот ишлаб чиқарилиб ички бозорга сотди. Шартнома асосида 2026 йил 1-чорак учун технопарк ҳисоб рақамига 63,1 млн.сўм ажратма ўтказди. Бундан ташқари ўз ишлаб чиқариш эҳтиёжи учун 9,6 млрд. сўмлик хом-ашё Хитой, Корея, Германия, Япония давлатларидан олиб келиниб, 565,3 млн. сўм маблағ божхона тўловларидан озод этилди. Тежалган маблағ корхона капиталини кўпайтиришга киритилди."
    },
    {
        name: "“ISTAL” МЧЖ",
        icon: "zap",
        desc: "«ISTAL» МЧЖ “Иссиқлик энергетикасининг инновацион ечимлари” лойиҳасининг умумий қиймати 10,0 млн. АҚШ доллари ташкил этади. 2026 йилда 93 та ишчи кучи яратиб, 1,6 млрд. сўмлик инновацион маҳсулот ишлаб чиқади ва ички бозорга сотди. Шартнома асосида 2026 йил 1-чорак учун технопарк ҳисоб рақамига 1,5 млн.сўм ажратма ўтказди."
    },
    {
        name: "“Top Smart Line” МЧЖ ХК",
        icon: "flask-conical",
        desc: "«Top Smart Line» МЧЖ ХК “Полиуретан тизимлари ва пластификаторларни ишлаб чиқариш” лойиҳасининг умумий қиймати 73,5 млн. АҚШ доллари ташкил этади. 2026 йилда 15,1 млрд. сўмлик инновацион маҳсулот ишлаб чиқарилиб ички бозорга сотди. Шартнома асосида 2026 йил 1-чорак учун технопарк ҳисоб рақамига 15,1 млн.сўм ажратма ўтказди. Бундан ташқари 472,7 млн. сўм маблағ ер ва мулк солиқларидан озод этилди. Тежалган маблағ ўз ишлаб чиқариш эҳтиёжи учун 26,8 млрд. сўмлик хом-ашё Хитой, Германия, давлатларидан олиб келинди."
    }
];

window.addEventListener('DOMContentLoaded', () => {
    // Renderni bajarish (Rezidentlar menyusi)
    const resContainer = document.getElementById('residents-dropdown-content');
    if (resContainer) {
        residentsData.forEach((r, index) => {
            const el = document.createElement('div');
            el.className = 'service-item';
            el.innerHTML = `<span class="service-index">${index + 1}.</span> <div class="service-name">${r.name}</div>`;
            el.onclick = () => openModal(r.name, r.icon, r.desc);
            resContainer.appendChild(el);
        });
    }

    // 1. Darhol default kursda ko'rsatish (kuttirmaslik uchun)
    switchYear(2025);

    // 2. Orqa fonda (background) real kursni olish
    fetch('https://open.er-api.com/v6/latest/USD')
        .then(res => res.json())
        .then(d => {
            if (d && d.rates && d.rates.UZS) {
                currentExchangeRate = parseFloat(d.rates.UZS);
                // Qaysi yil tanlanganini aniqlab, sahifani yangi kurs bilan yangilash
                const activeBtn = document.querySelector('.year-btn.active');
                const currentYear = activeBtn ? parseInt(activeBtn.innerText) : 2025;
                // Animate false or fast (here we just run switchYear again)
                switchYear(currentYear);
            }
        })
        .catch(e => {
            console.warn('API dan dollar kursini olishda xatolik:', e);
        });
});

// Barcha dropdownlarni to'g'ri ishlashi uchun umumiy mantiq
window.addEventListener('click', (e) => {
    const clickedBtn = e.target.closest('.services-dropdown-btn');
    
    // Agar tugma bosilgan bo'lsa
    if (clickedBtn) {
        const parentDropdown = clickedBtn.closest('.services-dropdown');
        const wasOpen = parentDropdown.classList.contains('open');
        
        // Barcha dropdownlarni avval yopish
        document.querySelectorAll('.services-dropdown.open').forEach(d => {
            d.classList.remove('open');
        });
        
        // Agar yopiq bo'lsa ochish
        if (!wasOpen) {
            parentDropdown.classList.add('open');
        }
    } else {
        // Ekrandagi boshqa joy bosilganda yoki content ichida
        if (!e.target.closest('.services-dropdown-content')) {
            document.querySelectorAll('.services-dropdown.open').forEach(d => {
                d.classList.remove('open');
            });
        }
    }
});
