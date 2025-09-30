import React from "react";

function InstagramBanner() {
  return (
    <section className="w-full" dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <img src="/images/Frame 3.png" alt="insta1" className="w-full h-48 md:h-60 object-cover" />
        <img src="/images/Rectangle 57.png" alt="insta2" className="w-full h-48 md:h-60 object-cover" />
        <img src="/images/Frame 5.png" alt="insta3" className="w-full h-48 md:h-60 object-cover" />
      </div>
    </section>
  );
}

export default InstagramBanner; 