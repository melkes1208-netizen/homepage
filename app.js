const {
  useState,
  useEffect,
  useRef
} = React;

/* ========== TRANSLATIONS ========== */
const T = {
  ko: {
    nav: ["플랫폼", "로드맵", "파트너", "문의"],
    badge: "Web3 차세대 플랫폼",
    heroTitle1: "미래 금융의 시작,",
    heroTitle2: "ZETASUM",
    heroDesc: "광고 시청 보상과 Web3 금융 생태계를 연결하는 차세대 글로벌 플랫폼. 지금 제타섬과 함께 새로운 경제를 경험하세요.",
    startBtn: "지금 시작하기",
    learnBtn: "더 알아보기",
    scrollText: "스크롤하여 탐색",
    stats: [{
      num: "150K+",
      label: "글로벌 사용자"
    }, {
      num: "$2.5M",
      label: "누적 보상금"
    }, {
      num: "35+",
      label: "파트너 기업"
    }, {
      num: "99.9%",
      label: "서비스 가동률"
    }],
    platformTag: "PLATFORM",
    platformTitle: "제타섬이 만드는 새로운 생태계",
    platformDesc: "핀테크와 블록체인의 결합으로 누구나 쉽게 참여할 수 있는 글로벌 보상 플랫폼",
    cards: [{
      icon: "🔗",
      title: "Web2 + Web3 통합",
      desc: "기존 핀테크의 편리함과 블록체인의 투명성을 결합하여 누구나 쉽게 사용할 수 있는 차세대 금융 플랫폼을 제공합니다."
    }, {
      icon: "💎",
      title: "스마트 리워드",
      desc: "광고 시청, 미션 수행, 커뮤니티 활동 등 다양한 방법으로 토큰 보상을 획득하고 실시간으로 교환할 수 있습니다."
    }, {
      icon: "🌐",
      title: "글로벌 네트워크",
      desc: "전 세계 35개국 이상의 파트너와 함께 국경 없는 글로벌 금융 생태계를 구축하고 있습니다."
    }, {
      icon: "🛡️",
      title: "보안 & 신뢰",
      desc: "최신 블록체인 기술과 다중 보안 시스템으로 사용자의 자산과 데이터를 안전하게 보호합니다."
    }, {
      icon: "📊",
      title: "실시간 대시보드",
      desc: "수익, 활동 내역, 토큰 시세 등을 한눈에 확인할 수 있는 직관적인 대시보드를 제공합니다."
    }, {
      icon: "🚀",
      title: "빠른 정산",
      desc: "스마트 컨트랙트 기반의 자동화된 정산 시스템으로 보상을 즉시 수령할 수 있습니다."
    }],
    roadmapTag: "ROADMAP",
    roadmapTitle: "제타섬 로드맵",
    roadmapDesc: "글로벌 Web3 플랫폼을 향한 제타섬의 여정",
    roadmap: [{
      phase: "2025 Q1",
      title: "플랫폼 런칭",
      desc: "제타섬 메인넷 출시 및 초기 사용자 온보딩 시작"
    }, {
      phase: "2025 Q3",
      title: "글로벌 확장",
      desc: "아시아 및 동남아시아 시장 진출, 현지 파트너십 구축"
    }, {
      phase: "2026 Q1",
      title: "DeFi 통합",
      desc: "탈중앙화 금융 서비스 통합 및 스테이킹 기능 출시"
    }, {
      phase: "2026 Q3",
      title: "DAO 전환",
      desc: "커뮤니티 거버넌스 도입 및 DAO 기반 운영 시작"
    }],
    partnerTag: "PARTNERS",
    partnerTitle: "글로벌 파트너",
    partnerDesc: "세계적인 기업들과 함께 성장합니다",
    footerDesc: "광고 시청 보상과 Web3 금융 생태계를 연결하는 차세대 글로벌 플랫폼",
    footerCols: [{
      title: "서비스",
      links: ["플랫폼 소개", "토큰 이코노미", "보상 시스템", "API 문서"]
    }, {
      title: "회사",
      links: ["팀 소개", "채용", "블로그", "문의하기"]
    }, {
      title: "법적 고지",
      links: ["이용약관", "개인정보처리방침", "쿠키 정책"]
    }],
    copyright: "© 2026 ZETASUM. All Rights Reserved.",
    signupTitle: "회원가입",
    namePh: "이름",
    emailPh: "이메일 주소",
    pwdPh: "비밀번호",
    confirmPh: "비밀번호 확인",
    pwdGuide: "비밀번호는 7~16자리 영문, 숫자, 특수문자를 포함해야 합니다.",
    signupBtn: "이메일로 가입하기",
    guestBtn: "게스트로 둘러보기",
    enterInfo: "모든 정보를 입력해주세요.",
    pwdMismatch: "비밀번호가 서로 일치하지 않습니다.",
    pwdInvalid: "비밀번호 형식이 올바르지 않습니다.",
    signupOk: "회원가입이 완료되었습니다!",
    guestOk: "게스트 모드로 입장합니다."
  },
  en: {
    nav: ["Platform", "Roadmap", "Partners", "Contact"],
    badge: "Next-Gen Web3 Platform",
    heroTitle1: "The Future of Finance,",
    heroTitle2: "ZETASUM",
    heroDesc: "A next-generation global platform connecting ad rewards with the Web3 financial ecosystem. Experience the new economy with ZETASUM.",
    startBtn: "Get Started",
    learnBtn: "Learn More",
    scrollText: "Scroll to explore",
    stats: [{
      num: "150K+",
      label: "Global Users"
    }, {
      num: "$2.5M",
      label: "Total Rewards"
    }, {
      num: "35+",
      label: "Partners"
    }, {
      num: "99.9%",
      label: "Uptime"
    }],
    platformTag: "PLATFORM",
    platformTitle: "A New Ecosystem by ZETASUM",
    platformDesc: "A global reward platform anyone can join through fintech and blockchain integration",
    cards: [{
      icon: "🔗",
      title: "Web2 + Web3",
      desc: "Combining the convenience of fintech with the transparency of blockchain for a next-gen financial platform."
    }, {
      icon: "💎",
      title: "Smart Rewards",
      desc: "Earn token rewards through ads, missions, and community activities with real-time exchange."
    }, {
      icon: "🌐",
      title: "Global Network",
      desc: "Building a borderless financial ecosystem with partners across 35+ countries."
    }, {
      icon: "🛡️",
      title: "Security & Trust",
      desc: "Protecting user assets and data with cutting-edge blockchain technology and multi-layer security."
    }, {
      icon: "📊",
      title: "Live Dashboard",
      desc: "An intuitive dashboard to track earnings, activity, and token prices at a glance."
    }, {
      icon: "🚀",
      title: "Instant Settlement",
      desc: "Receive rewards instantly through smart contract-based automated settlement."
    }],
    roadmapTag: "ROADMAP",
    roadmapTitle: "ZETASUM Roadmap",
    roadmapDesc: "Our journey to a global Web3 platform",
    roadmap: [{
      phase: "2025 Q1",
      title: "Platform Launch",
      desc: "ZETASUM mainnet launch and initial user onboarding"
    }, {
      phase: "2025 Q3",
      title: "Global Expansion",
      desc: "Entry into Asian and Southeast Asian markets"
    }, {
      phase: "2026 Q1",
      title: "DeFi Integration",
      desc: "Decentralized finance services integration and staking"
    }, {
      phase: "2026 Q3",
      title: "DAO Transition",
      desc: "Community governance and DAO-based operations"
    }],
    partnerTag: "PARTNERS",
    partnerTitle: "Global Partners",
    partnerDesc: "Growing together with world-class companies",
    footerDesc: "A next-generation global platform connecting ad rewards with the Web3 financial ecosystem.",
    footerCols: [{
      title: "Services",
      links: ["Platform", "Tokenomics", "Rewards", "API Docs"]
    }, {
      title: "Company",
      links: ["Team", "Careers", "Blog", "Contact"]
    }, {
      title: "Legal",
      links: ["Terms of Service", "Privacy Policy", "Cookie Policy"]
    }],
    copyright: "© 2026 ZETASUM. All Rights Reserved.",
    signupTitle: "Sign Up",
    namePh: "Name",
    emailPh: "Email",
    pwdPh: "Password",
    confirmPh: "Confirm Password",
    pwdGuide: "Password must be 7-16 chars with letters, numbers, and symbols.",
    signupBtn: "Sign Up with Email",
    guestBtn: "Explore as Guest",
    enterInfo: "Please fill in all fields.",
    pwdMismatch: "Passwords do not match.",
    pwdInvalid: "Invalid password format.",
    signupOk: "Sign up successful!",
    guestOk: "Entering guest mode."
  },
  zh: {
    nav: ["平台", "路线图", "合作伙伴", "联系"],
    badge: "下一代 Web3 平台",
    heroTitle1: "金融的未来，",
    heroTitle2: "ZETASUM",
    heroDesc: "连接广告奖励与 Web3 金融生态系统的新一代全球平台。与 ZETASUM 一起体验新经济。",
    startBtn: "立即开始",
    learnBtn: "了解更多",
    scrollText: "滚动浏览",
    stats: [{
      num: "150K+",
      label: "全球用户"
    }, {
      num: "$2.5M",
      label: "累计奖励"
    }, {
      num: "35+",
      label: "合作伙伴"
    }, {
      num: "99.9%",
      label: "运行时间"
    }],
    platformTag: "平台",
    platformTitle: "ZETASUM 打造的新生态",
    platformDesc: "通过金融科技与区块链的结合，人人都能参与的全球奖励平台",
    cards: [{
      icon: "🔗",
      title: "Web2 + Web3",
      desc: "结合金融科技的便利与区块链的透明，提供下一代金融平台。"
    }, {
      icon: "💎",
      title: "智能奖励",
      desc: "通过广告、任务和社区活动赚取代币奖励并实时兑换。"
    }, {
      icon: "🌐",
      title: "全球网络",
      desc: "与35+国家的合作伙伴共建无国界的金融生态系统。"
    }, {
      icon: "🛡️",
      title: "安全可信",
      desc: "利用尖端区块链技术和多重安全系统保护用户资产。"
    }, {
      icon: "📊",
      title: "实时仪表板",
      desc: "一目了然地追踪收益、活动和代币价格的直观仪表板。"
    }, {
      icon: "🚀",
      title: "即时结算",
      desc: "基于智能合约的自动化结算系统，即时获得奖励。"
    }],
    roadmapTag: "路线图",
    roadmapTitle: "ZETASUM 路线图",
    roadmapDesc: "通往全球 Web3 平台的旅程",
    roadmap: [{
      phase: "2025 Q1",
      title: "平台发布",
      desc: "ZETASUM 主网发布及初始用户引导"
    }, {
      phase: "2025 Q3",
      title: "全球扩展",
      desc: "进入亚洲和东南亚市场"
    }, {
      phase: "2026 Q1",
      title: "DeFi 集成",
      desc: "去中心化金融服务集成和质押功能"
    }, {
      phase: "2026 Q3",
      title: "DAO 转型",
      desc: "社区治理和基于 DAO 的运营"
    }],
    partnerTag: "合作伙伴",
    partnerTitle: "全球合作伙伴",
    partnerDesc: "与世界级企业共同成长",
    footerDesc: "连接广告奖励与 Web3 金融生态系统的新一代全球平台。",
    footerCols: [{
      title: "服务",
      links: ["平台介绍", "代币经济", "奖励系统", "API 文档"]
    }, {
      title: "公司",
      links: ["团队", "招聘", "博客", "联系我们"]
    }, {
      title: "法律",
      links: ["服务条款", "隐私政策", "Cookie 政策"]
    }],
    copyright: "© 2026 ZETASUM. All Rights Reserved.",
    signupTitle: "注册会员",
    namePh: "姓名",
    emailPh: "邮箱",
    pwdPh: "密码",
    confirmPh: "确认密码",
    pwdGuide: "密码必须为7~16位，包含字母、数字和特殊字符。",
    signupBtn: "邮箱注册",
    guestBtn: "游客浏览",
    enterInfo: "请填写所有信息。",
    pwdMismatch: "密码不匹配。",
    pwdInvalid: "密码格式无效。",
    signupOk: "注册成功！",
    guestOk: "进入游客模式。"
  }
};
const partners = ["Binance", "Polygon", "Chainlink", "AWS", "Google Cloud", "Solana"];

/* ========== COMPONENTS ========== */
function Particles() {
  const particles = Array.from({
    length: 20
  }, (_, i) => {
    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const dur = Math.random() * 15 + 10;
    const delay = Math.random() * 10;
    return React.createElement('div', {
      key: i,
      className: 'particle',
      style: {
        width: size,
        height: size,
        left: left + '%',
        animationDuration: dur + 's',
        animationDelay: delay + 's'
      }
    });
  });
  return React.createElement('div', {
    className: 'particles'
  }, particles);
}
function Navbar({
  lang,
  setLang
}) {
  const t = T[lang];
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    className: scrolled ? 'scrolled' : ''
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo"
  }, "ZETASUM"), /*#__PURE__*/React.createElement("ul", {
    className: "nav-links"
  }, t.nav.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: '#section-' + i
  }, item)))), /*#__PURE__*/React.createElement("div", {
    className: "nav-right"
  }, /*#__PURE__*/React.createElement("select", {
    className: "lang-select",
    value: lang,
    onChange: e => setLang(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "ko"
  }, "KR \uD55C\uAD6D\uC5B4"), /*#__PURE__*/React.createElement("option", {
    value: "en"
  }, "EN English"), /*#__PURE__*/React.createElement("option", {
    value: "zh"
  }, "CN \u4E2D\u6587"))));
}
function Hero({
  lang,
  onOpen
}) {
  const t = T[lang];
  return /*#__PURE__*/React.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), t.badge), /*#__PURE__*/React.createElement("h1", null, t.heroTitle1, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, t.heroTitle2)), /*#__PURE__*/React.createElement("p", null, t.heroDesc), /*#__PURE__*/React.createElement("div", {
    className: "hero-buttons"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-glow",
    onClick: onOpen
  }, t.startBtn), /*#__PURE__*/React.createElement("button", {
    className: "btn-outline",
    onClick: () => document.getElementById('section-0')?.scrollIntoView({
      behavior: 'smooth'
    })
  }, t.learnBtn)), /*#__PURE__*/React.createElement("div", {
    className: "scroll-indicator"
  }, /*#__PURE__*/React.createElement("span", null, t.scrollText), /*#__PURE__*/React.createElement("div", {
    className: "line"
  })));
}
function Stats({
  lang
}) {
  const t = T[lang];
  return /*#__PURE__*/React.createElement("div", {
    className: "stats-bar"
  }, t.stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "stat-item",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-number"
  }, s.num), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, s.label))));
}
function Features({
  lang
}) {
  const t = T[lang];
  return /*#__PURE__*/React.createElement("section", {
    id: "section-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-tag"
  }, t.platformTag), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, t.platformTitle), /*#__PURE__*/React.createElement("p", {
    className: "section-desc"
  }, t.platformDesc)), /*#__PURE__*/React.createElement("div", {
    className: "cards"
  }, t.cards.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "card reveal",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-icon"
  }, c.icon), /*#__PURE__*/React.createElement("h3", null, c.title), /*#__PURE__*/React.createElement("p", null, c.desc)))));
}
function Roadmap({
  lang
}) {
  const t = T[lang];
  return /*#__PURE__*/React.createElement("section", {
    id: "section-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-tag"
  }, t.roadmapTag), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, t.roadmapTitle), /*#__PURE__*/React.createElement("p", {
    className: "section-desc"
  }, t.roadmapDesc)), /*#__PURE__*/React.createElement("div", {
    className: "roadmap"
  }, t.roadmap.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "roadmap-item reveal",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "roadmap-dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "roadmap-content"
  }, /*#__PURE__*/React.createElement("h4", null, r.phase, " \u2014 ", r.title), /*#__PURE__*/React.createElement("p", null, r.desc))))));
}
function Partners({
  lang
}) {
  const t = T[lang];
  return /*#__PURE__*/React.createElement("section", {
    id: "section-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-tag"
  }, t.partnerTag), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, t.partnerTitle), /*#__PURE__*/React.createElement("p", {
    className: "section-desc"
  }, t.partnerDesc)), /*#__PURE__*/React.createElement("div", {
    className: "partners-grid reveal"
  }, partners.map((p, i) => /*#__PURE__*/React.createElement("div", {
    className: "partner-logo",
    key: i
  }, p))));
}
function Footer({
  lang
}) {
  const t = T[lang];
  return /*#__PURE__*/React.createElement("footer", {
    id: "section-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo"
  }, "ZETASUM"), /*#__PURE__*/React.createElement("p", null, t.footerDesc)), t.footerCols.map((col, i) => /*#__PURE__*/React.createElement("div", {
    className: "footer-col",
    key: i
  }, /*#__PURE__*/React.createElement("h4", null, col.title), col.links.map((l, j) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    key: j
  }, l))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, t.copyright));
}
function Modal({
  lang,
  isOpen,
  onClose
}) {
  if (!isOpen) return null;
  const t = T[lang];
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const set = e => setForm({
    ...form,
    [e.target.name]: e.target.value
  });
  const signup = () => {
    const {
      name,
      email,
      password,
      confirmPassword
    } = form;
    if (!name || !email || !password || !confirmPassword) {
      alert(t.enterInfo);
      return;
    }
    if (password !== confirmPassword) {
      alert(t.pwdMismatch);
      return;
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{7,16}$/.test(password)) {
      alert(t.pwdInvalid);
      return;
    }
    alert(t.signupOk);
    onClose();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("span", {
    className: "close-icon",
    onClick: onClose
  }, "\xD7"), /*#__PURE__*/React.createElement("h2", null, t.signupTitle), /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("input", {
    name: "name",
    placeholder: t.namePh,
    value: form.name,
    onChange: set
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("input", {
    name: "email",
    type: "email",
    placeholder: t.emailPh,
    value: form.email,
    onChange: set
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("input", {
    name: "password",
    type: "password",
    placeholder: t.pwdPh,
    value: form.password,
    onChange: set
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("input", {
    name: "confirmPassword",
    type: "password",
    placeholder: t.confirmPh,
    value: form.confirmPassword,
    onChange: set
  })), /*#__PURE__*/React.createElement("p", {
    id: "password-guide"
  }, t.pwdGuide), /*#__PURE__*/React.createElement("button", {
    className: "btn-block btn-primary",
    onClick: signup
  }, t.signupBtn), /*#__PURE__*/React.createElement("button", {
    className: "btn-block btn-secondary",
    onClick: () => {
      alert(t.guestOk);
      onClose();
    }
  }, t.guestBtn)));
}

/* ========== APP ========== */
function App() {
  const [lang, setLang] = useState("ko");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal, .stat-item, .partner-logo').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "app-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ambient-bg"
  }), /*#__PURE__*/React.createElement(Particles, null), /*#__PURE__*/React.createElement(Navbar, {
    lang: lang,
    setLang: setLang
  }), /*#__PURE__*/React.createElement(Hero, {
    lang: lang,
    onOpen: () => setModal(true)
  }), /*#__PURE__*/React.createElement(Stats, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Features, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Roadmap, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Partners, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Footer, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Modal, {
    lang: lang,
    isOpen: modal,
    onClose: () => setModal(false)
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));