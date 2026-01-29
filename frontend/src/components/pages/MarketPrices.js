import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './MarketPrices.css';

const MarketPrices = () => {
  const [selectedCrop, setSelectedCrop] = useState('rice');
  const [selectedState, setSelectedState] = useState('all');
  const [timeRange, setTimeRange] = useState('1month');
  const [loading, setLoading] = useState(false);

  // Crop data with icons
  const crops = [
    { id: 'rice', name: 'Rice', icon: '🌾', unit: 'quintal' },
    { id: 'wheat', name: 'Wheat', icon: '🌾', unit: 'quintal' },
    { id: 'cotton', name: 'Cotton', icon: '🏵️', unit: 'quintal' },
    { id: 'sugarcane', name: 'Sugarcane', icon: '🎋', unit: 'quintal' },
    { id: 'soybean', name: 'Soybean', icon: '🫘', unit: 'quintal' },
    { id: 'groundnut', name: 'Groundnut', icon: '🥜', unit: 'quintal' },
    { id: 'potato', name: 'Potato', icon: '🥔', unit: 'quintal' },
    { id: 'onion', name: 'Onion', icon: '🧅', unit: 'quintal' },
    { id: 'tomato', name: 'Tomato', icon: '🍅', unit: 'quintal' },
    { id: 'maize', name: 'Maize', icon: '🌽', unit: 'quintal' },
  ];

  const states = [
    { id: 'all', name: 'All India' },
    { id: 'punjab', name: 'Punjab' },
    { id: 'haryana', name: 'Haryana' },
    { id: 'up', name: 'Uttar Pradesh' },
    { id: 'maharashtra', name: 'Maharashtra' },
    { id: 'karnataka', name: 'Karnataka' },
    { id: 'mp', name: 'Madhya Pradesh' },
    { id: 'rajasthan', name: 'Rajasthan' },
    { id: 'gujarat', name: 'Gujarat' },
  ];

  // Generate mock price data
  const generatePriceData = (crop, days) => {
    const basePrices = {
      rice: 2200, wheat: 2400, cotton: 6500, sugarcane: 350,
      soybean: 4500, groundnut: 5500, potato: 1500, onion: 2000,
      tomato: 2500, maize: 1800,
    };
    const base = basePrices[crop] || 2000;
    const data = [];
    
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const variation = Math.sin(i / 5) * (base * 0.1) + (Math.random() - 0.5) * (base * 0.05);
      data.push({
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        price: Math.round(base + variation),
        minPrice: Math.round(base + variation - base * 0.05),
        maxPrice: Math.round(base + variation + base * 0.05),
      });
    }
    return data;
  };

  // Generate mandi prices
  const generateMandiPrices = (crop) => {
    const basePrices = {
      rice: 2200, wheat: 2400, cotton: 6500, sugarcane: 350,
      soybean: 4500, groundnut: 5500, potato: 1500, onion: 2000,
      tomato: 2500, maize: 1800,
    };
    const base = basePrices[crop] || 2000;
    
    const mandis = [
      { name: 'Azadpur Mandi', location: 'Delhi' },
      { name: 'Vashi APMC', location: 'Mumbai' },
      { name: 'Yeshwanthpur', location: 'Bangalore' },
      { name: 'Koyambedu', location: 'Chennai' },
      { name: 'Bowenpally', location: 'Hyderabad' },
      { name: 'Gultekdi', location: 'Pune' },
      { name: 'Khanna Mandi', location: 'Punjab' },
      { name: 'Indore Mandi', location: 'MP' },
    ];

    return mandis.map(mandi => ({
      ...mandi,
      price: Math.round(base + (Math.random() - 0.5) * base * 0.2),
      change: (Math.random() - 0.5) * 5,
      arrivals: Math.round(500 + Math.random() * 1500),
    }));
  };

  const [priceData, setPriceData] = useState([]);
  const [mandiPrices, setMandiPrices] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(null);

  useEffect(() => {
    setLoading(true);
    const daysMap = { '1week': 7, '1month': 30, '3month': 90, '6month': 180 };
    const days = daysMap[timeRange] || 30;
    
    setTimeout(() => {
      const newData = generatePriceData(selectedCrop, days);
      setPriceData(newData);
      setMandiPrices(generateMandiPrices(selectedCrop));
      setCurrentPrice(newData[newData.length - 1]);
      setLoading(false);
    }, 500);
  }, [selectedCrop, selectedState, timeRange]);

  const selectedCropData = crops.find(c => c.id === selectedCrop);
  
  const priceChange = priceData.length > 1 
    ? ((priceData[priceData.length - 1].price - priceData[0].price) / priceData[0].price * 100).toFixed(2)
    : 0;

  const mspPrices = {
    rice: 2203, wheat: 2275, cotton: 6620, sugarcane: 315,
    soybean: 4600, groundnut: 6377, maize: 2090,
  };

  return (
    <div className="market-prices-container">
      <div className="market-header">
        <h1>📈 Market Prices</h1>
        <p>Real-time agricultural commodity prices and market trends</p>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filter-group">
          <label>Select Crop</label>
          <div className="crop-selector">
            {crops.map(crop => (
              <button
                key={crop.id}
                className={`crop-btn ${selectedCrop === crop.id ? 'active' : ''}`}
                onClick={() => setSelectedCrop(crop.id)}
              >
                <span className="crop-icon">{crop.icon}</span>
                <span className="crop-name">{crop.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="filter-row">
          <div className="filter-item">
            <label>State/Region</label>
            <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
              {states.map(state => (
                <option key={state.id} value={state.id}>{state.name}</option>
              ))}
            </select>
          </div>

          <div className="filter-item">
            <label>Time Range</label>
            <div className="time-buttons">
              {[
                { id: '1week', label: '1W' },
                { id: '1month', label: '1M' },
                { id: '3month', label: '3M' },
                { id: '6month', label: '6M' },
              ].map(t => (
                <button
                  key={t.id}
                  className={timeRange === t.id ? 'active' : ''}
                  onClick={() => setTimeRange(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading market data...</p>
        </div>
      ) : (
        <>
          {/* Price Overview Cards */}
          <div className="price-overview">
            <div className="price-card current">
              <span className="card-label">Current Price</span>
              <span className="card-value">
                {selectedCropData?.icon} ₹{currentPrice?.price?.toLocaleString()}
              </span>
              <span className="card-unit">per {selectedCropData?.unit}</span>
            </div>

            <div className={`price-card change ${parseFloat(priceChange) >= 0 ? 'positive' : 'negative'}`}>
              <span className="card-label">Price Change</span>
              <span className="card-value">
                {parseFloat(priceChange) >= 0 ? '📈' : '📉'} {priceChange}%
              </span>
              <span className="card-unit">in selected period</span>
            </div>

            <div className="price-card range">
              <span className="card-label">Price Range</span>
              <span className="card-value">
                ₹{Math.min(...priceData.map(d => d.minPrice)).toLocaleString()} - ₹{Math.max(...priceData.map(d => d.maxPrice)).toLocaleString()}
              </span>
              <span className="card-unit">min - max</span>
            </div>

            {mspPrices[selectedCrop] && (
              <div className="price-card msp">
                <span className="card-label">MSP (2024-25)</span>
                <span className="card-value">₹{mspPrices[selectedCrop].toLocaleString()}</span>
                <span className="card-unit">Minimum Support Price</span>
              </div>
            )}
          </div>

          {/* Price Chart */}
          <div className="chart-section">
            <h3>💹 Price Trend - {selectedCropData?.name}</h3>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={priceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={['auto', 'auto']} tickFormatter={(v) => `₹${v}`} />
                <Tooltip 
                  formatter={(value) => [`₹${value}`, '']}
                  labelStyle={{ color: '#333' }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="price" 
                  name="Market Price" 
                  stroke="#4CAF50" 
                  strokeWidth={3}
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="minPrice" 
                  name="Min Price" 
                  stroke="#2196F3" 
                  strokeWidth={1}
                  strokeDasharray="5 5"
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="maxPrice" 
                  name="Max Price" 
                  stroke="#f44336" 
                  strokeWidth={1}
                  strokeDasharray="5 5"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Mandi Prices Table */}
          <div className="mandi-section">
            <h3>🏪 Mandi-wise Prices</h3>
            <div className="mandi-table-wrapper">
              <table className="mandi-table">
                <thead>
                  <tr>
                    <th>Mandi</th>
                    <th>Location</th>
                    <th>Price (₹/{selectedCropData?.unit})</th>
                    <th>Change</th>
                    <th>Arrivals (Quintals)</th>
                  </tr>
                </thead>
                <tbody>
                  {mandiPrices.map((mandi, index) => (
                    <tr key={index}>
                      <td className="mandi-name">{mandi.name}</td>
                      <td>{mandi.location}</td>
                      <td className="price-cell">₹{mandi.price.toLocaleString()}</td>
                      <td className={`change-cell ${mandi.change >= 0 ? 'positive' : 'negative'}`}>
                        {mandi.change >= 0 ? '+' : ''}{mandi.change.toFixed(2)}%
                      </td>
                      <td>{mandi.arrivals.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* State-wise Comparison */}
          <div className="comparison-section">
            <h3>📊 State-wise Price Comparison</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart 
                data={states.slice(1).map(state => ({
                  state: state.name,
                  price: Math.round((priceData[priceData.length - 1]?.price || 2000) * (0.9 + Math.random() * 0.2)),
                }))}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tickFormatter={(v) => `₹${v}`} />
                <YAxis dataKey="state" type="category" width={120} />
                <Tooltip formatter={(value) => [`₹${value}`, 'Price']} />
                <Bar dataKey="price" fill="#4CAF50" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Market Insights */}
          <div className="insights-section">
            <h3>💡 Market Insights</h3>
            <div className="insights-grid">
              <div className="insight-card">
                <span className="insight-icon">📅</span>
                <h4>Best Selling Time</h4>
                <p>Based on historical trends, {selectedCropData?.name} prices are typically highest during {['January', 'February', 'March'][Math.floor(Math.random() * 3)]}-{['April', 'May', 'June'][Math.floor(Math.random() * 3)]}.</p>
              </div>
              <div className="insight-card">
                <span className="insight-icon">📦</span>
                <h4>Storage Advice</h4>
                <p>{parseFloat(priceChange) < 0 
                  ? 'Prices are declining. Consider selling soon or storing properly for later.' 
                  : 'Prices are rising. Consider holding stock if storage conditions permit.'}</p>
              </div>
              <div className="insight-card">
                <span className="insight-icon">🚛</span>
                <h4>Transport Cost</h4>
                <p>Average transport cost to nearby mandi: ₹50-100 per quintal. Factor this into your selling decision.</p>
              </div>
              <div className="insight-card">
                <span className="insight-icon">📱</span>
                <h4>Price Alert</h4>
                <p>Set price alerts to get notified when {selectedCropData?.name} reaches your target price.</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MarketPrices;
