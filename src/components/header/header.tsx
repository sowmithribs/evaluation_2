import React from 'react'
import './header.css'
const Header = () => {
    return (
      <>
    <div>
      <header className="header">
                <div className="navbar">
                    <div className="logopass">
                        <img src={require('../../assets/Images/pass_logo.png')} alt="" />
                    </div>
                    <div className="options">
                        <img src={require('../../assets/Images/sync.png')} alt="" />
                        <img src={require('../../assets/Images/profile.png')} alt="" />
                    </div>
                </div>
            </header>
     </div>
     </>
)
 
}

export default Header
