import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ReviewStyle.css";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="w-[1100px]  m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div
              key={index}
              className="bg-white h-[420px] text-black rounded-xl mx-2"
            >
              <div className="h-44 rounded-t-xl bg-sky-800 flex justify-center items-center">
                <img
                  src={d.img || "https://via.placeholder.com/150"}
                  alt={d.name}
                  className="h-28 w-28 rounded-full"
                />
              </div>
              <div className=" flex flex-col justify-center items-center gap-4 p-4">
                <p className="font-bold">{d.name}</p>
                <p className="text-center">{d.review}</p>
                <button className="bg-orange-500 text-white text-lg px-6 py-1">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const data = [
  {
    name: "Jane Smith",
    img: "data:image/jpeg;base64,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",
    review:
      "I found my dream internship through this website! The user interface is intuitive, and the application process was straightforward. ",
  },
  {
    name: "Jane Smith",
    img: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg&ga=GA1.1.28284446.1690382993&semt=sph",
    review:
      "Excellent resource for job seekers. The job alerts feature helped me stay updated on the latest opening ,it is highly recommended.",
  },
  {
    name: "Jane Smith",
    img: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
    review:
      "You can tailor your search based on location, industry, job type, and more, making it easier to find relevant opportunities.",
  },

  {
    name: "Jane Smith",
    img: "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-with-curly-hair-brown-hat_1142-42780.jpg?size=626&ext=jpg&ga=GA1.1.28284446.1690382993&semt=sph",
    review:
      "Your profile is your first impression. Ensure it’s complete, with a professional photo, a compelling summary, and detailed work experience. ",
  },
  {
    name: "Alex Johnson",
    img: "https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?t=st=1718569340~exp=1718572940~hmac=8d04181d5cde995ac3513347f1ad38dda864194d12709ea27b5fc1d47767ec0e&w=740",
    review:
      "Not very user-friendly. The navigation is confusing, and the search functionality is lacking. I expected more from such a reputed site",
  },
];

export default Reviews;
