import {useEffect, useState} from 'react';
import categoryData from 'api/categories.json'
import {Link} from "react-router-dom";



export default function Categories() {
  const [categories, setCategories] = useState([])


    useEffect(() => {
       setTimeout(() =>setCategories (categoryData),1000)
    }, [])
    return (

        
        <div className="bg-white py-4">
           <div className="container mx-auto">
               <h3 className="text-sm font-semibold mb-3"></h3>
               <div className="grid grid-cols-10">
                   {!categories.length && 'Yükleniyor'}
                   
                   {categories && categories.map((category, index)=>{
              
                       return( 
                           
              <Link to = {`/category/${category.title}`} className="flex flex-col group gap-y-2 transition hover:bg-purple-50 items-center text-center p-4">
            <img src={category.image} alt = {category.title} className="w-12 h-12 rounded border border-gray-200" />
            <span className="text-sm font-semibold text-gray-700 whitespace-nowrap group-hover:text-brand-color">{category.title}</span>
        </Link>
        )
    })}
              
           
                  
               </div>
           </div>
        </div>
        
    )
}

