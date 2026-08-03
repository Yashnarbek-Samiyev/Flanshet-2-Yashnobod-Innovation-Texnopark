import { 
  Building2, 
  Users, 
  TrendingUp, 
  PackageSearch, 
  Globe2, 
  CheckCircle2, 
  XCircle, 
  RefreshCw, 
  PlusCircle,
  Monitor
} from 'lucide-react';
import './AmalgaOshirilganIshlar.css';

export const AmalgaOshirilganIshlar = () => {
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
            <div className="trade-stats">
              <div className="trade-item">
                <span className="trade-label text-success">Eksport</span>
                <span className="trade-value">$9.2 mln</span>
              </div>
              <div className="trade-item">
                <span className="trade-label text-warning">Import</span>
                <span className="trade-value">146.2 mlrd</span>
              </div>
            </div>
            <p className="premium-desc">Asosiy eksport: Belarus, Rossiya, Qozog'iston</p>
          </div>
        </div>

      </div>

      {/* Resident Status Movements */}
      <div className="resident-status-section">
        <h3 className="section-subtitle">Rezidentlik Holati O'zgarishlari</h3>
        <div className="status-cards-row">
          
          <div className="status-card new-status">
            <PlusCircle size={20} />
            <div className="status-info">
              <h4>9 ta</h4>
              <p>Yangi maqom berildi</p>
            </div>
          </div>

          <div className="status-card extended-status">
            <RefreshCw size={20} />
            <div className="status-info">
              <h4>1 ta</h4>
              <p>Maqom uzaytirildi</p>
            </div>
          </div>

          <div className="status-card terminated-status">
            <XCircle size={20} />
            <div className="status-info">
              <h4>3 ta</h4>
              <p>Maqom tugatildi</p>
            </div>
          </div>
          
          <div className="status-card total-status">
            <CheckCircle2 size={20} />
            <div className="status-info">
              <h4>Eksterritorial</h4>
              <p>Asosida faoliyat yuritmoqda</p>
            </div>
          </div>

        </div>
      </div>

      {/* Digitalization Platform Section */}
      <div className="digitalization-section animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="digitalization-card">
          <div className="digital-icon">
            <Monitor size={32} />
          </div>
          <div className="digital-content">
            <h3>Raqamlashtirish va Platformalar</h3>
            <p>Texnopark faoliyatini raqamlashtirish hamda rezidentlarga masofaviy xizmat ko'rsatish maqsadida to'liq ishlaydigan yangi zamonaviy veb-tizim ishlab chiqildi va ishga tushirildi.</p>
            <a href="https://innovationtechnopark.com/" target="_blank" rel="noopener noreferrer" className="digital-link">
              innovationtechnopark.com
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
