import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const contactLinks = [
  {
    label: 'Email',
    value: 'stone0982312946@gmail.com',
    href: 'mailto:stone0982312946@gmail.com',
    icon: <Mail size={30} />,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/howard-460100216',
    href: 'https://www.linkedin.com/in/howard-460100216',
    icon: <Linkedin size={30} />,
  },
  {
    label: 'GitHub',
    value: 'github.com/hank920217',
    href: 'https://github.com/hank920217',
    icon: <Github size={30} />,
  },
  {
    label: 'Phone',
    value: '0920-267-988',
    href: 'tel:0920267988',
    icon: <Phone size={30} />,
  },
];

const Contact = () => {
  return (
    <motion.div
      className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-6xl flex-col gap-8 pb-16"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <header>
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#2A9D8F]">
          Contact
        </p>
        <h1 className="text-3xl font-bold text-[#172033] sm:text-4xl">
          聯絡我
        </h1>
      </header>

      <section className="grid flex-1 gap-5 md:grid-cols-2">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            className="portfolio-card group flex min-h-48 items-center gap-5 rounded-2xl p-6 transition-colors hover:border-[#2A9D8F] sm:p-8"
          >
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#EAF3F2] text-[#2A9D8F] transition-colors group-hover:bg-[#2A9D8F] group-hover:text-white">
              {link.icon}
            </span>
            <div className="min-w-0">
              <h2 className="text-xl font-bold text-[#172033] sm:text-2xl">
                {link.label}
              </h2>
              <p className="mt-2 break-all text-base font-semibold leading-7 text-[#1E3A5F] sm:text-lg">
                {link.value}
              </p>
            </div>
          </a>
        ))}
      </section>
    </motion.div>
  );
};

export default Contact;
