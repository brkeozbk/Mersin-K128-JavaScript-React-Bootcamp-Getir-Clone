import Slider from "react-slick";
import Banners from 'api/banner.json'
import { useState, useEffect } from "react";
import Title from "./ui/Title";
export default function Header() {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        setBanners(Banners);
        
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

    return (
        <div className="container mx-auto">
            <Title> Kapmanya </Title>
           <Slider {...settings}>
       {banners.length && banners.map((banner, index)=>(
           <div key={banner.id}>
               <img src={banner.image} />
           </div>
       ))}
      </Slider>
        </div>
    )
}
