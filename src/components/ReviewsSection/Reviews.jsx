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
    {
      name: "user1",
      logo: "css3",
      skill: "4⭐",
      color: "hue-rotate-[240deg]",
      photo: null,
    },
    {
      name: "user2",
      logo: "react",
      skill: "5⭐",
      color: "hue-rotate-[58deg]",
      photo: null,
    },

    {
      name: "user3",
      logo: "sass",
      skill: "4.3⭐",
      color: "hue-rotate-[240deg]",
      photo: null,
    },
    {
      name: "user4",
      logo: "sass",
      skill: "4.3⭐",
      color: "hue-rotate-[240deg]",
      photo: null,
    },

    {
      name: "user5",
      logo: "react",
      skill: "5⭐",
      color: "hue-rotate-[58deg]",
      photo: null,
    },
    {
      name: "user6",
      logo: "vue",
      skill: "4.6⭐",
      color: "hue-rotate-[225deg]",
      photo: null,
    },
    {
      name: "user7",
      logo: "react",
      skill: "5⭐",
      color: "hue-rotate-[58deg]",
      photo: null,
    },
  ];
  const handleReviewClick = () => {
    // Handle the click event, e.g., navigate to a review form or open a modal
    alert("Review button clicked!");
  };

  return (
    <div className="h-screen bg-[#19173284] text-white flex items-center justify-center">
      <div className="max-w-5xl">
        <div className="text-center flex justify-center font-bold ">
          <h1 className="text-3xl  mb-6 mt-1  pb-6">Featured Reviews</h1>
        </div>
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
          // modules={[Autoplay]}
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
                    {lang.photo ? (
                      <img
                        src={lang.photo}
                        alt={lang.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <ion-icon
                        name="person-circle"
                        class="text-5xl text-gray-500"
                      ></ion-icon>
                    )}
                  </div>

                  <h2 className="text-3xl mt-2 font-semibold">{lang.name}</h2>
                  <p className="para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laborum ipsum omnis nostrum quasi voluptatibus earum soluta
                    delectus sunt, consequuntur molestiae.
                  </p>
                  <div className="bg-red-600 skill-level">{lang.skill}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-8">
          <button
            onClick={handleReviewClick}
            className="bg-customColor2 hover:bg-customColor3 text-white font-bold py-2 px-4 rounded"
          >
            Add a Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
