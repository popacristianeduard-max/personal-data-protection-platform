export interface UiDict {
  nav: {
    links: string[]
    quote: string
    switchToEn: string
    switchToRo: string
  }
  footer: {
    links: string[]
    navHeader: string
    deptHeader: string
    aboutSuffix: (since: number) => string
    copyright: string
  }
  legalProfile: {
    experience: string
    languages: string
  }
  home: {
    heroEyebrow: string
    heroTitleLine1: string
    heroTitleLine2: string
    heroLede: string
    heroImgAlt: string
    ctaAudit: string
    ctaContact: string
    expertiseEyebrow: string
    expertiseTitle: string
    detailsLabel: string
    recommendationsEyebrow: string
    recommendationsTitle: string
    recommendationsImgAlt: string
    strategyEyebrow: string
    strategyTitle: string
    coursesEyebrow: string
    coursesTitle: string
    viewAllCourses: string
    closingTitle: string
    closingCta: string
  }
  consultanta: {
    heroEyebrow: string
    heroTitle: string
    heroLede: string
    govCardTitle: string
    govCardBody: string
    detailsLabel: string
    trainingCardTitle: string
    trainingCardBody: string
    viewProgramsLabel: string
    methodologyEyebrow: string
    methodologyTitle: string
    stagePrefix: string
  }
  audit: {
    heroEyebrow: string
    heroTitle: string
    heroLede: string
    ddEyebrow: string
    ddTitle: string
    audienceEyebrow: string
    audienceTitle: string
    areasEyebrow: string
    areasTitle: string
    processEyebrow: string
    processTitle: string
    deliverablesEyebrow: string
    deliverablesTitle: string
    differentiatorsEyebrow: string
    differentiatorsTitle: string
    foreignEyebrow: string
    ctaText: string
    ctaButton: string
  }
  dpo: {
    heroEyebrow: string
    heroTitle: string
    independenceEyebrow: string
    independenceTitle: string
    dutiesEyebrow: string
    dutiesTitle: string
    ctaText: string
    ctaButton: string
  }
  legalJuridic: {
    heroEyebrow: string
    heroTitle: string
    expertiseEyebrow: string
    expertiseTitle: string
    structureEyebrow: string
    structureTitle: string
    structureBody: string
    timelineEyebrow: string
    timelineTitle: string
    educationEyebrow: string
    educationTitle: string
  }
  itSecurity: {
    heroEyebrow: string
    heroTitle: string
    heroLede: string
    capabilitiesEyebrow: string
    capabilitiesTitle: string
    auditParagraph: string
    coverageEyebrow: string
    coverageTitle: string
    resultEyebrow: string
    resultTitle: string
    govCalloutText: string
    govCalloutLink: string
  }
  cursuri: {
    heroEyebrow: string
    heroTitle: string
    heroLede: string
    modelEyebrow: string
    modelTitle: string
    trackEyebrow: string
    trackTitle: string
    enrollLabel: string
    advancedEyebrow: string
    advancedTitle: string
    advancedBody: string
    galleryEyebrow: string
    galleryTitle: string
    programEyebrow: string
    programTitle: string
  }
  evenimente: {
    heroEyebrow: string
    heroTitle: string
    heroLede: string
    galleryEyebrow: string
    galleryTitle: string
    galleryBody: string
  }
  guvernantaDigitala: {
    heroEyebrow: string
    heroTitle: string
    aiEyebrow: string
    aiTitle: string
    cyberEyebrow: string
    cyberTitle: string
    standardsEyebrow: string
    standardsTitle: string
    resourcesEyebrow: string
    resourcesTitle: string
    resourcesBody: string
  }
  echipa: {
    heroEyebrow: string
    heroTitle: string
    heroLede: string
  }
  contact: {
    heroEyebrow: string
    heroTitle: string
    heroLede: string
    nameLabel: string
    emailLabel: string
    phoneLabel: string
    messageLabel: string
    submitLabel: string
    sentNotice: string
    departmentsLabel: string
    mailSubjectPrefix: string
    mailNameLabel: string
    mailEmailLabel: string
    mailPhoneLabel: string
  }
  confidentialitate: {
    heroEyebrow: string
    heroTitle: string
    heroLede: string
    dataEyebrow: string
    dataTitle: string
    dataBody: string
    rightsEyebrow: string
    rightsTitle: string
    rights: { title: string; body: string }[]
    contactEyebrow: string
    contactTitle: string
    contactBodyPrefix: string
    contactBodySuffix: string
  }
}

export const ui: { ro: UiDict; en: UiDict } = {
  ro: {
    nav: {
      links: [
        "Securitate Cibernetică",
        "Guvernanță AI & Risc",
        "Audit & Due Diligence",
        "Consultanță GDPR",
        "DPO",
        "Juridic",
        "Formare (LLL)",
        "Evenimente",
        "Echipă",
      ],
      quote: "Cere ofertă",
      switchToEn: "English",
      switchToRo: "Română",
    },
    footer: {
      links: [
        "Securitate Cibernetică",
        "Guvernanță AI & Risc",
        "Audit & Due Diligence",
        "Consultanță GDPR",
        "DPO",
        "Juridic",
        "Formare (LLL)",
        "Evenimente",
        "Confidențialitate",
        "Contact",
      ],
      navHeader: "Navigare",
      deptHeader: "Departamente",
      aboutSuffix: (since) =>
        `Din ${since}, securitate cibernetică, guvernanță AI, managementul riscului, conformitate GDPR și consultanță juridică pentru operatori de toate dimensiunile.`,
      copyright: "Toate drepturile rezervate.",
    },
    legalProfile: {
      experience: "Experiență",
      languages: "Limbi străine",
    },
    home: {
      heroEyebrow: "Securitate Cibernetică & Managementul Riscului",
      heroTitleLine1: "Construim reziliență.",
      heroTitleLine2: "Nu doar conformitate.",
      heroLede:
        "Consultanță de specialitate în securitate cibernetică, guvernanță AI și managementul riscului — cu protecția datelor cu caracter personal (GDPR), due diligence și consultanță juridică integrate în același model de conformitate. O experiență dovedită din 2015.",
      heroImgAlt: "Sesiune de curs GDPR, cu participanți și prezentare a Regulamentului (UE) 2016/679",
      ctaAudit: "Solicită un audit",
      ctaContact: "Contactează-ne",
      expertiseEyebrow: "Ce facem",
      expertiseTitle: "Securitate, Risc & Conformitate",
      detailsLabel: "Detalii",
      recommendationsEyebrow: "De ce noi",
      recommendationsTitle: "Ce ne recomandă",
      recommendationsImgAlt: "Curs DPO — sesiune de formare pentru protecția datelor cu caracter personal",
      strategyEyebrow: "Metodologie",
      strategyTitle: "Strategia implementării GDPR",
      coursesEyebrow: "Formare (LLL)",
      coursesTitle: "Program complet de formare DPO — GDPR",
      viewAllCourses: "Vezi toate cursurile",
      closingTitle: "Ești interesat de oferta noastră pentru audit?",
      closingCta: "Cerere ofertă",
    },
    consultanta: {
      heroEyebrow: "Consultanță GDPR",
      heroTitle: "Conformitate cu Regulamentul (UE) 2016/679",
      heroLede:
        "Toate serviciile de consultanță oferite de experții noștri au ca scop optimizarea fluxurilor de date prelucrate și asigurarea conformității organizației cu prevederile Regulamentului (UE) 2016/679.",
      govCardTitle: "Guvernanță Digitală & Risc",
      govCardBody:
        "Un serviciu distinct, cu propria echipă și metodologie: AI Act, Directiva NIS2 și standardele ISO de guvernanță și management al riscului.",
      detailsLabel: "Detalii",
      trainingCardTitle: "Training avansat, pe domenii de activitate",
      trainingCardBody:
        "Programe de formare personalizate pentru HR, IT, sănătate, construcții, retail sau sectorul public, gândite să asigure conformitatea și protecția reală a companiei.",
      viewProgramsLabel: "Vezi programele",
      methodologyEyebrow: "Metodologie",
      methodologyTitle: "Etapele privind implementarea Regulamentului (UE) 2016/679",
      stagePrefix: "Etapa",
    },
    audit: {
      heroEyebrow: "Audit & Due Diligence",
      heroTitle: "Due diligence de tranzacție pentru achiziții și intrarea pe piața din România",
      heroLede:
        "Un proces de due diligence riguros, condus de o echipă multidisciplinară cu experiență națională și internațională — gândit ca o alternativă credibilă la marile firme de consultanță (Big Four), pentru investitori locali și străini deopotrivă.",
      ddEyebrow: "Tranzacții & Achiziții",
      ddTitle: "De ce contează un due diligence bine făcut",
      audienceEyebrow: "Cui ne adresăm",
      audienceTitle: "Profilul clienților noștri de due diligence",
      areasEyebrow: "Perimetrul lucrării",
      areasTitle: "Ariile de due diligence pe care le acoperim",
      processEyebrow: "Metodologie",
      processTitle: "Cum arată, în practică, un proces de due diligence",
      deliverablesEyebrow: "Livrabile",
      deliverablesTitle: "Ce primiți la finalul procesului",
      differentiatorsEyebrow: "Diferențiatori",
      differentiatorsTitle: "De ce să alegeți echipa noastră",
      foreignEyebrow: "Pentru investitori străini",
      ctaText: "Aveți în plan o achiziție în România sau un proces de due diligence? Discutăm confidențial perimetrul lucrării.",
      ctaButton: "Cerere ofertă",
    },
    dpo: {
      heroEyebrow: "Data Protection Officer",
      heroTitle: "Responsabilul cu Protecția Datelor",
      independenceEyebrow: "Independență",
      independenceTitle: "Garanții de independență",
      dutiesEyebrow: "Responsabilități",
      dutiesTitle: "Sarcinile responsabilului cu protecția datelor",
      ctaText: "DPO intern sau extern? Vă stăm la dispoziție.",
      ctaButton: "Contactează-ne",
    },
    legalJuridic: {
      heroEyebrow: "Departamentul Juridic",
      heroTitle: "Legal & Juridic",
      expertiseEyebrow: "Expertiză",
      expertiseTitle: "Arii de expertiză",
      structureEyebrow: "Structură",
      structureTitle: "Departamentul Juridic pe arii de practică",
      structureBody:
        "Coordonat de Ruxandra Costea-Comanici, Departamentul Juridic funcționează alături de Departamentul GDPR și Departamentul IT Security ale grupului, organizat pe următoarele arii de practică:",
      timelineEyebrow: "Traseu profesional",
      timelineTitle: "25 de ani de experiență la cel mai înalt nivel",
      educationEyebrow: "Formare",
      educationTitle: "Educație & certificări",
    },
    itSecurity: {
      heroEyebrow: "Securitate Cibernetică & AI",
      heroTitle: "Protecție împotriva amenințărilor digitale",
      heroLede:
        "Evaluăm, testăm și consolidăm rezistența infrastructurii dumneavoastră în fața amenințărilor cibernetice actuale — de la vulnerabilitățile clasice de infrastructură, la riscurile specifice sistemelor de inteligență artificială.",
      capabilitiesEyebrow: "Capabilități",
      capabilitiesTitle: "Ce acoperă practica de securitate cibernetică",
      auditParagraph:
        "Scopul unui audit intern este acela de a determina punctele nevralgice ale infrastructurii IT, de a găsi soluțiile optime la nevoile existente și de a elabora procedurile de lucru corecte pentru personalul implicat — rezultând într-o strategie durabilă de dezvoltare, cu costuri și eforturi minime.",
      coverageEyebrow: "Acoperire",
      coverageTitle: "Contractele de consultanță acoperă",
      resultEyebrow: "Rezultat",
      resultTitle: "Beneficii",
      govCalloutText:
        "Acoperim și guvernanța digitală extinsă — AI Act, Directiva NIS2, standardele ISO/IEC 27001 și managementul integrat al riscului.",
      govCalloutLink: "Guvernanță Digitală & Risc",
    },
    cursuri: {
      heroEyebrow: "Formare Profesională Continuă · Profil LLL",
      heroTitle: "Cursuri & programe de formare",
      heroLede:
        "Securitate cibernetică, guvernanța inteligenței artificiale și managementul riscului — cu protecția datelor cu caracter personal ca modul integrat, nu unic.",
      modelEyebrow: "Model de formare",
      modelTitle: "Profil Lifelong Learning (LLL)",
      trackEyebrow: "Track GDPR",
      trackTitle: "Program complet de formare DPO — module și curriculum",
      enrollLabel: "Înscriere",
      advancedEyebrow: "Formare avansată",
      advancedTitle: "Programe de training adaptate domeniului de activitate",
      advancedBody:
        "Dincolo de cursul standard, construim programe avansate de training pe măsura fiecărui sector, astfel încât conformitatea să fie parte din activitatea zilnică, nu un exercițiu izolat — cu un singur scop: protecția reală a companiei.",
      galleryEyebrow: "Din sălile de curs",
      galleryTitle: "Sesiuni de formare desfășurate",
      programEyebrow: "Program",
      programTitle: "Structura cursului avansat, pe zile",
    },
    evenimente: {
      heroEyebrow: "Evenimente",
      heroTitle: "Conferințe & workshop-uri",
      heroLede:
        "O selecție din evenimentele organizate de-a lungul timpului pentru comunitatea de specialiști GDPR și DPO din România.",
      galleryEyebrow: "Dovezi",
      galleryTitle: "Fotografii din sală",
      galleryBody: "Imagini reale din sesiunile noastre de formare, păstrate din arhiva evenimentelor.",
    },
    guvernantaDigitala: {
      heroEyebrow: "Guvernanță AI & Risc",
      heroTitle: "Guvernanță Digitală & Managementul Riscului",
      aiEyebrow: "Inteligență Artificială",
      aiTitle: "AI Act",
      cyberEyebrow: "Securitate Cibernetică",
      cyberTitle: "NIS2",
      standardsEyebrow: "Standarde",
      standardsTitle: "Cadrul ISO de guvernanță și risc",
      resourcesEyebrow: "Resurse",
      resourcesTitle: "Repere legislative europene",
      resourcesBody: "Textele oficiale pe care le monitorizăm și pe care ne întemeiem analiza juridică și tehnică.",
    },
    echipa: {
      heroEyebrow: "Echipă",
      heroTitle: "Consultanță Juridică",
      heroLede:
        "Consultanță juridică oferită direct, cu experiență practică națională și internațională în drept comercial, insolvență și guvernanță.",
    },
    contact: {
      heroEyebrow: "Contact",
      heroTitle: "Contactează-ne",
      heroLede: "Scrie-ne pentru o cerere de ofertă sau alege direct departamentul potrivit.",
      nameLabel: "Nume *",
      emailLabel: "Email *",
      phoneLabel: "Telefon",
      messageLabel: "Mesajul tău *",
      submitLabel: "Trimite",
      sentNotice: "Se deschide clientul tău de email pentru a trimite mesajul.",
      departmentsLabel: "Departamente",
      mailSubjectPrefix: "Cerere de ofertă",
      mailNameLabel: "Nume",
      mailEmailLabel: "Email",
      mailPhoneLabel: "Telefon",
    },
    confidentialitate: {
      heroEyebrow: "Confidențialitate",
      heroTitle: "Politica de confidențialitate",
      heroLede:
        "Modul în care Personal Data Protection Group prelucrează datele cu caracter personal ale vizitatorilor acestui site, în conformitate cu Regulamentul (UE) 2016/679 (GDPR).",
      dataEyebrow: "Date",
      dataTitle: "Datele pe care le colectăm",
      dataBody:
        "Colectăm datele pe care ni le transmiți voluntar prin formularul de contact (nume, email, telefon și conținutul mesajului), exclusiv în scopul de a răspunde solicitării tale de informații sau de ofertă. Nu transmitem aceste date către terți, cu excepția situațiilor impuse de lege.",
      rightsEyebrow: "GDPR",
      rightsTitle: "Drepturile tale",
      rights: [
        {
          title: "Dreptul de acces",
          body: "Poți solicita confirmarea faptului că prelucrăm sau nu date cu caracter personal care te privesc, precum și accesul la acestea.",
        },
        {
          title: "Dreptul la rectificare",
          body: "Poți solicita corectarea datelor inexacte sau completarea celor incomplete.",
        },
        {
          title: "Dreptul la ștergere",
          body: "Poți solicita ștergerea datelor tale cu caracter personal, în condițiile prevăzute de Regulamentul (UE) 2016/679.",
        },
        {
          title: "Dreptul la restricționarea prelucrării",
          body: "Poți solicita restricționarea prelucrării datelor tale, în anumite situații.",
        },
        {
          title: "Dreptul la portabilitatea datelor",
          body: "Poți primi datele furnizate într-un format structurat și le poți transmite altui operator.",
        },
        {
          title: "Dreptul la opoziție",
          body: "Te poți opune, din motive legate de situația particulară, prelucrării datelor tale cu caracter personal.",
        },
      ],
      contactEyebrow: "Contact",
      contactTitle: "Cum îți exerciți drepturile",
      contactBodyPrefix: "Pentru orice solicitare privind datele tale cu caracter personal, ne poți scrie la",
      contactBodySuffix:
        ". Ai, de asemenea, dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).",
    },
  },
  en: {
    nav: {
      links: [
        "Cybersecurity",
        "AI Governance & Risk",
        "Audit & Due Diligence",
        "GDPR Consulting",
        "DPO",
        "Legal",
        "Training (LLL)",
        "Events",
        "Team",
      ],
      quote: "Request a quote",
      switchToEn: "English",
      switchToRo: "Română",
    },
    footer: {
      links: [
        "Cybersecurity",
        "AI Governance & Risk",
        "Audit & Due Diligence",
        "GDPR Consulting",
        "DPO",
        "Legal",
        "Training (LLL)",
        "Events",
        "Privacy Policy",
        "Contact",
      ],
      navHeader: "Navigation",
      deptHeader: "Departments",
      aboutSuffix: (since) =>
        `Since ${since}, cybersecurity, AI governance, risk management, GDPR compliance and legal consulting for operators of all sizes.`,
      copyright: "All rights reserved.",
    },
    legalProfile: {
      experience: "Experience",
      languages: "Languages",
    },
    home: {
      heroEyebrow: "Cybersecurity & Risk Management",
      heroTitleLine1: "We build resilience.",
      heroTitleLine2: "Not just compliance.",
      heroLede:
        "Specialist consulting in cybersecurity, AI governance and risk management — with personal data protection (GDPR), due diligence and legal consulting integrated into the same compliance model. A proven track record since 2015.",
      heroImgAlt: "GDPR training session, with participants and a presentation of Regulation (EU) 2016/679",
      ctaAudit: "Request an audit",
      ctaContact: "Contact us",
      expertiseEyebrow: "What we do",
      expertiseTitle: "Security, Risk & Compliance",
      detailsLabel: "Details",
      recommendationsEyebrow: "Why us",
      recommendationsTitle: "What sets us apart",
      recommendationsImgAlt: "DPO course — training session on personal data protection",
      strategyEyebrow: "Methodology",
      strategyTitle: "The GDPR implementation strategy",
      coursesEyebrow: "Training (LLL)",
      coursesTitle: "Complete DPO training program — GDPR",
      viewAllCourses: "View all courses",
      closingTitle: "Interested in our audit offering?",
      closingCta: "Request a quote",
    },
    consultanta: {
      heroEyebrow: "GDPR Consulting",
      heroTitle: "Compliance with Regulation (EU) 2016/679",
      heroLede:
        "All the consulting services provided by our experts aim to optimize the data flows processed and ensure the organization's compliance with the requirements of Regulation (EU) 2016/679.",
      govCardTitle: "Digital Governance & Risk",
      govCardBody:
        "A distinct service, with its own team and methodology: the AI Act, the NIS2 Directive and the ISO governance and risk management standards.",
      detailsLabel: "Details",
      trainingCardTitle: "Advanced training, by field of activity",
      trainingCardBody:
        "Tailored training programs for HR, IT, healthcare, construction, retail or the public sector, designed to ensure compliance and the real protection of your company.",
      viewProgramsLabel: "View programs",
      methodologyEyebrow: "Methodology",
      methodologyTitle: "Stages in implementing Regulation (EU) 2016/679",
      stagePrefix: "Stage",
    },
    audit: {
      heroEyebrow: "Audit & Due Diligence",
      heroTitle: "Transaction due diligence for acquisitions and market entry into Romania",
      heroLede:
        "A rigorous due diligence process, led by a multidisciplinary team with national and international experience — built as a credible alternative to the large consulting firms (Big Four), for local and foreign investors alike.",
      ddEyebrow: "Transactions & Acquisitions",
      ddTitle: "Why good due diligence matters",
      audienceEyebrow: "Who we work with",
      audienceTitle: "The profile of our due diligence clients",
      areasEyebrow: "Scope of work",
      areasTitle: "The due diligence areas we cover",
      processEyebrow: "Methodology",
      processTitle: "What a due diligence process looks like in practice",
      deliverablesEyebrow: "Deliverables",
      deliverablesTitle: "What you receive at the end of the process",
      differentiatorsEyebrow: "Differentiators",
      differentiatorsTitle: "Why choose our team",
      foreignEyebrow: "For foreign investors",
      ctaText: "Planning an acquisition in Romania, or a due diligence process? Let's discuss the scope, in confidence.",
      ctaButton: "Request a quote",
    },
    dpo: {
      heroEyebrow: "Data Protection Officer",
      heroTitle: "The Data Protection Officer",
      independenceEyebrow: "Independence",
      independenceTitle: "Guarantees of independence",
      dutiesEyebrow: "Responsibilities",
      dutiesTitle: "The Data Protection Officer's duties",
      ctaText: "In-house or outsourced DPO? We are at your disposal.",
      ctaButton: "Contact us",
    },
    legalJuridic: {
      heroEyebrow: "Legal Department",
      heroTitle: "Legal",
      expertiseEyebrow: "Expertise",
      expertiseTitle: "Areas of expertise",
      structureEyebrow: "Structure",
      structureTitle: "The Legal Department by practice area",
      structureBody:
        "Headed by Ruxandra Costea-Comanici, the Legal Department operates alongside the group's GDPR Department and IT Security Department, organized into the following practice areas:",
      timelineEyebrow: "Career path",
      timelineTitle: "25 years of experience at the highest level",
      educationEyebrow: "Education",
      educationTitle: "Education & certifications",
    },
    itSecurity: {
      heroEyebrow: "Cybersecurity & AI",
      heroTitle: "Protection against digital threats",
      heroLede:
        "We assess, test and strengthen the resilience of your infrastructure against today's cyber threats — from classic infrastructure vulnerabilities to the risks specific to artificial intelligence systems.",
      capabilitiesEyebrow: "Capabilities",
      capabilitiesTitle: "What our cybersecurity practice covers",
      auditParagraph:
        "The purpose of an internal audit is to identify the weak points of the IT infrastructure, find the optimal solutions for existing needs and develop the correct working procedures for the staff involved — resulting in a durable development strategy, with minimal cost and effort.",
      coverageEyebrow: "Coverage",
      coverageTitle: "Our consulting contracts cover",
      resultEyebrow: "Outcome",
      resultTitle: "Benefits",
      govCalloutText:
        "We also cover extended digital governance — the AI Act, the NIS2 Directive, the ISO/IEC 27001 standard and integrated risk management.",
      govCalloutLink: "Digital Governance & Risk",
    },
    cursuri: {
      heroEyebrow: "Continuing Professional Training · LLL Profile",
      heroTitle: "Courses & training programs",
      heroLede:
        "Cybersecurity, artificial intelligence governance and risk management — with personal data protection as an integrated module rather than a standalone one.",
      modelEyebrow: "Training model",
      modelTitle: "Lifelong Learning (LLL) Profile",
      trackEyebrow: "GDPR Track",
      trackTitle: "Complete DPO training program — modules and curriculum",
      enrollLabel: "Enroll",
      advancedEyebrow: "Advanced training",
      advancedTitle: "Training programs tailored to your field of activity",
      advancedBody:
        "Beyond the standard course, we build advanced training programs tailored to each sector, so that compliance becomes part of daily activity rather than an isolated exercise — with a single goal: the real protection of your company.",
      galleryEyebrow: "From the training room",
      galleryTitle: "Training sessions delivered",
      programEyebrow: "Schedule",
      programTitle: "Structure of the advanced course, by day",
    },
    evenimente: {
      heroEyebrow: "Events",
      heroTitle: "Conferences & workshops",
      heroLede:
        "A selection of the events organized over the years for Romania's community of GDPR specialists and DPOs.",
      galleryEyebrow: "Evidence",
      galleryTitle: "Photos from the sessions",
      galleryBody: "Real images from our training sessions, kept from the events archive.",
    },
    guvernantaDigitala: {
      heroEyebrow: "AI Governance & Risk",
      heroTitle: "Digital Governance & Risk Management",
      aiEyebrow: "Artificial Intelligence",
      aiTitle: "AI Act",
      cyberEyebrow: "Cybersecurity",
      cyberTitle: "NIS2",
      standardsEyebrow: "Standards",
      standardsTitle: "The ISO governance and risk framework",
      resourcesEyebrow: "Resources",
      resourcesTitle: "Key European legislation",
      resourcesBody: "The official texts we monitor and on which we base our legal and technical analysis.",
    },
    echipa: {
      heroEyebrow: "Team",
      heroTitle: "Legal Consulting",
      heroLede:
        "Legal consulting provided directly, with national and international practical experience in commercial law, insolvency and governance.",
    },
    contact: {
      heroEyebrow: "Contact",
      heroTitle: "Contact us",
      heroLede: "Write to us for a quote request, or reach out directly to the right department.",
      nameLabel: "Name *",
      emailLabel: "Email *",
      phoneLabel: "Phone",
      messageLabel: "Your message *",
      submitLabel: "Send",
      sentNotice: "Your email client will open to send the message.",
      departmentsLabel: "Departments",
      mailSubjectPrefix: "Quote request",
      mailNameLabel: "Name",
      mailEmailLabel: "Email",
      mailPhoneLabel: "Phone",
    },
    confidentialitate: {
      heroEyebrow: "Privacy",
      heroTitle: "Privacy Policy",
      heroLede:
        "How Personal Data Protection Group processes the personal data of this website's visitors, in accordance with Regulation (EU) 2016/679 (GDPR).",
      dataEyebrow: "Data",
      dataTitle: "The data we collect",
      dataBody:
        "We collect the data you voluntarily provide through the contact form (name, email, phone and message content), solely to respond to your request for information or a quote. We do not share this data with third parties, except where required by law.",
      rightsEyebrow: "GDPR",
      rightsTitle: "Your rights",
      rights: [
        {
          title: "Right of access",
          body: "You may request confirmation as to whether we process personal data concerning you, as well as access to that data.",
        },
        {
          title: "Right to rectification",
          body: "You may request the correction of inaccurate data or the completion of incomplete data.",
        },
        {
          title: "Right to erasure",
          body: "You may request the deletion of your personal data, under the conditions set out in Regulation (EU) 2016/679.",
        },
        {
          title: "Right to restriction of processing",
          body: "You may request the restriction of the processing of your data, in certain situations.",
        },
        {
          title: "Right to data portability",
          body: "You may receive the data you provided in a structured format and transmit it to another controller.",
        },
        {
          title: "Right to object",
          body: "You may object, on grounds relating to your particular situation, to the processing of your personal data.",
        },
      ],
      contactEyebrow: "Contact",
      contactTitle: "How to exercise your rights",
      contactBodyPrefix: "For any request regarding your personal data, you can write to us at",
      contactBodySuffix:
        ". You also have the right to lodge a complaint with the Romanian National Supervisory Authority for Personal Data Processing (ANSPDCP).",
    },
  },
}
