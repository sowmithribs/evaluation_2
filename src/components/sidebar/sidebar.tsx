import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
                <img src={require('../../assets/Images/burger_menu.png')} alt="Burger_Icon" id='burgerIcon' />
                <div className="home">
                    <div id="left-line"></div>
                    <img src={require('../../assets/Images/home_icn.png')} alt="Home_Icn" className='homeIcon' />
                    <div id="circle"></div>
                </div>
            </div>
      </>
      )
      
}

export default Sidebar
