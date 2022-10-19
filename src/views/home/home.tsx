import React from 'react'
import Header from '../../components/header/header'
import Homecont from '../../components/homecont/homecont'
import Sidebar from '../../components/sidebar/sidebar'
import './home.css'

const Home = () => {
    return (
        <div className="mainconatiner">
        <div className='dashboard'>
        <Sidebar/>
        <Header/>
            <div className="container">  
          <Homecont/>
                <div className="container-content">
                    <div className="container-add-files">
                        <div className="addfile">
                            <p>Please Click on the “+” symbol
                                to add sites</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
    )
}

export default Home