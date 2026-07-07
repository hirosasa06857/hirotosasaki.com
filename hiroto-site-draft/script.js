const translations = {
  en: {
    siteTitle: "Hiroto Sasaki",
    navPublications: "Publications",
    navCv: "CV",
    navContact: "Contact",
    eyebrow: "Mathematics / Noncommutative Geometry",
    lead: "Ph.D. candidate in the Department of Mathematics at Washington University in St. Louis.",
    introBody:
      "I work around operator algebras and noncommutative geometry, with particular interests in K-theory, cyclic cohomology, higher index theory on foliations and related applications.",
    introPublicationsLink: "Publications",
    introCvLink: "Curriculum vitae",
    aboutTitle: "About",
    aboutBody:
      "I am currently a Ph.D. student at the Department of Mathematics, Washington University in St. Louis. My advisors are Prof. Xiang Tang and Prof. Yanli Song. Before coming to Washington University in St. Louis, I studied mathematics at the University of Tokyo.",
    publicationsTitle: "Publications and Preprints",
    publicationsBody: "Under construction...",
    cvTitle: "CV",
    cvBody:
      "A brief excerpt from my curriculum vitae is below. For details, see the full PDF.",
    cvCurrentLabel: "Current",
    cvCurrentValue: "Candidate of Ph.D. in Mathematics, Washington University in St. Louis.",
    cvEducationLabel: "Education",
    cvEducationValue: "B.S. in Mathematics, University of Tokyo, 2024.",
    cvFellowshipLabel: "Fellowship",
    cvFellowshipValue:
      "Overseas Predoctoral Fellow, Toyota Physical and Chemical Research Institute.",
    cvLink: "See full CV (PDF)",
    contactTitle: "Contact",
    contactEmailLabel: "Email",
    contactOfficeLabel: "Office",
    contactAffiliationLabel: "Affiliation",
    contactAffiliationValue: "Department of Mathematics, Washington University in St. Louis",
    footerName: "Hiroto Sasaki"
  },
  ja: {
    siteTitle: "笹木宏人",
    navPublications: "論文",
    navCv: "CV",
    navContact: "連絡先",
    eyebrow: "数学 / 非可換幾何",
    lead: "Washington University in St. Louis 数学科博士課程",
    introBody:
      "作用素環論と非可換幾何の周辺を研究しています。特に K 理論、サイクリックコホモロジー、葉層上の高階指数理論、およびそれらの応用に関心があります。",
    introPublicationsLink: "論文",
    introCvLink: "履歴書",
    aboutTitle: "自己紹介",
    aboutBody:
      "Washington University in St. Louis の数学科で博士課程をしています。指導教員は Xiang Tang 先生と Yanli Song 先生です。以前は東京大学理学部数学科にいました。",
    publicationsTitle: "論文・プレプリント",
    publicationsBody: "準備中...",
    cvTitle: "CV",
    cvBody:
      "履歴書から一部を抜粋しています。詳細は PDF をご覧ください。",
    cvCurrentLabel: "現在",
    cvCurrentValue: "Washington University in St. Louis 数学科博士課程",
    cvEducationLabel: "学歴",
    cvEducationValue: "東京大学理学部数学科2024年度卒業",
    cvFellowshipLabel: "フェローシップ",
    cvFellowshipValue: "豊田理化学研究所 海外大学院進学支援制度",
    cvLink: "詳細な CV を見る (PDF)",
    contactTitle: "連絡先",
    contactEmailLabel: "メール",
    contactOfficeLabel: "研究室",
    contactAffiliationLabel: "所属",
    contactAffiliationValue: "Department of Mathematics, Washington University in St. Louis",
    footerName: "笹木宏人"
  }
};

const supportedLanguages = new Set(["en", "ja"]);
const languageButtons = document.querySelectorAll("[data-lang]");
const translatableElements = document.querySelectorAll("[data-i18n]");

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const requestedLanguage = params.get("lang");

  if (supportedLanguages.has(requestedLanguage)) {
    return requestedLanguage;
  }

  return "en";
}

function setLanguage(language) {
  const dictionary = translations[language] || translations.en;

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.documentElement.lang = language;

  const url = new URL(window.location.href);
  if (language === "en") {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", language);
  }
  window.history.replaceState({}, "", url);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

setLanguage(getInitialLanguage());
