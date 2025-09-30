import React from "react";

function Newsletter() {
  return (
    <section className="w-full bg-white" dir="rtl">
      <div className="max-w-[1200px] mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        <div className="lg:col-span-2">
          <h4 className="text-xl md:text-2xl font-semibold mb-3">الاشتراك في النشرة البريدية</h4>
          <div className="flex gap-2 max-w-xl">
            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-100">✈️</span>
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 h-10 rounded-md border border-gray-300 px-3 text-sm focus:outline-none"
            />
          </div>
        </div>
        <div className="flex gap-3 justify-start lg:justify-end">
          <div className="flex items-center gap-2 border rounded-lg px-4 py-3">
            <span className="h-8 w-8 inline-flex items-center justify-center rounded-full bg-gray-100">✉️</span>
            <div>
              <div className="text-xs text-gray-500">راسلنا</div>
              <div className="text-sm">Allura@gmail.com</div>
            </div>
          </div>
          <div className="flex items-center gap-2 border rounded-lg px-4 py-3">
            <span className="h-8 w-8 inline-flex items-center justify-center rounded-full bg-gray-100">📞</span>
            <div>
              <div className="text-xs text-gray-500">اتصل بنا</div>
              <div className="text-sm">009612345678932</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter; 