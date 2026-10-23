# نشر Middle East platform على GitHub Pages

**حالة الملفات:** جاهزة للرفع؛ لم تُنشر تلقائيًا على حساب GitHub.

## 1) إنشاء المستودع
1. افتح https://github.com/new بالحساب الصحيح.
2. اكتب اسم المستودع `Middle-East-platform` (GitHub يستخدم الشرطة بدل الفراغ في العناوين).
3. اختر **Public** حتى تعمل الاستضافة المجانية بالطريقة المعتادة، ثم اضغط **Create repository**.
4. لا ترفع ملف ZIP مباشرة على أمل أن يعمل: **فك ضغطه أولًا** وارفع **محتويات** المجلد الذي بداخله إلى جذر المستودع، بما فيها مجلد `.github` وملف `index.html` ومجلد `assets` وملفات `js` و`css`. على الكمبيوتر يمكنك سحب الملفات والمجلدات إلى واجهة GitHub (Add file → Upload files) ثم Commit changes. بديل مناسب: استعمال Git على الكمبيوتر.

## 2) تفعيل Pages
1. افتح المستودع → Settings → Pages.
2. تحت Build and deployment اختر **GitHub Actions**.
3. افتح تبويب Actions وشغّل workflow «Deploy Middle East platform to GitHub Pages» إن لم يبدأ بعد. انتظر حالة نجاح نشر الموقع في تبويب Actions.
4. الرابط المتوقع **بعد النشر الناجح فقط**:
   https://bakeelaldumaini99-design.github.io/Middle-East-platform/
5. تحقق من فتح الرابط من نافذة خاصة أو هاتف، ومن ظهور الشعار ودروس الرياضيات والفيزياء والكيمياء.

## 3) لوحة المشرف
- يعمل المحتوى والعربي والإنجليزي بوضع المعاينة دون قاعدة بيانات.
- التسجيل الحقيقي ومراقبة الطلاب **غير مفعّلين** حتى تضبط مشروع Supabase وتشغّل `supabase_setup.sql` وتهيئ `config.js` وترقّي بريدك الحقيقي إلى admin وفق `README_AR.md`.
- لا تضع service_role أو secret keys في المستودع العام.

## 4) تنبيه
مستودع GitHub عام، وملفات JavaScript والدروس فيه متاحة للزوار؛ لذلك لا تضع فيه بيانات الطلاب ولا المفاتيح الخاصة.
