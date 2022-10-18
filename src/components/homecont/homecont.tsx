import React from 'react'
import './homecont.css'
const Homecont = () => {
  return (
    <div className="container-nav">
                    <div className="logo">
                        <h1>Sites</h1>
                        <div id="line"></div>
                    </div>
                    <div className="options">
                        <div className="search">
                            <input type="text" placeholder='Search' className='searchInput' />
                            <img src={require('../../assets/Images/search.png')} alt="" />
                        </div>

                        <img src={require('../../assets/Images/add_btn.png')} alt="" />
                    </div>
                </div>
  )
}

export default Homecont
