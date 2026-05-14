import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Bot,
  BriefcaseBusiness,
  Code2,
  Cpu,
  GraduationCap,
  Wrench,
} from "lucide-react";

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

const skillGroups = [
  {
    title: "程式開發",
    icon: <Code2 size={20} />,
    items: ["Python", "C / C++", "C#", "JavaScript", "git"],
  },
  {
    title: "AI 與資料處理",
    icon: <Bot size={20} />,
    items: [
      "MediaPipe",
      "OpenCV",
      "Machine Learning",
      "臉部特徵點",
      "模型訓練",
    ],
  },
  {
    title: "網頁與前端",
    icon: <Code2 size={20} />,
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "裝置端與通訊",
    icon: <Cpu size={20} />,
    items: [
      "ESP32-C6",
      "ESP32-P4",
      "WT32-ETH01",
      "Device Integration",
      "Network",
    ],
  },
  {
    title: "資訊設備與系統",
    icon: <Wrench size={20} />,
    items: ["資訊設備維護", "SOP", "系統測試", "基礎硬體維修"],
  },
];

const workItems = [
  {
    title: "魔法堂科技有限公司｜韌體工程師",
    period: "2026/02 – 至今",
    description:
      "參與 ESP32 / WT32-ETH01 裝置端韌體相關實作，協助裝置狀態判斷、網路連線與後台資料串接。工作內容包含裝置端測試、腳位規劃、通訊流程整理、異常排查與文件整理。",
    points: ["大賞燈簡易版韌體開發與測試", "大賞燈後台管理網頁維護"],
  },
  {
    title: "高雄榮民總醫院｜資訊部實習生",
    period: "2023/07 – 2023/08",
    description:
      "於高雄榮民總醫院資訊部實習，協助院內資訊設備汰換、基礎維護與使用者端設備檢查，依照資訊部門 SOP 進行設備處理與問題排查。透過醫療院所資訊環境的實務經驗，理解大型組織中資訊系統穩定性、設備管理流程與跨部門支援的重要性。",
    points: [
      "協助院內資訊設備汰換與基礎維護",
      "依照 SOP 協助設備檢查、設定與問題排查",
      "觀察醫療院所資訊系統維運與使用者支援流程",
      "理解大型組織中系統穩定性與流程控管的重要性",
    ],
  },
];

const education = [
  {
    school: "嘉南藥理大學",
    detail: "資訊管理學系",
    period: "2021/09 – 2025/06",
  },
  {
    school: "彰師大附工",
    detail: "資訊科",
    period: "2019/09 – 2021/06",
  },
];

const mainCertifications = [
  { name: "Microsoft AI-900 AI 人工智慧基礎認證", image: "certs/AI-900.jpg" },
  { name: "乙級電腦硬體裝修技術士", image: "certs/hardware_b.jpg" },
  { name: "丙級工業電子技術士", image: "certs/hardware_c.jpg" },
  { name: "IC3 計算機綜合能力認證", image: "certs/ic3.jpg" },
  { name: "高雄榮總實習表現優異", image: "certs/good.jpg" },
];

const otherCertifications = [
  { name: "TQC-DK 專案管理概論", image: "certs/TQCFOM.jpg" },
  { name: "TQC-DK 電子商務概論", image: "certs/TQC-FOC.jpg" },
  { name: "EEC-ERP 軟體應用－配銷模組", image: "certs/ESAP.jpg" },
  { name: "EEC 企業電子化助理規劃師", image: "certs/EAP.jpg" },
  { name: "PVQC 專業英文詞彙能力", image: "certs/PVQC_1.jpg" },
  { name: "大學專題競賽獎狀", image: "certs/US.jpg" },
  { name: "高中專題競賽獎狀", image: "certs/highschool.jpg" },
];

const SectionHeader = ({ icon, eyebrow, title, children }) => (
  <header className="mb-5">
    <p className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#2A9D8F]">
      {icon}
      {eyebrow}
    </p>
    <h2 className="text-2xl font-bold text-[#172033] sm:text-3xl">{title}</h2>
    {children ? (
      <p className="mt-3 max-w-3xl text-base leading-7 text-[#5B6475]">
        {children}
      </p>
    ) : null}
  </header>
);

const CertificationGrid = ({ items }) => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {items.map((cert) => (
      <article
        key={cert.name}
        className="group portfolio-card relative overflow-hidden rounded-2xl p-3"
        title={cert.name}
      >
        <div className="flex h-44 items-center justify-center rounded-xl bg-[#F5F7FA] p-3">
          <img
            src={assetPath(cert.image)}
            alt={cert.name}
            className="max-h-full w-full object-contain"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-end bg-[#172033]/75 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="w-full p-4">
            <p className="rounded-xl bg-white px-4 py-3 text-sm font-bold leading-6 text-[#1E3A5F] shadow-lg">
              {cert.name}
            </p>
          </div>
        </div>
      </article>
    ))}
  </div>
);

const Experience = () => {
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
        <h1 className="text-3xl font-bold text-[#172033] sm:text-4xl">
          技術經歷
        </h1>
        <p className="mt-4 text-base leading-7 text-[#5B6475]">
          這裡整理我的技術能力、實習與工作經驗、學歷與證照。聯絡資訊已移到獨立頁面，方便直接查看。
        </p>
      </header>

      <section>
        <SectionHeader
          icon={<Code2 size={17} />}
          eyebrow="Skills"
          title="技術能力"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="portfolio-card rounded-2xl p-5"
            >
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
        <SectionHeader
          icon={<BriefcaseBusiness size={17} />}
          eyebrow="Work"
          title="實習與工作經驗"
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {workItems.map((item) => (
            <article
              key={item.title}
              className="portfolio-card rounded-2xl p-6"
            >
              <p className="text-sm font-semibold text-[#2A9D8F]">
                {item.period}
              </p>
              <h3 className="mt-2 text-xl font-bold leading-8 text-[#172033]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5B6475]">
                {item.description}
              </p>
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
        <SectionHeader
          icon={<GraduationCap size={17} />}
          eyebrow="Education"
          title="學歷"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <article
              key={item.school}
              className="portfolio-card rounded-2xl p-5"
            >
              <p className="text-sm font-semibold text-[#2A9D8F]">
                {item.period}
              </p>
              <h3 className="mt-2 text-xl font-bold text-[#172033]">
                {item.school}
              </h3>
              <p className="mt-1 text-[#5B6475]">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          icon={<Award size={17} />}
          eyebrow="Certifications"
          title="主要證照"
        >
          證照圖片可直接瀏覽，滑過圖片會顯示證照名稱。
        </SectionHeader>
        <CertificationGrid items={mainCertifications} />
      </section>

      <section>
        <SectionHeader
          icon={<Award size={17} />}
          eyebrow="More"
          title="其他證照與證明"
        />
        <CertificationGrid items={otherCertifications} />
      </section>
    </motion.div>
  );
};

export default Experience;
