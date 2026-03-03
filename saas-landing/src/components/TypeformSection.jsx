import { useState, useEffect, useRef, useCallback } from 'react';

const ArrowSvg = () => (
  <svg viewBox="0 0 24 24"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
);

const CheckSvg = () => (
  <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
);

const BackArrowSvg = () => (
  <svg viewBox="0 0 24 24"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
);

const COUNTRIES = [
  { iso: 'us', code: '+1', name: 'United States' },
  { iso: 'gb', code: '+44', name: 'United Kingdom' },
  { iso: 'ca', code: '+1', name: 'Canada' },
  { iso: 'au', code: '+61', name: 'Australia' },
  { iso: 'af', code: '+93', name: 'Afghanistan' },
  { iso: 'al', code: '+355', name: 'Albania' },
  { iso: 'dz', code: '+213', name: 'Algeria' },
  { iso: 'ad', code: '+376', name: 'Andorra' },
  { iso: 'ao', code: '+244', name: 'Angola' },
  { iso: 'ag', code: '+1-268', name: 'Antigua & Barbuda' },
  { iso: 'ar', code: '+54', name: 'Argentina' },
  { iso: 'am', code: '+374', name: 'Armenia' },
  { iso: 'at', code: '+43', name: 'Austria' },
  { iso: 'az', code: '+994', name: 'Azerbaijan' },
  { iso: 'bs', code: '+1-242', name: 'Bahamas' },
  { iso: 'bh', code: '+973', name: 'Bahrain' },
  { iso: 'bd', code: '+880', name: 'Bangladesh' },
  { iso: 'bb', code: '+1-246', name: 'Barbados' },
  { iso: 'by', code: '+375', name: 'Belarus' },
  { iso: 'be', code: '+32', name: 'Belgium' },
  { iso: 'bz', code: '+501', name: 'Belize' },
  { iso: 'bj', code: '+229', name: 'Benin' },
  { iso: 'bt', code: '+975', name: 'Bhutan' },
  { iso: 'bo', code: '+591', name: 'Bolivia' },
  { iso: 'ba', code: '+387', name: 'Bosnia & Herzegovina' },
  { iso: 'bw', code: '+267', name: 'Botswana' },
  { iso: 'br', code: '+55', name: 'Brazil' },
  { iso: 'bn', code: '+673', name: 'Brunei' },
  { iso: 'bg', code: '+359', name: 'Bulgaria' },
  { iso: 'bf', code: '+226', name: 'Burkina Faso' },
  { iso: 'bi', code: '+257', name: 'Burundi' },
  { iso: 'kh', code: '+855', name: 'Cambodia' },
  { iso: 'cm', code: '+237', name: 'Cameroon' },
  { iso: 'cv', code: '+238', name: 'Cape Verde' },
  { iso: 'cf', code: '+236', name: 'Central African Republic' },
  { iso: 'td', code: '+235', name: 'Chad' },
  { iso: 'cl', code: '+56', name: 'Chile' },
  { iso: 'cn', code: '+86', name: 'China' },
  { iso: 'co', code: '+57', name: 'Colombia' },
  { iso: 'km', code: '+269', name: 'Comoros' },
  { iso: 'cg', code: '+242', name: 'Congo' },
  { iso: 'cd', code: '+243', name: 'Congo (DRC)' },
  { iso: 'cr', code: '+506', name: 'Costa Rica' },
  { iso: 'hr', code: '+385', name: 'Croatia' },
  { iso: 'cu', code: '+53', name: 'Cuba' },
  { iso: 'cy', code: '+357', name: 'Cyprus' },
  { iso: 'cz', code: '+420', name: 'Czech Republic' },
  { iso: 'dk', code: '+45', name: 'Denmark' },
  { iso: 'dj', code: '+253', name: 'Djibouti' },
  { iso: 'dm', code: '+1-767', name: 'Dominica' },
  { iso: 'do', code: '+1-809', name: 'Dominican Republic' },
  { iso: 'ec', code: '+593', name: 'Ecuador' },
  { iso: 'eg', code: '+20', name: 'Egypt' },
  { iso: 'sv', code: '+503', name: 'El Salvador' },
  { iso: 'gq', code: '+240', name: 'Equatorial Guinea' },
  { iso: 'er', code: '+291', name: 'Eritrea' },
  { iso: 'ee', code: '+372', name: 'Estonia' },
  { iso: 'sz', code: '+268', name: 'Eswatini' },
  { iso: 'et', code: '+251', name: 'Ethiopia' },
  { iso: 'fj', code: '+679', name: 'Fiji' },
  { iso: 'fi', code: '+358', name: 'Finland' },
  { iso: 'fr', code: '+33', name: 'France' },
  { iso: 'ga', code: '+241', name: 'Gabon' },
  { iso: 'gm', code: '+220', name: 'Gambia' },
  { iso: 'ge', code: '+995', name: 'Georgia' },
  { iso: 'de', code: '+49', name: 'Germany' },
  { iso: 'gh', code: '+233', name: 'Ghana' },
  { iso: 'gr', code: '+30', name: 'Greece' },
  { iso: 'gd', code: '+1-473', name: 'Grenada' },
  { iso: 'gt', code: '+502', name: 'Guatemala' },
  { iso: 'gn', code: '+224', name: 'Guinea' },
  { iso: 'gw', code: '+245', name: 'Guinea-Bissau' },
  { iso: 'gy', code: '+592', name: 'Guyana' },
  { iso: 'ht', code: '+509', name: 'Haiti' },
  { iso: 'hn', code: '+504', name: 'Honduras' },
  { iso: 'hk', code: '+852', name: 'Hong Kong' },
  { iso: 'hu', code: '+36', name: 'Hungary' },
  { iso: 'is', code: '+354', name: 'Iceland' },
  { iso: 'in', code: '+91', name: 'India' },
  { iso: 'id', code: '+62', name: 'Indonesia' },
  { iso: 'ir', code: '+98', name: 'Iran' },
  { iso: 'iq', code: '+964', name: 'Iraq' },
  { iso: 'ie', code: '+353', name: 'Ireland' },
  { iso: 'il', code: '+972', name: 'Israel' },
  { iso: 'it', code: '+39', name: 'Italy' },
  { iso: 'ci', code: '+225', name: 'Ivory Coast' },
  { iso: 'jm', code: '+1-876', name: 'Jamaica' },
  { iso: 'jp', code: '+81', name: 'Japan' },
  { iso: 'jo', code: '+962', name: 'Jordan' },
  { iso: 'kz', code: '+7', name: 'Kazakhstan' },
  { iso: 'ke', code: '+254', name: 'Kenya' },
  { iso: 'kw', code: '+965', name: 'Kuwait' },
  { iso: 'kg', code: '+996', name: 'Kyrgyzstan' },
  { iso: 'la', code: '+856', name: 'Laos' },
  { iso: 'lv', code: '+371', name: 'Latvia' },
  { iso: 'lb', code: '+961', name: 'Lebanon' },
  { iso: 'ls', code: '+266', name: 'Lesotho' },
  { iso: 'lr', code: '+231', name: 'Liberia' },
  { iso: 'ly', code: '+218', name: 'Libya' },
  { iso: 'li', code: '+423', name: 'Liechtenstein' },
  { iso: 'lt', code: '+370', name: 'Lithuania' },
  { iso: 'lu', code: '+352', name: 'Luxembourg' },
  { iso: 'mo', code: '+853', name: 'Macau' },
  { iso: 'mg', code: '+261', name: 'Madagascar' },
  { iso: 'mw', code: '+265', name: 'Malawi' },
  { iso: 'my', code: '+60', name: 'Malaysia' },
  { iso: 'mv', code: '+960', name: 'Maldives' },
  { iso: 'ml', code: '+223', name: 'Mali' },
  { iso: 'mt', code: '+356', name: 'Malta' },
  { iso: 'mr', code: '+222', name: 'Mauritania' },
  { iso: 'mu', code: '+230', name: 'Mauritius' },
  { iso: 'mx', code: '+52', name: 'Mexico' },
  { iso: 'md', code: '+373', name: 'Moldova' },
  { iso: 'mc', code: '+377', name: 'Monaco' },
  { iso: 'mn', code: '+976', name: 'Mongolia' },
  { iso: 'me', code: '+382', name: 'Montenegro' },
  { iso: 'ma', code: '+212', name: 'Morocco' },
  { iso: 'mz', code: '+258', name: 'Mozambique' },
  { iso: 'mm', code: '+95', name: 'Myanmar' },
  { iso: 'na', code: '+264', name: 'Namibia' },
  { iso: 'np', code: '+977', name: 'Nepal' },
  { iso: 'nl', code: '+31', name: 'Netherlands' },
  { iso: 'nz', code: '+64', name: 'New Zealand' },
  { iso: 'ni', code: '+505', name: 'Nicaragua' },
  { iso: 'ne', code: '+227', name: 'Niger' },
  { iso: 'ng', code: '+234', name: 'Nigeria' },
  { iso: 'kp', code: '+850', name: 'North Korea' },
  { iso: 'mk', code: '+389', name: 'North Macedonia' },
  { iso: 'no', code: '+47', name: 'Norway' },
  { iso: 'om', code: '+968', name: 'Oman' },
  { iso: 'pk', code: '+92', name: 'Pakistan' },
  { iso: 'ps', code: '+970', name: 'Palestine' },
  { iso: 'pa', code: '+507', name: 'Panama' },
  { iso: 'pg', code: '+675', name: 'Papua New Guinea' },
  { iso: 'py', code: '+595', name: 'Paraguay' },
  { iso: 'pe', code: '+51', name: 'Peru' },
  { iso: 'ph', code: '+63', name: 'Philippines' },
  { iso: 'pl', code: '+48', name: 'Poland' },
  { iso: 'pt', code: '+351', name: 'Portugal' },
  { iso: 'pr', code: '+1-787', name: 'Puerto Rico' },
  { iso: 'qa', code: '+974', name: 'Qatar' },
  { iso: 'ro', code: '+40', name: 'Romania' },
  { iso: 'ru', code: '+7', name: 'Russia' },
  { iso: 'rw', code: '+250', name: 'Rwanda' },
  { iso: 'sa', code: '+966', name: 'Saudi Arabia' },
  { iso: 'sn', code: '+221', name: 'Senegal' },
  { iso: 'rs', code: '+381', name: 'Serbia' },
  { iso: 'sg', code: '+65', name: 'Singapore' },
  { iso: 'sk', code: '+421', name: 'Slovakia' },
  { iso: 'si', code: '+386', name: 'Slovenia' },
  { iso: 'so', code: '+252', name: 'Somalia' },
  { iso: 'za', code: '+27', name: 'South Africa' },
  { iso: 'kr', code: '+82', name: 'South Korea' },
  { iso: 'ss', code: '+211', name: 'South Sudan' },
  { iso: 'es', code: '+34', name: 'Spain' },
  { iso: 'lk', code: '+94', name: 'Sri Lanka' },
  { iso: 'sd', code: '+249', name: 'Sudan' },
  { iso: 'sr', code: '+597', name: 'Suriname' },
  { iso: 'se', code: '+46', name: 'Sweden' },
  { iso: 'ch', code: '+41', name: 'Switzerland' },
  { iso: 'sy', code: '+963', name: 'Syria' },
  { iso: 'tw', code: '+886', name: 'Taiwan' },
  { iso: 'tj', code: '+992', name: 'Tajikistan' },
  { iso: 'tz', code: '+255', name: 'Tanzania' },
  { iso: 'th', code: '+66', name: 'Thailand' },
  { iso: 'tl', code: '+670', name: 'Timor-Leste' },
  { iso: 'tg', code: '+228', name: 'Togo' },
  { iso: 'to', code: '+676', name: 'Tonga' },
  { iso: 'tt', code: '+1-868', name: 'Trinidad & Tobago' },
  { iso: 'tn', code: '+216', name: 'Tunisia' },
  { iso: 'tr', code: '+90', name: 'Turkey' },
  { iso: 'tm', code: '+993', name: 'Turkmenistan' },
  { iso: 'ug', code: '+256', name: 'Uganda' },
  { iso: 'ua', code: '+380', name: 'Ukraine' },
  { iso: 'ae', code: '+971', name: 'UAE' },
  { iso: 'uy', code: '+598', name: 'Uruguay' },
  { iso: 'uz', code: '+998', name: 'Uzbekistan' },
  { iso: 've', code: '+58', name: 'Venezuela' },
  { iso: 'vn', code: '+84', name: 'Vietnam' },
  { iso: 'ye', code: '+967', name: 'Yemen' },
  { iso: 'zm', code: '+260', name: 'Zambia' },
  { iso: 'zw', code: '+263', name: 'Zimbabwe' },
];

const TOTAL_STEPS = { creator: 10, business: 10, employee: 6, '': 8 };

export default function TypeformSection() {
  const [currentSlide, setCurrentSlide] = useState('1');
  const [navHistory, setNavHistory] = useState(['1']);
  const [profile, setProfile] = useState('');
  const [creatorIdeaChoice, setCreatorIdeaChoice] = useState('');

  // Form data
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState(COUNTRIES[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(data => {
        if (data.country_code) {
          const match = COUNTRIES.find(c => c.iso === data.country_code.toLowerCase());
          if (match) setCountryCode(match);
        }
      })
      .catch(() => {});
  }, []);
  const [username, setUsername] = useState('');
  const [creatorIdea, setCreatorIdea] = useState('');
  const [creatorProblem, setCreatorProblem] = useState('');
  const [creatorBudget, setCreatorBudget] = useState('');
  const [creatorRevenue, setCreatorRevenue] = useState('');
  const [bizIdeaChoice, setBizIdeaChoice] = useState('');
  const [bizIdea, setBizIdea] = useState('');
  const [bizProblem, setBizProblem] = useState('');
  const [bizBudget, setBizBudget] = useState('');
  const [bizDescription, setBizDescription] = useState('');
  const [bizWebsite, setBizWebsite] = useState('');

  // Multi-select state
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  // Single-select state for revenue/salary
  const [bizRevenue, setBizRevenue] = useState('');
  const [empSalary, setEmpSalary] = useState('');

  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const containerRef = useRef(null);
  const phoneWrapperRef = useRef(null);
  const [countrySearch, setCountrySearch] = useState('');
  const countrySearchRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (phoneWrapperRef.current && !phoneWrapperRef.current.contains(e.target)) {
        setShowCountryDropdown(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const toggleCountryDropdown = () => {
    setShowCountryDropdown(v => {
      if (!v) {
        setCountrySearch('');
        setTimeout(() => countrySearchRef.current?.focus(), 0);
      }
      return !v;
    });
  };

  const filteredCountries = COUNTRIES.filter(c => {
    if (!countrySearch) return true;
    const q = countrySearch.toLowerCase();
    return c.name.toLowerCase().includes(q) || c.code.includes(q);
  });

  const progressWidth = Math.min((navHistory.length / (TOTAL_STEPS[profile] || 8)) * 100, 100);

  const showSlide = useCallback((id) => {
    setCurrentSlide(id);
  }, []);

  // Auto-focus input when slide changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (containerRef.current) {
        const active = containerRef.current.querySelector('.tf-slide.active');
        if (active) {
          const input = active.querySelector('input, textarea');
          if (input) input.focus();
        }
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const getNextSlide = useCallback(() => {
    if (currentSlide === '1') return '2';
    if (currentSlide === '2') return '3';
    if (currentSlide === '3') return '4';
    if (currentSlide === 'c5') return 'c6';
    if (currentSlide === 'c6') return 'cr';
    if (currentSlide === 'c8') return 'submit';
    if (currentSlide === 'c8b') return 'submit';
    if (currentSlide === 'b5') return 'b6';
    if (currentSlide === 'b6') return 'b7';
    if (currentSlide === 'b9') return 'submit';
    if (currentSlide === 'b9b') return 'submit';
    return null;
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    const next = getNextSlide();
    if (next) {
      setNavHistory(prev => [...prev, next]);
      showSlide(next);
    }
  }, [getNextSlide, showSlide]);

  const validateContact = useCallback(() => {
    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setEmailError('Please enter a valid email address');
      valid = false;
    } else {
      setEmailError('');
    }
    const digits = phone.replace(/\D/g, '');
    if (!digits || digits.length < 7 || digits.length > 15) {
      setPhoneError('Please enter a valid phone number');
      valid = false;
    } else {
      setPhoneError('');
    }
    if (valid) nextSlide();
  }, [email, phone, nextSlide]);

  const prevSlide = useCallback(() => {
    setNavHistory(prev => {
      if (prev.length <= 1) return prev;
      const newHistory = prev.slice(0, -1);
      showSlide(newHistory[newHistory.length - 1]);
      return newHistory;
    });
  }, [showSlide]);

  const selectProfile = useCallback((type) => {
    setProfile(type);
    setTimeout(() => {
      const next = type === 'creator' ? 'c5' : type === 'business' ? 'b5' : 'e5';
      setNavHistory(prev => [...prev, next]);
      showSlide(next);
    }, 350);
  }, [showSlide]);

  const selectCreatorIdea = useCallback((choice) => {
    setCreatorIdeaChoice(choice);
    setTimeout(() => {
      const next = choice === 'yes' ? 'c8' : choice === 'problem' ? 'c8b' : 'c8c';
      setNavHistory(prev => [...prev, next]);
      showSlide(next);
    }, 350);
  }, [showSlide]);

  const goToSubmit = useCallback(() => {
    setTimeout(() => {
      setNavHistory(prev => [...prev, 'submit']);
      showSlide('submit');
    }, 350);
  }, [showSlide]);

  const goToCreatorSoftwareQ = useCallback(() => {
    setTimeout(() => {
      setNavHistory(prev => [...prev, 'c7']);
      showSlide('c7');
    }, 350);
  }, [showSlide]);

  const goToBizIdea = useCallback(() => {
    setTimeout(() => {
      setNavHistory(prev => [...prev, 'b8']);
      showSlide('b8');
    }, 350);
  }, [showSlide]);

  const selectBizIdea = useCallback((choice) => {
    setBizIdeaChoice(choice);
    setTimeout(() => {
      const next = choice === 'yes' ? 'b9' : choice === 'problem' ? 'b9b' : 'b9c';
      setNavHistory(prev => [...prev, next]);
      showSlide(next);
    }, 350);
  }, [showSlide]);

  const togglePlatform = useCallback((platform) => {
    setSelectedPlatforms(prev =>
      prev.includes(platform) ? prev.filter(p => p !== platform) : [...prev, platform]
    );
  }, []);

  const submitApplication = useCallback(() => {
    alert('Application submitted! In production, qualified applicants would be redirected to the booking page.');
  }, []);

  // Keyboard Enter handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        if (containerRef.current) {
          const active = containerRef.current.querySelector('.tf-slide.active');
          if (active) {
            const ta = active.querySelector('textarea');
            if (ta && document.activeElement === ta) return;
            e.preventDefault();
            const btn = active.querySelector('.tf-btn');
            if (btn) btn.click();
          }
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const QuestionNum = ({ num }) => (
    <div className="tf-question-num">
      <ArrowSvg />
      {num}
    </div>
  );

  const OkButton = ({ onClick }) => (
    <button className="tf-btn" onClick={onClick}>OK <CheckSvg /></button>
  );

  const BackButton = () => (
    <button className="tf-btn-back" onClick={prevSlide}><BackArrowSvg /> Back</button>
  );

  const platforms = ['Instagram', 'TikTok', 'YouTube', 'Twitch', 'Kick'];
  const platformKeys = ['A', 'B', 'C', 'D', 'E'];

  const bizRevenueOptions = [
    { key: 'A', label: 'Less than $5,000' },
    { key: 'B', label: '$5,000 – $10K' },
    { key: 'C', label: '$10K – $15K' },
    { key: 'D', label: '$15K – $20K' },
    { key: 'E', label: '$20K – $50K' },
    { key: 'F', label: '$50K – $100K' },
    { key: 'G', label: '$100K+' },
  ];

  const empSalaryOptions = [
    { key: 'A', label: 'Less than $2,000' },
    { key: 'B', label: '$2,000 – $5,000' },
    { key: 'C', label: '$5,000 – $10,000' },
    { key: 'D', label: '$10K – $15K' },
    { key: 'E', label: '$15K – $20K' },
    { key: 'F', label: '$20K – $50K' },
    { key: 'G', label: '$50K – $100K' },
    { key: 'H', label: '$100K+' },
  ];

  return (
    <section className="typeform-section" id="apply">
      <div className="typeform-header">
        <h2>Apply to Partner With Me</h2>
        <p>Answer a few quick questions. Qualified applicants get redirected to book a call.</p>
      </div>

      <div className="typeform-container" ref={containerRef}>
        <div className="tf-progress">
          <div className="tf-progress-fill" style={{ width: `${progressWidth}%` }}></div>
        </div>

        {/* SLIDE 1: First Name */}
        <div className={`tf-slide${currentSlide === '1' ? ' active' : ''}`} data-slide="1">
          <QuestionNum num="Question 1" />
          <div className="tf-question">What's your first name?</div>
          <input
            type="text"
            className="tf-input"
            placeholder="Type your first name..."
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <div className="tf-nav">
            <div></div>
            <OkButton onClick={nextSlide} />
          </div>
        </div>

        {/* SLIDE 2: Last Name */}
        <div className={`tf-slide${currentSlide === '2' ? ' active' : ''}`} data-slide="2">
          <QuestionNum num="Question 2" />
          <div className="tf-question">And your last name?</div>
          <input
            type="text"
            className="tf-input"
            placeholder="Type your last name..."
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <div className="tf-nav">
            <BackButton />
            <OkButton onClick={nextSlide} />
          </div>
        </div>

        {/* SLIDE 3: Contact Info */}
        <div className={`tf-slide${currentSlide === '3' ? ' active' : ''}`} data-slide="3">
          <QuestionNum num="Question 3" />
          <div className="tf-question">What's the best way to reach you?</div>
          <div className="tf-input-row">
            <div className="tf-input-group">
              <span className="tf-input-label">Email Address</span>
              <input
                type="email"
                className={`tf-input${emailError ? ' tf-input-error' : ''}`}
                placeholder="you@email.com"
                value={email}
                onChange={e => { setEmail(e.target.value); setEmailError(''); }}
              />
              {emailError && <span className="tf-error">{emailError}</span>}
            </div>
            <div className="tf-input-group">
              <span className="tf-input-label">Phone Number</span>
              <div className="phone-wrapper" ref={phoneWrapperRef}>
                <button
                  type="button"
                  className="country-select-btn"
                  onClick={toggleCountryDropdown}
                >
                  <span className={`fi fi-${countryCode.iso} flag`}></span>
                  <span className="dial-code">{countryCode.code}</span>
                  <span className="chevron">▼</span>
                </button>
                {showCountryDropdown && (
                  <div className="country-dropdown">
                    <input
                      ref={countrySearchRef}
                      type="text"
                      className="country-search"
                      placeholder="Search country or code..."
                      value={countrySearch}
                      onChange={e => setCountrySearch(e.target.value)}
                    />
                    <div className="country-list">
                      {filteredCountries.map((c, i) => (
                        <div
                          key={i}
                          className="country-option"
                          onClick={() => { setCountryCode(c); setShowCountryDropdown(false); }}
                        >
                          <span className={`fi fi-${c.iso} flag`}></span>
                          <span className="name">{c.name}</span>
                          <span className="code">{c.code}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <input
                  type="tel"
                  className={`phone-input${phoneError ? ' tf-input-error' : ''}`}
                  placeholder="(555) 000-0000"
                  value={phone}
                  onChange={e => { setPhone(e.target.value); setPhoneError(''); }}
                />
              </div>
              {phoneError && <span className="tf-error">{phoneError}</span>}
            </div>
          </div>
          <div className="tf-nav">
            <BackButton />
            <OkButton onClick={validateContact} />
          </div>
        </div>

        {/* SLIDE 4: Profile Type */}
        <div className={`tf-slide${currentSlide === '4' ? ' active' : ''}`} data-slide="4">
          <QuestionNum num="Question 4" />
          <div className="tf-question">Which best describes you?</div>
          <div className="tf-options">
            {[
              { key: 'A', label: 'Content Creator', value: 'creator' },
              { key: 'B', label: 'Business Owner', value: 'business' },
              { key: 'C', label: '9-5 But Want a Business', value: 'employee' },
            ].map(opt => (
              <div
                key={opt.value}
                className={`tf-option${profile === opt.value ? ' selected' : ''}`}
                onClick={() => selectProfile(opt.value)}
              >
                <span className="tf-option-key">{opt.key}</span> {opt.label}
              </div>
            ))}
          </div>
          <div className="tf-nav">
            <BackButton />
            <div></div>
          </div>
        </div>

        {/* ===== CREATOR BRANCH ===== */}
        {/* c5: Platforms */}
        <div className={`tf-slide${currentSlide === 'c5' ? ' active' : ''}`} data-slide="c5">
          <QuestionNum num="Question 5" />
          <div className="tf-question">Which platforms do you create content on?</div>
          <div className="tf-hint" style={{ marginBottom: 20 }}>Select all that apply</div>
          <div className="tf-options multi">
            {platforms.map((platform, i) => (
              <div
                key={platform}
                className={`tf-option${selectedPlatforms.includes(platform) ? ' selected' : ''}`}
                onClick={() => togglePlatform(platform)}
              >
                <span className="tf-option-key">{platformKeys[i]}</span> {platform}
              </div>
            ))}
          </div>
          <div className="tf-nav">
            <BackButton />
            <OkButton onClick={nextSlide} />
          </div>
        </div>

        {/* c6: Username */}
        <div className={`tf-slide${currentSlide === 'c6' ? ' active' : ''}`} data-slide="c6">
          <QuestionNum num="Question 6" />
          <div className="tf-question">What's your username?</div>
          <input
            type="text"
            className="tf-input"
            placeholder="@yourhandle"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <div className="tf-hint">Your primary platform handle</div>
          <div className="tf-nav">
            <BackButton />
            <OkButton onClick={nextSlide} />
          </div>
        </div>

        {/* cr: Creator revenue */}
        <div className={`tf-slide${currentSlide === 'cr' ? ' active' : ''}`} data-slide="cr">
          <QuestionNum num="Question 7" />
          <div className="tf-question">How much are you currently making per month from your content or brand?</div>
          <div className="tf-options">
            {[
              { key: 'A', label: 'Less than $5,000' },
              { key: 'B', label: '$5,000 – $10K' },
              { key: 'C', label: '$10K – $15K' },
              { key: 'D', label: '$15K – $20K' },
              { key: 'E', label: '$20K – $50K' },
              { key: 'F', label: '$50K – $100K' },
              { key: 'G', label: '$100K+' },
            ].map(opt => (
              <div
                key={opt.key}
                className={`tf-option${creatorRevenue === opt.label ? ' selected' : ''}`}
                onClick={() => { setCreatorRevenue(opt.label); goToCreatorSoftwareQ(); }}
              >
                <span className="tf-option-key">{opt.key}</span> {opt.label}
              </div>
            ))}
          </div>
          <div className="tf-nav">
            <BackButton />
            <div></div>
          </div>
        </div>

        {/* c7: Software idea? */}
        <div className={`tf-slide${currentSlide === 'c7' ? ' active' : ''}`} data-slide="c7">
          <QuestionNum num="Question 8" />
          <div className="tf-question">Do you already have an idea for a software?</div>
          <div className="tf-options">
            {[
              { key: 'A', label: 'Yes, I have an idea', value: 'yes' },
              { key: 'B', label: 'No, but I know a problem I want to solve', value: 'problem' },
              { key: 'C', label: 'I just want to start a SaaS business', value: 'open' },
            ].map(opt => (
              <div
                key={opt.value}
                className={`tf-option${creatorIdeaChoice === opt.value ? ' selected' : ''}`}
                onClick={() => selectCreatorIdea(opt.value)}
              >
                <span className="tf-option-key">{opt.key}</span> {opt.label}
              </div>
            ))}
          </div>
          <div className="tf-nav">
            <BackButton />
            <div></div>
          </div>
        </div>

        {/* c8: Describe idea */}
        <div className={`tf-slide${currentSlide === 'c8' ? ' active' : ''}`} data-slide="c8">
          <QuestionNum num="Tell me more" />
          <div className="tf-question">Describe your software idea in a few sentences.</div>
          <textarea
            className="tf-textarea"
            placeholder="What does it do? Who is it for? What problem does it solve?"
            value={creatorIdea}
            onChange={e => setCreatorIdea(e.target.value)}
          ></textarea>
          <div className="tf-nav">
            <BackButton />
            <OkButton onClick={nextSlide} />
          </div>
        </div>

        {/* c8b: Describe problem */}
        <div className={`tf-slide${currentSlide === 'c8b' ? ' active' : ''}`} data-slide="c8b">
          <QuestionNum num="Tell me more" />
          <div className="tf-question">What is the problem you want to solve? In the ideal world, how would you solve it if nothing was in your way?</div>
          <textarea
            className="tf-textarea"
            placeholder="Describe the problem and your ideal solution..."
            value={creatorProblem}
            onChange={e => setCreatorProblem(e.target.value)}
          ></textarea>
          <div className="tf-nav">
            <BackButton />
            <OkButton onClick={nextSlide} />
          </div>
        </div>

        {/* c8c: Investment budget */}
        <div className={`tf-slide${currentSlide === 'c8c' ? ' active' : ''}`} data-slide="c8c">
          <QuestionNum num="Question 9" />
          <div className="tf-question">In order to promote, sell, and market your SaaS, how much do you have ready to invest?</div>
          <div className="tf-options">
            {[
              { key: 'A', label: 'Under $1,000/month' },
              { key: 'B', label: '$1,000 – $3,000/month' },
              { key: 'C', label: '$3,000 – $5,000/month' },
              { key: 'D', label: '$5,000 – $10,000/month' },
              { key: 'E', label: '$10,000+/month' },
            ].map(opt => (
              <div
                key={opt.key}
                className={`tf-option${creatorBudget === opt.label ? ' selected' : ''}`}
                onClick={() => { setCreatorBudget(opt.label); goToSubmit(); }}
              >
                <span className="tf-option-key">{opt.key}</span> {opt.label}
              </div>
            ))}
          </div>
          <div className="tf-nav">
            <BackButton />
            <div></div>
          </div>
        </div>

        {/* ===== BUSINESS BRANCH ===== */}
        {/* b5: Business description */}
        <div className={`tf-slide${currentSlide === 'b5' ? ' active' : ''}`} data-slide="b5">
          <QuestionNum num="Question 5" />
          <div className="tf-question">Describe what you do.</div>
          <textarea
            className="tf-textarea"
            placeholder="What's your business? What products or services do you offer?"
            value={bizDescription}
            onChange={e => setBizDescription(e.target.value)}
          ></textarea>
          <div className="tf-nav">
            <BackButton />
            <OkButton onClick={nextSlide} />
          </div>
        </div>

        {/* b6: Website */}
        <div className={`tf-slide${currentSlide === 'b6' ? ' active' : ''}`} data-slide="b6">
          <QuestionNum num="Question 6" />
          <div className="tf-question">What's your website?</div>
          <input
            type="url"
            className="tf-input"
            placeholder="https://yoursite.com"
            value={bizWebsite}
            onChange={e => setBizWebsite(e.target.value)}
          />
          <div className="tf-nav">
            <BackButton />
            <OkButton onClick={nextSlide} />
          </div>
        </div>

        {/* b7: Revenue */}
        <div className={`tf-slide${currentSlide === 'b7' ? ' active' : ''}`} data-slide="b7">
          <QuestionNum num="Question 7" />
          <div className="tf-question">What's your monthly revenue?</div>
          <div className="tf-options">
            {bizRevenueOptions.map(opt => (
              <div
                key={opt.key}
                className={`tf-option${bizRevenue === opt.label ? ' selected' : ''}`}
                onClick={() => { setBizRevenue(opt.label); goToBizIdea(); }}
              >
                <span className="tf-option-key">{opt.key}</span> {opt.label}
              </div>
            ))}
          </div>
          <div className="tf-nav">
            <BackButton />
            <div></div>
          </div>
        </div>

        {/* b8: Software idea? */}
        <div className={`tf-slide${currentSlide === 'b8' ? ' active' : ''}`} data-slide="b8">
          <QuestionNum num="Question 8" />
          <div className="tf-question">Do you already have an idea for a software?</div>
          <div className="tf-options">
            {[
              { key: 'A', label: 'Yes, I have an idea', value: 'yes' },
              { key: 'B', label: 'No, but I know a problem I want to solve', value: 'problem' },
              { key: 'C', label: 'I just want to start a SaaS business', value: 'open' },
            ].map(opt => (
              <div
                key={opt.value}
                className={`tf-option${bizIdeaChoice === opt.value ? ' selected' : ''}`}
                onClick={() => selectBizIdea(opt.value)}
              >
                <span className="tf-option-key">{opt.key}</span> {opt.label}
              </div>
            ))}
          </div>
          <div className="tf-nav">
            <BackButton />
            <div></div>
          </div>
        </div>

        {/* b9: Describe idea */}
        <div className={`tf-slide${currentSlide === 'b9' ? ' active' : ''}`} data-slide="b9">
          <QuestionNum num="Tell me more" />
          <div className="tf-question">Describe your software idea in a few sentences.</div>
          <textarea
            className="tf-textarea"
            placeholder="What does it do? Who is it for? What problem does it solve?"
            value={bizIdea}
            onChange={e => setBizIdea(e.target.value)}
          ></textarea>
          <div className="tf-nav">
            <BackButton />
            <OkButton onClick={nextSlide} />
          </div>
        </div>

        {/* b9b: Describe problem */}
        <div className={`tf-slide${currentSlide === 'b9b' ? ' active' : ''}`} data-slide="b9b">
          <QuestionNum num="Tell me more" />
          <div className="tf-question">What is the problem you want to solve? In the ideal world, how would you solve it if nothing was in your way?</div>
          <textarea
            className="tf-textarea"
            placeholder="Describe the problem and your ideal solution..."
            value={bizProblem}
            onChange={e => setBizProblem(e.target.value)}
          ></textarea>
          <div className="tf-nav">
            <BackButton />
            <OkButton onClick={nextSlide} />
          </div>
        </div>

        {/* b9c: Investment budget */}
        <div className={`tf-slide${currentSlide === 'b9c' ? ' active' : ''}`} data-slide="b9c">
          <QuestionNum num="Question 9" />
          <div className="tf-question">In order to promote, sell, and market your SaaS, how much do you have ready to invest?</div>
          <div className="tf-options">
            {[
              { key: 'A', label: 'Under $1,000/month' },
              { key: 'B', label: '$1,000 – $3,000/month' },
              { key: 'C', label: '$3,000 – $5,000/month' },
              { key: 'D', label: '$5,000 – $10,000/month' },
              { key: 'E', label: '$10,000+/month' },
            ].map(opt => (
              <div
                key={opt.key}
                className={`tf-option${bizBudget === opt.label ? ' selected' : ''}`}
                onClick={() => { setBizBudget(opt.label); goToSubmit(); }}
              >
                <span className="tf-option-key">{opt.key}</span> {opt.label}
              </div>
            ))}
          </div>
          <div className="tf-nav">
            <BackButton />
            <div></div>
          </div>
        </div>

        {/* ===== EMPLOYEE BRANCH ===== */}
        {/* e5: Salary */}
        <div className={`tf-slide${currentSlide === 'e5' ? ' active' : ''}`} data-slide="e5">
          <QuestionNum num="Question 5" />
          <div className="tf-question">How much do you currently get paid monthly?</div>
          <div className="tf-options">
            {empSalaryOptions.map(opt => (
              <div
                key={opt.key}
                className={`tf-option${empSalary === opt.label ? ' selected' : ''}`}
                onClick={() => { setEmpSalary(opt.label); goToSubmit(); }}
              >
                <span className="tf-option-key">{opt.key}</span> {opt.label}
              </div>
            ))}
          </div>
          <div className="tf-nav">
            <BackButton />
            <div></div>
          </div>
        </div>

        {/* ===== SUBMIT ===== */}
        <div className={`tf-slide tf-submit-slide${currentSlide === 'submit' ? ' active' : ''}`} data-slide="submit">
          <div className="tf-question">You're all set! Ready to submit?</div>
          <p className="tf-submit-sub">If you qualify, you'll be redirected to book a call with Marko immediately.</p>
          <button className="tf-submit-btn" onClick={submitApplication}>
            Submit Application
            <svg viewBox="0 0 24 24"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
          </button>
          <p className="tf-disclaimer">Your information is 100% confidential. Only qualified applicants will be contacted.</p>
          <div className="tf-nav" style={{ justifyContent: 'flex-start' }}>
            <BackButton />
          </div>
        </div>
      </div>
    </section>
  );
}
