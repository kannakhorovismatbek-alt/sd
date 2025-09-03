import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Network, Radar, Bot, Code2, MessageSquareMore, Globe, PhoneCall, Mail, ExternalLink, Github, Linkedin } from "lucide-react";

// =========================
// ? QUICK START NOTES
// 1) Replace WHATSAPP_NUMBER with your real phone number in international format (e.g., "99890XXXXXXX").
// 2) Replace NAME and social links below.
// 3) Drop this file into a React + Tailwind project. shadcn/ui, framer-motion, lucide-react are used.
// 4) All text is localized for EN/RU/UZ. Use the language switcher in the navbar.
// =========================

const WHATSAPP_NUMBER = "+998931280230"; // TODO: < replace with your WhatsApp number
const NAME = "Ismatbek Kannakhorov";   // TODO: < replace with your preferred display name

const langs = ["en", "ru", "uz"] as const;

const t: Record<(typeof langs)[number], any> = {
  en: {
    nav: { home: "Home", about: "About", services: "Services", portfolio: "Portfolio", contact: "Contact" },
    hero: {
      title: `Cybersecurity Specialist`,
      subtitle: `Traffic monitoring � Network scanning � Pentesting � Telegram bots � Python automation`,
      ctaPrimary: "Hire me on WhatsApp",
      ctaSecondary: "View services",
      tagline: "Hands-on creator with a hacker's curiosity & a guardian's reflex."
    },
    about: {
      heading: "About Me",
      body: `${NAME} � a cybersecurity practitioner focused on proactive defense and practical tooling. I monitor network traffic, build scanners, perform penetration testing, and create secure Telegram bots. I also deliver actionable security advice and develop custom Python scripts to automate workflows and harden systems.`,
      highlights: [
        "Traffic analysis & anomaly detection",
        "Network scanning & asset discovery",
        "Web/app pentesting practice",
        "Telegram bot development (secure by design)",
        "Custom Python tooling & automation",
      ]
    },
    services: {
      heading: "Services",
      list: [
        { icon: ShieldCheck, title: "Pentesting", desc: "Web/app assessments with clear, prioritized remediation steps." },
        { icon: Network, title: "Traffic Monitoring", desc: "Packet capture, flow analytics, alerts, and reporting." },
        { icon: Radar, title: "Network Scanning", desc: "Asset discovery, fingerprinting, exposure mapping for IT/OT." },
        { icon: Bot, title: "Telegram Bots", desc: "Secure bots for alerts, workflows, and integrations." },
        { icon: Code2, title: "Python Scripts", desc: "Custom automation and tooling tailored to your environment." },
        { icon: MessageSquareMore, title: "Consulting", desc: "Practical cybersecurity guidance and best practices." },
      ]
    },
    portfolio: {
      heading: "Portfolio",
      note: "Selected examples & placeholders � replace with your real work.",
      items: [
        { title: "Traffic Monitor Dashboard", tags: ["pcap", "ELK", "alerts"], link: "#" },
        { title: "Network Scanner CLI", tags: ["nmap", "python"], link: "#" },
        { title: "Pentest Playbook", tags: ["web", "reporting"], link: "#" },
        { title: "Telegram SOC Bot", tags: ["bot", "SIEM"], link: "#" },
      ]
    },
    contact: {
      heading: "Contact",
      sub: "Fastest way: WhatsApp",
      whatsapp: "Message on WhatsApp",
      email: "Email me",
      socials: "Socials"
    },
    footer: {
      rights: `� ${new Date().getFullYear()} ${NAME}. All rights reserved.`
    }
  },
  ru: {
    nav: { home: "�������", about: "��� ���", services: "������", portfolio: "���������", contact: "��������" },
    hero: {
      title: `���������� �� �����������������`,
      subtitle: `���������� ������� � ������������ ���� � ���������� � ��������-���� � Python-�������������`,
      ctaPrimary: "�������� � WhatsApp",
      ctaSecondary: "��� ������",
      tagline: "������� � ������������ ������ � ���������� ���������."
    },
    about: {
      heading: "��� ���",
      body: `${NAME} � ������� �����������������, ��������������� �� ����������� ������ � ���������� �����������. �������� ������� ������, ������ �������, ������� �������� � ������������ ���������� Telegram-����. ��� ���������� ������������ �� ������������ � ���� ��������� Python-������� ��� ������������� � ���������� ������.`,
      highlights: [
        "��������� ������� � ����� ��������",
        "������������ ���� � ��������������",
        "�������� ���/��� �����������",
        "���������� ���������� Telegram-�����",
        "��������� ����������� �� Python",
      ]
    },
    services: {
      heading: "������",
      list: [
        { icon: ShieldCheck, title: "�������", desc: "����� ���/���������� � �������������� �����������." },
        { icon: Network, title: "���������� �������", desc: "������ �������, ������ �������, ������ � ������." },
        { icon: Radar, title: "������������ ����", desc: "����� �������, ��������������, ����� ����������." },
        { icon: Bot, title: "Telegram-����", desc: "���������� ���� ��� ���������� � ����������." },
        { icon: Code2, title: "������� �� Python", desc: "������������� � ����������� ��� ���� ������." },
        { icon: MessageSquareMore, title: "����������", desc: "���������� ������ � �������� �����������������." },
      ]
    },
    portfolio: {
      heading: "���������",
      note: "������� � ������������ � �������� �� �������� �������.",
      items: [
        { title: "������ ����������� �������", tags: ["pcap", "ELK", "alerts"], link: "#" },
        { title: "CLI-������ ����", tags: ["nmap", "python"], link: "#" },
        { title: "������� ��������", tags: ["web", "report"], link: "#" },
        { title: "SOC-��� � Telegram", tags: ["bot", "SIEM"], link: "#" },
      ]
    },
    contact: {
      heading: "��������",
      sub: "������� ����� � WhatsApp",
      whatsapp: "�������� � WhatsApp",
      email: "�������� �� email",
      socials: "�������"
    },
    footer: {
      rights: `� ${new Date().getFullYear()} ${NAME}. ��� ����� ��������.`
    }
  },
  uz: {
    nav: { home: "Bosh sahifa", about: "Men haqimda", services: "Xizmatlar", portfolio: "Portfolio", contact: "Bog'lanish" },
    hero: {
      title: `Kiberxavfsizlik mutaxassisi`,
      subtitle: `Trafik monitoring � Tarmoq skaneri � Pentest � Telegram botlar � Python avtomatlashtirish`,
      ctaPrimary: "WhatsApp orqali yozing",
      ctaSecondary: "Xizmatlarni ko'rish",
      tagline: "Hakerona qiziqish va himoyachi refleksiga ega qo'lidan keladigan yaratuvchi."
    },
    about: {
      heading: "Men haqimda",
      body: `${NAME} � amaliy kiberxavfsizlik bilan shug'ullanuvchi mutaxassis. Tarmoq trafikini kuzataman, skanerlar yarataman, pentest o'tkazaman va xavfsiz Telegram botlar ishlab chiqaman. Shuningdek, foydali maslahatlar beraman va tizimlarni mustahkamlash uchun buyurtma asosida Python skriptlar yozaman.`,
      highlights: [
        "Trafik tahlili va anomaliyalarni aniqlash",
        "Tarmoq skaneri va aktivlarni aniqlash",
        "Veb/ilova pentesti amaliyoti",
        "Xavfsiz Telegram botlar",
        "Buyurtma asosida Python avtomatlashtirish",
      ]
    },
    services: {
      heading: "Xizmatlar",
      list: [
        { icon: ShieldCheck, title: "Pentest", desc: "Veb/ilovalar auditi, ustuvor yechimlar bilan hisobot." },
        { icon: Network, title: "Trafik monitoring", desc: "Paketlarni ushlash, oqim tahlili, ogohlantirish va hisobot." },
        { icon: Radar, title: "Tarmoq skaneri", desc: "Aktivlarni topish, barmoq izlash, xavf xaritasi." },
        { icon: Bot, title: "Telegram botlar", desc: "Ogohlantirish va jarayonlar uchun xavfsiz botlar." },
        { icon: Code2, title: "Python skriptlar", desc: "Muhitga moslashtirilgan avtomatlashtirish va vositalar." },
        { icon: MessageSquareMore, title: "Maslahat", desc: "Amaliy kiberxavfsizlik bo'yicha yo'l-yo'riqlar." },
      ]
    },
    portfolio: {
      heading: "Portfolio",
      note: "Namuna loyihalar � o'zingiznikiga almashtiring.",
      items: [
        { title: "Trafik nazorat paneli", tags: ["pcap", "ELK", "ogohlantirish"], link: "#" },
        { title: "Tarmoq skaneri CLI", tags: ["nmap", "python"], link: "#" },
        { title: "Pentest qo'llanma", tags: ["web", "hisobot"], link: "#" },
        { title: "Telegram SOC bot", tags: ["bot", "SIEM"], link: "#" },
      ]
    },
    contact: {
      heading: "Bog'lanish",
      sub: "Eng tezkor yo'l � WhatsApp",
      whatsapp: "WhatsApp orqali yozish",
      email: "Email jo'natish",
      socials: "Ijtimoiy tarmoqlar"
    },
    footer: {
      rights: `� ${new Date().getFullYear()} ${NAME}. Barcha huquqlar himoyalangan.`
    }
  }
};

function useLang() {
  const [lang, setLang] = useState<(typeof langs)[number]>(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("site-lang") : null;
    return (stored as any) || "uz";
  });
  const set = (v: (typeof langs)[number]) => {
    setLang(v);
    if (typeof window !== "undefined") localStorage.setItem("site-lang", v);
  };
  return { lang, set };
}

const Section: React.FC<{ id: string; children: React.ReactNode; className?: string }>= ({ id, children, className }) => (
  <section id={id} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${className||""}`}>{children}</section>
);

const Nav: React.FC<{ lang: (typeof langs)[number]; setLang: (l:(typeof langs)[number])=>void }> = ({ lang, setLang }) => {
  const tr = t[lang];
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5"/>
          <span className="font-semibold">{NAME}</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {(["home","about","services","portfolio","contact"] as const).map(key => (
            <a key={key} href={`#${key}`} className="text-sm hover:opacity-75">{tr.nav[key]}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {langs.map(l => (
            <Button key={l} variant={l===lang?"default":"secondary"} size="sm" onClick={()=>setLang(l)}>{l.toUpperCase()}</Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero: React.FC<{ lang:(typeof langs)[number] }> = ({ lang }) => {
  const tr = t[lang];
  const waUrl = useMemo(()=>{
    const text = encodeURIComponent("Salom! Men bilan hamkorlik qilishni xohlayman.");
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  },[]);
  return (
    <Section id="home" className="pt-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {tr.hero.title}
          </motion.h1>
          <p className="mt-4 text-base sm:text-lg opacity-80">{tr.hero.subtitle}</p>
          <p className="mt-2 text-sm opacity-70 italic">{tr.hero.tagline}</p>
          <div className="mt-6 flex gap-3">
            <a href={waUrl} target="_blank" rel="noreferrer">
              <Button size="lg" className="rounded-2xl">
                <PhoneCall className="w-4 h-4 mr-2"/>{tr.hero.ctaPrimary}
              </Button>
            </a>
            <a href="#services"><Button variant="secondary" size="lg" className="rounded-2xl">{tr.hero.ctaSecondary}</Button></a>
          </div>
        </div>
        <motion.div initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} transition={{duration:.6, delay:.1}} className="relative">
          <div className="aspect-[4/3] rounded-2xl shadow-lg bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 grid place-items-center">
            <ShieldCheck className="w-24 h-24"/>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

const About: React.FC<{ lang:(typeof langs)[number] }> = ({ lang }) => {
  const tr = t[lang];
  return (
    <Section id="about">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">{tr.about.heading}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardContent className="pt-6">
            <p className="leading-relaxed opacity-90">{tr.about.body}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle>Key Points</CardTitle></CardHeader>
          <CardContent className="flex flex-col gap-2 pt-2">
            {tr.about.highlights.map((h:string, i:number)=> (
              <div key={i} className="flex items-start gap-2">
                <Badge variant="secondary" className="shrink-0">{i+1}</Badge>
                <span className="text-sm opacity-90">{h}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

const Services: React.FC<{ lang:(typeof langs)[number] }> = ({ lang }) => {
  const tr = t[lang];
  return (
    <Section id="services">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">{tr.services.heading}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tr.services.list.map((s:any, i:number)=> (
          <Card key={i} className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><s.icon className="w-5 h-5"/>{s.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 opacity-80 text-sm">{s.desc}</CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

const Portfolio: React.FC<{ lang:(typeof langs)[number] }> = ({ lang }) => {
  const tr = t[lang];
  return (
    <Section id="portfolio">
      <div className="flex items-end justify-between gap-4 mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold">{tr.portfolio.heading}</h2>
        <span className="text-xs opacity-60">{tr.portfolio.note}</span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tr.portfolio.items.map((p:any, i:number)=> (
          <Card key={i} className="group">
            <CardContent className="pt-6">
              <div className="aspect-video rounded-xl bg-neutral-200 dark:bg-neutral-800 grid place-items-center mb-4">
                <Code2 className="w-10 h-10"/>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{p.title}</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {p.tags.map((tag:string, idx:number)=> <Badge key={idx} variant="outline">{tag}</Badge>)}
                  </div>
                </div>
                <a href={p.link} className="opacity-70 group-hover:opacity-100" target="_blank" rel="noreferrer"><ExternalLink className="w-4 h-4"/></a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

const Contact: React.FC<{ lang:(typeof langs)[number] }> = ({ lang }) => {
  const tr = t[lang];
  const waUrl = useMemo(()=>{
    const text = encodeURIComponent("Salom! Kiberxavfsizlik xizmati bo'yicha murojaat.");
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  },[]);
  return (
    <Section id="contact">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">{tr.contact.heading}</h2>
      <p className="opacity-70 mb-6">{tr.contact.sub}</p>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardContent className="pt-6 flex flex-wrap gap-3">
            <a href={waUrl} target="_blank" rel="noreferrer"><Button size="lg" className="rounded-2xl"><PhoneCall className="w-4 h-4 mr-2"/>{tr.contact.whatsapp}</Button></a>
            <a href="mailto:yourmail@example.com"><Button variant="secondary" size="lg" className="rounded-2xl"><Mail className="w-4 h-4 mr-2"/>{tr.contact.email}</Button></a>
            <a href="https://t.me/yourusername" target="_blank" rel="noreferrer"><Button variant="ghost" size="lg" className="rounded-2xl"><Bot className="w-4 h-4 mr-2"/>Telegram</Button></a>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle>{tr.contact.socials}</CardTitle></CardHeader>
          <CardContent className="flex flex-col gap-2 pt-2">
            <a className="flex items-center gap-2 hover:underline" href="#" target="_blank" rel="noreferrer"><Github className="w-4 h-4"/>GitHub</a>
            <a className="flex items-center gap-2 hover:underline" href="#" target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4"/>LinkedIn</a>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

export default function PersonalCyberSite(){
  const { lang, set } = useLang();
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Nav lang={lang} setLang={set}/>
      <main>
        <Hero lang={lang}/>
        <About lang={lang}/>
        <Services lang={lang}/>
        <Portfolio lang={lang}/>
        <Contact lang={lang}/>
      </main>
      <footer className="border-t mt-10">
        <Section id="footer" className="py-8">
          <div className="text-center text-sm opacity-70">{t[lang].footer.rights}</div>
        </Section>
      </footer>
    </div>
  );
}
