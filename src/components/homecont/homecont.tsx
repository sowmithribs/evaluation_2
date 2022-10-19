import React from 'react'
import './homecont.css'
import { useState } from 'react'

const Homecont = () => {
    const [modal, setModal] = useState(false)
    // const [data, setData] = useState(true)
    const showModal = () => {
        setModal(!modal)
    }
  return (
    <div className="container-nav">
                    <div className="logopass">
                        <h1>Sites</h1>
                        <div id="line"></div>
                    </div>
                    <div className="options">
                        <div className="search">
                            <input type="text" placeholder='Search' className='searchInput' />
                            <img src={require('../../assets/Images/search.png')} alt="" />
                        </div>

                        <img src={require('../../assets/Images/add_btn.png')} alt="" onClick={showModal}/>
          </div>
          {
                        modal &&
                        <>
                            {/* <Modal modelState={getModalState} /> */}
                            <div className="modal">
                                <div className="overlay"></div>
                      <div className="modal-content">
                          <div className='addsite'>Add Site</div>
                          <div className='url'>
                              <label className="url-title">URL</label>
                              <input type="text" className='urlinput' />
                          </div>
                          <div className='bigcontainer'>
                              <div className='sitename'>
                                  <div><label className="url-title">Site Name</label></div>
                                  <input className='siteinput' type="text" />
                              </div>
                              <div className='sitename'>
                                  <div><label className="url-title">User Name</label></div>
                                  <input className='siteinput' type="text" />
                             </div>
                              <div className='sitename'>
                                  <div><label className="url-title">Site Password</label></div>
                                  <input className='siteinput' type="text" />
                              </div>
                          </div>
                          <div className='notes'>
                              <label className="url-title">Notes</label>
                              <input type="text" className='urlinput' />
                          </div>
                          <div className='resabtn'>
                              <div className='savebtn' onClick={showModal}>Cancel </div>
                              <div className='savebtn' onClick={showModal}>Save </div>
                          </div>
                                    {/* <button className="close-modal" onClick={showModal} >
                                        CLOSE
                                    </button> */}
                          <img src={require("../../assets/Images/close_btn.png")} alt="" onClick={showModal} className="close-modal" />
                                </div> 
                            </div>
                        </>
                    }
                </div>
  )
}

export default Homecont
