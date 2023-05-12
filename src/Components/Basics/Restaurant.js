import React, { useState } from 'react'
import './Style.css';
import Menu from './MenuApi'
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [
  ...new Set(Menu.map((currElem) => {
    return currElem.category;
  })
  ),
  "All",
]

console.log(uniqueList);

export default function Restaurant() {
  const [menuData, setmenuData] = useState(Menu);

  const [menuList, setmenuList] = useState(uniqueList);

  const filterItem = (category) => {
   if(category==="All"){
    setmenuData(Menu);
    return;
   }

    const updatedList = Menu.filter((currElem) => {
      return currElem.category === category;
    });
    setmenuData(updatedList);
  }

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  )
}
