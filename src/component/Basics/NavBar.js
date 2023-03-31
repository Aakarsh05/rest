import React from 'react'
import "./style.css"

const Navbar = ({filterItem , menuList}) => {
  return (
    <>
      <nav className="navbar">
        <div className='btn-group'>
            {
                menuList.map((curElem) => 
                {
                    return (
                        <button className='btn-group__item' onClick={() => filterItem(curElem)}>{curElem}</button>
                    );
                })
            }
          {/* <button className='btn-group__item' onClick={() => filterItem("ToothBrush")}>ToothBrush</button>
          <button className='btn-group__item' onClick={() => filterItem("Tooth")}>Tooth</button>
          <button className='btn-group__item' onClick={() => filterItem("Throat")}>Throat</button>
          <button className='btn-group__item' onClick={() => filterItem("Sexual_Wellness")}>Sexual-Wellness</button>
          <button className='btn-group__item' onClick={() => filterItem("Nutrition")}>Nutrition</button>
          <button className='btn-group__item' onClick={() => filterItem("Lungs")}>Lungs</button>
          <button className='btn-group__item' onClick={() => filterItem("Handcare")}>Hand-Care</button>
          <button className='btn-group__item' onClick={() => filterItem("Fever_Medicines")}>Fever-Medicines</button>
          <button className='btn-group__item' onClick={() => filterItem("Eyes")}>Eyes</button>
          <button className='btn-group__item' onClick={() => filterItem("Allergy")}>Allergy</button> */}
          {/* <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All</button> */}
        </div>
      </nav>
    </>
  )
}

export default Navbar
