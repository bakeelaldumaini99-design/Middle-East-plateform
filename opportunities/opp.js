/* ============================================================
   منصة الشرق الأوسط التعليمية — محرك عرض قسم الفرص والمنح
   يقرأ البيانات من data.js فقط — لا حاجة لتعديل هذا الملف.
   ============================================================ */
(function () {
  "use strict";
  var D = window.MEP_DATA;
  var LS = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };

  /* ---------- نصوص الواجهة ---------- */
  var T = {
    siteName:  { ar: "منصة الشرق الأوسط التعليمية", en: "Middle East Educational Platform" },
    nav: {
      home:     { ar: "الرئيسية", en: "Home" },
      hub:      { ar: "الفرص والمنح", en: "Opportunities" },
      lang:     { ar: "برامج اللغة الصينية", en: "Chinese Language" },
      bachelor: { ar: "البكالوريوس", en: "Bachelor" },
      graduate: { ar: "الدراسات العليا", en: "Graduate" },
      hungary:  { ar: "المنحة المجرية", en: "Hungary" },
      kazakh:   { ar: "المنحة الكازاخستانية", en: "Kazakhstan" },
      exchange: { ar: "التبادل الثقافي", en: "Cultural Exchange" },
      fileprep: { ar: "ملف المنحة", en: "Scholarship File" },
      csca:     { ar: "أكاديمية CSCA", en: "CSCA Academy" },
      guides:   { ar: "مكتبة الأدلة", en: "Guides Library" }
    },
    status: {
      open:    { ar: "متاح التقديم", en: "Open" },
      closed:  { ar: "مغلق التقديم", en: "Closed" },
      pending: { ar: "قيد التحقق", en: "Pending verification" }
    },
    city:     { ar: "المدينة", en: "City" },
    degree:   { ar: "البرنامج", en: "Program" },
    duration: { ar: "المدة", en: "Duration" },
    tuition:  { ar: "الرسوم", en: "Tuition" },
    deadline: { ar: "آخر موعد تقديم", en: "Application deadline" },
    daysLeft: { ar: "متبقٍ {n} يوم", en: "{n} days left" },
    closedNow:{ ar: "انتهى الموعد", en: "Deadline passed" },
    noDate:   { ar: "يُعلن رسميًا", en: "To be announced" },
    details:  { ar: "التفاصيل", en: "Details" },
    apply:    { ar: "رابط التقديم الرسمي", en: "Official application link" },
    source:   { ar: "المصدر الرسمي", en: "Official source" },
    search:   { ar: "ابحث باسم جامعة أو مدينة…", en: "Search a university or city…" },
    all:      { ar: "الكل", en: "All" },
    favsOnly: { ar: "المفضلة", en: "Favorites" },
    empty: {
      ar: "سيتم إضافة الجامعات والمنح لهذا القسم قريبًا. تُضاف الجامعات الجديدة من ملف بيانات واحد فور اعتمادها.",
      en: "Universities and scholarships will be added to this section soon. New entries are added from a single data file once approved."
    },
    quizTitle: { ar: "مساعد اختيار المنحة", en: "Scholarship Finder" },
    quizSub:   { ar: "أجب عن ثلاثة أسئلة قصيرة لنعرض لك الفرص الأنسب.", en: "Answer three short questions to see the most suitable opportunities." },
    qLevel:    { ar: "ما المرحلة الدراسية التي تستهدفها؟", en: "Which study level are you targeting?" },
    qCountry:  { ar: "أي وجهة تفضّل؟", en: "Which destination do you prefer?" },
    qFund:     { ar: "ما نوع التمويل المناسب لك؟", en: "What funding type suits you?" },
    lvLang:  { ar: "سنة لغة", en: "Language year" },
    lvBach:  { ar: "بكالوريوس", en: "Bachelor" },
    lvGrad:  { ar: "ماجستير / دكتوراه", en: "Master's / PhD" },
    cChina:  { ar: "الصين", en: "China" },
    cHungary:{ ar: "المجر", en: "Hungary" },
    cKazakh: { ar: "كازاخستان", en: "Kazakhstan" },
    cAny:    { ar: "أي دولة", en: "Any country" },
    fFull:   { ar: "تمويل كامل", en: "Full funding" },
    fSelf:   { ar: "على نفقتي / جزئي", en: "Self-funded / partial" },
    quizBtn:   { ar: "اعرض الفرص المناسبة", en: "Show matching opportunities" },
    quizNone:  { ar: "لا توجد فرص مطابقة حاليًا — جرّب توسيع اختياراتك أو تواصل معنا عبر واتساب.", en: "No matching opportunities right now — widen your choices or contact us on WhatsApp." },
    coverage:    { ar: "ماذا تغطي المنحة؟", en: "What does it cover?" },
    requirements:{ ar: "الشروط والمتطلبات", en: "Eligibility & requirements" },
    howToApply:  { ar: "طريقة التقديم", en: "How to apply" },
    feesList:    { ar: "الرسوم والتكاليف", en: "Fees & costs" },
    eligibility: { ar: "شروط الأهلية", en: "Eligibility" },
    contactLbl:  { ar: "التواصل الرسمي", en: "Official contact" },
    important:   { ar: "ملاحظات مهمة", en: "Important notes" },
    lastUpd:     { ar: "آخر تحديث للمعلومات", en: "Information last updated" },
    verifyWarn: {
      ar: "لا تَعِد المنصة بقبول مضمون في أي منحة. القرار النهائي دائمًا للجهة المانحة الرسمية — تحقق من الشروط والمواعيد من روابط المصدر الرسمي قبل التقديم.",
      en: "The platform does not promise guaranteed admission to any scholarship. The final decision always belongs to the official provider — verify requirements and deadlines via the official source links before applying."
    },
    fpTitle:  { ar: "صفحة تجهيز ملف المنحة", en: "Scholarship File Preparation" },
    fpSub: {
      ar: "حدّد ما جهّزته من الوثائق وتابع ما تبقى. تُحفظ علاماتك على جهازك فقط.",
      en: "Check off the documents you have prepared and track what remains. Your marks are saved on your device only."
    },
    reqTags: {
      required:    { ar: "مطلوب", en: "Required" },
      optional:    { ar: "اختياري / لاحقًا", en: "Optional / later" },
      translation: { ar: "يحتاج ترجمة وتصديق", en: "Needs translation & attestation" }
    },
    progressOf: { ar: "أنجزت {d} من {t}", en: "{d} of {t} done" },
    footerContact: { ar: "تواصل معنا", en: "Contact us" },
    whatsapp: { ar: "واتساب", en: "WhatsApp" },
    phone:    { ar: "اتصال", en: "Call" },
    telegram: { ar: "تيليجرام", en: "Telegram" },
    facebook: { ar: "فيسبوك", en: "Facebook" },
    instagram:{ ar: "إنستغرام", en: "Instagram" },
    email:    { ar: "البريد", en: "Email" },
    rights:   { ar: "© منصة الشرق الأوسط التعليمية — جميع الحقوق محفوظة", en: "© Middle East Educational Platform — All rights reserved" },
    soon:     { ar: "قريبًا", en: "Coming soon" },
    browseGuides: { ar: "تصفح مكتبة الأدلة", en: "Browse the guides library" }
  };

  var lang = LS.get("mep-lang", "ar");
  function t(node) { return (node && (node[lang] || node.ar)) || ""; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  /* ---------- ترويسة + تنقل + تذييل ---------- */
  function header(active) {
    var n = T.nav;
    var links = [
      ["../index.html",        "home",     n.home],
      ["index.html",           "hub",      n.hub],
      ["china-language.html",  "lang",     n.lang],
      ["bachelor.html",        "bachelor", n.bachelor],
      ["graduate.html",        "graduate", n.graduate],
      ["hungary.html",         "hungary",  n.hungary],
      ["kazakhstan.html",      "kazakh",   n.kazakh],
      ["exchange.html",        "exchange", n.exchange],
      ["file-prep.html",       "fileprep", n.fileprep]
    ];
    var nav = links.map(function (l) {
      return '<a href="' + l[0] + '"' + (l[1] === active ? ' class="active"' : "") + ">" + esc(t(l[2])) + "</a>";
    }).join("");
    return '' +
    '<header class="mep-topbar"><div class="mep-wrap">' +
      '<img class="mep-logo" src="../brand-logo.png" alt="">' +
      '<div class="mep-brand"><h1>' + esc(t(T.siteName)) + '</h1>' +
      '<span class="en">Middle East Educational Platform</span></div>' +
      '<button class="mep-lang-btn" id="mepLangBtn">' + (lang === "ar" ? "English" : "العربية") + "</button>" +
    "</div></header>" +
    '<nav class="mep-nav"><div class="mep-wrap">' + nav + "</div></nav>";
  }

  function banner(title, sub) {
    return '<section class="mep-banner"><h2>' + esc(t(title)) + "</h2>" + (sub ? "<p>" + esc(t(sub)) + "</p>" : "") + "</section>";
  }

  function footer() {
    var c = D.contact, s = [];
    if (c.whatsapp)  s.push('<a href="https://wa.me/' + esc(c.whatsapp) + '" target="_blank" rel="noopener">🟢 ' + esc(t(T.whatsapp)) + "</a>");
    if (c.phone)     s.push('<a href="tel:' + esc(c.phone.replace(/\s/g, "")) + '">📞 ' + esc(t(T.phone)) + " " + esc(c.phone) + "</a>");
    if (c.telegram)  s.push('<a href="' + esc(c.telegram) + '" target="_blank" rel="noopener">✈️ ' + esc(t(T.telegram)) + "</a>");
    if (c.facebook)  s.push('<a href="' + esc(c.facebook) + '" target="_blank" rel="noopener">📘 ' + esc(t(T.facebook)) + "</a>");
    if (c.instagram) s.push('<a href="' + esc(c.instagram) + '" target="_blank" rel="noopener">📸 ' + esc(t(T.instagram)) + "</a>");
    if (c.email)     s.push('<a href="mailto:' + esc(c.email) + '">✉️ ' + esc(t(T.email)) + "</a>");
    return '<footer class="mep-footer"><div class="mep-wrap">' +
      "<h3>" + esc(t(T.footerContact)) + "</h3>" +
      '<div class="mep-social">' + s.join("") + "</div>" +
      '<div class="copy">' + esc(t(T.rights)) + " — " + esc(t(T.lastUpd)) + ": " + esc(D.updated) + "</div>" +
      "</div></footer>" +
      (c.whatsapp ? '<a class="mep-wa" href="https://wa.me/' + esc(c.whatsapp) + '" target="_blank" rel="noopener" aria-label="WhatsApp">' +
        '<svg viewBox="0 0 32 32"><path d="M16 3C9.4 3 4 8.4 4 15c0 2.6.8 5 2.3 7L4 29l7.2-2.2c1.9 1 3.9 1.5 6 1.5 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 22c-1.9 0-3.7-.6-5.3-1.6l-.4-.2-4 1.2 1.2-3.9-.3-.4C5.7 18.4 5 16.7 5 15 5 9 9.9 4.5 16 4.5S27 9 27 15s-4.9 10-11 10zm6-7.5c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1.1-1 1.3-.2.2-.4.2-.7.1-2-.9-3.4-1.9-4.7-3.6-.4-.5 0-.7.3-1 .2-.2.4-.5.6-.7.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.1 1.3 3.3c.2.2 2.3 3.6 5.7 5 2.7 1.1 3.2.9 3.8.8.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4z"/></svg></a>' : "");
  }

  function mount(active, mainHtml) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.innerHTML = header(active) + '<main id="mepMain">' + mainHtml + "</main>" + footer();
    var btn = document.getElementById("mepLangBtn");
    if (btn) btn.addEventListener("click", function () {
      LS.set("mep-lang", lang === "ar" ? "en" : "ar");
      location.reload();
    });
    reveal();
  }

  function reveal() {
    var els = document.querySelectorAll(".mep-fade");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: .08 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- عناصر مشتركة ---------- */
  function daysLeft(deadline) {
    if (!deadline) return null;
    var end = new Date(deadline + "T23:59:59");
    var diff = Math.ceil((end - Date.now()) / 86400000);
    return diff;
  }
  function countdownHtml(o) {
    if (!o.deadline) return '<span class="mep-count">' + esc(t(T.noDate)) + "</span>";
    var d = daysLeft(o.deadline);
    if (d === null) return "";
    if (d < 0) return '<span class="mep-count soon">' + esc(t(T.closedNow)) + "</span>";
    var label = t(T.daysLeft).replace("{n}", d);
    return '<span class="mep-count' + (d <= 45 ? " soon" : "") + '">⏳ ' + esc(label) + "</span>";
  }
  function fmtDate(iso) {
    if (!iso) return esc(t(T.noDate));
    try {
      var dt = new Date(iso + "T00:00:00");
      return dt.toLocaleDateString(lang === "ar" ? "ar-EG-u-nu-latn" : "en-GB", { year: "numeric", month: "long", day: "numeric" });
    } catch (e) { return iso; }
  }

  var favs = LS.get("mep-favs", []);
  function isFav(id) { return favs.indexOf(id) !== -1; }
  function toggleFav(id, el) {
    var i = favs.indexOf(id);
    if (i === -1) favs.push(id); else favs.splice(i, 1);
    LS.set("mep-favs", favs);
    el.classList.toggle("on", isFav(id));
    el.textContent = isFav(id) ? "❤" : "♡";
  }

  function cardHtml(o, page) {
    var det = page || ("china-language.html#" + o.id);
    return '' +
    '<article class="mep-card mep-fade" data-id="' + esc(o.id) + '" data-status="' + esc(o.status) + '" data-text="' + esc((t(o.name) + " " + t(o.city) + " " + t(o.program)).toLowerCase()) + '">' +
      '<div class="mep-card-head"><div><h3>' + esc(t(o.name)) + '<span class="en">' + esc(t({ ar: o.name.en || "", en: o.name.ar || "" })) + "</span></h3></div>" +
        '<span class="mep-badge ' + esc(o.status) + '">' + (o.status === "open" ? "🟢 " : o.status === "closed" ? "🔴 " : "🟡 ") + esc(t(T.status[o.status])) + "</span></div>" +
      '<div class="mep-card-body"><ul class="mep-rows">' +
        "<li><span class='k'>" + esc(t(T.city)) + '</span><span class="v">📍 ' + esc(t(o.city)) + "</span></li>" +
        "<li><span class='k'>" + esc(t(T.degree)) + '</span><span class="v">' + esc(t(o.program)) + "</span></li>" +
        "<li><span class='k'>" + esc(t(T.duration)) + '</span><span class="v">' + esc(t(o.duration)) + "</span></li>" +
        "<li><span class='k'>" + esc(t(T.tuition)) + '</span><span class="v">' + esc(t(o.tuition)) + "</span></li>" +
      "</ul>" +
      '<div class="mep-deadline"><span>📅 ' + esc(t(T.deadline)) + ": <strong>" + fmtDate(o.deadline) + "</strong></span>" + countdownHtml(o) + "</div>" +
      (o.deadlineNote ? '<p class="mep-note" style="margin-top:10px">' + esc(t(o.deadlineNote)) + "</p>" : "") +
      '<div class="mep-card-foot">' +
        '<a class="mep-btn" href="' + esc(det) + '">' + esc(t(T.details)) + ' ←</a>' +
        '<button class="mep-fav' + (isFav(o.id) ? " on" : "") + '" data-fav="' + esc(o.id) + '" aria-label="favorite">' + (isFav(o.id) ? "❤" : "♡") + "</button>" +
        '<span class="mep-src">' + esc(t(T.source)) + ': <a href="' + esc(o.sourceUrl) + '" target="_blank" rel="noopener">' + esc(o.sourceUrl.replace(/^https?:\/\//, "")) + "</a> — " + esc(o.sourceDate) + "</span>" +
      "</div></div></article>";
  }

  function bindCards(root) {
    root.querySelectorAll("[data-fav]").forEach(function (b) {
      b.addEventListener("click", function () { toggleFav(b.getAttribute("data-fav"), b); });
    });
  }

  function toolsHtml() {
    return '<div class="mep-tools">' +
      '<input type="search" id="mepSearch" placeholder="' + esc(t(T.search)) + '">' +
      '<select id="mepStatus"><option value="">' + esc(t(T.all)) + "</option>" +
      '<option value="open">' + esc(t(T.status.open)) + "</option>" +
      '<option value="pending">' + esc(t(T.status.pending)) + "</option>" +
      '<option value="closed">' + esc(t(T.status.closed)) + "</option>" +
      '<option value="fav">♥ ' + esc(t(T.favsOnly)) + "</option></select></div>";
  }
  function bindTools() {
    var s = document.getElementById("mepSearch"), sel = document.getElementById("mepStatus");
    function apply() {
      var q = (s.value || "").trim().toLowerCase(), st = sel.value;
      document.querySelectorAll(".mep-card[data-id]").forEach(function (c) {
        var ok = (!q || c.getAttribute("data-text").indexOf(q) !== -1) &&
                 (!st || (st === "fav" ? isFav(c.getAttribute("data-id")) : c.getAttribute("data-status") === st));
        c.style.display = ok ? "" : "none";
      });
    }
    if (s) s.addEventListener("input", apply);
    if (sel) sel.addEventListener("change", apply);
  }

  /* ---------- صفحات الفئات ---------- */
  var CATS = {
    "china-language": { grad: "g-lang", ico: "🕐", title: { ar: "برامج اللغة الصينية — مارس 2027", en: "Chinese Language Programs — March 2027" }, sub: { ar: "مدة الدراسة: من 6 أشهر إلى سنة واحدة — يبدأ التقديم بمعهد هاربين وتُضاف جامعات أخرى تباعًا.", en: "Duration: 6 months to 1 year — starting with Harbin Institute of Technology; more universities to come." } },
    "bachelor": { grad: "g-bach", ico: "🎓", title: { ar: "منح البكالوريوس", en: "Bachelor Scholarships" }, sub: { ar: "مدة الدراسة: من 4 إلى 6 سنوات — الجامعات والتخصصات والمنح وشروط التقديم.", en: "Duration: 4 to 6 years — universities, majors, scholarships and requirements." } },
    "graduate": { grad: "g-grad", ico: "🛡", title: { ar: "منح الدراسات العليا", en: "Graduate Scholarships" }, sub: { ar: "ماجستير ودكتوراه: من سنتين إلى 4 سنوات — الجامعات والتخصصات وشروط التقديم.", en: "Master's & PhD: 2 to 4 years — universities, majors and requirements." } }
  };

  function renderCategory(cat) {
    var c = CATS[cat];
    var list = D.opportunities.filter(function (o) { return o.category === cat; });
    var cards = list.length
      ? list.map(function (o) { return cardHtml(o, cat === "china-language" ? "china-language.html#" + o.id : ""); }).join("")
      : '<div class="mep-empty mep-fade"><div class="big">🗂️</div><p>' + esc(t(T.empty)) + '</p><a class="mep-btn ghost" href="../scholarships/">' + esc(t(T.browseGuides)) + " ←</a></div>";
    mount(cat === "china-language" ? "lang" : cat, banner(c.title, c.sub) +
      '<div class="mep-wrap">' + toolsHtml() + '<div class="mep-list">' + cards + "</div></div>" +
      detailBlocksFor(cat));
    bindCards(document.body); bindTools();
  }

  /* تفاصيل موسعة لجامعات اللغة داخل نفس الصفحة (مرساة #id) */
  function detailBlocksFor(cat) {
    if (cat !== "china-language") return "";
    return '<div class="mep-wrap">' + D.opportunities.filter(function (o) { return o.category === cat; }).map(function (o) {
      return '<section class="mep-section mep-fade" id="' + esc(o.id) + '">' +
        "<h3>" + esc(t(o.name)) + " — " + esc(t(T.details)) + "</h3>" +
        "<h4 style='margin:0 0 8px;color:var(--mep-navy)'>" + esc(t(T.feesList)) + "</h4><ul>" +
          o.fees.map(function (f) { return "<li>" + esc(t(f)) + "</li>"; }).join("") + "</ul>" +
        "<h4 style='margin:14px 0 8px;color:var(--mep-navy)'>" + esc(t(T.eligibility)) + "</h4><ul>" +
          o.eligibility.map(function (f) { return "<li>" + esc(t(f)) + "</li>"; }).join("") + "</ul>" +
        '<p style="margin:12px 0 0"><strong>' + esc(t(T.contactLbl)) + ":</strong> " + esc(t(o.contactInfo)) + "</p>" +
        '<div class="mep-card-foot"><a class="mep-btn" href="' + esc(o.applyUrl) + '" target="_blank" rel="noopener">' + esc(t(T.apply)) + ' ↗</a>' +
        '<span class="mep-src">' + esc(t(T.source)) + ': <a href="' + esc(o.sourceUrl) + '" target="_blank" rel="noopener">' + esc(o.sourceUrl.replace(/^https?:\/\//, "")) + "</a> — " + esc(t(T.lastUpd)) + ": " + esc(o.sourceDate) + "</span></div>" +
        '<p class="mep-note">' + esc(t(T.verifyWarn)) + "</p>" +
      "</section>";
    }).join("") + "</div>";
  }

  /* ---------- صفحة hub: بطاقات الفئات + المساعد ---------- */
  function renderHub() {
    var order = ["china-language", "bachelor", "graduate"];
    var pages = { "china-language": "china-language.html", bachelor: "bachelor.html", graduate: "graduate.html" };
    var catsHtml = order.map(function (k) {
      var c = CATS[k];
      return '<a class="mep-cat ' + c.grad + ' mep-fade" href="' + pages[k] + '">' +
        '<span class="ico">' + c.ico + "</span><h3>" + esc(t(c.title)) + "</h3><p>" + esc(t(c.sub)) + "</p>" +
        '<span class="go">' + esc(t(T.details)) + " ←</span></a>";
    }).join("");

    var extra = [
      ["hungary.html",  "g-grad", "🇭🇺", T.nav.hungary,  { ar: "منحة حكومة المجر الممولة بالكامل لجميع المراحل.", en: "Hungary's fully funded government scholarship for all levels." }],
      ["kazakhstan.html", "g-bach", "🇰🇿", T.nav.kazakh, { ar: "550 مقعدًا سنويًا بتغطية كاملة للرسوم ومعاش شهري.", en: "550 annual seats covering tuition plus a monthly stipend." }],
      ["exchange.html", "g-lang", "🌍", T.nav.exchange, { ar: "مقاعد لطلاب اليمن في الصين والمجر والمغرب وتونس وكوبا والجزائر.", en: "Seats for Yemeni students in China, Hungary, Morocco, Tunisia, Cuba and Algeria." }],
      ["file-prep.html", "g-bach", "📋", T.nav.fileprep, { ar: "قائمة تفاعلية لتجهيز وثائق كل منحة خطوة بخطوة.", en: "An interactive checklist to prepare each scholarship's documents." }]
    ].map(function (e) {
      return '<a class="mep-cat ' + e[1] + ' mep-fade" href="' + e[0] + '"><span class="ico">' + e[2] + "</span><h3>" + esc(t(e[3])) + "</h3><p>" + esc(t(e[4])) + '</p><span class="go">' + esc(t(T.details)) + " ←</span></a>";
    }).join("");

    var quiz = '<section class="mep-quiz mep-fade" id="finder">' +
      "<h3>🧭 " + esc(t(T.quizTitle)) + "</h3><p style='margin:0;color:var(--mep-muted);font-size:.9rem'>" + esc(t(T.quizSub)) + "</p>" +
      '<p class="q">' + esc(t(T.qLevel)) + '</p><div class="opts" data-q="level">' +
        chip("lang", T.lvLang) + chip("bach", T.lvBach) + chip("grad", T.lvGrad) + "</div>" +
      '<p class="q">' + esc(t(T.qCountry)) + '</p><div class="opts" data-q="country">' +
        chip("china", T.cChina) + chip("hungary", T.cHungary) + chip("kazakh", T.cKazakh) + chip("any", T.cAny) + "</div>" +
      '<p class="q">' + esc(t(T.qFund)) + '</p><div class="opts" data-q="fund">' +
        chip("full", T.fFull) + chip("self", T.fSelf) + "</div>" +
      '<div style="margin-top:18px"><button class="mep-btn" id="mepQuizGo">' + esc(t(T.quizBtn)) + "</button></div>" +
      '<div class="quiz-result mep-quiz-result" id="mepQuizOut"></div></section>';

    mount("hub",
      banner({ ar: "أنواع المنح الدراسية", en: "Scholarship Types" }, { ar: "اختر برنامج المنح الدراسية الذي يناسب طموحاتك التعليمية", en: "Choose the scholarship program that fits your educational goals" }) +
      '<div class="mep-wrap"><div class="mep-cats">' + catsHtml + '</div><div class="mep-cats">' + extra + "</div>" + quiz + "</div>");

    var ans = {};
    document.querySelectorAll(".mep-quiz .opts").forEach(function (g) {
      g.querySelectorAll(".mep-chip").forEach(function (b) {
        b.addEventListener("click", function () {
          g.querySelectorAll(".mep-chip").forEach(function (x) { x.classList.remove("on"); });
          b.classList.add("on");
          ans[g.getAttribute("data-q")] = b.getAttribute("data-v");
        });
      });
    });
    document.getElementById("mepQuizGo").addEventListener("click", function () {
      var out = document.getElementById("mepQuizOut");
      var res = [];
      function add(url, name, why) { res.push({ url: url, name: name, why: why }); }
      if (ans.level === "lang" && (ans.country === "china" || ans.country === "any"))
        add("china-language.html", t(T.nav.lang), t({ ar: "برامج لغة تبدأ مارس 2027", en: "Language programs starting March 2027" }));
      if (ans.country === "hungary" || (ans.country === "any" && ans.fund === "full"))
        add("hungary.html", t(T.nav.hungary), t({ ar: "تمويل كامل: رسوم + معاش + سكن + تأمين", en: "Full funding: tuition + stipend + housing + insurance" }));
      if (ans.country === "kazakh" || (ans.country === "any" && ans.fund === "full"))
        add("kazakhstan.html", t(T.nav.kazakh), t({ ar: "تغطية كاملة للرسوم مع معاش شهري", en: "Full tuition coverage plus a monthly stipend" }));
      if (ans.country === "any" && ans.level !== "lang")
        add("exchange.html", t(T.nav.exchange), t({ ar: "لطلاب اليمن بمعدل فوق 85% — عدة دول", en: "For Yemeni students above 85% — several countries" }));
      if ((ans.level === "bach" || ans.level === "grad") && (ans.country === "china"))
        add(ans.level === "bach" ? "bachelor.html" : "graduate.html", t(ans.level === "bach" ? T.nav.bachelor : T.nav.graduate), t({ ar: "قسمك الدراسي — تُضاف الجامعات تباعًا", en: "Your study level — universities being added" }));
      var seen = {}, uniq = res.filter(function (r) { if (seen[r.url]) return false; seen[r.url] = 1; return true; });
      out.innerHTML = uniq.length
        ? uniq.map(function (r) {
            return '<div class="mep-card" style="margin-bottom:10px"><div class="mep-card-body" style="display:flex;justify-content:space-between;gap:10px;align-items:center;flex-wrap:wrap">' +
              "<div><strong>" + esc(r.name) + "</strong><br><span style='color:var(--mep-muted);font-size:.86rem'>" + esc(r.why) + "</span></div>" +
              '<a class="mep-btn" href="' + esc(r.url) + '">' + esc(t(T.details)) + " ←</a></div></div>";
          }).join("")
        : '<p class="mep-note">' + esc(t(T.quizNone)) + "</p>";
      out.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    function chip(v, label) { return '<button class="mep-chip" data-v="' + v + '">' + esc(t(label)) + "</button>"; }
    bindCards(document.body);
  }

  /* ---------- صفحات التفاصيل (مجرية / كازاخستانية / تبادل) ---------- */
  function renderDetail(key) {
    var d = D.details[key];
    var navKey = key === "kazakhstan" ? "kazakh" : key;
    var html = '<div class="mep-wrap">' +
      '<section class="mep-hero-card mep-fade">' +
        '<span class="badge2">' + esc(t(d.badge)) + "</span>" +
        "<h2>" + esc(t(d.title)) + "</h2>" +
        "<p>" + esc(t(d.about)) + "</p>" +
        '<div class="mep-deadline" style="border-top-color:rgba(255,255,255,.3);color:#fff;margin-top:16px">' +
          "<span style='color:#fff'>📅 " + esc(t(T.deadline)) + ": <strong style='color:#ffd9a0'>" + fmtDate(d.deadline) + "</strong></span>" + countdownHtml(d) + "</div>" +
        '<p class="mep-note" style="background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.25);color:#fff">' + esc(t(d.deadlineNote)) + "</p>" +
      "</section>";

    if (d.coverage && d.coverage.length)
      html += '<section class="mep-section mep-fade"><h3>💠 ' + esc(t(T.coverage)) + "</h3><ul>" +
        d.coverage.map(function (x) { return "<li>" + esc(t(x)) + "</li>"; }).join("") + "</ul></section>";

    html += '<section class="mep-section mep-fade"><h3>📄 ' + esc(t(T.requirements)) + "</h3><ul>" +
      d.requirements.map(function (x) { return "<li>" + esc(t(x)) + "</li>"; }).join("") + "</ul></section>";

    html += '<section class="mep-section mep-fade"><h3>🧭 ' + esc(t(T.howToApply)) + "</h3><ol>" +
      d.howToApply.map(function (x) { return "<li>" + esc(t(x)) + "</li>"; }).join("") + "</ol>" +
      (d.applyUrl ? '<div class="mep-card-foot"><a class="mep-btn" href="' + esc(d.applyUrl) + '" target="_blank" rel="noopener">' + esc(t(T.apply)) + " ↗</a></div>" : "") +
      "</section>";

    if (d.notes && d.notes.length)
      html += '<section class="mep-section mep-fade"><h3>⚠️ ' + esc(t(T.important)) + "</h3>" +
        d.notes.map(function (x) { return '<p class="mep-note">' + esc(t(x)) + "</p>"; }).join("") + "</section>";

    html += '<section class="mep-section mep-fade"><h3>🔗 ' + esc(t(T.source)) + "</h3>" +
      "<p>" + (d.sourceUrl
        ? '<a href="' + esc(d.sourceUrl) + '" target="_blank" rel="noopener">' + esc(d.sourceUrl) + "</a>"
        : '<span class="mep-verify">' + esc(t(T.status.pending)) + " — " + esc(t({ ar: "إعلانات وزارة التعليم العالي اليمنية", en: "Yemeni MoHESR announcements" })) + "</span>") +
      "<br><span class='mep-src'>" + esc(t(T.lastUpd)) + ": " + esc(d.sourceDate) + "</span></p>" +
      '<p class="mep-note">' + esc(t(T.verifyWarn)) + "</p></section>";

    html += '<p style="text-align:center;margin:26px 0"><a class="mep-btn ghost" href="file-prep.html">' + esc(t(T.nav.fileprep)) + " — " + esc(t({ ar: "جهّز وثائقك الآن", en: "prepare your documents now" })) + " ←</a></p></div>";

    mount(navKey, html);
  }

  /* ---------- صفحة ملف المنحة ---------- */
  function renderFilePrep() {
    var fp = D.filePrep;
    var checks = LS.get("mep-checks", {});
    function block(title, items, srcUrl, upd) {
      var done = items.filter(function (i) { return checks[i.id]; }).length;
      var rows = items.map(function (i) {
        return '<label class="mep-check-item' + (checks[i.id] ? " done" : "") + '" data-cid="' + esc(i.id) + '">' +
          '<input type="checkbox"' + (checks[i.id] ? " checked" : "") + ">" +
          '<span class="t">' + esc(t(i.text)) + "</span>" +
          '<span class="mep-req-tag ' + esc(i.req) + '">' + esc(t(T.reqTags[i.req])) + "</span></label>";
      }).join("");
      return '<section class="mep-section mep-fade"><h3>' + esc(t(title)) + "</h3>" +
        '<div class="mep-progress"><i style="width:' + Math.round(done / items.length * 100) + '%"></i></div>' +
        '<div class="mep-progress-label">' + esc(t(T.progressOf).replace("{d}", done).replace("{t}", items.length)) + "</div>" +
        '<div class="mep-check" style="margin-top:12px">' + rows + "</div>" +
        (srcUrl ? '<p class="mep-src" style="margin-top:12px">' + esc(t(T.source)) + ': <a href="' + esc(srcUrl) + '" target="_blank" rel="noopener">' + esc(srcUrl.replace(/^https?:\/\//, "")) + "</a> — " + esc(t(T.lastUpd)) + ": " + esc(upd) + "</p>"
                : '<p class="mep-src" style="margin-top:12px"><span class="mep-verify">' + esc(t(T.status.pending)) + "</span> — " + esc(t(T.lastUpd)) + ": " + esc(upd) + "</p>") +
        "</section>";
    }

    var html = banner(T.fpTitle, T.fpSub) + '<div class="mep-wrap" style="margin-top:26px">' +
      '<p class="mep-note">' + esc(t(T.verifyWarn)) + "</p>" +
      block(fp.general.title, fp.general.items, "", D.updated) +
      fp.scholarships.map(function (s) { return block(s.name, s.items, s.sourceUrl, s.updated); }).join("") +
      "</div>";

    mount("fileprep", html);

    document.querySelectorAll(".mep-check-item").forEach(function (el) {
      el.querySelector("input").addEventListener("change", function (ev) {
        var id = el.getAttribute("data-cid");
        checks[id] = ev.target.checked;
        if (!ev.target.checked) delete checks[id];
        LS.set("mep-checks", checks);
        el.classList.toggle("done", ev.target.checked);
        var sec = el.closest(".mep-section");
        var items = sec.querySelectorAll(".mep-check-item");
        var done = sec.querySelectorAll(".mep-check-item.done").length;
        sec.querySelector(".mep-progress i").style.width = Math.round(done / items.length * 100) + "%";
        sec.querySelector(".mep-progress-label").textContent = t(T.progressOf).replace("{d}", done).replace("{t}", items.length);
      });
    });
  }

  /* ---------- تصدير ---------- */
  window.MEP = {
    renderHub: renderHub,
    renderCategory: renderCategory,
    renderDetail: renderDetail,
    renderFilePrep: renderFilePrep,
    t: t,
    T: T
  };
})();
