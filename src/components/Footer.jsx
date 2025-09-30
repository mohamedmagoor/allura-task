import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t" dir="rtl">
      <div className="max-w-[1200px] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <img src="/images/icon.png" alt="Allura" className="h-10 w-auto mb-4" />
          <p className="text-sm text-gray-600">
            متجر الورا هو وجهة مميزة لمنتجات العناية والمكياج والعطور، حيث يقدم مجموعة من المستحضرات ذات الجودة العالية لتلبية احتياجات العملاء.
          </p>
          <div className="flex gap-3 mt-4 text-green-900 text-xl">
            <span></span>
            <span>○</span>
            <span>●</span>
            <span>◎</span>
          </div>
        </div>
        <div>
          <h5 className="font-semibold mb-3">حسابي</h5>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#">حسابي</a></li>
            <li><a href="#">طلباتي</a></li>
            <li><a href="#">سلة المشتريات</a></li>
            <li><a href="#">المفضلة</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">روابط مهمة</h5>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#">من نحن</a></li>
            <li><a href="#">سياسة الخصوصية</a></li>
            <li><a href="#">الشروط والأحكام</a></li>
            <li><a href="#">الدعم الفني</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">تواصل معنا</h5>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>009612345678932</li>
            <li>009612345678932</li>
            <li>https://salla.sa</li>
          </ul>
          <div className="mt-4">
            <img src="/images/Group 1618871156.png" alt="trusted" className="h-20 w-auto" />
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-sm text-gray-600">جميع الحقوق محفوظة لدى جلبر</div>
    </footer>
  );
}

export default Footer; 