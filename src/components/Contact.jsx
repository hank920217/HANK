import React from 'react';
import { motion } from 'framer-motion';
import {
  BriefcaseBusiness,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from 'lucide-react';

const contactLinks = [
  {
    label: 'Email',
    value: 'stone0982312946@gmail.com',
    href: 'mailto:stone0982312946@gmail.com',
    icon: <Mail size={22} />,
    note: '適合聯絡工作機會、專案討論與面試安排。',
  },
  {
    label: 'GitHub',
    value: 'github.com/hank920217',
    href: 'https://github.com/hank920217',
    icon: <Github size={22} />,
    note: '可查看程式作品、專題與網站實作紀錄。',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/howard-460100216',
    href: 'https://www.linkedin.com/in/howard-460100216',
    icon: <Linkedin size={22} />,
    note: '適合建立職涯連結與進一步交流。',
  },
  {
    label: 'Phone',
    value: '0920-267-988',
    href: 'tel:0920267988',
    icon: <Phone size={22} />,
    note: '可用於已約定的面試或正式聯絡。',
  },
];

const focusItems = [
  '軟體、AI 與裝置端整合相關職缺',
  'ESP32 / WT32-ETH01 韌體與通訊實作',
  'Python、資料處理與影像辨識專題',
  '網頁展示、作品集與前端切版作品',
];

const Contact = () => {
  return (
    <motion.div
      className="mx-auto w-full max-w-6xl space-y-8 pb-16"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <header className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#2A9D8F]">
            Contact
          </p>
          <h1 className="text-3xl font-bold text-[#172033] sm:text-4xl">聯絡我</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#5B6475]">
            如果想進一步了解我的技術經歷、專案內容或面試安排，可以透過以下方式聯絡。此頁保留必要資訊，不公開完整住址。
          </p>
        </div>

        <div className="portfolio-soft rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <span className="rounded-full bg-white p-2 text-[#2A9D8F]">
              <MapPin size={20} />
            </span>
            <div>
              <h2 className="font-bold text-[#172033]">目前狀態</h2>
              <p className="mt-2 text-sm leading-7 text-[#5B6475]">
                以資訊管理、軟體實作、AI 專題與裝置端整合經驗為主軸，開放技術職缺與合作交流。
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="grid gap-5 md:grid-cols-2">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            className="portfolio-card group flex h-full flex-col rounded-2xl p-6 transition-colors hover:border-[#2A9D8F]"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-[#EAF3F2] p-3 text-[#2A9D8F] transition-colors group-hover:bg-[#2A9D8F] group-hover:text-white">
                {link.icon}
              </span>
              <div>
                <h2 className="text-lg font-bold text-[#172033]">{link.label}</h2>
                <p className="mt-1 break-all text-sm font-semibold text-[#1E3A5F]">
                  {link.value}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-[#5B6475]">{link.note}</p>
          </a>
        ))}
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <article className="portfolio-card rounded-2xl p-6">
          <div className="mb-4 flex items-center gap-2 font-bold text-[#1E3A5F]">
            <BriefcaseBusiness size={20} className="text-[#2A9D8F]" />
            適合聯絡的方向
          </div>
          <div className="flex flex-wrap gap-2">
            {focusItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#DDE3EA] bg-[#F5F7FA] px-3 py-2 text-sm font-semibold text-[#5B6475]"
              >
                {item}
              </span>
            ))}
          </div>
        </article>

        <article className="portfolio-card rounded-2xl p-6">
          <div className="mb-4 flex items-center gap-2 font-bold text-[#1E3A5F]">
            <MessageSquare size={20} className="text-[#2A9D8F]" />
            聯絡內容建議
          </div>
          <p className="text-sm leading-7 text-[#5B6475]">
            來信可簡單附上職缺方向、希望了解的專案、面試時間或合作內容。我會依照內容回覆，並可提供履歷 PDF、作品連結或進一步說明。
          </p>
        </article>
      </section>
    </motion.div>
  );
};

export default Contact;
