import { useEffect, useState } from "react";
import { company } from "../data/company";
import { LanguageContext } from "./language-context";

/**
 * All site copy lives here, one object per language, mirroring key for key.
 * Rewrite the strings for your own business — the components read from `t` and
 * need no changes. To add a language, add another object with the same keys and
 * extend the toggle at the bottom of this file.
 */
const translations = {
  ar: {
    nav: {
      about: "من نحن",
      services: "خدماتنا",
      portfolio: "أعمالنا",
      process: "طريقة عملنا",
      team: "فريقنا",
      contact: "تواصل معنا",
      quote: "اطلب عرض سعر",
    },
    hero: {
      title: "عنوان رئيسي يوضّح ما تقدّمه",
      lead: "سطر واحد يلخّص خدماتك الأساسية.",
      desc: "فقرة قصيرة تشرح ما تقدّمه ولمن، وتدعو الزائر لاتخاذ الخطوة التالية.",
      button: "شاهد أعمالنا",
      callUs: "اتصل بنا",
    },
    about: {
      label: "من نحن",
      title: "عنوان قسم التعريف",
      desc: "فقرة تعريفية قصيرة عن فريقك وأسلوبه في العمل وما يميّزه عن غيره.",
      cta: "شاهد خدماتنا",
      connectTitle: "تواصل معنا",
      connectDesc: "سطران يوضّحان طرق التواصل المتاحة وموعد الرد المتوقع.",
    },
    services: {
      label: "ماذا نقدّم",
      title: "عنوان قسم الخدمات",
      items: [
        { title: "الخدمة الأولى", desc: "وصف قصير للخدمة الأولى وما يحصل عليه العميل منها." },
        { title: "الخدمة الثانية", desc: "وصف قصير للخدمة الثانية وما يحصل عليه العميل منها." },
        { title: "الخدمة الثالثة", desc: "وصف قصير للخدمة الثالثة وما يحصل عليه العميل منها." },
      ],
      viewDetails: "اطلب الخدمة",
    },
    portfolio: {
      label: "أعمالنا",
      title: "عنوان قسم الأعمال",
      desc: "سطر يوضّح نوع الأعمال المعروضة هنا.",
      filters: [
        { key: "all", label: "الكل" },
        { key: "web", label: "مواقع" },
        { key: "design", label: "تصميم" },
      ],
      empty: "لا توجد أعمال في هذا القسم بعد.",
      cta: "اطلب مشروعاً مشابهاً",
      webTitle: "المواقع والمتاجر",
      webDesc: "سطر تعريفي قصير لهذه المجموعة.",
      designTitle: "التصاميم",
      designDesc: "كل مجموعة تخص عميلاً واحداً — افتحها لتصفّح التصاميم بالحجم الكامل.",
      visit: "افتح الموقع",
      view: "شاهد المجموعة",
      designsOne: "تصميم واحد",
      designsMany: "تصاميم",
      live: "منشور",
      concept: "من تصميمنا",
      close: "إغلاق",
      prev: "السابق",
      next: "التالي",
    },
    process: {
      label: "طريقة عملنا",
      title: "عنوان قسم مراحل العمل",
      desc: "سطر يشرح كيف تسير المراحل من أول تواصل حتى التسليم.",
      steps: [
        { title: "المرحلة الأولى", desc: "وصف قصير لما يحدث في هذه المرحلة." },
        { title: "المرحلة الثانية", desc: "وصف قصير لما يحدث في هذه المرحلة." },
        { title: "المرحلة الثالثة", desc: "وصف قصير لما يحدث في هذه المرحلة." },
        { title: "المرحلة الرابعة", desc: "وصف قصير لما يحدث في هذه المرحلة." },
      ],
      cta: "ابدأ من هنا",
    },
    cta: {
      title: "عنوان يدعو الزائر لبدء مشروعه",
      desc: "سطر يشرح ما يحدث بعد إرسال الرسالة ومتى يصل الرد.",
      placeholder: "اكتب فكرة مشروعك بسطر واحد",
      button: "أرسل على واتساب",
      call: "أو اتصل بنا",
    },
    team: {
      label: "فريقنا",
      title: "عنوان قسم الفريق",
      desc: "سطر يعرّف بالفريق وأدواره.",
      cta: "تواصل مع الفريق",
    },
    contact: {
      label: "تواصل معنا",
      title: "عنوان قسم التواصل",
      desc: "سطر يشجّع الزائر على المراسلة ويوضّح موعد الرد.",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      whatsapp: "واتساب",
      whatsappCta: "راسلنا على واتساب",
      namePlaceholder: "اسمك",
      emailPlaceholder: "بريدك الإلكتروني (اختياري)",
      messagePlaceholder: "اكتب رسالتك",
      send: "أرسل على واتساب",
      sendMail: "أو أرسلها بالبريد",
      required: "اكتب اسمك ورسالتك أولاً.",
      sent: "فُتح واتساب برسالتك — أرسلها وسنرد عليك.",
      formTitle: "أرسل لنا رسالة",
    },
    footer: {
      desc: "سطر تعريفي قصير بالشركة وما تقدّمه.",
      links: "روابط سريعة",
      contact: "معلومات التواصل",
      rights: "جميع الحقوق محفوظة",
      top: "العودة للأعلى",
    },
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      process: "Process",
      team: "Team",
      contact: "Contact",
      quote: "Get a Quote",
    },
    hero: {
      title: "A headline that says what you do",
      lead: "One line summarising your core services.",
      desc: "A short paragraph explaining what you offer and to whom, inviting the visitor to take the next step.",
      button: "See our work",
      callUs: "Call us",
    },
    about: {
      label: "About Us",
      title: "About section headline",
      desc: "A short paragraph about your team, how you work and what sets you apart.",
      cta: "See our services",
      connectTitle: "Get in touch",
      connectDesc: "A line or two on how people can reach you and when to expect a reply.",
    },
    services: {
      label: "What We Do",
      title: "Services section headline",
      items: [
        { title: "First service", desc: "A short description of this service and what the client gets from it." },
        { title: "Second service", desc: "A short description of this service and what the client gets from it." },
        { title: "Third service", desc: "A short description of this service and what the client gets from it." },
      ],
      viewDetails: "Request this service",
    },
    portfolio: {
      label: "Our Work",
      title: "Portfolio section headline",
      desc: "A line describing the kind of work shown here.",
      filters: [
        { key: "all", label: "All" },
        { key: "web", label: "Web" },
        { key: "design", label: "Design" },
      ],
      empty: "No work in this category yet.",
      cta: "Request a similar project",
      webTitle: "Websites & online stores",
      webDesc: "A short introductory line for this group.",
      designTitle: "Design work",
      designDesc: "Each set belongs to one client — open a set to browse its designs full size.",
      visit: "Visit site",
      view: "View set",
      designsOne: "1 design",
      designsMany: "designs",
      live: "Live",
      concept: "Our own concept",
      close: "Close",
      prev: "Previous",
      next: "Next",
    },
    process: {
      label: "How We Work",
      title: "Process section headline",
      desc: "A line explaining how a project moves from first contact to delivery.",
      steps: [
        { title: "First step", desc: "A short description of what happens at this step." },
        { title: "Second step", desc: "A short description of what happens at this step." },
        { title: "Third step", desc: "A short description of what happens at this step." },
        { title: "Fourth step", desc: "A short description of what happens at this step." },
      ],
      cta: "Start here",
    },
    cta: {
      title: "A headline inviting visitors to start their project",
      desc: "A line on what happens after they send the message and when they will hear back.",
      placeholder: "Describe your project in one line",
      button: "Send on WhatsApp",
      call: "or call us",
    },
    team: {
      label: "Team",
      title: "Team section headline",
      desc: "A line introducing the team and the roles it covers.",
      cta: "Get in touch with the team",
    },
    contact: {
      label: "Contact Us",
      title: "Contact section headline",
      desc: "A line encouraging visitors to write, and telling them when to expect a reply.",
      email: "Email",
      phone: "Phone",
      whatsapp: "WhatsApp",
      whatsappCta: "Message us on WhatsApp",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email (optional)",
      messagePlaceholder: "Write your message",
      send: "Send on WhatsApp",
      sendMail: "or send it by email",
      required: "Please add your name and message first.",
      sent: "WhatsApp is open with your message — send it and we will reply shortly.",
      formTitle: "Send us a message",
    },
    footer: {
      desc: "A short introductory line about the company and what it offers.",
      links: "Quick Links",
      contact: "Contact Info",
      rights: "All rights reserved",
      top: "Back to top",
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ar");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "ar" ? "en" : "ar"));

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, company }}>
      {children}
    </LanguageContext.Provider>
  );
}
