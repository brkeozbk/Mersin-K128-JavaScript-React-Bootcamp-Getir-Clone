import Slider from "react-slick";
import Banners from 'api/banner.json'
import { useState, useEffect } from "react";
import Title from "./ui/Title";
import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'

function NexBtn ({ onClick, className }) {
	return (
		<button className={`${className} text-purple-700`} onClick={onClick}>
			<BsArrowRightShort size={22} />
		</button>
	)
}
function PrevBtn ({ onClick, className }) {
	return (
		<button className={`${className} text-purple-700`} onClick={onClick}>
			<  BsArrowLeftShort size={22} />
		</button>
	)
}

export default function Header() {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        setBanners(Banners);
        
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",

        nextArrow: <NexBtn />,
      prevArrow: <PrevBtn />
      };

    return (
        <div className="container mx-auto py-8">
            <Title> Kapmanya </Title>
           <Slider {...settings} className="-mx-2">
       {banners.length && banners.map((banner, index)=>(
           <div key={banner.id} >
               <picture className="block px-2">
               <img src={banner.image} className="rounded-lg"/>
               </picture>
           </div>
       ))}
      </Slider>
        </div>
    )
}
