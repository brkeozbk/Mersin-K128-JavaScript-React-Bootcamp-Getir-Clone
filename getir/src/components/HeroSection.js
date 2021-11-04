import { useState } from "react";
import {AiFillFacebook} from 'react-icons/ai'
import Slider from "react-slick";
import ReactFlagsSelect from 'react-flags-select';
export default function Header() {
    const [selected, setSelected] = useState('US');
    const phones = {
        US:'+1',
        DE:'+40',
        TR:'+90',
        ITA:'+3',
        FR:'+2'

    }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg" />
        </div>
        <div>
          <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" />
        </div>
      </Slider>
      <div className = "container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
            <div>
                <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
                <h3 className="mt-8 text-4xl font-semibold text-white">
                    Dakikalar içinde Kapınızda
                </h3>

            </div>
            <div className="w-[400px] rounded-lg bg-gray-50 p-6">
                <h4 className="text-primary-brand-color text-center font-semibold">Giriş yap veya kayıt ol</h4>
                <div className="grid gap-y-3">
                <form>
                <div className="flex gap-x-2">
                <ReactFlagsSelect
                     countries={Object.keys(phones)}
                     customLabels={phones}
                     placeholder="Select Language"
                     onSelect={code => setSelected(code)}
                     selected={selected} 
                     className="flag-select " />
                     
                     <label className="flex-1 relative group block cursor-pointer">
                         <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2"/>
                         
                         <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">Telefon Numara</span>
                     </label>
                
                </div>
                
                <button type="submit" className="bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold ">
                    telefon no ile devam
                </button>
                </form>
                <hr className="h-[1px] bg-gray-300 my-2"/>
                <button className="bg-blue-700 bg-opacity-10 px-4 text-blue-700 text-opacity-80 transition-colors hover:bg-blue-700 hover:text-white h-12 flex items-center rounded-md w-full text-sm font-semibold ">
                    <AiFillFacebook size="30" />
                    <span className="mx-auto">facebook no ile devam</span>
                </button>
                </div>
                
            </div>
      </div>
    </div>
  );
}
