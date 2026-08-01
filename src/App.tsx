import React, { useEffect } from 'react';
import { createIcons, Building2, Layers, ChevronDown } from 'lucide';

function App() {
  useEffect(() => {
    createIcons({
      icons: {
        Building2,
        Layers,
        ChevronDown
      }
    });
  }, []);

  return (
    <main className="dashboard-container">
      {/* Header Section (3-Band Design) */}
      <header className="dashboard-header">
        {/* Band 1: Logos */}
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

        {/* Band 2: Main Title */}
        <div className="header-band-title">
          <h2 id="dashboard-title">FLANSHET-2 LOYIHASI</h2>
        </div>
      </header>

      {/* Main Content Area */}
      <section className="main-content">
        <div className="placeholder-content">
          <h2>Asosiy kontent shu yerga joylashadi</h2>
          <p>Header qismi va ranglar xuddi o'sha yashnobodtexnopark-2026 loyihasidan olindi.</p>
          <p>Endi ichki qismga qanday ma'lumotlar qo'shishimiz kerakligini aytsangiz, shunga qarab davom etamiz.</p>
          <p className="text-sm mt-4 text-blue-600">
            Loyiha endi React va TypeScript (Vite) yordamida ishlamoqda.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
