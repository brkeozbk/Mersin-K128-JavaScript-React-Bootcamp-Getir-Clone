import React from 'react'
import productData from 'api/product.json'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Header from "components/Header";
import Campaigns from "components/Campaigns";
import cartData from 'api/cart.json';
import { data } from 'autoprefixer';
import { Row, Col, Divider, Checkbox, List } from 'antd';
import { Typography } from 'antd';
import { Layout, Menu, Breadcrumb, Image, Space, Button, Card, Select } from 'antd';


const { Title, Paragraph } = Typography;
const { Meta } = Card;
const { Content, Sider } = Layout;

export function Product() {
    let history = useHistory();
    const [isAllFiltersCleared, setIsAllFiltersCleared] = useState(true);
  const [categoryList, setCategoryList] = useState([])
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([])
  const [showingProducts, setShowingProducts] = useState([])
  const [filter, setFilter] = useState({})
  const [image, setImage] = useState([])
  const [sortList, setSortList] = useState([
    {
      name: 'mostPopular',
      description: 'Most Popular'
    },
    {
      name: 'leastPopular',
      description: 'Least Popular'
    },
    {
      name: 'highestPrice',
      description: 'Highest Price'
    },
    {
      name: 'lowestPrice',
      description: 'Lowest Price'
    },
  ]);
  const [selectedSort, setSelectedSort] = useState('mostPopular');
  useEffect(() => {
    fetch('http://localhost:3006/products')
      .then(res => res.json())
      .then(json => handleData(json))
  }, [])

  const handleData = (data) => {
    handleCategoryList(data);
   
    setProducts(data);
    setShowingProducts(data);
  }
  
  const handleCategoryList = (data) => {
    const categorySet = new Set()
    data.forEach((v, i) => {
      categorySet.add(v.category)
    })
    setCategoryList(categorySet);
    
  }

  const handleCheckbox = ({ target }) => {
    const filterName = target.name;
    const isChecked = target.checked;
    const newFilters = { ...filter, [filterName]: isChecked };
    let isAllFiltersCleared = true;
    for (const filter in newFilters) {
      if (newFilters[filter]) {
        isAllFiltersCleared = false;
      }
    }
    setIsAllFiltersCleared(isAllFiltersCleared);
    setFilter(newFilters);
  }

  const handleDataSource = () => {
    let tempShowingProducts;
    if (isAllFiltersCleared) {
      tempShowingProducts = products;
    } else {
      tempShowingProducts = products.filter(product => filter[product.category])
    }

    return handleSortData(tempShowingProducts);
  }
  const handleSortData = (data) => {
    if (selectedSort === 'mostPopular') {
      return data.sort((a, b) => a.rating.rate > b.rating.rate ? -1 : 1);
    } else if (selectedSort === 'leastPopular') {
      return data.sort((a, b) => a.rating.rate > b.rating.rate ? 1 : -1);
    } else if (selectedSort === 'highestPrice') {
      return data.sort((a, b) => a.price > b.price ? -1 : 1);
    } else if (selectedSort === 'lowestPrice') {
      return data.sort((a, b) => a.price > b.price ? 1 : -1);
    }
  }

  

  const handleClearFilters = () => {
    setFilter({});
    setIsAllFiltersCleared(true);
  }

  const handleCheckedItem = (categoryName) => {
    return filter[categoryName];
  }

  const handleSelect = (selected) => {
    setSelectedSort(selected);
  }
    return (
      
           
        <div className="bg-white">
        <Header />
   <div className="container mx-auto">
       <h3 className="text-sm font-semibold mb-3"></h3>
       
    <Campaigns />
       <div className="flex flex-row">
        
       
               
               
       <Sider> 
            
            
     
                 
               <List
                
                
                dataSource={categoryList}
                
                renderItem={item => (
                  <List.Item>
                    <Checkbox name={item}
                      onClick={handleCheckbox} checked={handleCheckedItem(item)}>{item}
                      
                       {/* <Image name={item.image}  className="w-12 h-12 rounded border border-gray-200 flex flex-col" />  */}
                      </Checkbox>
                  </List.Item>
                  
                )}
              />
              </Sider>
             
                
                     <Sider>
                     
             <List
                grid={{ gutter: 16, column: 3 }}
                dataSource={handleDataSource()}
                renderItem={item => {
                  return (
                    <List.Item>
                        <div className="flex flex-row">
                            <Row gutter={16}>
                                
                      <Card bordered={false}
                        onClick={() => history.push(
                          '/carts',
                          {
                            item: item,
                          })}
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" style={{ height: 100, width: '100%' }} src={item.img} />}
                      >
                        <Meta title={item.title} description={`${item.price} TL`} />
                        
                      </Card>
                     
                      </Row>
                      </div>
                    </List.Item>
                  )
                }}
              />
              
              </Sider>
              
            
                    {/* <button key={i} onClick={()=> handleClick(cartData)} className="flex flex-row items-center"> */}
                         {/* <img src={product.image} alt = {product.title} className="w-12 h-12 rounded border border-gray-200 flex flex-col" /> */}
                        {/* <span dataSource={categoryList}></span> */}
                    {/* </button> */}
                    
                
                
                
                    </div>
           </div>
        </div>
          
    )
}
