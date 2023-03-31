import React, { useState } from 'react'
import "./style.css"
import MenuCard from "./MenuCard"
import Menu from "./menuapi"
import Navbar from "./NavBar"

const uniqueList = [
  ... new Set(Menu.map((curElem) =>
{
  return curElem.category;
})
),
"All",
];

console.log(uniqueList);

const Health = () => {

  const [menuData, setMenuData] = useState(Menu);
  const [menuList,setMenuList]=useState(uniqueList);

  console.log(menuData);

  const filterItem = (category) => {
    if(category =="All")
    {
      setMenuData(Menu);
      return;
    }

    const updatedList=Menu.filter((curElem)=>{
      return curElem.category === category
    })
    setMenuData(updatedList);
  };

  // const myStyle= {color:"red"};

  return (
    <>
      <Navbar filterItem = {filterItem} menuList={menuList}/>
      <MenuCard menudata={menuData}/>
    </>
  )
}

export default Health;
