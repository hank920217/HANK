import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Bot,
  BriefcaseBusiness,
  Code2,
  Cpu,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Phone,
  UserRound,
  Wrench,
} from 'lucide-react';

const skillGroups = [
  {
    title: '程式開發',
    icon: <Code2 size={20} />,
    items: ['Python', 'C / C++', 'C#', 'JavaScript'],
  },
  {
    title: 'AI 與資料處理',
    icon: <Bot size={20} />,
    items: ['MediaPipe', 'OpenCV', 'Machine Learning', '臉部特徵點', '模型訓練'],
  },
  {
    title: '網頁與前端',
    icon: <Code2 size={20} />,
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'GitHub Pages'],
  },
  {
    title: '裝置端與通訊',
    icon: <Cpu size={20} />,
    items: ['ESP32', 'WT32-ETH01', 'GPIO', 'UART / RS232', 'I2C', 'HTTP API', 'MQTT'],
  },
  {
    title: '資訊設備與系統',
    icon: <Wrench size={20} />,
    items: ['資訊設備維護', 'SOP', '系統測試', '基礎硬體維修'],
  },
];

const workItems = [
  {
    title: '魔法堂科技有限公司｜韌體工程師',
    period: '2026/02 – 至今',
    description:
      '參與 ESP32 / WT32-ETH01 裝置端韌體相關實作，協助 GPIO 訊號讀取、UART / RS232 通訊、I2C 顯示模組與後台資料串接。工作內容包含裝置端測試、腳位規劃、通訊流程整理、異常排查與文件整理。',
  },
  {
    title: '高雄榮民總醫院｜資訊部實習生',
    period: '2023/07 – 2023/08',
    description:
      '於高雄榮民總醫院資訊部實習，協助院內資訊設備汰換、基礎維護與使用者端設備檢查，依照資訊部門 SOP 進行設備處理與問題排查。透過醫療院所資訊環境的實務經驗，理解大型組織中資訊系統穩定性、設備管理流程與跨部門支援的重要性。',
    points: [
      '協助院內資訊設備汰換與基礎維護',
      '依照 SOP 協助設備檢查、設定與問題排查',
      '觀察醫療院所資訊系統維運與使用者支援流程',
      '理解大型組織中系統穩定性與流程控管的重要性',
    ],
  },
];

const education = [
  {
    school: '嘉南藥理大學',
    detail: '資訊管理學系',
    period: '2021/09 – 2025/06',
  },
  {
    school: '彰師大附工',
    detail: '資訊科',
    period: '2019/09 – 2021/06',
  },
];

const mainCertifications = [
  'Microsoft AI-900 AI 人工智慧基礎認證',
  '乙級電腦硬體裝修技術士',
  '丙級電腦硬體裝修技術士',
  '丙級工業電子技術士',
  'IC3 計算機綜合能力認證',
];

const otherCertifications = [
  'TQC-DK 專案管理概論',
  'TQC-DK 電子商務概論',
  'EEC-ERP 軟體應用－配銷模組',
  'EEC 企業電子化助理規劃師',
  '高雄榮總實習表現優異',
];

const contactLinks = [
  {
    label: 'Email',
    value: 'stone0982312946@gmail.com',
    href: 'mailto:stone0982312946@gmail.com',
    icon: <Mail size={19} />,
  },
  {
    label: 'GitHub',
    value: 'github.com/hank920217',
    href: 'https://github.com/hank920217',
    icon: <Github size={19} />,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/howard-460100216',
    href: 'https://www.linkedin.com/in/howard-460100216',
    icon: <Linkedin size={19} />,
  },
  {
    label: 'Phone',
    value: '0920-267-988',
    href: 'tel:0920267988',
    icon: <Phone size={19} />,
  },
];

const SectionHeader = ({ icon, eyebrow, title, children }) => (
  <header className="mb-5">
    <p className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#2A9D8F]">
      {icon}
      {eyebrow}
    </p>
    <h2 className="text-2xl font-bold text-[#172033] sm:text-3xl">{title}</h2>
    {children ? <p className="mt-3 max-w-3xl text-base leading-7 text-[#5B6475]">{children}</p> : null}
  </header>
);

const CertificationList = ({ items }) => (
  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
    {items.map((item) => (
      <div key={item} className="rounded-xl border border-[#DDE3EA] bg-white px-4 py-3 text-sm font-semibold leading-6 text-[#1E3A5F]">
        {item}
      </div>
    ))}
  </div>
);

const Experience = ({ contactRequest }) => {
  useEffect(() => {
    if (!contactRequest) return;

    const timer = window.setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);

    return () => window.clearTimeout(timer);
  }, [contactRequest]);

  return (
    <motion.div
      className="mx-auto w-full max-w-6xl space-y-12 pb-16"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <header className="max-w-3xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#2A9D8F]">
          Experience
        </p>
        <h1 className="text-3xl font-bold text-[#172033] sm:text-4xl">技術經歷</h1>
        <p className="mt-4 text-base leading-7 text-[#5B6475]">
          這裡整理我的技術能力、實習與工作經驗、學歷、證照與聯絡方式。
        </p>
      </header>

      <section>
        <SectionHeader icon={<Code2 size={17} />} eyebrow="Skills" title="技術能力" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {skillGroups.map((group) => (
            <article key={group.title} className="portfolio-card rounded-2xl p-5">
              <div className="mb-4 flex items-center gap-2 font-bold text-[#1E3A5F]">
                <span className="text-[#2A9D8F]">{group.icon}</span>
                {group.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#DDE3EA] bg-[#F5F7FA] px-3 py-1 text-xs font-semibold text-[#5B6475]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader icon={<BriefcaseBusiness size={17} />} eyebrow="Work" title="實習與工作經驗" />
        <div className="grid gap-5 lg:grid-cols-2">
          {workItems.map((item) => (
            <article key={item.title} className="portfolio-card rounded-2xl p-6">
              <p className="text-sm font-semibold text-[#2A9D8F]">{item.period}</p>
              <h3 className="mt-2 text-xl font-bold leading-8 text-[#172033]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5B6475]">{item.description}</p>
              {item.points ? (
                <div className="mt-5">
                  <h4 className="text-sm font-bold text-[#1E3A5F]">工作內容</h4>
                  <ul className="mt-2 space-y-2 text-sm leading-6 text-[#5B6475]">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2A9D8F]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader icon={<GraduationCap size={17} />} eyebrow="Education" title="學歷" />
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.school} className="portfolio-card rounded-2xl p-5">
              <p className="text-sm font-semibold text-[#2A9D8F]">{item.period}</p>
              <h3 className="mt-2 text-xl font-bold text-[#172033]">{item.school}</h3>
              <p className="mt-1 text-[#5B6475]">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader icon={<Award size={17} />} eyebrow="Certifications" title="主要證照" />
        <CertificationList items={mainCertifications} />
      </section>

      <section>
        <SectionHeader icon={<Award size={17} />} eyebrow="More" title="其他證照" />
        <CertificationList items={otherCertifications} />
      </section>

      <section>
        <article className="portfolio-soft rounded-2xl p-6">
          <SectionHeader icon={<UserRound size={17} />} eyebrow="About" title="關於我" />
          <div className="space-y-4 text-base leading-8 text-[#5B6475]">
            <p>
              我從資訊管理背景出發，學習過程中接觸網頁開發、Python 資料處理與 AI 影像辨識，也在目前工作中參與裝置端韌體與硬體通訊整合。比起只專注單一工具，我更重視理解需求、釐清流程，並把功能實際做出來。
            </p>
            <p>
              目前持續累積 C/C++、ESP32、UART / RS232、I2C、API 串接與系統整合經驗，希望讓自己的技術能力能同時理解資料、軟體與裝置端流程。
            </p>
          </div>
        </article>
      </section>

      <section id="contact" className="scroll-mt-28">
        <SectionHeader icon={<Mail size={17} />} eyebrow="Contact" title="聯絡方式" />
        <div className="grid gap-3 md:grid-cols-2">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="portfolio-card flex items-center gap-3 rounded-2xl px-4 py-4 text-sm font-semibold text-[#172033] transition-colors hover:border-[#2A9D8F] hover:text-[#1E3A5F]"
            >
              <span className="rounded-full bg-[#EAF3F2] p-2 text-[#2A9D8F]">{link.icon}</span>
              <span className="w-16 shrink-0 text-[#1E3A5F]">{link.label}</span>
              <span className="break-all text-[#5B6475]">{link.value}</span>
            </a>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Experience;
