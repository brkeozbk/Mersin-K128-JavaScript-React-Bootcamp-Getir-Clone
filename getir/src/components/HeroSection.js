import Slider from "react-slick";

export default function Header() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg" />
        </div>
        <div>
          <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" />
        </div>
      </Slider>
    </div>
  );
}
