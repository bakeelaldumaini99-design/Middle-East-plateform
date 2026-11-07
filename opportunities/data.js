/* ============================================================
   منصة الشرق الأوسط التعليمية — ملف البيانات المركزي
   ============================================================
   لوحة الإدارة: كل محتوى قسم «الفرص والمنح» يُدار من هذا الملف فقط.
   لإضافة جامعة أو منحة جديدة: انسخ أي عنصر داخل opportunities[]
   وعدّل حقوله ثم ارفع الملف — لا حاجة لتعديل الكود.
   الحقول:
     id        معرّف فريد (إنجليزي بدون مسافات)
     category  china-language | bachelor | graduate
     status    open (متاح) | pending (قيد التحقق) | closed (مغلق)
     deadline  تاريخ بصيغة YYYY-MM-DD أو "" إن غير محدد
   ============================================================ */
window.MEP_DATA = {

  updated: "2026-11-08",

  contact: {
    whatsapp:  "967716621214",
    phone:     "+967 716 621 214",
    telegram:  "",   // أضف الرابط هنا لاحقًا مثل https://t.me/xxxx
    facebook:  "",
    instagram: "",
    email:     ""
  },

  /* ---------- الفرص والجامعات ---------- */
  opportunities: [
    {
      id: "hit-language",
      category: "china-language",
      name: { ar: "معهد هاربين للتكنولوجيا (HIT)", en: "Harbin Institute of Technology (HIT)" },
      program: { ar: "برنامج اللغة الصينية الطويل — دفعة مارس 2027", en: "Long-term Chinese Language Program — March 2027 intake" },
      city: { ar: "هاربين — مقاطعة هيلونغجيانغ", en: "Harbin, Heilongjiang" },
      duration: { ar: "فصل دراسي واحد (16 أسبوعًا) وقابل للتجديد", en: "One semester (16 weeks), renewable" },
      status: "pending",
      deadline: "2026-12-30",
      deadlineNote: {
        ar: "حسب دورة العام السابق: 30 ديسمبر 2026 لفصل الربيع (مارس–يونيو). يُتحقق من الإعلان الرسمي لدفعة 2027.",
        en: "Per last year's cycle: Dec 30, 2026 for the spring semester (Mar–Jun). Verify with the official 2027 notice."
      },
      tuition: { ar: "الرسوم الدراسية: 7,300 يوان صيني / فصل (16 أسبوعًا)", en: "Tuition: CNY 7,300 / semester (16 weeks)" },
      fees: [
        { ar: "رسوم التقديم: 400–500 يوان", en: "Application fee: CNY 400–500" },
        { ar: "التأمين الطبي: 400 يوان / نصف سنة", en: "Medical insurance: CNY 400 / half year" },
        { ar: "السكن الجامعي: 800–1,000 يوان / شهر", en: "On-campus housing: CNY 800–1,000 / month" }
      ],
      eligibility: [
        { ar: "أن يكون المتقدم من غير المواطنين الصينيين وبصحة جيدة", en: "Non-Chinese citizen in good health" },
        { ar: "العمر 16 سنة فما فوق", en: "Aged 16 or above" }
      ],
      applyUrl: "https://apply.hit.edu.cn/",
      sourceUrl: "https://studyathit.hit.edu.cn/",
      sourceDate: "2026-11",
      contactInfo: { ar: "StudyatHIT@hit.edu.cn — هاتف: +86-451-86418461", en: "StudyatHIT@hit.edu.cn — Tel: +86-451-86418461" }
    }
    /* ← أضف جامعات برامج اللغة الأخرى هنا بنفس البنية */
  ],

  /* ---------- صفحات المنح التفصيلية ---------- */
  details: {

    hungary: {
      title: { ar: "المنحة المجرية — Stipendium Hungaricum", en: "Stipendium Hungaricum Scholarship" },
      badge: { ar: "منحة حكومية ممولة بالكامل", en: "Fully funded government scholarship" },
      status: "pending",
      deadline: "2027-01-15",
      deadlineNote: {
        ar: "تفتح البوابة عادة منتصف نوفمبر وتغلق منتصف يناير (دورة 2026 أغلقت 15 يناير 2026). موعد دورة 2027 يُعلن رسميًا في البوابة — قيد التحقق.",
        en: "The portal usually opens mid-November and closes mid-January (the 2026 cycle closed Jan 15, 2026). The 2027 deadline is announced on the official portal — pending verification."
      },
      about: {
        ar: "منحة حكومة المجر للطلاب الدوليين للدراسة في الجامعات المجرية لمراحل البكالوريوس والماجستير والدكتوراه، بتمويل يشمل الرسوم الدراسية كاملة ومعاشًا شهريًا (نحو 43,700 فورنت مجري) وبدل سكن أو سكنًا جامعيًا وتأمينًا صحيًا.",
        en: "The Hungarian government's scholarship for international students to study at Hungarian universities (Bachelor's, Master's, PhD), covering full tuition, a monthly stipend (~HUF 43,700), housing or housing allowance, and health insurance."
      },
      coverage: [
        { ar: "إعفاء كامل من الرسوم الدراسية", en: "Full tuition waiver" },
        { ar: "معاش شهري (~43,700 فورنت مجري)", en: "Monthly stipend (~HUF 43,700)" },
        { ar: "سكن جامعي أو بدل سكن", en: "Dormitory place or housing allowance" },
        { ar: "تأمين صحي", en: "Health insurance" }
      ],
      requirements: [
        { ar: "خطاب دافع (Motivation Letter)", en: "Motivation letter" },
        { ar: "الشهادات الدراسية وكشوف الدرجات مترجمة", en: "Translated diplomas and transcripts" },
        { ar: "إثبات إتقان لغة الدراسة", en: "Proof of language proficiency" },
        { ar: "جواز سفر أو وثيقة هوية سارية", en: "Valid passport or ID" },
        { ar: "قبول «Statement» في نظام التقديم الإلكتروني", en: "Acceptance of the Statement in the online system" }
      ],
      notes: [
        { ar: "يمر الترشيح عبر الجهة الوطنية الشريكة في بلدك (لليمن: وزارة التعليم العالي والبحث العلمي — قيد التحقق من آلية هذه الدورة).", en: "Nomination goes through the partner national authority in your country (for Yemen: Ministry of Higher Education — mechanism for this cycle pending verification)." }
      ],
      howToApply: [
        { ar: "سجّل حسابًا في بوابة التقديم apply.stipendiumhungaricum.hu", en: "Create an account at apply.stipendiumhungaricum.hu" },
        { ar: "اختر برنامجين دراسيين بترتيب الأولوية", en: "Choose up to two study programs by priority" },
        { ar: "ارفع الوثائق المطلوبة قبل الموعد النهائي", en: "Upload required documents before the deadline" },
        { ar: "تابع نتيجة الترشيح الوطني ثم قبول الجامعة", en: "Follow the national nomination result, then university admission" }
      ],
      applyUrl: "https://apply.stipendiumhungaricum.hu/",
      sourceUrl: "https://stipendiumhungaricum.hu/",
      sourceDate: "2026-11"
    },

    kazakhstan: {
      title: { ar: "منحة حكومة كازاخستان", en: "Kazakhstan Government Scholarship" },
      badge: { ar: "550 مقعدًا سنويًا للطلاب الدوليين", en: "550 annual seats for international students" },
      status: "pending",
      deadline: "2027-05-31",
      deadlineNote: {
        ar: "نافذة دورة 2026 كانت 30 مارس – 31 مايو 2026. مواعيد دورة 2027 تُعلن في البوابة الرسمية — قيد التحقق.",
        en: "The 2026 cycle window was Mar 30 – May 31, 2026. The 2027 cycle dates are announced on the official portal — pending verification."
      },
      about: {
        ar: "منحة حكومة جمهورية كازاخستان للطلاب الأجانب: 490 مقعد بكالوريوس و50 ماجستير و10 دكتوراه سنويًا، وتغطي الرسوم الدراسية كاملة مع معاش شهري. التقديم عبر بوابة الدراسة في كازاخستان للأجانب (ليست برنامج بولاشاك الداخلي).",
        en: "The Republic of Kazakhstan government scholarship for foreign students: 490 Bachelor's, 50 Master's and 10 PhD seats per year, covering full tuition plus a monthly stipend. Applications go through the Study in Kazakhstan portal for foreigners (not the domestic Bolashak program)."
      },
      coverage: [
        { ar: "تغطية كاملة للرسوم الدراسية", en: "Full tuition coverage" },
        { ar: "معاش شهري", en: "Monthly stipend" }
      ],
      requirements: [
        { ar: "وثيقة هوية / جواز سفر", en: "ID / passport" },
        { ar: "الشهادة الدراسية وكشف الدرجات", en: "Diploma and transcript" },
        { ar: "مقال دافع (250–500 كلمة)", en: "Motivational essay (250–500 words)" },
        { ar: "خطابا توصية", en: "Two recommendation letters" },
        { ar: "شهادة طبية + فحص خلوٍّ من فيروس نقص المناعة (HIV)", en: "Medical certificate + HIV-free certificate" },
        { ar: "للدراسات العليا: شهادة لغة (IELTS 5.5 أو TOEFL 46 للبرامج الإنجليزية) ومعدل لا يقل عن 2.33/4", en: "For graduate studies: language certificate (IELTS 5.5 or TOEFL 46 for English programs) and GPA ≥ 2.33/4" }
      ],
      notes: [],
      howToApply: [
        { ar: "سجّل في بوابة studyin.kz", en: "Register at studyin.kz" },
        { ar: "اجتز الاختبار النفسي-التقني عبر البوابة", en: "Pass the psycho-technical test on the portal" },
        { ar: "احضر المقابلة عبر الإنترنت", en: "Attend the online interview" },
        { ar: "انتظر نتيجة المفاضلة ثم قبول الجامعة", en: "Wait for the selection result, then university admission" }
      ],
      applyUrl: "https://studyin.kz/",
      sourceUrl: "https://studyin.kz/",
      sourceDate: "2026-11"
    },

    exchange: {
      title: { ar: "منح التبادل الثقافي — طلاب اليمن", en: "Cultural Exchange Scholarships — Yemeni Students" },
      badge: { ar: "عبر وزارة التعليم العالي اليمنية", en: "Via Yemen's Ministry of Higher Education" },
      status: "pending",
      deadline: "",
      deadlineNote: {
        ar: "المواعيد تُعلن مع كل إعلان رسمي من وزارة التعليم العالي والبحث العلمي اليمنية — تابع الإعلانات الرسمية.",
        en: "Dates are announced with each official notice from Yemen's Ministry of Higher Education — follow official announcements."
      },
      about: {
        ar: "برامج التبادل الثقافي مخصصة لطلاب الجمهورية اليمنية، وتتوزع مقاعدها على عدة دول منها الصين والمجر والمغرب وتونس وكوبا والجزائر، وتُدار عبر وزارة التعليم العالي والبحث العلمي.",
        en: "Cultural exchange programs are dedicated to students of the Republic of Yemen, with seats across several countries including China, Hungary, Morocco, Tunisia, Cuba and Algeria, administered through the Ministry of Higher Education and Scientific Research."
      },
      coverage: [],
      requirements: [
        { ar: "أن يكون المتقدم من طلاب الجمهورية اليمنية", en: "Applicant must be a Yemeni national" },
        { ar: "معدل فوق 85% حسب آخر إعلان", en: "GPA above 85% per the latest announcement" },
        { ar: "أن يكون من خريجي آخر سنة دراسية أو آخر سنتين", en: "Graduate of the most recent one or two academic years" }
      ],
      notes: [
        { ar: "كان القبول يشمل اختبارًا في الرياضيات والكيمياء والإنجليزية، لكنه أُلغي عام 2025 بسبب الأوضاع الراهنة واعتُمدت طريقة مفاضلة بديلة — المصدر: معلومات مقدَّمة من إدارة المنصة، تُتحقق دائمًا من الإعلان الرسمي.", en: "Admission used to include tests in Math, Chemistry and English, but the test was cancelled in 2025 due to current circumstances and an alternative selection method was adopted — source: information provided by the platform administration; always verify with the official announcement." }
      ],
      howToApply: [
        { ar: "تابع إعلانات وزارة التعليم العالي والبحث العلمي اليمنية", en: "Follow announcements from Yemen's Ministry of Higher Education" },
        { ar: "جهّز الشهادات والوثائق المطلوبة في الإعلان", en: "Prepare the documents listed in the announcement" },
        { ar: "قدّم عبر القناة التي يحددها الإعلان في موعدها", en: "Apply through the channel specified in the announcement on time" }
      ],
      applyUrl: "",
      sourceUrl: "",
      sourceDate: "2026-11"
    }
  },

  /* ---------- ملف المنحة: قوائم التجهيز ---------- */
  filePrep: {
    general: {
      title: { ar: "المتطلبات العامة المشتركة", en: "Common general requirements" },
      items: [
        { id: "g-passport", req: "required",    text: { ar: "جواز سفر ساري المفعول (يفضل صلاحية تتجاوز سنة)", en: "Valid passport (preferably valid for over a year)" } },
        { id: "g-diploma",  req: "translation", text: { ar: "الشهادة الدراسية مترجمة ومصدقة حسب جهة المنحة", en: "Diploma translated and attested per the scholarship's rules" } },
        { id: "g-transcript", req: "translation", text: { ar: "كشف الدرجات مترجم ومصدق", en: "Transcript translated and attested" } },
        { id: "g-photo",    req: "required",    text: { ar: "صور شخصية بخلفية بيضاء بمقاسات رسمية", en: "Passport photos with white background" } },
        { id: "g-medical",  req: "required",    text: { ar: "شهادة فحص طبي (بعض المنح تشترط نموذجًا خاصًا بها)", en: "Medical examination certificate (some scholarships require their own form)" } },
        { id: "g-lang",     req: "optional",    text: { ar: "شهادة إتقان لغة (IELTS/TOEFL/HSK) حسب لغة البرنامج", en: "Language certificate (IELTS/TOEFL/HSK) per the program language" } }
      ]
    },
    scholarships: [
      {
        id: "fp-hit",
        name: { ar: "معهد هاربين HIT — برنامج اللغة", en: "HIT — Language Program" },
        updated: "2026-11",
        sourceUrl: "https://studyathit.hit.edu.cn/",
        items: [
          { id: "hit-app",  req: "required", text: { ar: "تعبئة نموذج التقديم الإلكتروني في بوابة HIT", en: "Complete the online application on the HIT portal" } },
          { id: "hit-pass", req: "required", text: { ar: "نسخة من جواز السفر", en: "Passport copy" } },
          { id: "hit-dip",  req: "required", text: { ar: "صورة من آخر شهادة دراسية", en: "Copy of the latest diploma" } },
          { id: "hit-photo", req: "required", text: { ar: "صورة شخصية إلكترونية", en: "Digital passport photo" } },
          { id: "hit-fee",  req: "required", text: { ar: "سداد رسوم التقديم (400–500 يوان)", en: "Pay the application fee (CNY 400–500)" } }
        ]
      },
      {
        id: "fp-hungary",
        name: { ar: "المنحة المجرية Stipendium Hungaricum", en: "Stipendium Hungaricum" },
        updated: "2026-11",
        sourceUrl: "https://stipendiumhungaricum.hu/",
        items: [
          { id: "hu-motiv", req: "required",    text: { ar: "خطاب الدافع (Motivation Letter)", en: "Motivation letter" } },
          { id: "hu-dip",   req: "translation", text: { ar: "الشهادات وكشوف الدرجات مترجمة", en: "Translated diplomas and transcripts" } },
          { id: "hu-lang",  req: "required",    text: { ar: "إثبات إتقان لغة الدراسة", en: "Proof of language proficiency" } },
          { id: "hu-pass",  req: "required",    text: { ar: "جواز سفر أو هوية سارية", en: "Valid passport or ID" } },
          { id: "hu-stmt",  req: "required",    text: { ar: "قبول «Statement» داخل نظام التقديم", en: "Accept the Statement in the application system" } },
          { id: "hu-med",   req: "optional",    text: { ar: "شهادة طبية (تُطلب عند مراحل لاحقة في بعض البرامج)", en: "Medical certificate (required at later stages for some programs)" } }
        ]
      },
      {
        id: "fp-kazakh",
        name: { ar: "منحة حكومة كازاخستان", en: "Kazakhstan Government Scholarship" },
        updated: "2026-11",
        sourceUrl: "https://studyin.kz/",
        items: [
          { id: "kz-id",    req: "required", text: { ar: "وثيقة هوية / جواز سفر", en: "ID / passport" } },
          { id: "kz-dip",   req: "required", text: { ar: "الشهادة وكشف الدرجات", en: "Diploma and transcript" } },
          { id: "kz-essay", req: "required", text: { ar: "مقال الدافع (250–500 كلمة)", en: "Motivational essay (250–500 words)" } },
          { id: "kz-rec",   req: "required", text: { ar: "خطابا توصية", en: "Two recommendation letters" } },
          { id: "kz-med",   req: "required", text: { ar: "شهادة طبية + شهادة خلو من HIV", en: "Medical certificate + HIV-free certificate" } },
          { id: "kz-lang",  req: "required", text: { ar: "للدراسات العليا: شهادة لغة (IELTS 5.5 / TOEFL 46 للإنجليزية)", en: "Graduate only: language certificate (IELTS 5.5 / TOEFL 46 for English)" } }
        ]
      },
      {
        id: "fp-exchange",
        name: { ar: "التبادل الثقافي — اليمن", en: "Cultural Exchange — Yemen" },
        updated: "2026-11",
        sourceUrl: "",
        items: [
          { id: "ex-dip",   req: "required", text: { ar: "شهادة الثانوية بمعدل فوق 85% (حسب آخر إعلان)", en: "High-school diploma with GPA above 85% (per latest notice)" } },
          { id: "ex-grad",  req: "required", text: { ar: "أن يكون التخرج ضمن آخر سنة أو سنتين دراسيتين", en: "Graduation within the last one or two academic years" } },
          { id: "ex-docs",  req: "required", text: { ar: "بقية الوثائق حسب ما يحدده الإعلان الرسمي للوزارة", en: "Remaining documents per the Ministry's official announcement" } }
        ]
      }
    ]
  }
};
