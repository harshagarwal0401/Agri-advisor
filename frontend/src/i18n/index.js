import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navbar
      dashboard: 'Dashboard',
      tools: 'Tools',
      cropLibrary: 'Crop Library',
      weather: 'Weather',
      soilAnalysis: 'Soil Analysis',
      marketPrices: 'Market Prices',
      history: 'History',
      analytics: 'Analytics',
      about: 'About',
      login: 'Login',
      register: 'Register',
      logout: 'Logout',
      profile: 'Profile',

      // Landing Page
      landing_badge: '🌱 AI-Powered Agriculture',
      landing_title: 'Smart Crop Recommendations for',
      landing_title_highlight: 'Indian Farmers',
      landing_description: 'Get personalized crop recommendations based on your location, soil conditions, weather patterns, and season. Maximize your yield with data-driven decisions.',
      create_account: 'Create Free Account',
      sign_in: 'Sign In',
      districts_covered: 'Districts Covered',
      crop_types: 'Crop Types',
      accuracy_rate: 'Accuracy Rate',
      
      // Landing Features
      why_choose: 'Why Choose Agri-Advisor?',
      empowering_farmers: 'Empowering farmers with intelligent agricultural decisions',
      location_analysis: 'Location-Based Analysis',
      location_desc: "Get recommendations specific to your district's soil type, climate, and agricultural history.",
      weather_intelligence: 'Weather Intelligence',
      weather_desc: 'Real-time weather data integration ensures recommendations match current conditions.',
      soil_analysis_title: 'Soil Analysis',
      soil_desc: 'Comprehensive soil data including pH, nutrients, and organic content for precise matching.',
      ml_predictions: 'ML-Powered Predictions',
      ml_desc: 'Advanced machine learning models trained on millions of data points for accurate predictions.',
      season_specific: 'Season-Specific',
      season_desc: 'Tailored recommendations for Kharif, Rabi, Summer, and other seasonal requirements.',
      multi_language: 'Multi-Language Support',
      multi_lang_desc: 'Available in Hindi, Tamil, Telugu, Kannada, Malayalam, Gujarati, Punjabi, and English.',
      
      // How it works
      how_it_works: 'How It Works',
      three_steps: 'Get crop recommendations in 3 simple steps',
      select_location: 'Select Location',
      select_location_desc: 'Choose your state and district from our comprehensive database covering all of India.',
      pick_season: 'Pick Season',
      pick_season_desc: 'Select the season you\'re planning to cultivate - Kharif, Rabi, Summer, or others.',
      get_recommendations: 'Get Recommendations',
      get_recommendations_desc: 'Receive AI-powered crop recommendations with suitability scores and yield predictions.',
      
      // CTA
      ready_to_grow: 'Ready to Grow Smarter?',
      join_farmers: 'Join thousands of farmers making data-driven agricultural decisions.',
      get_started_free: 'Get Started Free',
      
      // Footer
      footer_tagline: 'Empowering Indian Agriculture with AI',
      terms_of_service: 'Terms of Service',
      made_with_love: 'Made with ❤️ for Indian Farmers',

      // About Page
      about_title: 'Agri-Advisor',
      about_subtitle: 'Empowering Indian farmers with AI-driven crop recommendations. Making smart farming accessible through machine learning and real-time data.',
      learn_more: 'Learn More',
      features: 'Features',
      features_subtitle: 'Everything you need for smart farming decisions',
      smart_recommendations: 'Smart Crop Recommendations',
      smart_recommendations_desc: 'AI-powered system analyzes soil, climate, and season data to recommend the best crops.',
      weather_feature: 'Weather Intelligence',
      weather_feature_desc: 'Real-time weather forecasts and alerts for timely farming decisions.',
      soil_feature: 'Soil Analysis',
      soil_feature_desc: 'Comprehensive soil health assessment with nutrient analysis.',
      market_feature: 'Market Prices',
      market_feature_desc: 'Live prices from major mandis to help you sell at the best time.',
      library_feature: 'Crop Library',
      library_feature_desc: 'Detailed information on 100+ crops with growing tips.',
      analytics_feature: 'Analytics',
      analytics_feature_desc: 'Visual insights into your farming patterns and history.',
      
      // How it works (About)
      step1_title: 'Select Location',
      step1_desc: 'Choose your state and district',
      step2_title: 'Enter Data',
      step2_desc: 'Soil type, temperature, rainfall',
      step3_title: 'Get Results',
      step3_desc: 'AI recommends best crops',
      step4_title: 'View Insights',
      step4_desc: 'Yield & market predictions',
      step5_title: 'Decide',
      step5_desc: 'Plan your farming activities',
      
      // Tech Stack
      tech_stack: 'Technology Stack',
      tech_subtitle: 'Powered by modern tools and frameworks',
      
      // ML Section
      our_ml_model: 'Our ML Model',
      ml_description: 'Our crop recommendation system uses an advanced XGBoost classifier trained on extensive agricultural data from across India.',
      soil_params: 'Soil parameters (N, P, K, pH, organic carbon)',
      climate_data: 'Climate data (temperature, rainfall, humidity)',
      geo_location: 'Geographic location (state, district)',
      season_suitability: 'Season-specific crop suitability',
      top5_accuracy: 'Top-5 Accuracy',
      input_features: 'Input Features',
      training_samples: 'Training Samples',
      
      // FAQ
      faq: 'FAQ',
      faq_subtitle: 'Frequently asked questions',
      faq1_q: 'How accurate are the crop recommendations?',
      faq1_a: 'Our ML model achieves over 96% accuracy in top-5 crop recommendations, trained on extensive agricultural data from across India.',
      faq2_q: 'Is this service free to use?',
      faq2_a: 'Yes! Agri-Advisor is completely free for all farmers. Our mission is to help Indian farmers make better decisions.',
      faq3_q: 'How often is market price data updated?',
      faq3_a: 'Market prices are updated daily from major APMC mandis across India from government portals.',
      faq4_q: 'Which regions does this cover?',
      faq4_a: 'We cover all major agricultural states of India with data for 700+ districts.',
      
      // Team
      our_team: 'Our Team',
      team_subtitle: 'Built by passionate developers',
      
      // CTA Section
      transform_farming: 'Ready to Transform Your Farming?',
      join_thousands: 'Join thousands of farmers making smarter decisions',
      
      // Dashboard
      welcome: 'Welcome to Agri-Advisor AI',
      selectLocation: 'Select Location',
      state: 'State',
      district: 'District',
      season: 'Season',
      kharif: 'Kharif',
      rabi: 'Rabi',
      zaid: 'Zaid',
      summer: 'Summer',
      whole_year: 'Whole Year',
      autumn: 'Autumn',
      winter: 'Winter',
      recommendations: 'Recommendations',
      suitabilityScore: 'Suitability Score',
      yieldPrediction: 'Yield Prediction',
      why: 'Why',
      environmentalSnapshot: 'Environmental Snapshot',
      getRecommendations: 'Get Recommendations',
      gettingRecommendations: 'Getting Recommendations...',
      selectState: 'Select State',
      selectDistrict: 'Select District',
      loadingDistricts: 'Loading districts...',
      errorLoadingDistricts: 'Error loading districts',
      noDistrictsAvailable: 'No districts available',
      dashboardSubtitle: 'Get AI-powered crop recommendations based on your location and season',
      
      // Auth
      email: 'Email',
      password: 'Password',
      name: 'Name',
      logging_in: 'Logging in...',
      registering: 'Registering...',
      remember_me: 'Remember me',
      forgot_password: 'Forgot password?',
      no_account: "Don't have an account?",
      already_have_account: 'Already have an account?',
      welcome_back: 'Welcome back to your account',
      
      // Common
      next: 'Next',
      back: 'Back',
      preferred_language: 'Preferred Language',
      last_updated: 'Last updated: January 2026',
      return_to_home: 'Return to Home',
      questions: 'Questions?',
      contact_us: 'If you have any questions about these Terms of Service, please contact us at:',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      view: 'View',
      search: 'Search',
      filter: 'Filter',
      sort: 'Sort',
      
      // Seasons
      seasons: 'Seasons'
    }
  },
  hi: {
    translation: {
      // Navbar
      dashboard: 'डैशबोर्ड',
      tools: 'उपकरण',
      cropLibrary: 'फसल पुस्तकालय',
      weather: 'मौसम',
      soilAnalysis: 'मिट्टी विश्लेषण',
      marketPrices: 'बाज़ार भाव',
      history: 'इतिहास',
      analytics: 'विश्लेषिकी',
      about: 'के बारे में',
      login: 'लॉगिन',
      register: 'पंजीकरण',
      logout: 'लॉगआउट',
      profile: 'प्रोफाइल',

      // Landing Page
      landing_badge: '🌱 AI-संचालित कृषि',
      landing_title: 'के लिए स्मार्ट फसल सिफारिशें',
      landing_title_highlight: 'भारतीय किसान',
      landing_description: 'अपने स्थान, मिट्टी की स्थिति, मौसम के पैटर्न और मौसम के आधार पर व्यक्तिगत फसल सिफारिशें प्राप्त करें। डेटा-संचालित निर्णयों के साथ अपनी उपज को अधिकतम करें।',
      create_account: 'मुफ्त खाता बनाएं',
      sign_in: 'साइन इन करें',
      districts_covered: 'जिले कवर',
      crop_types: 'फसल प्रकार',
      accuracy_rate: 'सटीकता दर',
      
      // Landing Features
      why_choose: 'एग्री-एडवाइजर क्यों चुनें?',
      empowering_farmers: 'बुद्धिमान कृषि निर्णयों के साथ किसानों को सशक्त बनाना',
      location_analysis: 'स्थान-आधारित विश्लेषण',
      location_desc: 'आपके जिले की मिट्टी के प्रकार, जलवायु और कृषि इतिहास के लिए विशिष्ट सिफारिशें प्राप्त करें।',
      weather_intelligence: 'मौसम बुद्धिमत्ता',
      weather_desc: 'रीयल-टाइम मौसम डेटा एकीकरण सुनिश्चित करता है कि सिफारिशें वर्तमान स्थितियों से मेल खाती हैं।',
      soil_analysis_title: 'मिट्टी विश्लेषण',
      soil_desc: 'सटीक मिलान के लिए pH, पोषक तत्वों और कार्बनिक सामग्री सहित व्यापक मिट्टी डेटा।',
      ml_predictions: 'ML-संचालित भविष्यवाणियां',
      ml_desc: 'सटीक भविष्यवाणियों के लिए लाखों डेटा बिंदुओं पर प्रशिक्षित उन्नत मशीन लर्निंग मॉडल।',
      season_specific: 'मौसम-विशिष्ट',
      season_desc: 'खरीफ, रबी, ग्रीष्म और अन्य मौसमी आवश्यकताओं के लिए अनुकूलित सिफारिशें।',
      multi_language: 'बहु-भाषा समर्थन',
      multi_lang_desc: 'हिंदी, तमिल, तेलुगु, कन्नड़, मलयालम, गुजराती, पंजाबी और अंग्रेजी में उपलब्ध।',
      
      // How it works
      how_it_works: 'यह कैसे काम करता है',
      three_steps: '3 सरल चरणों में फसल सिफारिशें प्राप्त करें',
      select_location: 'स्थान चुनें',
      select_location_desc: 'पूरे भारत को कवर करने वाले हमारे व्यापक डेटाबेस से अपना राज्य और जिला चुनें।',
      pick_season: 'मौसम चुनें',
      pick_season_desc: 'वह मौसम चुनें जिसमें आप खेती करने की योजना बना रहे हैं - खरीफ, रबी, ग्रीष्म, या अन्य।',
      get_recommendations: 'सिफारिशें प्राप्त करें',
      get_recommendations_desc: 'उपयुक्तता स्कोर और उपज भविष्यवाणियों के साथ AI-संचालित फसल सिफारिशें प्राप्त करें।',
      
      // CTA
      ready_to_grow: 'स्मार्ट तरीके से उगाने के लिए तैयार?',
      join_farmers: 'हजारों किसानों के साथ जुड़ें जो डेटा-संचालित कृषि निर्णय ले रहे हैं।',
      get_started_free: 'मुफ्त शुरू करें',
      
      // Footer
      footer_tagline: 'AI के साथ भारतीय कृषि को सशक्त बनाना',
      terms_of_service: 'सेवा की शर्तें',
      made_with_love: 'भारतीय किसानों के लिए ❤️ से बनाया गया',

      // About Page
      about_title: 'एग्री-एडवाइजर',
      about_subtitle: 'AI-संचालित फसल सिफारिशों के साथ भारतीय किसानों को सशक्त बनाना। मशीन लर्निंग और रीयल-टाइम डेटा के माध्यम से स्मार्ट खेती को सुलभ बनाना।',
      learn_more: 'और जानें',
      features: 'विशेषताएं',
      features_subtitle: 'स्मार्ट खेती निर्णयों के लिए आपको जो कुछ भी चाहिए',
      smart_recommendations: 'स्मार्ट फसल सिफारिशें',
      smart_recommendations_desc: 'AI-संचालित सिस्टम मिट्टी, जलवायु और मौसम डेटा का विश्लेषण करके सर्वोत्तम फसलों की सिफारिश करता है।',
      weather_feature: 'मौसम बुद्धिमत्ता',
      weather_feature_desc: 'समय पर खेती निर्णयों के लिए रीयल-टाइम मौसम पूर्वानुमान और अलर्ट।',
      soil_feature: 'मिट्टी विश्लेषण',
      soil_feature_desc: 'पोषक तत्व विश्लेषण के साथ व्यापक मिट्टी स्वास्थ्य मूल्यांकन।',
      market_feature: 'बाज़ार भाव',
      market_feature_desc: 'सर्वोत्तम समय पर बेचने में मदद के लिए प्रमुख मंडियों से लाइव भाव।',
      library_feature: 'फसल पुस्तकालय',
      library_feature_desc: '100+ फसलों पर विस्तृत जानकारी और उगाने की युक्तियां।',
      analytics_feature: 'विश्लेषिकी',
      analytics_feature_desc: 'आपके खेती पैटर्न और इतिहास में दृश्य अंतर्दृष्टि।',
      
      // How it works (About)
      step1_title: 'स्थान चुनें',
      step1_desc: 'अपना राज्य और जिला चुनें',
      step2_title: 'डेटा दर्ज करें',
      step2_desc: 'मिट्टी का प्रकार, तापमान, वर्षा',
      step3_title: 'परिणाम प्राप्त करें',
      step3_desc: 'AI सर्वोत्तम फसलों की सिफारिश करता है',
      step4_title: 'अंतर्दृष्टि देखें',
      step4_desc: 'उपज और बाज़ार भविष्यवाणियां',
      step5_title: 'निर्णय लें',
      step5_desc: 'अपनी खेती गतिविधियों की योजना बनाएं',
      
      // Tech Stack
      tech_stack: 'प्रौद्योगिकी स्टैक',
      tech_subtitle: 'आधुनिक उपकरणों और फ्रेमवर्क द्वारा संचालित',
      
      // ML Section
      our_ml_model: 'हमारा ML मॉडल',
      ml_description: 'हमारी फसल सिफारिश प्रणाली पूरे भारत से व्यापक कृषि डेटा पर प्रशिक्षित एक उन्नत XGBoost क्लासिफायर का उपयोग करती है।',
      soil_params: 'मिट्टी पैरामीटर (N, P, K, pH, कार्बनिक कार्बन)',
      climate_data: 'जलवायु डेटा (तापमान, वर्षा, आर्द्रता)',
      geo_location: 'भौगोलिक स्थान (राज्य, जिला)',
      season_suitability: 'मौसम-विशिष्ट फसल उपयुक्तता',
      top5_accuracy: 'टॉप-5 सटीकता',
      input_features: 'इनपुट फीचर्स',
      training_samples: 'प्रशिक्षण नमूने',
      
      // FAQ
      faq: 'अक्सर पूछे जाने वाले प्रश्न',
      faq_subtitle: 'अक्सर पूछे जाने वाले प्रश्न',
      faq1_q: 'फसल सिफारिशें कितनी सटीक हैं?',
      faq1_a: 'हमारा ML मॉडल टॉप-5 फसल सिफारिशों में 96% से अधिक सटीकता प्राप्त करता है, जो पूरे भारत से व्यापक कृषि डेटा पर प्रशिक्षित है।',
      faq2_q: 'क्या यह सेवा मुफ्त है?',
      faq2_a: 'हां! एग्री-एडवाइजर सभी किसानों के लिए पूरी तरह से मुफ्त है। हमारा मिशन भारतीय किसानों को बेहतर निर्णय लेने में मदद करना है।',
      faq3_q: 'बाज़ार भाव डेटा कितनी बार अपडेट होता है?',
      faq3_a: 'बाज़ार भाव सरकारी पोर्टलों से पूरे भारत की प्रमुख APMC मंडियों से रोज़ाना अपडेट होते हैं।',
      faq4_q: 'यह किन क्षेत्रों को कवर करता है?',
      faq4_a: 'हम 700+ जिलों के डेटा के साथ भारत के सभी प्रमुख कृषि राज्यों को कवर करते हैं।',
      
      // Team
      our_team: 'हमारी टीम',
      team_subtitle: 'जुनूनी डेवलपर्स द्वारा निर्मित',
      
      // CTA Section
      transform_farming: 'अपनी खेती को बदलने के लिए तैयार?',
      join_thousands: 'हजारों किसानों के साथ जुड़ें जो स्मार्ट निर्णय ले रहे हैं',
      
      // Dashboard
      welcome: 'एग्री-एडवाइजर AI में आपका स्वागत है',
      selectLocation: 'स्थान चुनें',
      state: 'राज्य',
      district: 'जिला',
      season: 'मौसम',
      kharif: 'खरीफ',
      rabi: 'रबी',
      zaid: 'जायद',
      summer: 'गर्मी',
      whole_year: 'पूरा साल',
      autumn: 'पतझड़',
      winter: 'सर्दी',
      recommendations: 'सिफारिशें',
      suitabilityScore: 'उपयुक्तता स्कोर',
      yieldPrediction: 'उपज भविष्यवाणी',
      why: 'क्यों',
      environmentalSnapshot: 'पर्यावरणीय स्नैपशॉट',
      getRecommendations: 'सिफारिशें प्राप्त करें',
      gettingRecommendations: 'सिफारिशें प्राप्त हो रही हैं...',
      selectState: 'राज्य चुनें',
      selectDistrict: 'जिला चुनें',
      loadingDistricts: 'जिले लोड हो रहे हैं...',
      errorLoadingDistricts: 'जिले लोड करने में त्रुटि',
      noDistrictsAvailable: 'कोई जिला उपलब्ध नहीं',
      dashboardSubtitle: 'अपने स्थान और मौसम के आधार पर AI-संचालित फसल सिफारिशें प्राप्त करें',
      
      // Auth
      email: 'ईमेल',
      password: 'पासवर्ड',
      name: 'नाम',
      logging_in: 'लॉग इन हो रहे हैं...',
      registering: 'रजिस्ट्रेशन हो रहा है...',
      remember_me: 'मुझे याद रखें',
      forgot_password: 'पासवर्ड भूल गए?',
      no_account: 'खाता नहीं है?',
      already_have_account: 'पहले से खाता है?',
      welcome_back: 'आपके खाते में वापस स्वागत है',
      create_account: 'अपना खाता बनाएं',
      
      // Common
      next: 'अगला',
      back: 'पीछे',
      preferred_language: 'पसंदीदा भाषा',
      last_updated: 'अंतिम अपडेट: जनवरी 2026',
      return_to_home: 'होम पर लौटें',
      questions: 'सवाल?',
      contact_us: 'यदि आपके पास इन सेवा की शर्तों के बारे में कोई प्रश्न है, तो कृपया हमसे संपर्क करें:',
      loading: 'लोड हो रहा है...',
      error: 'त्रुटि',
      success: 'सफलता',
      save: 'सहेजें',
      cancel: 'रद्द करें',
      delete: 'हटाएं',
      edit: 'संपादित करें',
      view: 'देखें',
      search: 'खोजें',
      filter: 'फ़िल्टर',
      sort: 'क्रमबद्ध',
      
      // Seasons
      seasons: 'मौसम'
    }
  },
  ta: {
    translation: {
      // Navbar
      dashboard: 'டாஷ்போர்டு',
      tools: 'கருவிகள்',
      cropLibrary: 'பயிர் நூலகம்',
      weather: 'வானிலை',
      soilAnalysis: 'மண் பகுப்பாய்வு',
      marketPrices: 'சந்தை விலைகள்',
      history: 'வரலாறு',
      analytics: 'பகுப்பாய்வு',
      about: 'பற்றி',
      login: 'உள்நுழைக',
      register: 'பதிவுசெய்க',
      logout: 'வெளியேறு',
      profile: 'சுயவிவரம்',

      // Landing Page
      landing_badge: '🌱 AI-இயங்கும் விவசாயம்',
      landing_title: 'ஸ்மார்ட் பயிர் பரிந்துரைகள்',
      landing_title_highlight: 'இந்திய விவசாயிகளுக்கு',
      landing_description: 'உங்கள் இருப்பிடம், மண் நிலைமைகள், வானிலை வடிவங்கள் மற்றும் பருவத்தின் அடிப்படையில் தனிப்பயனாக்கப்பட்ட பயிர் பரிந்துரைகளைப் பெறுங்கள்.',
      create_account: 'இலவச கணக்கை உருவாக்கு',
      sign_in: 'உள்நுழைக',
      districts_covered: 'மாவட்டங்கள்',
      crop_types: 'பயிர் வகைகள்',
      accuracy_rate: 'துல்லியம்',
      
      why_choose: 'ஏன் அக்ரி-அட்வைசர்?',
      empowering_farmers: 'புத்திசாலித்தனமான விவசாய முடிவுகளுடன் விவசாயிகளை வலுப்படுத்துதல்',
      
      how_it_works: 'இது எப்படி வேலை செய்கிறது',
      three_steps: '3 எளிய படிகளில் பயிர் பரிந்துரைகளைப் பெறுங்கள்',
      
      ready_to_grow: 'ஸ்மார்டாக வளர தயாரா?',
      get_started_free: 'இலவசமாக தொடங்கு',
      
      // Dashboard
      welcome: 'அக்ரி-அட்வைசர் AIக்கு வரவேற்கிறோம்',
      selectLocation: 'இடத்தைத் தேர்ந்தெடுக்கவும்',
      state: 'மாநிலம்',
      district: 'மாவட்டம்',
      season: 'பருவம்',
      kharif: 'கரிப்',
      rabi: 'ரபி',
      zaid: 'சைத்',
      summer: 'கோடை',
      recommendations: 'பரிந்துரைகள்',
      suitabilityScore: 'பொருத்தம் மதிப்பெண்',
      yieldPrediction: 'விளைச்சல் முன்னறிவிப்பு',
      
      // Auth
      email: 'ஈமெயில்',
      password: 'கடவுச்சொல்',
      name: 'பெயர்',
      
      // Common
      loading: 'ஏற்றுகிறது...',
      save: 'சேமி',
      cancel: 'ரத்து செய்'
    }
  },
  te: {
    translation: {
      // Navbar
      dashboard: 'డాష్‌బోర్డ్',
      tools: 'సాధనాలు',
      cropLibrary: 'పంట లైబ్రరీ',
      weather: 'వాతావరణం',
      soilAnalysis: 'నేల విశ్లేషణ',
      marketPrices: 'మార్కెట్ ధరలు',
      history: 'చరిత్ర',
      analytics: 'విశ్లేషణలు',
      about: 'గురించి',
      login: 'లాగిన్',
      register: 'నమోదు',
      logout: 'లాగ్‌అవుట్',
      profile: 'ప్రొఫైల్',

      // Landing Page
      landing_badge: '🌱 AI-ఆధారిత వ్యవసాయం',
      landing_title: 'స్మార్ట్ పంట సిఫారసులు',
      landing_title_highlight: 'భారతీయ రైతులకు',
      landing_description: 'మీ స్థానం, నేల పరిస్థితులు, వాతావరణ నమూనాలు మరియు సీజన్ ఆధారంగా వ్యక్తిగతీకరించిన పంట సిఫారసులను పొందండి.',
      create_account: 'ఉచిత ఖాతా సృష్టించండి',
      sign_in: 'సైన్ ఇన్',
      
      // Dashboard
      welcome: 'అగ్రి-అడ్వైజర్ AIకి స్వాగతం',
      selectLocation: 'స్థానాన్ని ఎంచుకోండి',
      state: 'రాష్ట్రం',
      district: 'జిల్లా',
      season: 'సీజన్',
      kharif: 'ఖరీఫ్',
      rabi: 'రబీ',
      recommendations: 'సిఫారసులు',
      
      // Auth
      email: 'ఇమెయిల్',
      password: 'పాస్‌వర్డ్',
      name: 'పేరు'
    }
  },
  kn: {
    translation: {
      // Navbar
      dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
      tools: 'ಪರಿಕರಗಳು',
      cropLibrary: 'ಬೆಳೆ ಗ್ರಂಥಾಲಯ',
      weather: 'ಹವಾಮಾನ',
      soilAnalysis: 'ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ',
      marketPrices: 'ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು',
      history: 'ಇತಿಹಾಸ',
      analytics: 'ವಿಶ್ಲೇಷಣೆ',
      about: 'ಬಗ್ಗೆ',
      login: 'ಲಾಗಿನ್',
      register: 'ನೋಂದಣಿ',
      logout: 'ಲಾಗ್‌ಔಟ್',
      profile: 'ಪ್ರೊಫೈಲ್',

      // Landing Page
      landing_badge: '🌱 AI-ಚಾಲಿತ ಕೃಷಿ',
      landing_title: 'ಸ್ಮಾರ್ಟ್ ಬೆಳೆ ಶಿಫಾರಸುಗಳು',
      landing_title_highlight: 'ಭಾರತೀಯ ರೈತರಿಗೆ',
      
      // Dashboard
      welcome: 'ಅಗ್ರಿ-ಅಡ್ವೈಸರ್ AIಗೆ ಸ್ವಾಗತ',
      selectLocation: 'ಸ್ಥಳವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ',
      state: 'ರಾಜ್ಯ',
      district: 'ಜಿಲ್ಲೆ',
      season: 'ಸೀಜನ್',
      recommendations: 'ಶಿಫಾರಸುಗಳು'
    }
  },
  ml: {
    translation: {
      // Navbar
      dashboard: 'ഡാഷ്‌ബോർഡ്',
      tools: 'ഉപകരണങ്ങൾ',
      cropLibrary: 'വിള ലൈബ്രറി',
      weather: 'കാലാവസ്ഥ',
      soilAnalysis: 'മണ്ണ് വിശകലനം',
      marketPrices: 'വിപണി വിലകൾ',
      history: 'ചരിത്രം',
      analytics: 'അനലിറ്റിക്സ്',
      about: 'കുറിച്ച്',
      login: 'പ്രവേശിക്കുക',
      register: 'രജിസ്റ്റർ ചെയ്യുക',
      logout: 'പുറത്തുകടക്കുക',
      profile: 'പ്രൊഫൈൽ',

      // Dashboard
      welcome: 'അഗ്രി-അഡ്വൈസർ AIയിലേക്ക് സ്വാഗതം',
      selectLocation: 'സ്ഥാനം തിരഞ്ഞെടുക്കുക',
      state: 'സംസ്ഥാനം',
      district: 'ജില്ല',
      season: 'സീസൺ',
      recommendations: 'ശുപാർശകൾ'
    }
  },
  gu: {
    translation: {
      // Navbar
      dashboard: 'ડેશબોર્ડ',
      tools: 'સાધનો',
      cropLibrary: 'પાક પુસ્તકાલય',
      weather: 'હવામાન',
      soilAnalysis: 'જમીન વિશ્લેષણ',
      marketPrices: 'બજાર ભાવ',
      history: 'ઇતિહાસ',
      analytics: 'વિશ્લેષણ',
      about: 'વિશે',
      login: 'લૉગ ઇન',
      register: 'રજિસ્ટર કરો',
      logout: 'લૉગ આઉટ',
      profile: 'પ્રોફાઇલ',

      // Dashboard
      welcome: 'એગ્રી-એડવાઇઝર AIમાં સ્વાગત છે',
      selectLocation: 'સ્થાન પસંદ કરો',
      state: 'રાજ્ય',
      district: 'જિલ્લો',
      season: 'સીઝન',
      recommendations: 'ભલામણો'
    }
  },
  pa: {
    translation: {
      // Navbar
      dashboard: 'ਡੈਸ਼ਬੋਰਡ',
      tools: 'ਸੰਦ',
      cropLibrary: 'ਫਸਲ ਲਾਇਬ੍ਰੇਰੀ',
      weather: 'ਮੌਸਮ',
      soilAnalysis: 'ਮਿੱਟੀ ਵਿਸ਼ਲੇਸ਼ਣ',
      marketPrices: 'ਬਾਜ਼ਾਰ ਭਾਅ',
      history: 'ਇਤਿਹਾਸ',
      analytics: 'ਵਿਸ਼ਲੇਸ਼ਣ',
      about: 'ਬਾਰੇ',
      login: 'ਲੌਗਇਨ',
      register: 'ਰਜਿਸਟਰ',
      logout: 'ਲੌਗ ਆਊਟ',
      profile: 'ਪ੍ਰੋਫਾਈਲ',

      // Dashboard
      welcome: 'ਐਗਰੀ-ਐਡਵਾਈਜ਼ਰ AIਵਿੱਚ ਸਵਾਗਤ ਹੈ',
      selectLocation: 'ਸਥਾਨ ਚੁਣੋ',
      state: 'ਰਾਜ',
      district: 'ਜਿਲ੍ਹਾ',
      season: 'ਮੌਸਮ',
      recommendations: 'ਸਿਫਾਰਸ਼ਾਂ'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
