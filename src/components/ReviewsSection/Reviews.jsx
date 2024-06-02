import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

function Reviews() {
  const [active, setActive] = useState(null);
  const langs = [
    { name: "css3", logo: "css3", skill: "4⭐", color: "hue-rotate-[240deg]" },
    {
      name: "HTML5",
      logo: "html5",
      skill: "5⭐",
      color: "hue-rotate-[240deg]",
    },
    {
      name: "SASS",
      logo: "sass",
      skill: "4.3⭐",
      color: "hue-rotate-[240deg]",
    },
    {
      name: "Javascript",
      logo: "javascript",
      skill: "3.9⭐",
      color: "hue-rotate-[240deg]",
    },
    {
      name: "React js",
      logo: "react",
      skill: "5⭐",
      color: "hue-rotate-[58deg]",
    },
    {
      name: "Vue js",
      logo: "vue",
      skill: "4.6⭐",
      color: "hue-rotate-[225deg]",
    },
    {
      name: "Angular js",
      logo: "angular",
      skill: "4.6⭐",
      color: "hue-rotate-[168deg]",
    },
  ];

  return (
    <div className="h-screen bg-[#00052a] text-white flex items-center justify-center">
      <div className="max-w-5xl">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={(cur) => setActive(cur.realIndex)}
          loop={true}
          centeredSlides={true}
          speed={800}
          autoplay={{
            delay: 3000,
          }}
          modules={[Autoplay]}
        >
          {langs.map((lang, i) => (
            <SwiperSlide key={i}>
              <div className="h-96 flex">
                <div
                  className={`card ${
                    active === i && "card-active"
                  } to-red-600/40 ${lang.color} border-red-600`}
                >
                  <div className="logo">
                    <ion-icon name={`logo-${lang.logo}`}></ion-icon>
                  </div>

                  <h2 className="text-3xl mt-2 font-semibold">{lang.name}</h2>
                  <p className="para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laborum ipsum omnis nostrum quasi voluptatibus earum soluta
                    delectus sunt, consequuntur molestiae
                  </p>
                  <div className="bg-red-600 skill-level">{lang.skill}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Reviews;
