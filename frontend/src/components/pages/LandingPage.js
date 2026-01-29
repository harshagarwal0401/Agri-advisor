import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './LandingPage.css';

const LandingPage = () => {
  const { user } = useAuth();

  // If user is logged in, redirect to dashboard
  if (user) {
    return <Link to="/dashboard" />;
  }

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-wrapper">
          <div className="hero-content">
            <div className="hero-badge">
              <span>🌱 AI-Powered Agriculture</span>
            </div>
            <h1 className="hero-title">
              Smart Crop Recommendations for 
              <span className="gradient-text"> Indian Farmers</span>
            </h1>
            <p className="hero-description">
              Get personalized crop recommendations based on your location, soil conditions, 
              weather patterns, and season. Maximize your yield with data-driven decisions.
            </p>
            <div className="hero-buttons">
              <Link to="/register" className="btn-primary-hero">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <line x1="20" y1="8" x2="20" y2="14"></line>
                  <line x1="23" y1="11" x2="17" y2="11"></line>
                </svg>
                Create Free Account
              </Link>
              <Link to="/login" className="btn-secondary-hero">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg>
                Sign In
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Districts Covered</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Crop Types</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">96%</span>
                <span className="stat-label">Accuracy Rate</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
          <div className="visual-card">
            <div className="card-icon">🌾</div>
            <div className="card-content">
              <h3>Rice</h3>
              <p>Suitability: 94%</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '94%' }}></div>
              </div>
            </div>
          </div>
          <div className="visual-card">
            <div className="card-icon">🌽</div>
            <div className="card-content">
              <h3>Maize</h3>
              <p>Suitability: 87%</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '87%' }}></div>
              </div>
            </div>
          </div>
          <div className="visual-card">
            <div className="card-icon">🌿</div>
            <div className="card-content">
              <h3>Soybean</h3>
              <p>Suitability: 82%</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '82%' }}></div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2>Why Choose Agri-Advisor?</h2>
          <p>Empowering farmers with intelligent agricultural decisions</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon location">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3>Location-Based Analysis</h3>
            <p>Get recommendations specific to your district's soil type, climate, and agricultural history.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon weather">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2"></path>
                <circle cx="12" cy="12" r="5"></circle>
              </svg>
            </div>
            <h3>Weather Intelligence</h3>
            <p>Real-time weather data integration ensures recommendations match current conditions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon soil">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 22h20M12 6V2M6 14v4M12 14v6M18 14v2"></path>
                <circle cx="12" cy="9" r="3"></circle>
              </svg>
            </div>
            <h3>Soil Analysis</h3>
            <p>Comprehensive soil data including pH, nutrients, and organic content for precise matching.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon ai">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3>ML-Powered Predictions</h3>
            <p>Advanced machine learning models trained on millions of data points for accurate predictions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon season">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <h3>Season-Specific</h3>
            <p>Tailored recommendations for Kharif, Rabi, Summer, and other seasonal requirements.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon multilang">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                <line x1="2" y1="12" x2="22" y2="12"></line>
              </svg>
            </div>
            <h3>Multi-Language Support</h3>
            <p>Available in Hindi, Tamil, Telugu, Kannada, Malayalam, Gujarati, Punjabi, and English.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Get crop recommendations in 3 simple steps</p>
        </div>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3>Select Location</h3>
            <p>Choose your state and district from our comprehensive database covering all of India.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <h3>Pick Season</h3>
            <p>Select the season you're planning to cultivate - Kharif, Rabi, Summer, or others.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3>Get Recommendations</h3>
            <p>Receive AI-powered crop recommendations with suitability scores and yield predictions.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Grow Smarter?</h2>
          <p>Join thousands of farmers making data-driven agricultural decisions.</p>
          <Link to="/register" className="btn-cta">
            Get Started Free
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>🌱 Agri-Advisor</h3>
            <p>Empowering Indian Agriculture with AI</p>
          </div>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
          <div className="footer-copyright">
            <p>© 2026 Agri-Advisor. Made with ❤️ for Indian Farmers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
