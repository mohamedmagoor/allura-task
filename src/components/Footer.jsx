import { Facebook, Mail, PhoneCall, Send } from "lucide-react";
import { FaFacebookF, FaSnapchatGhost, FaTwitter } from "react-icons/fa";
import React from "react";
import { RiInstagramLine, RiWhatsappFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className="w-full relative bg-[#F6F6F6] pt-8 overflow-hidden">
      <img
        className="absolute hidden lg:block z-[0] top-20 left-[-290px] w-[500px]"
        src="/images/bgbgbg.png"
        alt=""
      />
      <img
        className="absolute hidden lg:block z-[0] bottom-[-100px] right-[-300px] w-[500px]"
        src="/images/bgbgbg.png"
        alt=""
      />
      <div className="max-w-[1200px]  mx-auto px-2 ">
        <div className="first-row pb-[30px] border-b  border-[#00000030] px-5 md:flex-row flex-col   flex align-center justify-between  gap-4 mb-8">
          <p className="text-[24px] flex items-center font-[Scheherazade_New]">
            الاشتراك في النشرة البريدية
          </p>
          {/* input مع زر الإرسال بداخله */}
          <div className="gmailus w-fit flex items-center relative">
            <input
              type="text"
              placeholder="أدخل بريدك الالكتروني"
              className="p-2 px-4 bg-white w-[286px] sm:w-[429px] h-[48px]  rounded placeholder:text[#C8C8C8]"
            />
            <button
              className="absolute top-1/2 -translate-y-1/2 left-2 bg-[#202020] flex items-center justify-center text-white w-9 h-9 rounded-full"
              style={{ direction: "ltr" }}
            >
              <Send size={16} />
            </button>
          </div>
          <div className="flex gap-2 sm:gap-4">
            <div className="callus border-[#20202012] border-1 p-2 flex justify-center items-center gap-4  bg-[#20202012]">
              <div className="icon flex items-center justify-center bg-[#202020] w-12 h-12 rounded-full ">
                <PhoneCall className="text-white" />
              </div>
              <div className="content">
                <p className="font-[Scheherazade_New] font-bold text-[18px]">
                  اتصل بنا
                </p>
                <p className="font-[Scheherazade_New] text-[16px]">
                  009612345678932
                </p>
              </div>
            </div>
            <div className="email-us border-[#20202012] border-1 p-2 flex justify-center items-center gap-4 bg-[#20202012]">
              <div className="icon flex items-center justify-center bg-[#202020] w-12 h-12 rounded-full ">
                <Mail className="text-white" />
              </div>
              <div className="content">
                <p className="font-[Scheherazade_New] font-bold text-[18px]">
                  راسلنا
                </p>
                <p className="font-[Scheherazade_New] text-[16px]">
                  Allura@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* بداية secRow */}
        <div className="secRow border-b z-[999]  border-[#00000030] grid grid-cols-1 md:grid-cols-5 gap-1 md:py-8 items-stretch text-center md:text-right">
          {/* شعار منصة العملاء */}
          <div className="flex flex-col md:border-b-0 border-b border-[#00000030] flex-start md:items-start gap-2  md:border-l md:border-[#00000030] p-5 h-full">
            <img
              src="/images/Group 5.svg"
              alt="منصة العملاء"
              className="h-[55px] z-[999]  mx-start w-[90px]"
            />
            <span className="text-[#202020] z-[999] text-start font-[Scheherazade_New]  text-[18px] mt-2">
              متجر الورا هو وجهة مميزة لمنتجات العناية والمكياج والعطور، حيث
              يقدم مجموعة متنوعة من المستحضرات ذات الجودة العالية لتلبية
              احتياجات العملاء.
            </span>
            <div className="icons flex gap-1">
              <div className="bg-[#597445] flex items-center justify-center w-6 h-6 rounded-full">
                <FaFacebookF color="#fff" size={12} />
              </div>
              <div className="bg-[#597445] flex items-center justify-center w-6 h-6 rounded-full">
                <FaTwitter color="#fff" size={12} />
              </div>
              <div className="bg-[#597445] flex items-center justify-center w-6 h-6 rounded-full">
                <RiInstagramLine color="#fff" size={12} />
              </div>
              <div className="bg-[#597445] flex items-center justify-center w-6 h-6 rounded-full">
                <FaSnapchatGhost color="#fff" size={12} />
              </div>
              <div className="bg-[#597445] flex items-center justify-center w-6 h-6 rounded-full">
                <RiWhatsappFill color="#fff" size={12} />
              </div>
            </div>
          </div>
          {/* حسابي */}
          <div className="flex md:border-b-0 border-b border-[#00000030]  flex-col gap-3 md:border-l md:border-[#00000030] p-5 h-full">
            <h5 className="font-semibold text-start mb-2 font-[Scheherazade_New] text-[20px] text-[#202020]">
              حسابي
            </h5>
            <ul className="space-y-3 text-start  text-[#202020]">
              <li>
                <a
                  href="#"
                  className="hover:text-[#597445] text-[18px]  font-[Scheherazade_New]"
                >
                  حسابى
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#597445] text-[18px]  font-[Scheherazade_New] text-[#597445]"
                >
                  طلباتي
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#597445] text-[18px]  font-[Scheherazade_New]"
                >
                  سلة المشتريات
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#597445] text-[18px]  font-[Scheherazade_New]"
                >
                  المفضلة
                </a>
              </li>
            </ul>
          </div>
          {/* روابط مهمة */}
          <div className="flex border-b border-[#00000030] md:border-b-0 flex-col text-start gap-2 md:border-l md:border-[#00000030] p-5 h-full">
            <h5 className="font-bold text-[20px] font-[Scheherazade_New] mb-2 text-[#202020]">
              روابط مهمة
            </h5>
            <ul className="space-y-3 text-sm text-[#202020]">
              <li>
                <a
                  href="#"
                  className="hover:text-[#597445] text-[18px]  font-[Scheherazade_New]"
                >
                  من نحن
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#597445] text-[18px]  font-[Scheherazade_New]"
                >
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#597445] text-[18px]  font-[Scheherazade_New]"
                >
                  الشروط والاحكام
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#597445] text-[18px]  font-[Scheherazade_New]"
                >
                  الدعم الفني
                </a>
              </li>
            </ul>
          </div>
          {/* تواصل معنا */}
          <div className="flex text-start relative flex-col gap-2 md:border-l md:border-[#00000030] h-full p-5">
            <h5 className="font-bold mb-2 text-[#202020]">تواصل معنا</h5>
            <div className="flex flex-col  gap-5 text-sm text-[#202020] justify-center items-center md:items-end">
              <span className="flex text-[16px] justify-center ml-auto items-center gap-1">
                <PhoneCall size={16} className="text-[#597445]" />{" "}
                009612345678932
              </span>
              <span className="flex text-[16px] font-[Scheherazade_New] items-center ml-auto gap-1">
                <PhoneCall size={16} className="text-[#597445]" />{" "}
                <span className="font-[Scheherazade_New]">009612345678932</span>
              </span>
              <span className="flex text-[16px] items-center ml-auto gap-1">
                <Mail size={16} className="text-[#597445]" />
                <a
                  href="https://salla.sa"
                  className="hover:underline text-[16px]"
                >
                  https://salla.sa
                </a>
              </span>
              <img
                src="/images/mnsa.svg"
                alt="Allura"
                className="w-[193px] absolute left-0 top-0 h-[150px] md:hidden block mt-4 ml-auto  "
              />
            </div>
          </div>
          {/* وصف المتجر والشعار */}
          <div className="md:flex flex-col hidden  items-center md:items-end gap-2 h-full p-5">
            <img
              src="/images/mnsa.svg"
              alt="Allura"
              className="w-[193px] h-[195px] z-[99] "
            />
          </div>
        </div>
        {/* نهاية secRow */}
        <div className="credintioalSec mt-5 md:mt-0  md:p-5 flex justify-center sm:justify-between items-center ">
          <div className="flex items-center gap-1 md:gap-2 text-[#202020] text-[16px]">
            <img src="/images/photo_2021-11-21_10-54-47 1.svg" alt="" />
            <span> الرقم الضريبي : 546987552</span>
          </div>
          <div className="text-[20px] hidden md:block flex justify-center text-[#202020]">
            جميع الحقوق محفوظه لدي جليمر
          </div>

          <div className="flex gap-0 sm:gap-2">
            <img src="/images/visa.svg" alt="" />
            <img src="/images/master.svg" alt="" />
            <img src="/images/paypal.svg" alt="" />
            <img src="/images/mada.svg" alt="" />
          </div>
        </div>
        <div className="text-[20px] md:hidden pb-5  flex justify-center text-[#202020]">
          جميع الحقوق محفوظه لدي جليمر
        </div>
      </div>
    </footer>
  );
}

export default Footer;
