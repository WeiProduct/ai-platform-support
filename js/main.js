// ===== i18n =====
const I18N = {
  'zh-CN': {
    skip: '跳到主要内容',
    navHow: '使用流程', navModels: '支持模型', navFeatures: '功能特点', navScreenshots: '应用截图', navFaq: '常见问题', navGet: '获取 App',
    heroEyebrow: '✦ 多模型 AI 对话助手',
    heroTitle: '智能对话，无限可能',
    heroSubtitle: '在一个 App 里使用 GPT-4、GPT-3.5 与 Google Gemini。提示词库、流式回复、聊天管理，对话本地加密。',
    downloadBtn: 'App Store 下载', learnMore: '了解更多',
    trust1: '🔒 对话本地加密', trust2: '⚡ 实时流式回复', trust3: '🌏 中英双语',
    chatUser: '帮我写一封感谢客户的邮件',
    chatAi: '当然！这是一封简洁又专业的草稿，你可以直接使用或再作调整…',
    chatPlaceholder: '输入消息…',
    chipA: '⚡ 流式回复', chipB: '🔒 本地加密',
    proofRating: '效率工具 · AI 助手',
    stat1: '原生体验', stat2: '多模型', stat3: '本地加密', stat4: '广告 · 追踪',
    howTitle: '三步开始 AI 对话', howSub: '选模型、提问、得到答案，就这么简单。',
    step1Title: '选择 AI 模型', step1Desc: '一键在 GPT-4、GPT-3.5 与 Google Gemini 之间切换，为不同任务挑选合适的引擎。',
    step2Title: '输入你的问题', step2Desc: '从提示词库挑选模板，或直接输入需求，即可开始对话。',
    step3Title: '获得流式回答', step3Desc: 'AI 实时逐字回复，对话自动分组保存，随时可搜索与导出。',
    modelsTitle: '一个 App，多种大模型', modelsSub: '按任务挑选最合适的引擎，随时无缝切换。',
    model1Tag: '深度推理', model1Desc: '复杂推理与创作的旗舰模型，擅长长文写作、代码与多步问题。',
    model2Tag: '极速响应', model2Desc: '日常问答与快速草稿的高性价比之选，响应迅速、开箱即用。',
    model3Tag: '均衡理解', model3Desc: 'Google 的强力模型，推理与理解能力均衡，适合广泛的对话场景。',
    model4Tag: '轻量高效', model4Desc: '为速度优化的轻量模型，低延迟、低成本，适合高频快速对话。',
    featuresTitle: '核心功能', featuresSub: '为高效、专注的 AI 对话而设计的每一处细节。',
    feature1Title: '多模型支持', feature1Desc: '一个 App 集成 GPT-4、GPT-3.5 与 Google Gemini，随任务自由切换。',
    feature2Title: '智能提示词库', feature2Desc: '内置丰富的提示词模板，支持自定义，一键启动各种对话场景。',
    feature3Title: '聊天管理', feature3Desc: '对话分组、搜索、导出，让你的历史记录井然有序、随手可寻。',
    feature4Title: '个性化设置', feature4Desc: '深色模式、字体大小、语言切换等选项，打造专属你的使用体验。',
    feature5Title: '流式响应', feature5Desc: 'AI 回复实时逐字呈现，就像在与真人对话，体验更流畅自然。',
    feature6Title: '隐私安全', feature6Desc: '对话本地加密存储，API 密钥仅保存在设备上，绝不上传服务器。',
    screenshotsTitle: '应用截图', screenshotsSub: '左右滑动，点击可放大查看。',
    shot1: '简洁优雅的对话界面', shot2: '一键切换多种 AI 模型', shot3: '丰富的提示词模板', shot4: '多样化的个性设置',
    privacyTitle: '你的对话，只属于你', privacyDesc: '对话在设备本地加密存储，API 密钥从不上传，我们不在服务器留存任何聊天内容，更不会用于训练。',
    pp1: '对话本地加密', pp2: '密钥仅存本地', pp3: '无服务器留存', pp4: '无广告 · 无追踪',
    faqTitle: '常见问题',
    q1: 'AI平台支持哪些 AI 模型？', a1: '支持 OpenAI 的 GPT-4、GPT-3.5 Turbo，以及 Google 的 Gemini 系列，可在对话中随时一键切换。',
    q2: '我的对话会被上传或用于训练吗？', a2: '不会。对话记录加密保存在您的设备本地，我们不在服务器留存聊天内容，也不会用于模型训练。',
    q3: 'API 密钥安全吗？', a3: '您的 API 密钥仅安全保存在设备本地，绝不会上传到我们的服务器。',
    q4: 'AI平台是免费的吗？', a4: 'App 本体完全免费，无广告、无强制内购。',
    q5: '支持哪些语言和系统版本？', a5: '支持简体中文与英文双语，需要 iOS 17.0 或更高版本。',
    downloadTitle: '立即下载 AI平台', downloadSubtitle: '开始你的多模型 AI 对话之旅。',
    asbSmall: '下载于', downloadNote: '完全免费 · 无内购 · 需要 iOS 17.0 或更高版本',
    footerSupport: '用户支持', footerPrivacy: '隐私政策', footerTerms: '使用条款',
    footerRights: 'AI平台. 保留所有权利。', footerMadeBy: 'Built by WeiProduct',
    stickySub: '多模型 AI 助手 · 免费', stickyGet: '获取'
  },
  'en': {
    skip: 'Skip to content',
    navHow: 'How it works', navModels: 'Models', navFeatures: 'Features', navScreenshots: 'Screenshots', navFaq: 'FAQ', navGet: 'Get App',
    heroEyebrow: '✦ Multi-model AI assistant',
    heroTitle: 'Smarter Chat, Endless Possibilities',
    heroSubtitle: 'GPT-4, GPT-3.5 and Google Gemini in one app. Prompt library, streaming replies, and chat management — with on-device encryption.',
    downloadBtn: 'Download on App Store', learnMore: 'Learn more',
    trust1: '🔒 On-device encryption', trust2: '⚡ Real-time streaming', trust3: '🌏 EN / 中文',
    chatUser: 'Help me write a thank-you email to a client',
    chatAi: "Sure! Here's a concise, professional draft you can send as-is or tweak…",
    chatPlaceholder: 'Message…',
    chipA: '⚡ Streaming', chipB: '🔒 Encrypted',
    proofRating: 'Productivity · AI assistant',
    stat1: 'Native feel', stat2: 'Multi-model', stat3: 'Encrypted', stat4: 'Ads · Tracking',
    howTitle: 'Start chatting in three steps', howSub: 'Pick a model, ask, and get your answer — that simple.',
    step1Title: 'Pick an AI model', step1Desc: 'Switch between GPT-4, GPT-3.5 and Google Gemini in a tap — the right engine for every task.',
    step2Title: 'Ask your question', step2Desc: 'Choose a template from the prompt library, or just type what you need to start the conversation.',
    step3Title: 'Get streaming answers', step3Desc: 'AI replies word-by-word in real time; chats are auto-grouped, searchable, and exportable.',
    modelsTitle: 'One app, many large models', modelsSub: 'Pick the best engine for the task and switch seamlessly.',
    model1Tag: 'Deep reasoning', model1Desc: 'A flagship model for complex reasoning and creation — great for long-form writing, code, and multi-step problems.',
    model2Tag: 'Fast responses', model2Desc: 'A cost-effective pick for everyday Q&A and quick drafts, fast and ready to go.',
    model3Tag: 'Balanced', model3Desc: "Google's capable model with balanced reasoning and comprehension for a wide range of chats.",
    model4Tag: 'Light & fast', model4Desc: 'A lightweight, speed-optimized model with low latency and low cost for high-frequency chats.',
    featuresTitle: 'Core Features', featuresSub: 'Every detail designed for efficient, focused AI conversations.',
    feature1Title: 'Multi-model support', feature1Desc: 'GPT-4, GPT-3.5 and Google Gemini in one app — switch freely as your task changes.',
    feature2Title: 'Smart prompt library', feature2Desc: 'A rich set of built-in prompt templates, plus custom prompts to launch any scenario in a tap.',
    feature3Title: 'Chat management', feature3Desc: 'Group, search, and export conversations so your history stays tidy and easy to find.',
    feature4Title: 'Personalization', feature4Desc: 'Dark mode, font size, language and more — shape the experience around you.',
    feature5Title: 'Streaming responses', feature5Desc: 'Replies appear word-by-word in real time, for a smooth, natural, conversation-like feel.',
    feature6Title: 'Privacy & security', feature6Desc: 'Chats are encrypted on-device and API keys stay on your phone — never uploaded to a server.',
    screenshotsTitle: 'Screenshots', screenshotsSub: 'Swipe through — tap any shot to zoom in.',
    shot1: 'A clean, elegant chat interface', shot2: 'Switch AI models in one tap', shot3: 'A rich prompt-template library', shot4: 'Flexible personalization options',
    privacyTitle: 'Your conversations are yours alone', privacyDesc: 'Chats are encrypted on-device, API keys are never uploaded, and we keep no conversation content on any server — and never use it for training.',
    pp1: 'On-device encryption', pp2: 'Keys stay local', pp3: 'No server logging', pp4: 'No ads · No tracking',
    faqTitle: 'Frequently Asked Questions',
    q1: 'Which AI models does AI Platform support?', a1: 'OpenAI GPT-4 and GPT-3.5 Turbo, plus Google Gemini — switch between them any time, mid-conversation.',
    q2: 'Are my chats uploaded or used for training?', a2: 'No. Conversations are encrypted and stored on your device. We keep no chat content on our servers and never use it for training.',
    q3: 'Are API keys secure?', a3: 'Your API keys are stored securely on-device only and are never uploaded to our servers.',
    q4: 'Is AI Platform free?', a4: 'The app itself is completely free, with no ads and no forced in-app purchases.',
    q5: 'Which languages and iOS versions are supported?', a5: 'Simplified Chinese and English, requiring iOS 17.0 or later.',
    downloadTitle: 'Download AI Platform Now', downloadSubtitle: 'Start your multi-model AI conversation journey.',
    asbSmall: 'Download on the', downloadNote: 'Completely free · No IAP · Requires iOS 17.0 or later',
    footerSupport: 'Support', footerPrivacy: 'Privacy Policy', footerTerms: 'Terms of Use',
    footerRights: 'AI Platform. All rights reserved.', footerMadeBy: 'Built by WeiProduct',
    stickySub: 'Multi-model AI · Free', stickyGet: 'Get'
  }
};

let currentLang = 'zh-CN';

function applyLang(lang) {
  currentLang = I18N[lang] ? lang : 'zh-CN';
  const t = I18N[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) el.textContent = t[k];
  });
  document.documentElement.lang = currentLang;
  const label = document.getElementById('langLabel');
  if (label) label.textContent = currentLang === 'zh-CN' ? 'EN' : '中文';
  try { localStorage.setItem('lang', currentLang); } catch (e) {}
}

function initLang() {
  let saved;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (!saved) saved = (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh-CN' : 'en';
  applyLang(saved);
}

// ===== Theme =====
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const meta = document.getElementById('themeColorMeta');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#0B0B0F' : '#007AFF');
  try { localStorage.setItem('theme', theme); } catch (e) {}
}
function initTheme() {
  let saved;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  if (!saved) saved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  setTheme(saved);
}

// ===== Gallery =====
function initGallery() {
  const track = document.getElementById('galTrack');
  if (!track) return;
  const shots = Array.from(track.children);
  const dotsWrap = document.getElementById('galDots');
  const prev = document.getElementById('galPrev');
  const next = document.getElementById('galNext');

  shots.forEach((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'screenshot ' + (i + 1));
    if (i === 0) b.classList.add('active');
    b.addEventListener('click', () => shots[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }));
    dotsWrap.appendChild(b);
  });
  const dots = Array.from(dotsWrap.children);

  function activeIndex() {
    const c = track.scrollLeft + track.clientWidth / 2;
    let best = 0, bd = Infinity;
    shots.forEach((s, i) => {
      const center = s.offsetLeft + s.offsetWidth / 2;
      const d = Math.abs(center - c);
      if (d < bd) { bd = d; best = i; }
    });
    return best;
  }
  track.addEventListener('scroll', () => {
    const i = activeIndex();
    dots.forEach((d, j) => d.classList.toggle('active', j === i));
  }, { passive: true });

  const step = () => (shots[1] ? shots[1].offsetLeft - shots[0].offsetLeft : 300);
  if (prev) prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  if (next) next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));

  // Lightbox
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = '<button class="lightbox-close" aria-label="close">&times;</button><img alt="">';
  document.body.appendChild(lb);
  const lbImg = lb.querySelector('img');
  const close = () => lb.classList.remove('open');
  lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lightbox-close')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  track.querySelectorAll('.phone').forEach(p => {
    p.addEventListener('click', () => {
      const img = p.querySelector('img');
      lbImg.src = img.src; lbImg.alt = img.alt;
      lb.classList.add('open');
    });
  });
}

// ===== Scroll reveal =====
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el, i) => { el.style.transitionDelay = (Math.min(i, 6) * 0.05) + 's'; io.observe(el); });
}

// ===== Nav + sticky =====
function initScroll() {
  const nav = document.getElementById('navbar');
  const sticky = document.getElementById('stickyCta');
  const onScroll = () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 20);
    if (sticky) sticky.classList.toggle('show', y > 620);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initGallery();
  initReveal();
  initScroll();

  const yr = document.getElementById('currentYear');
  if (yr) yr.textContent = new Date().getFullYear();

  const ls = document.getElementById('langSwitch');
  if (ls) ls.addEventListener('click', () => applyLang(currentLang === 'zh-CN' ? 'en' : 'zh-CN'));
  const tt = document.getElementById('themeToggle');
  if (tt) tt.addEventListener('click', () => setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      }
    });
  });
});
