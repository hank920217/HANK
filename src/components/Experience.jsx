import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Bot,
  Briefcase,
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

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

const skills = [
  { title: '程式開發', icon: <Code2 size={22} />, items: ['Python', 'C / C++', 'C#', 'JavaScript'] },
  { title: 'AI 與資料處理', icon: <Bot size={22} />, items: ['MediaPipe', 'OpenCV', 'Machine Learning', '臉部特徵點', '模型訓練'] },
  { title: '網頁與前端', icon: <Code2 size={22} />, items: ['HTML', 'CSS', 'JavaScript', 'React', 'GitHub Pages'] },
  { title: '裝置端與通訊', icon: <Cpu size={22} />, items: ['ESP32', 'WT32-ETH01', 'GPIO', 'UART / RS232', 'I2C', 'HTTP API', 'MQTT'] },
  { title: '資訊設備與系統', icon: <Wrench size={22} />, items: ['資訊設備維護', 'SOP', '系統測試', '基礎硬體維修'] },
];

const experience = [
  {
    org: '魔法堂科技有限公司',
    role: '韌體工程師',
    period: '2026.02 - 至今',
    points: [
      '參與 ESP32 / WT32-ETH01 裝置端韌體與設備通訊實作',
      '處理 GPIO 訊號讀取、UART / RS232、I2C 與 API 串接流程',
      '透過序列埠日誌追蹤通訊狀態，協助異常分析與測試驗證',
    ],
  },
  {
    org: '高雄榮總資訊部',
    role: '暑期實習',
    period: '2023.07 - 2023.08',
    points: [
      '協助資訊設備汰換、安裝測試與使用者端問題處理',
      '理解醫療院所資訊部門的設備維運與服務流程',
    ],
  },
  {
    org: '服務業經驗',
    role: '全家、威秀影城、餐飲外場',
    period: '2023 - 2025',
    points: [
      '累積顧客服務、現場應變、班務交接與多工處理能力',
      '培養需求確認、溝通協調與穩定執行的工作習慣',
    ],
  },
];

const education = [
  { school: '嘉南藥理大學', dept: '資訊管理學系', period: '2021.09 - 2025.06' },
  { school: '彰師大附工', dept: '資訊科', period: '2019.09 - 2021.06' },
];

const certifications = [
  { name: 'Microsoft AI-900 AI 人工智慧基礎認證', img: assetPath('certs/AI-900.jpg') },
  { name: '乙級電腦硬體裝修技術士', img: assetPath('certs/hardware_b.jpg') },
  { name: '丙級工業電子技術士', img: assetPath('certs/hardware_c.jpg') },
  { name: 'IC3 計算機綜合能力認證', img: assetPath('certs/ic3.jpg') },
  { name: 'TQC 專案管理概論', img: assetPath('certs/TQCFOM.jpg') },
  { name: 'TQC 電子商務概論', img: assetPath('certs/TQC-FOC.jpg') },
  { name: '電子化助理規劃師', img: assetPath('certs/EAP.jpg') },
  { name: '電子化軟體應用師', img: assetPath('certs/ESAP.jpg') },
  { name: '實習表現優異', img: assetPath('certs/good.jpg') },
];

const contactLinks = [
  { label: 'Email', value: 'stone0982312946@gmail.com', href: 'mailto:stone0982312946@gmail.com', icon: <Mail size={20} /> },
  { label: 'Phone', value: '0920-267-988', href: 'tel:0920267988', icon: <Phone size={20} /> },
  { label: 'GitHub', value: 'github.com/hank920217', href: 'https://github.com/hank920217', icon: <Github size={20} /> },
  { label: 'LinkedIn', value: 'linkedin.com/in/howard-460100216', href: 'https://www.linkedin.com/in/howard-460100216', icon: <Linkedin size={20} /> },
];

const SectionTitle = ({ icon, eyebrow, title, children }) => (
  <div className="mb-6">
    <div className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
      {icon}
      {eyebrow}
    </div>
    <h2 className="text-3xl font-bold text-amber-950">{title}</h2>
    {children ? <p className="mt-3 max-w-3xl text-base leading-7 text-amber-950/70">{children}</p> : null}
  </div>
);

const Experience = () => {
  return (
    <motion.div
      className="mx-auto w-full max-w-6xl space-y-14 pb-20 pt-16"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <section>
        <SectionTitle icon={<Code2 size={18} />} eyebrow="Skills" title="技術能力">
          依技術領域整理 Howard 接觸過的開發、AI、網頁、裝置端與資訊設備能力。
        </SectionTitle>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {skills.map((group) => (
            <article key={group.title} className="rounded-2xl border border-amber-900/10 bg-white/45 p-5 shadow-xl shadow-amber-900/5 backdrop-blur">
              <div className="mb-4 flex items-center gap-2 font-bold text-amber-950">
                {group.icon}
                {group.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-amber-950/10 px-3 py-1 text-xs font-semibold text-amber-900">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle icon={<Briefcase size={18} />} eyebrow="Experience" title="實習與工作經驗" />
        <div className="grid gap-4 lg:grid-cols-3">
          {experience.map((item) => (
            <article key={item.org} className="rounded-2xl border border-amber-900/10 bg-white/45 p-6 shadow-xl shadow-amber-900/5 backdrop-blur">
              <p className="text-sm font-semibold text-amber-700">{item.period}</p>
              <h3 className="mt-2 text-xl font-bold text-amber-950">{item.org}</h3>
              <p className="mt-1 font-semibold text-amber-900/75">{item.role}</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-amber-950/70">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle icon={<GraduationCap size={18} />} eyebrow="Education" title="學歷與證照" />
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            {education.map((item) => (
              <article key={item.school} className="rounded-2xl border border-amber-900/10 bg-white/45 p-5 shadow-xl shadow-amber-900/5 backdrop-blur">
                <p className="text-sm font-semibold text-amber-700">{item.period}</p>
                <h3 className="mt-2 text-xl font-bold text-amber-950">{item.school}</h3>
                <p className="mt-1 text-amber-950/70">{item.dept}</p>
              </article>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {certifications.map((cert) => (
              <article key={cert.name} className="group relative min-h-36 overflow-hidden rounded-2xl border border-amber-900/10 bg-white/45 p-3 shadow-xl shadow-amber-900/5 backdrop-blur">
                <img
                  src={cert.img}
                  alt={cert.name}
                  className="h-28 w-full object-contain opacity-85 transition-opacity group-hover:opacity-100"
                />
                <p className="mt-2 text-center text-xs font-semibold leading-5 text-amber-950/70">{cert.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <article className="rounded-2xl border border-amber-900/10 bg-white/45 p-6 shadow-xl shadow-amber-900/5 backdrop-blur">
          <SectionTitle icon={<UserRound size={18} />} eyebrow="About" title="關於我">
            我從資訊管理背景出發，持續累積軟體、AI、網頁展示與裝置端整合經驗。相較於單一職務定位，我更重視能把資料處理、系統串接與實作成果連成完整流程。
          </SectionTitle>
        </article>

        <article className="rounded-2xl border border-amber-900/10 bg-white/45 p-6 shadow-xl shadow-amber-900/5 backdrop-blur">
          <SectionTitle icon={<Mail size={18} />} eyebrow="Contact" title="聯絡方式" />
          <div className="grid gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center gap-3 rounded-xl border border-amber-900/10 bg-white/45 px-4 py-3 text-sm font-semibold text-amber-950 transition-colors hover:bg-white/75"
              >
                <span className="text-amber-800">{link.icon}</span>
                <span className="w-16 shrink-0 text-amber-800/80">{link.label}</span>
                <span className="break-all">{link.value}</span>
              </a>
            ))}
          </div>
        </article>
      </section>
    </motion.div>
  );
};

export default Experience;
