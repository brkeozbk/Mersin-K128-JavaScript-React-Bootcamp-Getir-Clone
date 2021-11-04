import {useEffect, useState} from 'react';
import categoryData from 'api/categories.json'
import Category from './ui/Category';
import {Link,BrowserRouter as Router, Route} from "react-router-dom";



export default function Header() {
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
                   
                   {categories && categories.map((category, index)=>
              
                       
              <Category key={index} category={category} />)}
              
           
                  
               </div>
           </div>
        </div>
        
    )
}

